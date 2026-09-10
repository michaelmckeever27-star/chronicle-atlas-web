import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { IPhoneMockup } from "@/components/IPhoneMockup";
import { PricingPanel } from "@/components/PricingPanel";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";
import { createPageMetadata } from "@/lib/metadata";

const england871Description =
  "England 871 is an immersive iPhone guide to medieval England from 871 to 1399, with 72 Chronicles, royal families, maps, courses and interactive choices.";

export const metadata = createPageMetadata({
  title: "England 871 — medieval history for iPhone",
  description: england871Description,
  path: "/england-871",
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "England 871",
  applicationCategory: "EducationalApplication",
  operatingSystem: "iOS",
  softwareVersion: "1.2",
  url: ENGLAND_871_APP_STORE_URL,
  description: england871Description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free to download with optional Premium subscription",
  },
};

const figures = [
  ["72", "complete Chronicles"],
  ["159", "dated events"],
  ["28", "monarchs in context"],
  ["87", "places to explore"],
];

export default function England871Page() {
  return (
    <>
      <section className="product-hero">
        <div className="site-container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow eyebrow-gold">Chronicle Atlas presents</p>
            <h1>England <strong>871</strong></h1>
            <p className="product-hero-line">People worth following. Stories worth staying for.</p>
            <p className="hero-intro">
              England 871 is an immersive history app covering medieval England
              from 871 to 1399. Follow royal families, open complete daily
              Chronicles, visit the places behind them and see where evidence
              leaves room for debate.
            </p>
            <div className="hero-actions" id="app-store">
              <AppStoreButton />
              <ButtonLink href="/#sample" variant="light">Try a Chronicle</ButtonLink>
            </div>
            <p className="availability-note">Version 1.2 · Free to download · Optional Premium</p>
          </div>
          <div className="product-phone-wrap">
            <span className="product-year-orbit" aria-hidden="true">871—1399</span>
            <IPhoneMockup
              src="/screenshots/royals.png"
              alt="England 871 Royal families screen with Alfred, Norman and Angevin story series"
              sizes="(max-width: 839px) 280px, 330px"
              className="product-phone"
              screenBackground="#3046c5"
              statusBarBackground="#3046c5"
              statusBarTheme="dark"
              priority
            />
          </div>
        </div>
      </section>

      <section className="scope-strip" aria-label="England 871 content at a glance">
        <div className="site-container scope-grid">
          {figures.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section product-story-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">What makes it different</p>
              <h2>History through the people who had to live it.</h2>
            </div>
            <p>
              Read in a few minutes, then go further. Every route connects
              narrative, place, relationship and evidence.
            </p>
          </div>
          <div className="editorial-features">
            <article>
              <div className="editorial-image">
                <Image
                  alt="Artistic reconstruction of a medieval English community at work"
                  fill
                  sizes="(max-width: 839px) 100vw, 33vw"
                  src="/editorial/everyday-life.webp"
                />
                <span>Artistic reconstruction</span>
              </div>
              <p className="eyebrow">Short sessions, complete stories</p>
              <h3>Open one Chronicle.</h3>
              <p>
                Each edition has an opening, development and outcome—not an
                endless feed of isolated facts.
              </p>
            </article>
            <article>
              <div className="editorial-image">
                <Image
                  alt="Artistic reconstruction of a medieval English place"
                  fill
                  sizes="(max-width: 839px) 100vw, 33vw"
                  src="/editorial/medieval-place.webp"
                />
                <span>Artistic reconstruction</span>
              </div>
              <p className="eyebrow">Connection changes the story</p>
              <h3>Follow family and place.</h3>
              <p>
                A marriage, disputed inheritance or fortified town can explain
                what a list of reigns leaves invisible.
              </p>
            </article>
            <article>
              <div className="editorial-image">
                <Image
                  alt="Artistic reconstruction of a medieval scribe and manuscript"
                  fill
                  sizes="(max-width: 839px) 100vw, 33vw"
                  src="/editorial/manuscript.webp"
                />
                <span>Artistic reconstruction</span>
              </div>
              <p className="eyebrow">Evidence stays visible</p>
              <h3>Know what we can know.</h3>
              <p>
                Sources, uncertainty notes and reconstruction labels keep the
                difference between evidence and interpretation clear.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section product-tour-section" id="inside-the-app">
        <div className="site-container">
          <div className="section-heading-row section-heading-light">
            <div>
              <p className="eyebrow eyebrow-gold">Take the tour</p>
              <h2>Five ways into medieval England.</h2>
            </div>
            <p>
              Browse the actual areas of the current app. The screenshots show
              the released v1.2 experience, not a future concept.
            </p>
          </div>
          <AppTour compact />
        </div>
      </section>

      <section className="section product-pricing-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Free and Premium</p>
              <h2>Begin free. Go deeper when you are ready.</h2>
            </div>
            <p>
              Premium is purchased in England 871 through Apple. There is no
              website checkout and no Chronicle Atlas account to create.
            </p>
          </div>
          <PricingPanel />
        </div>
      </section>

      <section className="section difference-section">
        <div className="site-container difference-grid">
          <div>
            <p className="eyebrow eyebrow-gold">A more honest kind of immersion</p>
            <h2>Not a textbook squeezed onto a screen.</h2>
            <p>
              England 871 is built around relationships: ruler to household,
              event to landscape, source to uncertainty and decision to consequence.
            </p>
          </div>
          <div className="comparison-list">
            <div><span>Instead of</span><strong>Disconnected facts</strong><em>→</em><b>A connected world</b></div>
            <div><span>Instead of</span><strong>Passive scrolling</strong><em>→</em><b>Complete stories</b></div>
            <div><span>Instead of</span><strong>False certainty</strong><em>→</em><b>Evidence in context</b></div>
            <div><span>Instead of</span><strong>One path</strong><em>→</em><b>Room to explore</b></div>
          </div>
        </div>
      </section>

      <section className="section product-final-cta" id="download">
        <div className="site-container product-final-inner">
          <p className="eyebrow eyebrow-gold">Available now on the App Store</p>
          <h2>From Alfred the Great to Richard II.</h2>
          <p>Explore England across 871–1399. Free to download for iPhone.</p>
          <AppStoreButton />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}
