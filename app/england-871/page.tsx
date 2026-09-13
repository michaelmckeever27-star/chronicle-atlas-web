import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { IPhoneMockup } from "@/components/IPhoneMockup";
import { PricingPanel } from "@/components/PricingPanel";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";
import { createPageMetadata } from "@/lib/metadata";

const england871Description =
  "England 871 is an immersive iPhone history app covering medieval England from 871 to 1399 through illustrated Chronicles, Series, people, a timeline and an interactive map.";

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
  url: ENGLAND_871_APP_STORE_URL,
  description: england871Description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free to download with optional Premium subscriptions",
  },
};

const scopeFacts = [
  ["871–1399", "Medieval England"],
  ["Today · Explore · Saved", "Three simple tabs"],
  ["Local progress", "No account required"],
  ["iPhone", "Free to download"],
];

export default function England871Page() {
  return (
    <>
      <section className="product-hero">
        <div className="site-container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow eyebrow-gold">Chronicle Atlas presents</p>
            <h1>England <strong>871</strong></h1>
            <p className="product-hero-line">A vivid route through medieval England.</p>
            <p className="hero-intro">
              England 871 is an immersive history app covering medieval England
              from 871 to 1399. Read illustrated Chronicles, follow connected
              Series and move between people, dated events and places.
            </p>
            <div className="hero-actions" id="app-store">
              <AppStoreButton />
              <ButtonLink href="/#sample" variant="light">Try a Chronicle</ButtonLink>
            </div>
            <p className="availability-note">Free to download · Optional Premium · No account</p>
          </div>
          <div className="product-phone-wrap">
            <span className="product-year-orbit" aria-hidden="true">871—1399</span>
            <IPhoneMockup
              src="/screenshots/england-871-reader.png"
              alt="England 871 Chronicle reader showing an illustrated story about Eleanor of Aquitaine"
              sizes="(max-width: 839px) 280px, 330px"
              className="product-phone"
              screenBackground="#fff8e6"
              screenshotHasStatusBar
              priority
            />
          </div>
        </div>
      </section>

      <section className="scope-strip" aria-label="England 871 at a glance">
        <div className="site-container scope-grid">
          {scopeFacts.map(([value, label]) => (
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
              <h2>History through the lives that shaped it.</h2>
            </div>
            <p>
              Begin with a readable story, then follow the people, places and
              events that give it meaning.
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
              <p className="eyebrow">Concise, complete narratives</p>
              <h3>Open one Chronicle.</h3>
              <p>
                Short illustrated cards turn a historical moment into a clear
                story without reducing it to disconnected facts.
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
              <p className="eyebrow">A wider medieval world</p>
              <h3>Look beyond the crown.</h3>
              <p>
                Explore rulers and nobles alongside faith, communities, work
                and the ordinary lives changed by political power.
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
                Source notes, uncertainty and reconstruction labels keep the
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
              <p className="eyebrow eyebrow-gold">Inside the app</p>
              <h2>Stories, people, place and time—connected.</h2>
            </div>
            <p>
              These destinations sit within Explore. Today brings you back to
              the archive, while Saved keeps the stories you want to revisit.
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
              England 871 is built around relationships: person to household,
              event to landscape and source to interpretation.
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
          <p className="eyebrow eyebrow-gold">Available on the App Store</p>
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
