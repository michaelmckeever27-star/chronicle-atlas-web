import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

const screenshotExports = {};
vm.runInNewContext(ts.transpileModule(await readFile("lib/screenshots.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, { exports: screenshotExports });

// Run the actual component effects with controlled media-query and observer APIs.
// This tests preference changes without requiring a browser emulation dependency.
async function harness(file, initialWide, initialReduced) {
  const source = await readFile(file, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const effects = [];
  const classes = new Set();
  const state = [];
  const observers = [];
  const queries = new Map();
  for (const [query, matches] of [
    ["(min-width: 1024px) and (min-height: 720px)", initialWide],
    ["(prefers-reduced-motion: reduce)", initialReduced],
  ]) {
    const listeners = new Set();
    queries.set(query, {
      matches,
      addEventListener: (_, fn) => listeners.add(fn),
      removeEventListener: (_, fn) => listeners.delete(fn),
      change(value) {
        this.matches = value;
        listeners.forEach((fn) => fn());
      },
      listeners,
    });
  }
  const nodes = Array.from({ length: 5 }, (_, index) => ({
    getAttribute: () => String(index),
    setAttribute: (name, value) => {
      nodes[index][name] = value;
    },
  }));
  const root = {
    classList: {
      toggle(name, enabled) {
        if (enabled) classes.add(name);
        else classes.delete(name);
      },
      remove(name) {
        classes.delete(name);
      },
    },
    querySelectorAll: () => nodes,
  };
  class Observer {
    constructor(callback) {
      this.callback = callback;
      this.targets = [];
      this.disconnected = false;
      observers.push(this);
    }
    observe(target) {
      this.targets.push(target);
    }
    unobserve(target) {
      this.targets = this.targets.filter((item) => item !== target);
    }
    disconnect() {
      this.disconnected = true;
      this.targets = [];
    }
  }
  const react = {
    useEffect: (fn) => effects.push(fn),
    useRef: () => ({ current: root }),
    useState: (initial) => [initial, (value) => state.push(value)],
  };
  const context = {
    exports: {},
    window: {
      location: { hash: "" },
      addEventListener() {},
      removeEventListener() {},
      matchMedia: (query) => queries.get(query),
      IntersectionObserver: Observer,
    },
    document: { querySelectorAll: () => nodes },
    IntersectionObserver: Observer,
    require: (name) =>
      name === "react"
        ? react
        : name === "react/jsx-runtime"
          ? { jsx: () => null, jsxs: () => null }
          : name === "@/lib/screenshots"
            ? screenshotExports
            : {},
  };
  vm.runInNewContext(compiled, context, { filename: file });
  Object.values(context.exports)[0]();
  const cleanup = effects[0]();
  return { classes, state, observers, queries, nodes, cleanup };
}

const reduced = await harness("components/AppTour.tsx", true, true);
assert.equal(reduced.classes.has("tour-enhanced"), false);
assert.equal(reduced.observers.length, 0);
reduced.cleanup();
const mobile = await harness("components/AppTour.tsx", false, false);
assert.equal(mobile.classes.has("tour-enhanced"), false);
assert.equal(mobile.observers.length, 0);
mobile.cleanup();
const desktop = await harness("components/AppTour.tsx", true, false);
assert.equal(desktop.classes.has("tour-enhanced"), true);
assert.equal(desktop.observers[0].targets.length, 5);
desktop.observers[0].callback([
  { isIntersecting: true, target: desktop.nodes[3] },
]);
assert.deepEqual(desktop.state, [3]);
desktop.queries.get("(prefers-reduced-motion: reduce)").change(true);
assert.equal(desktop.classes.has("tour-enhanced"), false);
assert.equal(desktop.observers[0].disconnected, true);
desktop.queries.get("(prefers-reduced-motion: reduce)").change(false);
assert.equal(desktop.classes.has("tour-enhanced"), true);
desktop.queries
  .get("(min-width: 1024px) and (min-height: 720px)")
  .change(false);
assert.equal(desktop.classes.has("tour-enhanced"), false);
desktop.cleanup();
assert.ok(
  [...desktop.queries.values()].every((query) => query.listeners.size === 0),
);

const entrances = await harness(
  "components/MotionEnhancements.tsx",
  true,
  false,
);
entrances.observers[0].callback([
  { isIntersecting: true, target: entrances.nodes[0] },
]);
assert.equal(entrances.nodes[0]["data-entered"], "true");
assert.equal(
  entrances.observers[0].targets.includes(entrances.nodes[0]),
  false,
);
entrances.queries.get("(prefers-reduced-motion: reduce)").change(true);
assert.equal(entrances.observers[0].disconnected, true);
entrances.cleanup();
const staticEntrances = await harness(
  "components/MotionEnhancements.tsx",
  true,
  true,
);
assert.equal(staticEntrances.observers.length, 0);
staticEntrances.cleanup();
const css = await readFile("app/globals.css", "utf8");
assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
assert.match(css, /animation: none !important; transition: none !important/);
assert.match(css, /\.tour-sticky-preview \{ display: none; \}/);
console.log(
  "PASS desktop stage updates, mobile/static fallback, reduced-motion entry and live preference changes, cleanup and CSS motion overrides",
);
