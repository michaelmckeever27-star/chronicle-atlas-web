import { AppIcon } from "@/components/AppIcon";
import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { ChronicleSample } from "@/components/ChronicleSample";
import { DownloadSection } from "@/components/DownloadSection";
import { HistoricalJourney } from "@/components/HistoricalJourney";
import { MarketingScreenshot } from "@/components/MarketingScreenshot";
import { MotionEnhancements } from "@/components/MotionEnhancements";
import { PricingPanel } from "@/components/PricingPanel";
import { RoyalRelationshipExplorer } from "@/components/RoyalRelationshipExplorer";
import { StoryShowcase } from "@/components/StoryShowcase";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "England 871 | Explore Medieval English History",
  description:
    "A little history. Every day. Explore medieval England, 871–1485, with illustrated stories, audio, historical people, an interactive map and timeline. For iPhone.",
  path: "/",
});
const faqs = [
  {
    question: "What period does England 871 cover?",
    answer:
      "England 871 covers medieval England from 871 to 1485: from Alfred the Great’s Wessex to the Battle of Bosworth. The name marks the starting point, not a single year.",
  },
  {
    question: "Is it free to use?",
    answer:
      "The app is free to download, with a free selection to get you started. Optional Premium unlocks the full story library and complete historical Series. Both monthly and annual plans offer the same access; purchases are made inside the iPhone app through Apple.",
  },
  {
    question: "Can I listen to stories?",
    answer:
      "Yes. Version 2.0 includes audio narration alongside illustrated reading. Tap Listen where it is available, or read the story one card at a time. The app uses AI-generated narration.",
  },
  {
    question: "Is it available on Android?",
    answer:
      "England 871 is currently available for iPhone on the App Store. There is no Android release to download. The App Store listing has current device compatibility and regional availability.",
  },
  {
    question: "How is the historical content prepared?",
    answer:
      "The app includes source notes and image details to help you explore the evidence. AI assists with drafting content and provides audio narration. Historical depictions and artistic reconstructions are distinguished from evidence, not presented as proof of an accurate likeness. Surviving sources can be incomplete, and interpretation and uncertainty remain part of history.",
  },
];
export default function Home() {
  return (
    <>
      <MotionEnhancements />
      <section className="home-hero">
        <div className="brand-ribbon ribbon-hero" aria-hidden="true" />
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <div className="app-identity">
              <AppIcon priority />
              <div>
                <strong>England 871</strong>
                <span>Version 2.0 · For iPhone</span>
              </div>
            </div>
            <h1>
              A little history.
              <br />
              <span>Every day.</span>
            </h1>
            <p className="hero-intro">
              Explore medieval England through short illustrated stories, audio
              narration and the people and places behind the events.
            </p>
            <div className="hero-actions">
              <AppStoreButton placement="hero" />
              <ButtonLink href="#tour" variant="secondary">
                Explore the app <span aria-hidden="true">↓</span>
              </ButtonLink>
            </div>
            <p className="availability-note">
              Free to download · Optional Premium
            </p>
            <p className="hero-period">
              <span aria-hidden="true">↳</span> From Alfred to Bosworth.{" "}
              <strong>871–1485.</strong>
            </p>
          </div>
          <MarketingScreenshot
            name="home"
            priority
            className="hero-marketing-panel"
            caption={false}
          />
        </div>
      </section>
      <section
        className="app-at-a-glance"
        aria-label="Inside England 871 version 2.0"
      >
        <div className="site-container stats-grid">
          <p>
            <strong>103</strong>
            <span>Illustrated stories</span>
          </p>
          <p>
            <strong>162</strong>
            <span>Historical lives</span>
          </p>
          <p>
            <strong>192</strong>
            <span>Timeline events</span>
          </p>
          <p>
            <strong>871–1485</strong>
            <span>A world to discover</span>
          </p>
        </div>
      </section>
      <AppTour />
      <HistoricalJourney />
      <StoryShowcase />
      <section className="sample-section sample-compact" id="sample">
        <div className="site-container">
          <details className="sample-disclosure">
            <summary>
              <span>
                <span className="eyebrow">A taste of the storytelling</span>
                <strong>Try a Chronicle, right here.</strong>
              </span>
              <span className="sample-open-label">
                Open the free sample <span aria-hidden="true">+</span>
              </span>
            </summary>
            <div className="sample-disclosure-inner">
              <p>
                A complete six-card website edition adapted from A Day in a
                Medieval Village. The imagined household is an evidence-led
                composite.
              </p>
              <ChronicleSample />
              <details className="connected-example" id="royal-relationships">
                <summary>
                  Explore another connection: Alfred’s family{" "}
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="connected-example-inner">
                  <h3>A crown is never a story about one person.</h3>
                  <p>
                    Select a family member to explore marriage, descent and
                    succession.
                  </p>
                  <RoyalRelationshipExplorer />
                </div>
              </details>
            </div>
          </details>
        </div>
      </section>
      <section className="section pricing-section" id="pricing">
        <div className="site-container">
          <div className="section-heading-row" data-reveal>
            <div>
              <p className="eyebrow">Free and Premium</p>
              <h2>
                Start with a story.
                <br />
                <span>Stay curious.</span>
              </h2>
            </div>
            <p>
              A free selection to begin. More to discover when you’re ready.
            </p>
          </div>
          <PricingPanel />
        </div>
      </section>
      <section className="section faq-section" id="faq">
        <div className="site-container faq-grid">
          <div data-reveal>
            <p className="eyebrow">Good to know</p>
            <h2>
              A few answers.
              <br />
              <span>Then, explore.</span>
            </h2>
            <p className="faq-intro">
              Need a hand? <a href="/support">We’re here to help</a>.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <DownloadSection />
    </>
  );
}
