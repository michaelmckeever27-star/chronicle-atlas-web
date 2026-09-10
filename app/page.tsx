import { AppStoreButton } from "@/components/AppStoreButton";
import { AppTour } from "@/components/AppTour";
import { ButtonLink } from "@/components/ButtonLink";
import { ChronicleSample } from "@/components/ChronicleSample";
import { IPhoneMockup } from "@/components/IPhoneMockup";
import { PricingPanel } from "@/components/PricingPanel";
import { RoyalRelationshipExplorer } from "@/components/RoyalRelationshipExplorer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "England 871 — medieval history for iPhone",
  description:
    "Meet the families who fought for England’s crown. Explore daily Chronicles, royal relationships, maps and guided stories from 871 to 1399.",
  path: "/",
});

const faqs = [
  {
    question: "Is England 871 only about the year 871?",
    answer:
      "No. The story begins with Alfred’s accession in 871 and continues to Richard II’s deposition in 1399. The app connects more than five centuries of medieval England.",
  },
  {
    question: "What can I read for free?",
    answer:
      "You can download the app free, read a complete Daily Chronicle and follow the complete six-episode Alfred and his family starter series. Selected reference content is also available before subscribing.",
  },
  {
    question: "What does Premium include?",
    answer:
      "Premium opens the full 72-story Chronicle archive, the remaining royal series and the deeper guided and interactive features. It is £19.99 per year in the UK; the App Store shows the price for your region before purchase.",
  },
  {
    question: "How does Chronicle Atlas handle uncertainty?",
    answer:
      "The app distinguishes evidence from interpretation, labels artistic reconstructions and includes source notes. Where the historical record is uncertain or disputed, the writing says so plainly.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Progress and preferences stay on your iPhone. They do not sync to another device, and deleting the app may remove that local progress. App Store purchases can be restored separately.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-gold">England 871 · for iPhone</p>
            <h1>Meet the families who fought for England’s crown.</h1>
            <p className="hero-intro">
              Explore royal rivalries, daily Chronicles and the places behind
              the stories—from Alfred the Great to Richard II.
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
              src="/screenshots/reader.png"
              alt="England 871 Chronicle reader showing Alfred becoming king in 871"
              sizes="(max-width: 839px) 280px, 330px"
              className="hero-phone"
              screenBackground="#3046c5"
              statusBarBackground="#3046c5"
              statusBarTheme="dark"
              priority
            />
            <span className="hero-screen-note">A complete story in six cards</span>
          </div>
        </div>
        <div className="site-container hero-footnotes" aria-label="England 871 at a glance">
          <span><strong>871–1399</strong> Five centuries connected</span>
          <span><strong>72 Chronicles</strong> Short stories with depth</span>
          <span><strong>No account</strong> Start exploring immediately</span>
        </div>
      </section>

      <section className="section sample-section" id="sample">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Try a Chronicle</p>
              <h2>One day. Six cards. A larger world.</h2>
            </div>
            <p>
              Read a complete short edition adapted from the free app archive.
              No email, account or subscription required.
            </p>
          </div>
          <ChronicleSample />
        </div>
      </section>

      <section className="section relationships-section" id="royal-relationships">
        <div className="site-container">
          <div className="section-heading-row section-heading-light">
            <div>
              <p className="eyebrow eyebrow-gold">Royal relationships</p>
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

      <section className="section tour-section" id="tour">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Inside England 871</p>
              <h2>Start with a story. Follow every connection.</h2>
            </div>
            <p>
              Five main areas make room for quick reading and deeper exploration.
              These are authentic screens from the current iPhone release.
            </p>
          </div>
          <AppTour />
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="site-container">
          <div className="section-heading-row section-heading-light">
            <div>
              <p className="eyebrow eyebrow-gold">Free and Premium</p>
              <h2>Try the story before you unlock the archive.</h2>
            </div>
            <p>
              England 871 is free to download. Premium is an optional annual
              subscription purchased inside the iPhone app.
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
              Chronicle Atlas is the publisher. England 871 is our first app: a
              connected guide to medieval England, built for curious readers.
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
            <p className="eyebrow eyebrow-gold">England 871 · version 1.2</p>
            <h2>Five centuries. One connected story.</h2>
            <p>Download free and meet the people behind England’s crown.</p>
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
