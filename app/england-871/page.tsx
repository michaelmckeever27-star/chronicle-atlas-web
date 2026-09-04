import { AppStoreButton } from "@/components/AppStoreButton";
import { ButtonLink } from "@/components/ButtonLink";
import { FeatureCard } from "@/components/FeatureCard";
import { IPhoneMockup } from "@/components/IPhoneMockup";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";
import { createPageMetadata } from "@/lib/metadata";

const england871Description =
  "England 871 is available now on the App Store. Explore medieval England from 871 to 1399 through monarchs, battles, maps, ordinary life, guided courses and Chronicle Cards.";

export const metadata = createPageMetadata({
  title: "England 871 — Available now for iPhone",
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
};

const premiumFeatures = [
  {
    eyebrow: "Go deeper",
    title: "Complete guided courses",
    text: "Follow structured, expert-led learning paths through the people, politics and turning points of 871–1399.",
    symbol: "I",
  },
  {
    eyebrow: "Read the landscape",
    title: "Interactive historical maps",
    text: "Explore kingdoms, movement and contested frontiers with layers that make geography part of the explanation.",
    symbol: "II",
  },
  {
    eyebrow: "Make the call",
    title: "Interactive campaigns",
    text: "Face historically grounded choices, balance competing pressures and compare your path with what followed.",
    symbol: "III",
  },
  {
    eyebrow: "Keep exploring",
    title: "Full chronicle library",
    text: "Unlock the complete collection of people, places, battles, objects and themes, linked across the app.",
    symbol: "IV",
  },
];

const freeFeatures = [
  "A rotating selection of daily history stories",
  "Selected chronicle cards and biographies",
  "An introduction to medieval England from 871 to 1399",
  "Sample course lessons and map experiences",
  "Progress and preferences stored locally on your iPhone",
];

export default function England871Page() {
  return (
    <>
      <section className="product-hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="site-container product-hero-grid">
          <div className="product-hero-copy">
            <p className="eyebrow eyebrow-gold">The Chronicle Atlas app · Volume I</p>
            <h1>England <strong>871</strong></h1>
            <p className="product-hero-line">From Alfred the Great to Richard II.</p>
            <p className="hero-intro">
              England 871 is an immersive history app covering medieval England
              from 871 to 1399. Explore England across 871–1399 through monarchs,
              battles, maps, ordinary life, guided courses and Chronicle Cards.
            </p>
            <div className="hero-actions" id="app-store">
              <AppStoreButton light />
              <ButtonLink href="#inside-the-app" variant="light">
                See inside <span aria-hidden="true">↓</span>
              </ButtonLink>
            </div>
            <p className="availability-note">Available now for iPhone</p>
          </div>
          <div className="product-phone-wrap">
            <div className="year-ring" aria-hidden="true"><span>871</span></div>
            <IPhoneMockup
              src="/screenshots/alfred-profile.png"
              alt="Alfred the Great profile screen in England 871"
              sizes="270px"
              className="product-phone"
              screenBackground="#eef2f5"
              statusBarBackground="#0e0e0c"
              statusBarTheme="dark"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section year-section">
        <div className="site-container year-grid">
          <div className="year-stat">
            <span>529</span>
            <strong>years</strong>
            <small>of medieval England</small>
          </div>
          <div className="year-copy">
            <p className="eyebrow">The story starts in 871</p>
            <h2>From Alfred the Great to Richard II.</h2>
            <p>
              In 871, Alfred was a young prince, Viking armies were campaigning
              across Wessex and the future of England was uncertain. From that
              starting point, the app follows England through conquest, reform,
              dynastic struggle and social change to 1399—revealing how people,
              places and decisions connect across the medieval centuries.
            </p>
          </div>
        </div>
      </section>

      <section className="section app-story-section" id="inside-the-app">
        <div className="site-container section-heading-row">
          <div>
            <p className="eyebrow">Inside the app</p>
            <h2>Follow the story. Find your own path.</h2>
          </div>
          <p>
            England 871 combines narrative, reference and interaction in one
            connected experience built for a few minutes or a long evening.
          </p>
        </div>
        <div className="site-container story-strip">
          <article>
            <span>Morning</span>
            <h3>Open today’s chronicle</h3>
            <p>Meet a person or event through a concise, atmospheric story.</p>
          </article>
          <article>
            <span>Follow</span>
            <h3>Trace the connections</h3>
            <p>Move naturally into related places, lives and evidence.</p>
          </article>
          <article>
            <span>Understand</span>
            <h3>Take a guided course</h3>
            <p>Build a clear mental model of the period and its changing worlds.</p>
          </article>
        </div>
      </section>

      <section className="section premium-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow eyebrow-gold">Chronicle Atlas Premium</p>
              <h2>The complete experience.</h2>
            </div>
            <p>
              An annual subscription unlocks every course, map, campaign and
              chronicle card in England 871.
            </p>
          </div>
          <div className="premium-grid">
            {premiumFeatures.map((item) => (
              <FeatureCard
                key={item.title}
                eyebrow={item.eyebrow}
                title={item.title}
                symbol={item.symbol}
              >
                {item.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section free-section">
        <div className="site-container free-grid">
          <div>
            <p className="eyebrow">Start exploring for free</p>
            <h2>A meaningful first step—no subscription required.</h2>
            <p>
              The free experience is designed to be useful in its own right,
              with enough access to understand how Chronicle Atlas works before
              deciding whether Premium is for you.
            </p>
          </div>
          <ul className="free-list">
            {freeFeatures.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section screenshots-section">
        <div className="site-container">
          <div className="section-heading-row screenshots-heading">
            <div>
              <p className="eyebrow">A first look</p>
              <h2>Designed to reward attention.</h2>
            </div>
            <p>Explore England across 871–1399 through four views from the app.</p>
          </div>
          <div className="screenshots-grid" aria-label="England 871 app screenshots">
            <article className="screenshot-card">
              <span className="screen-number">01</span>
              <IPhoneMockup
                src="/screenshots/today.png"
                alt="England 871 Today screen showing a daily Chronicle story"
                sizes="(max-width: 619px) calc(100vw - 4rem), (max-width: 1179px) 42vw, 260px"
                className="gallery-phone"
                screenBackground="#fefaf1"
                statusBarBackground="#eef2f5"
                statusBarTheme="light"
              />
              <h3>Daily Chronicle</h3>
              <p>Discover one evidence-led story at a time.</p>
            </article>
            <article className="screenshot-card">
              <span className="screen-number">02</span>
              <IPhoneMockup
                src="/screenshots/map.png"
                alt="England 871 interactive map covering medieval England"
                sizes="(max-width: 619px) calc(100vw - 4rem), (max-width: 1179px) 42vw, 260px"
                className="gallery-phone"
                screenBackground="#fefaf1"
                statusBarBackground="#cddbe6"
                statusBarTheme="light"
              />
              <h3>Maps across the centuries</h3>
              <p>Navigate places, power and changing eras.</p>
            </article>
            <article className="screenshot-card">
              <span className="screen-number">03</span>
              <IPhoneMockup
                src="/screenshots/alfred-profile.png"
                alt="Alfred the Great profile screen in England 871"
                sizes="(max-width: 619px) calc(100vw - 4rem), (max-width: 1179px) 42vw, 260px"
                className="gallery-phone"
                screenBackground="#eef2f5"
                statusBarBackground="#0e0e0c"
                statusBarTheme="dark"
              />
              <h3>Monarchs in context</h3>
              <p>Connect reigns, relationships and legacies.</p>
            </article>
            <article className="screenshot-card">
              <span className="screen-number">04</span>
              <IPhoneMockup
                src="/screenshots/aethelred-course.png"
                alt="Æthelred guided reading chapter in England 871"
                sizes="(max-width: 619px) calc(100vw - 4rem), (max-width: 1179px) 42vw, 260px"
                className="gallery-phone"
                screenBackground="#eef2f5"
                statusBarBackground="#0e0d0b"
                statusBarTheme="dark"
              />
              <h3>Guided reading</h3>
              <p>Learn through concise, connected chapters.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section difference-section">
        <div className="site-container difference-grid">
          <div>
            <p className="eyebrow eyebrow-gold">Why it feels different</p>
            <h2>Not a textbook squeezed onto a screen.</h2>
            <p>
              A normal history app often gives you isolated facts. England 871
              is built around relationships: event to landscape, ruler to
              household, source to uncertainty, decision to consequence.
            </p>
          </div>
          <div className="comparison-list">
            <div><span>Instead of</span><strong>Disconnected facts</strong><em>→</em><b>A connected world</b></div>
            <div><span>Instead of</span><strong>Passive scrolling</strong><em>→</em><b>Active exploration</b></div>
            <div><span>Instead of</span><strong>False certainty</strong><em>→</em><b>Evidence in context</b></div>
            <div><span>Instead of</span><strong>One pace for everyone</strong><em>→</em><b>Your own route through</b></div>
          </div>
        </div>
      </section>

      <section className="section product-final-cta" id="download">
        <div className="site-container product-final-inner">
          <p className="eyebrow eyebrow-gold">Available now on the App Store</p>
          <h2>Explore England across 871–1399.</h2>
          <p>From Alfred the Great to Richard II—download England 871 for iPhone.</p>
          <AppStoreButton light />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  );
}
