import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { MarketingScreenshot } from "@/components/MarketingScreenshot";
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

export default function England871Page() {
  return (
    <>
      <section className="home-hero product-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <div className="app-identity">
              <Image src="/england-871-app-icon.png" alt="England 871 app icon" width={64} height={64} />
              <div><strong>England 871</strong><span>By Chronicle Atlas</span></div>
            </div>
            <p className="eyebrow">Medieval England · 871–1399</p>
            <h1>A little history.<br /><span>A wider world.</span></h1>
            <p className="hero-intro">
              England 871 is an immersive history app covering medieval England
              from 871 to 1399. Read short illustrated Chronicles, follow
              connected Series and explore historical people, places and events.
            </p>
            <div className="hero-actions" id="app-store">
              <AppStoreButton />
              <ButtonLink href="/#sample" variant="secondary">Try a Chronicle</ButtonLink>
            </div>
            <p className="availability-note">Made for iPhone · Free to download · Optional Premium</p>
          </div>
          <MarketingScreenshot name="home" priority className="hero-marketing-panel" />
        </div>
      </section>

      <section className="section product-introduction">
        <div className="site-container">
          <div className="section-heading-row">
            <div><p className="eyebrow">A connected way to read history</p><h2>Start with a story.<br />See where it takes you.</h2></div>
            <p>Today brings you back to your reading and the archive. Explore connects stories, people, the map and timeline. Saved keeps the subjects you want to revisit.</p>
          </div>
          <div className="trust-grid">
            <article><h3>Stories, not isolated facts.</h3><p>Concise Chronicle Cards build a narrative, then connect it to the wider medieval world.</p></article>
            <article><h3>Beyond the crown.</h3><p>Read about rulers alongside communities, work, women, family and everyday life.</p></article>
            <article><h3>Evidence in context.</h3><p>Source notes, image details and reconstruction labels keep evidence and interpretation distinct.</p></article>
          </div>
        </div>
      </section>

      <div id="inside-the-app"><AppTour /></div>

      <section className="section pricing-section" id="pricing">
        <div className="site-container">
          <div className="section-heading-row">
            <div><p className="eyebrow">Free and Premium</p><h2>Choose how far to explore.</h2></div>
            <p>Premium is purchased in England 871 through Apple. There is no website checkout and no Chronicle Atlas account to create.</p>
          </div>
          <PricingPanel />
        </div>
      </section>

      <section className="section source-note-section">
        <div className="site-container source-note">
          <p className="eyebrow">A more honest kind of immersion</p>
          <h2>History leaves questions, too.</h2>
          <p>Surviving sources are incomplete. England 871 makes space for uncertainty, different interpretations and the limits of reconstruction. Historical depictions and artistic reconstructions are not evidence of an accurate likeness.</p>
          <p>Reading progress and preferences are stored on your iPhone, without an account or cloud sync. <a href="/support">Read our support information</a> for help with local progress and purchases.</p>
        </div>
      </section>

      <section className="section final-cta-section" id="download">
        <div className="site-container final-cta">
          <div><p className="eyebrow">England 871 · for iPhone</p><h2>From Alfred the Great to Richard II.</h2><p>Explore England across 871–1399. Free to download.</p></div>
          <AppStoreButton />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
    </>
  );
}
