"use client";

import { useEffect, useRef, useState } from "react";
import { MarketingScreenshot } from "./MarketingScreenshot";
import { AppStoreButton } from "./AppStoreButton";
import { screenshots, type ScreenshotName } from "@/lib/screenshots";

const features: {
  image: ScreenshotName;
  label: string;
  title: string;
  text: string;
  note: string;
}[] = [
  {
    image: "home",
    label: "01 / A moment, every day",
    title: "Make history a daily habit.",
    text: "A daily pick gives your curiosity somewhere to start. Build a reading streak, return to a story in progress and make a few minutes of history part of your day.",
    note: "A little time. A new perspective.",
  },
  {
    image: "reader",
    label: "02 / Read or listen",
    title: "Read a story. Or press play.",
    text: "Follow an illustrated story one card at a time, or tap Listen for audio narration. Pause, take it in and come back when you’re ready.",
    note: "Your pace. Your way into the story.",
  },
  {
    image: "people",
    label: "03 / Lives, connected",
    title: "Meet the people behind the history.",
    text: "Get to know 162 historical figures, from rulers and royal families to nobles and knights. Follow their connections to understand more than a name and a date.",
    note: "The past was made by people.",
  },
  {
    image: "map",
    label: "04 / Places with a past",
    title: "Put history on the map.",
    text: "Find a royal centre, settlement or place behind an event. Choose a period, explore its connections and see how geography gives a story a different perspective.",
    note: "Start with a place. See where it leads.",
  },
  {
    image: "timeline",
    label: "05 / The bigger picture",
    title: "See how the story unfolds.",
    text: "Connect 192 events across 871–1485. From Alfred’s Wessex to Bosworth, search the timeline or browse a period to discover what came before—and what came next.",
    note: "Six centuries, one connected journey.",
  },
];

export function AppTour() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const section = root.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const wide = window.matchMedia(
      "(min-width: 1024px) and (min-height: 720px)",
    );
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      const enhance = wide.matches && !reduced.matches;
      section.classList.toggle("tour-enhanced", enhance);
      if (!enhance) return;
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length)
            setActive(
              Number(
                visible[visible.length - 1].target.getAttribute("data-stage"),
              ),
            );
        },
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
      );
      section
        .querySelectorAll("[data-stage]")
        .forEach((stage) => observer?.observe(stage));
    };
    configure();
    wide.addEventListener("change", configure);
    reduced.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      wide.removeEventListener("change", configure);
      reduced.removeEventListener("change", configure);
      section.classList.remove("tour-enhanced");
    };
  }, []);
  return (
    <section className="app-tour section" id="tour">
      <div className="site-container">
        <div className="tour-heading" data-reveal>
          <p className="eyebrow">Your own way into the past</p>
          <h2>
            History isn’t just a date.
            <br />
            <span>It’s a story.</span>
          </h2>
          <p>Meet the lives, explore the places and join the dots.</p>
        </div>
        <div className="tour-layout" ref={root}>
          <div className="tour-stages">
            {features.map((feature, index) => (
              <article
                className="tour-stage"
                data-stage={index}
                key={feature.image}
                id={`feature-${feature.image}`}
              >
                <div className="tour-stage-copy" data-reveal>
                  <p className="eyebrow">{feature.label}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <p className="tour-note">
                    <span aria-hidden="true">✦</span> {feature.note}
                  </p>
                  {index === 1 && (
                    <AppStoreButton
                      label="Find it on the App Store"
                      placement="feature-section"
                    />
                  )}
                </div>
                <div className="tour-mobile-preview">
                  <MarketingScreenshot name={feature.image} />
                </div>
              </article>
            ))}
          </div>
          <div className="tour-sticky-preview">
            <div className="tour-screen-stack">
              {features.map((feature, index) => (
                <div
                  className={`tour-screen${active === index ? " is-active" : ""}`}
                  aria-hidden={active !== index}
                  key={feature.image}
                >
                  <MarketingScreenshot name={feature.image} caption={false} />
                </div>
              ))}
            </div>
            <p className="tour-preview-label">
              <a
                href={screenshots[features[active].image].src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full-size ${features[active].image} screenshot (opens in a new tab)`}
              >
                View full-size app screenshot <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </div>
        <p className="section-footnote">
          Screens from version 2.0. Some stories require Premium.
        </p>
      </div>
    </section>
  );
}
