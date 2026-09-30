"use client";

import { useEffect } from "react";

// Progressive enhancement: server-rendered content is never hidden.
export function MotionEnhancements() {
  useEffect(() => {
    // Native hash links still work without JS; with JS, open the promised reader.
    const openSample = () => {
      if (window.location.hash !== "#sample") return;
      const sample =
        document.querySelector<HTMLDetailsElement>(".sample-disclosure");
      if (sample) sample.open = true;
    };
    openSample();
    window.addEventListener("hashchange", openSample);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const start = () => {
      observer?.disconnect();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.setAttribute("data-entered", "true");
            observer?.unobserve(entry.target);
          }
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((element) => observer?.observe(element));
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", start);
      window.removeEventListener("hashchange", openSample);
    };
  }, []);
  return null;
}
