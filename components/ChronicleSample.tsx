"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

const cards = [
  {
    type: "Opening",
    title: "A reconstructed household",
    subtitle: "One household, carefully imagined",
    text: "It is daybreak in a Midlands manor around 1250. This household is a composite, not a documented family. Manor records, archaeology and later descriptions show duties, tools and settings more readily than private thoughts. Follow the pressures that shaped work, food, faith and obligation.",
    image: "/editorial/everyday-life.webp",
    alt: "Artistic reconstruction of people working in a medieval English town",
  },
  {
    type: "Ordinary life",
    title: "Food and preparation",
    subtitle: "Before the work begins",
    text: "Bread, pottage, ale and preserved food depended on seasonal stores, equipment and labour. A poor harvest or damaged tool could unsettle a household long before anyone reached the field. Cooking organised fuel, grain, childcare and cooperation—and access to better food reflected land, wages and status.",
    image: "/editorial/everyday-life.webp",
    alt: "Artistic reconstruction of work and trade in a medieval English town",
  },
  {
    type: "Turning point",
    title: "Manorial obligation",
    subtitle: "Time owed to a lord",
    text: "Many tenants owed labour services, rents or other dues to a lord’s estate. The exact balance varied, and records preserve the landlord’s viewpoint more clearly than a tenant’s. For a household, an obligation could mean losing time needed for its own plot.",
    image: "/editorial/medieval-place.webp",
    alt: "Artistic reconstruction of an English castle and town in its landscape",
  },
  {
    type: "Your Chronicle",
    title: "A dispute reaches the manor court",
    subtitle: "How would you seek a resolution?",
    text: "A boundary, debt or missed service could draw neighbours into a local court. Choose a path for your Chronicle. This does not claim that a particular household made this choice, and it does not rewrite the historical account.",
    image: "/editorial/manuscript.webp",
    alt: "Artistic reconstruction of a medieval scribe working at a manuscript",
    decision: true,
  },
  {
    type: "Evidence",
    title: "Justice and uncertainty",
    subtitle: "What records can show",
    text: "Court rolls and manorial accounts reveal payments, duties and disputes, but they are not transparent windows into village life. They were created for administration. Absence from a record is not proof that nothing mattered. Historical reconstruction has to keep that silence visible.",
    image: "/editorial/manuscript.webp",
    alt: "Artistic reconstruction of written medieval records",
  },
  {
    type: "Complete",
    title: "A village is not a stereotype",
    subtitle: "Follow the evidence further",
    text: "You have followed an evidence-led composite through one imagined day. Its value lies in connecting work, faith, family and local power without pretending that every household lived alike. England 871 opens more stories of medieval lives beyond the crown.",
    image: "/editorial/everyday-life.webp",
    alt: "Artistic reconstruction of daily life in a medieval English community",
  },
];

const sources = [
  {
    title: "Manors and manorial records",
    publisher: "The National Archives",
    href: "https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/manors/",
  },
  {
    title: "Introduction to Medieval England",
    publisher: "English Heritage",
    href: "https://www.english-heritage.org.uk/learn/story-of-england/medieval/introduction/",
  },
  {
    title: "Medieval Settlements",
    publisher: "Historic England",
    href: "https://historicengland.org.uk/images-books/publications/iha-medieval-settlements/heag210-medieval-settlements/",
  },
];

export function ChronicleSample() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<"witnesses" | "settlement" | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const card = cards[index];

  const goTo = (next: number) => {
    if (next > index && card.decision && !choice) return;
    setIndex(Math.max(0, Math.min(cards.length - 1, next)));
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      goTo(index + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <div
      className="chronicle-reader"
      onKeyDown={(event) => {
        if (event.currentTarget !== event.target) return;
        if (event.key === "ArrowLeft") goTo(index - 1);
        if (event.key === "ArrowRight") goTo(index + 1);
      }}
      tabIndex={0}
    >
      <div className="chronicle-reader-topline">
        <div>
          <span>Free website Chronicle</span>
          <strong>A Day in a Medieval Village</strong>
        </div>
        <button
          className="text-button"
          disabled={index === 0 && choice === null}
          onClick={() => {
            setIndex(0);
            setChoice(null);
          }}
          type="button"
        >
          Restart
        </button>
      </div>

      <div className="chronicle-progress-row">
        <span>{index + 1} of {cards.length}</span>
        <progress aria-label={`Card ${index + 1} of ${cards.length}`} max={cards.length} value={index + 1} />
        <span>c. 1250</span>
      </div>

      <article
        className="chronicle-card"
        onTouchEnd={onTouchEnd}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
      >
        <div className="chronicle-art">
          <Image
            alt={card.alt}
            fill
            key={card.image}
            sizes="(max-width: 839px) 100vw, 50vw"
            src={card.image}
          />
          <span>Artistic reconstruction</span>
        </div>
        <div className="chronicle-copy" aria-live="polite">
          <p className="eyebrow">{card.type}</p>
          <h3>{card.title}</h3>
          <p className="chronicle-subtitle">{card.subtitle}</p>
          <p>{card.text}</p>
          {card.decision && (
            <div className="chronicle-decision">
              <button
                aria-pressed={choice === "witnesses"}
                onClick={() => setChoice("witnesses")}
                type="button"
              >
                <strong>Call neighbours</strong>
                <span>Seek support through local memory and witness.</span>
              </button>
              <button
                aria-pressed={choice === "settlement"}
                onClick={() => setChoice("settlement")}
                type="button"
              >
                <strong>Seek settlement</strong>
                <span>Preserve the relationships the household relies on.</span>
              </button>
              {choice && (
                <p className="decision-result">
                  Your Chronicle records a choice. The evidence card still shows
                  what the surviving records can—and cannot—tell us.
                </p>
              )}
            </div>
          )}
          {index === cards.length - 1 && (
            <a className="inline-download" href={ENGLAND_871_APP_STORE_URL}>
              Continue in England 871 <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </article>

      <div className="chronicle-controls">
        <button disabled={index === 0} onClick={() => goTo(index - 1)} type="button">
          <span aria-hidden="true">←</span> Previous
        </button>
        <span>Swipe or use the buttons</span>
        <button
          disabled={index === cards.length - 1 || (card.decision && !choice)}
          onClick={() => goTo(index + 1)}
          type="button"
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>

      <details className="chronicle-sources">
        <summary>Sources and reconstruction note</summary>
        <p>
          This six-card edition is adapted from a free England 871 Chronicle.
          The household is an evidence-led composite, not a documented family.
        </p>
        <ul>
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href}>{source.title}</a> — {source.publisher}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
