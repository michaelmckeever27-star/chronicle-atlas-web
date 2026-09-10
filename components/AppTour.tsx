"use client";

import { useRef, useState } from "react";
import { IPhoneMockup } from "./IPhoneMockup";

const tourItems = [
  {
    id: "today",
    label: "Today",
    image: "/screenshots/today.png",
    alt: "England 871 Today screen featuring a complete Daily Chronicle",
    eyebrow: "A story worth opening",
    title: "Today’s Chronicle",
    text: "Begin with one complete, visual story chosen from the archive. Read six concise cards, save your place and follow the next connection.",
    background: "#3046c5",
  },
  {
    id: "royals",
    label: "Royals",
    image: "/screenshots/royals.png",
    alt: "England 871 Royals screen showing three connected royal family series",
    eyebrow: "Kinship, rivalry, power",
    title: "Royal families",
    text: "Follow three connected series through marriage, inheritance and contested succession. Alfred’s complete six-episode starter series is free.",
    background: "#3046c5",
  },
  {
    id: "timeline",
    label: "Timeline",
    image: "/screenshots/timeline.png",
    alt: "England 871 timeline covering events from 871 to 1399",
    eyebrow: "Five centuries connected",
    title: "Timeline",
    text: "Move from Alfred’s accession to Richard II’s deposition, filtering 159 events by era and theme without losing the wider sequence.",
    background: "#17223e",
  },
  {
    id: "map",
    label: "Map",
    image: "/screenshots/map.png",
    alt: "England 871 map showing medieval places and connected stories",
    eyebrow: "Places and power",
    title: "Map",
    text: "Find the places behind the stories, filter by era and move directly into the people, conflicts and Chronicles connected to each location.",
    background: "#071525",
  },
  {
    id: "explore",
    label: "Explore",
    image: "/screenshots/explore.png",
    alt: "England 871 Explore screen with courses, search and royal stories",
    eyebrow: "Your route through",
    title: "Explore",
    text: "Search the archive, continue where you left off, open guided courses and browse topics from law and belief to work and ordinary life.",
    background: "#17223e",
  },
];

export function AppTour({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState("today");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = tourItems.find((item) => item.id === selectedId) ?? tourItems[0];

  const selectTab = (index: number) => {
    const nextIndex = (index + tourItems.length) % tourItems.length;
    setSelectedId(tourItems[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`app-tour${compact ? " app-tour-compact" : ""}`}>
      <div className="app-tour-tabs" role="tablist" aria-label="Explore England 871">
        {tourItems.map((item, index) => (
          <button
            aria-controls="app-tour-panel"
            aria-selected={item.id === selectedId}
            id={`app-tour-${item.id}`}
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                selectTab(index + 1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                selectTab(index - 1);
              }
              if (event.key === "Home") {
                event.preventDefault();
                selectTab(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                selectTab(tourItems.length - 1);
              }
            }}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            role="tab"
            tabIndex={item.id === selectedId ? 0 : -1}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`app-tour-${selected.id}`}
        className="app-tour-panel"
        id="app-tour-panel"
        role="tabpanel"
      >
        <div className="app-tour-phone-stage">
          <IPhoneMockup
            alt={selected.alt}
            className="app-tour-phone"
            key={selected.id}
            screenBackground={selected.background}
            sizes="(max-width: 699px) 260px, 310px"
            src={selected.image}
            statusBarBackground={selected.background}
            statusBarTheme="dark"
          />
        </div>
        <div className="app-tour-copy" aria-live="polite">
          <p className="eyebrow">{selected.eyebrow}</p>
          <h3>{selected.title}</h3>
          <p>{selected.text}</p>
          <span className="tour-counter">
            {String(tourItems.findIndex((item) => item.id === selected.id) + 1).padStart(2, "0")} / {String(tourItems.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
