"use client";

import { useRef, useState } from "react";
import { IPhoneMockup } from "./IPhoneMockup";

const tourItems = [
  {
    id: "reader",
    label: "Reader",
    image: "/screenshots/england-871-reader.png",
    alt: "England 871 Chronicle reader showing an illustrated story about Eleanor of Aquitaine",
    eyebrow: "Illustrated Chronicles",
    title: "Discover history, one story at a time.",
    text: "Read concise, illustrated Chronicle Cards with clear narrative, source notes and links into the wider story.",
  },
  {
    id: "people",
    label: "People",
    image: "/screenshots/england-871-people.png",
    alt: "England 871 People directory with Alfred the Great, Æthelflæd and other historical figures",
    eyebrow: "Lives in context",
    title: "Meet the people behind the history.",
    text: "Browse people by birth year and discover rulers, nobles, commanders and influential women across medieval England.",
  },
  {
    id: "series",
    label: "Series",
    image: "/screenshots/england-871-series.png",
    alt: "England 871 Stories and Series screen showing connected historical reading paths",
    eyebrow: "Connected reading",
    title: "Follow stories across generations.",
    text: "Series bring related Chronicles together, from Alfred and his family to households, work and long-term change.",
  },
  {
    id: "map",
    label: "Map",
    image: "/screenshots/england-871-map.png",
    alt: "England 871 interactive map with Northumbria selected",
    eyebrow: "Places and power",
    title: "Explore where history happened.",
    text: "Move across the map, change era and open the people and stories connected to each place.",
  },
  {
    id: "timeline",
    label: "Timeline",
    image: "/screenshots/england-871-timeline.png",
    alt: "England 871 timeline showing dated entries for the Battle of Ashdown and Alfred becoming king",
    eyebrow: "871–1399 in sequence",
    title: "Put events in context.",
    text: "Browse dated events in chronological order and filter by era without losing sight of the wider sequence.",
  },
];

export function AppTour({ compact = false }: { compact?: boolean }) {
  const [selectedId, setSelectedId] = useState("reader");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = tourItems.find((item) => item.id === selectedId) ?? tourItems[0];

  const selectTab = (index: number) => {
    const nextIndex = (index + tourItems.length) % tourItems.length;
    setSelectedId(tourItems[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`app-tour${compact ? " app-tour-compact" : ""}`}>
      <div className="app-tour-tabs" role="tablist" aria-label="Inside England 871">
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
            screenBackground="#fff8e6"
            sizes="(max-width: 699px) 260px, 310px"
            src={selected.image}
            screenshotHasStatusBar
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
