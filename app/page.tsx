import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { ChronicleSample } from "@/components/ChronicleSample";
import { FeatureCard } from "@/components/FeatureCard";
import { IPhoneMockup } from "@/components/IPhoneMockup";
import { PricingPanel } from "@/components/PricingPanel";
import { RoyalRelationshipExplorer } from "@/components/RoyalRelationshipExplorer";
import { createPageMetadata } from "@/lib/metadata";
import { premiumPricing } from "@/lib/pricing";

export const metadata = createPageMetadata({
  title: "England 871 — step inside medieval England",
  description:
    "Explore the people, places and illustrated stories that shaped medieval England from 871 to 1399 with England 871 for iPhone.",
  path: "/",
});

const faqs = [
  {
    question: "Is England 871 only about the year 871?",
    answer:
      "No. The story begins with Alfred’s accession in 871 and continues to Richard II’s deposition in 1399—more than five centuries of medieval England.",
  },
  {
    question: "What can I explore in the app?",
    answer:
      "The three main tabs are Today, Explore and Saved. From Explore you can open People, Stories & Series, Timeline and Map, then follow links between related subjects.",
  },
  {
    question: "What can I try for free?",
    answer:
      "England 871 is free to download. Selected Chronicles, people, places and reference entries are available before you subscribe.",
  },
  {
    question: "What does Premium include?",
    answer: `Premium opens on-demand choice across the paid story library and complete historical Series. Both plans include the same access: ${premiumPricing.monthlyPrice} per month or ${premiumPricing.annualPrice} per year in the UK. Annual saves ${premiumPricing.annualSavingPrice}, or ${premiumPricing.annualSavingPercent}%, compared with 12 monthly payments.`,
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Reading progress and preferences stay on your iPhone. They do not sync to another device, and deleting the app may remove that local progress. App Store purchases can be restored separately.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-gold">England 871 · for iPhone</p>
            <h1>Step inside medieval England.</h1>
            <p className="hero-intro">
              Explore the people, places and stories that shaped England from
              871 to 1399. Discover kings, queens, dukes and knights, alongside
              the everyday lives of medieval communities.
            </p>
            <div className="hero-actions">
              <AppStoreButton />
              <ButtonLink href="#sample" variant="light">
                Try a Chronicle <span aria-hidden="true">↓</span>
              </ButtonLink>
            </div>
            <p className="availability-note">Free to download · Optional Premium</p>
          </div>

          <div className="hero-phone-stage">
            <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <IPhoneMockup
              src="/screenshots/england-871-home.png"
              alt="England 871 Today screen with Alfred’s story and archive recommendations"
              sizes="(max-width: 839px) 280px, 330px"
              className="hero-phone"
              screenBackground="#3046c5"
              screenshotHasStatusBar
              priority
            />
            <span className="hero-screen-note">Today · Explore · Saved</span>
          </div>
        </div>
        <div className="site-container hero-footnotes" aria-label="England 871 at a glance">
          <span><strong>871–1399</strong> From Alfred the Great to Richard II</span>
          <span><strong>Illustrated stories</strong> Read in a few focused minutes</span>
          <span><strong>No account</strong> Start exploring immediately</span>
        </div>
      </section>

      <section className="section benefits-section" id="benefits">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Medieval England, connected</p>
              <h2>Start with a story. Follow what interests you.</h2>
            </div>
            <p>
              England 871 brings narrative, people, place and chronology into
              one clear experience made for curious readers.
            </p>
          </div>
          <div className="benefits-grid">
            <FeatureCard eyebrow="Illustrated stories" title="Short reads with a wider view." symbol="01">
              Chronicle Cards turn a moment into a concise narrative, then show
              where it connects to the rest of the period.
            </FeatureCard>
            <FeatureCard eyebrow="People and everyday life" title="History beyond a list of kings." symbol="02">
              Meet rulers, nobles and commanders alongside influential women,
              communities, belief, work and ordinary life.
            </FeatureCard>
            <FeatureCard eyebrow="Connected exploration" title="Move between story, place and time." symbol="03">
              Follow Series, browse people, compare dated events and locate the
              same history on an interactive map.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="section tour-section" id="tour">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Inside England 871</p>
              <h2>See how the history fits together.</h2>
            </div>
            <p>
              The main tabs are Today, Explore and Saved. People, Stories &amp;
              Series, Timeline and Map are destinations within Explore.
            </p>
          </div>
          <AppTour />
        </div>
      </section>

      <section className="section sample-section" id="sample">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Try a Chronicle</p>
              <h2>Experience the writing before you download.</h2>
            </div>
            <p>
              Read a complete short edition adapted from a free app story. No
              email, account or subscription required.
            </p>
          </div>
          <ChronicleSample />
        </div>
      </section>

      <section className="section relationships-section" id="royal-relationships">
        <div className="site-container">
          <div className="section-heading-row section-heading-light">
            <div>
              <p className="eyebrow eyebrow-gold">One connected example</p>
              <h2>A crown is never a story about one person.</h2>
            </div>
            <p>
              Select a member of Alfred’s family to see how marriage, descent
              and succession joined Wessex and Mercia.
            </p>
          </div>
          <RoyalRelationshipExplorer />
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="site-container">
          <div className="section-heading-row section-heading-light">
            <div>
              <p className="eyebrow eyebrow-gold">Free and Premium</p>
              <h2>Try it free. Choose when to go deeper.</h2>
            </div>
            <p>
              Selected content is free. Monthly and annual Premium plans offer
              the same access and are purchased inside the iPhone app.
            </p>
          </div>
          <PricingPanel />
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="site-container faq-grid">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Questions before you begin.</h2>
            <p className="faq-intro">
              Chronicle Atlas Ltd publishes England 871, a connected guide to
              medieval England for curious readers.
            </p>
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
            <p className="eyebrow eyebrow-gold">England 871 · for iPhone</p>
            <h2>From Alfred the Great to Richard II.</h2>
            <p>Explore England across 871–1399. Free to download.</p>
          </div>
          <div className="final-cta-actions">
            <AppStoreButton />
            <ButtonLink href="/england-871" variant="light">Explore the app</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
