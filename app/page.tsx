import { AppIcon } from "@/components/AppIcon";
import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { ChronicleSample } from "@/components/ChronicleSample";
import { MarketingScreenshot } from "@/components/MarketingScreenshot";
import { PricingPanel } from "@/components/PricingPanel";
import { RoyalRelationshipExplorer } from "@/components/RoyalRelationshipExplorer";
import { createPageMetadata } from "@/lib/metadata";
import { premiumPricing } from "@/lib/pricing";

export const metadata = createPageMetadata({
  title: "England 871 — medieval England, made fascinating",
  description:
    "Discover medieval England, 871–1399, through short illustrated stories, historical lives, an interactive map and a timeline. England 871 for iPhone.",
  path: "/",
});

const faqs = [
  {
    question: "What period does England 871 cover?",
    answer: "The app covers medieval England from 871 to 1399, from Alfred the Great to Richard II. The name marks the starting point, not a single year of history.",
  },
  {
    question: "What can I try for free?",
    answer: "England 871 is free to download. Selected Chronicles, people, places and reference entries are available before you subscribe.",
  },
  {
    question: "What does Premium include?",
    answer: `Premium opens on-demand choice across the paid story library and complete historical Series. Both plans include the same access: ${premiumPricing.monthlyPrice} per month or ${premiumPricing.annualPrice} per year in the UK. Annual saves ${premiumPricing.annualSavingPrice}, or ${premiumPricing.annualSavingPercent}%, compared with 12 monthly payments.`,
  },
  {
    question: "Do I need an account? Where is my progress saved?",
    answer: "No account is needed. Reading progress and preferences stay on your iPhone. They do not sync to another device, and deleting the app may remove that local progress. App Store purchases can be restored separately.",
  },
  {
    question: "How are sources and historical images presented?",
    answer: "Source notes and image details provide context. Historical depictions and artistic reconstructions are distinguished from evidence, and should not be treated as proof of a person’s appearance. Uncertainty and interpretation remain part of the story.",
  },
  {
    question: "Which devices is England 871 made for?",
    answer: "England 871 is made for iPhone. Check the App Store listing for current iOS compatibility and availability in your region.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <div className="app-identity">
              <AppIcon priority />
              <div><strong>England 871</strong><span>Medieval England · 871–1399</span></div>
            </div>
            <h1>Medieval England.<br /><span>Made fascinating.</span></h1>
            <p className="hero-intro">
              Discover the people, places and stories that shaped England.
              Short illustrated reads, historical lives, an interactive map
              and a timeline—all in one iPhone app.
            </p>
            <div className="hero-actions">
              <AppStoreButton />
              <ButtonLink href="#sample" variant="secondary">Try a Chronicle <span aria-hidden="true">↓</span></ButtonLink>
            </div>
            <p className="availability-note">Free to download · Optional Premium · No account</p>
          </div>
          <MarketingScreenshot name="home" priority className="hero-marketing-panel" />
        </div>
        <div className="site-container hero-footnotes" aria-label="England 871 at a glance">
          <span><strong>871–1399</strong> From Alfred the Great to Richard II</span>
          <span><strong>A few focused minutes</strong> Read one card at a time</span>
          <span><strong>Your way into history</strong> Stories, people, places and time</span>
        </div>
      </section>

      <div id="tour"><AppTour /></div>

      <section className="section sample-section" id="sample">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Try a Chronicle</p>
              <h2>A short read, right here.</h2>
            </div>
            <p>Read a complete short edition adapted from a free app story. No email, account or subscription required.</p>
          </div>
          <ChronicleSample />
          <details className="connected-example" id="royal-relationships">
            <summary>Explore another connection: Alfred’s family <span aria-hidden="true">+</span></summary>
            <div className="connected-example-inner">
              <h3>A crown is never a story about one person.</h3>
              <p>Select a member of Alfred’s family to see how marriage, descent and succession joined Wessex and Mercia.</p>
              <RoyalRelationshipExplorer />
            </div>
          </details>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Free and Premium</p>
              <h2>Start free. Go deeper when you’re ready.</h2>
            </div>
            <p>Selected content is free. Monthly and annual Premium plans offer the same access and are purchased inside the iPhone app.</p>
          </div>
          <PricingPanel />
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="site-container faq-grid">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Before you begin.</h2>
            <p className="faq-intro">A few practical answers. Need a hand? <a href="/support">Visit support</a>.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="site-container final-cta">
          <div>
            <div className="download-identity"><AppIcon decorative /><p className="eyebrow">England 871 · for iPhone</p></div>
            <h2>Your next story is waiting.</h2>
            <p>Explore England across 871–1399. Follow what fascinates you.</p>
          </div>
          <div className="final-cta-actions">
            <AppStoreButton />
            <ButtonLink href="/england-871" variant="light">More about the app</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
