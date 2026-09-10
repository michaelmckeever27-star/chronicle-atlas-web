"use client";

import { BrandLogo } from "@/components/BrandLogo";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="error-section">
      <div className="site-container error-inner">
        <BrandLogo className="error-seal" symbolOnly />
        <p className="eyebrow eyebrow-gold">The page could not be opened</p>
        <h1>A line in the record has gone missing.</h1>
        <p>Try loading this part of the Chronicle again.</p>
        <button className="button button-primary" onClick={reset} type="button">
          Try again
        </button>
      </div>
    </section>
  );
}
