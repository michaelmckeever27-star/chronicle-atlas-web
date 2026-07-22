import { AppStoreButton } from "@/components/AppStoreButton";
import { ButtonLink } from "@/components/ButtonLink";
import { FeatureCard } from "@/components/FeatureCard";
import { IPhoneMockup } from "@/components/IPhoneMockup";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Immersive history apps & interactive storytelling",
  description:
    "Step inside medieval England from 871 to 1399 with Chronicle Atlas—immersive history apps, guided courses, interactive maps and richly researched stories.",
  path: "/",
});

const experiences = [
  {
    eyebrow: "Every day",
    title: "Daily history",
    text: "Open the app to a carefully chosen event, person or detail connected to the date—and see the wider story around it.",
    symbol: "I",
  },
  {
    eyebrow: "Learn in chapters",
    title: "Guided courses",
    text: "Follow clear, structured routes through complex periods, with each lesson building context without overwhelming you.",
    symbol: "II",
  },
  {
    eyebrow: "Know the ground",
    title: "Living maps",
    text: "Trace kingdoms, routes, raids and shifting frontiers on maps designed to reveal why place mattered.",
    symbol: "III",
  },
  {
    eyebrow: "Build your library",
    title: "Chronicle cards",
    text: "Collect concise profiles of people, places and events, then revisit the threads that connect them.",
    symbol: "IV",
  },
  {
    eyebrow: "Beyond the throne",
    title: "Ordinary life",
    text: "Explore homes, beliefs, food, work, law and language—the texture of life behind the famous names.",
    symbol: "V",
  },
  {
    eyebrow: "Power & succession",
    title: "Monarchs",
    text: "Understand rulers as people in a network of families, rivals, loyalties and difficult choices.",
    symbol: "VI",
  },
  {
    eyebrow: "Conflict in context",
    title: "Battles",
    text: "See what led to each confrontation, how it unfolded and what changed after the field fell quiet.",
    symbol: "VII",
  },
  {
    eyebrow: "Choose a path",
    title: "Interactive campaigns",
    text: "Test your judgement against the pressures of the period and discover how every decision reshapes the story.",
    symbol: "VIII",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-gold">History, vividly told</p>
            <h1>
              The past is not a list of dates. <em>It is a world.</em>
            </h1>
            <p className="hero-intro">
              Chronicle Atlas creates immersive history apps, guided courses
              and interactive stories that let you see how lives, places and
              decisions connect.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/england-871" variant="light">
                Discover England 871
                <span aria-hidden="true">→</span>
              </ButtonLink>
              <AppStoreButton light />
            </div>
          </div>

          <div
            className="atlas-visual"
            role="img"
            aria-label="A stylised map marking 871 as the starting point of the England 871 timeline"
          >
            <div className="atlas-year">
              <span>England</span>
              <strong>871</strong>
              <small>A kingdom not yet made</small>
            </div>
            <span className="map-line map-line-one" aria-hidden="true" />
            <span className="map-line map-line-two" aria-hidden="true" />
            <span className="map-place map-place-york">Jórvík</span>
            <span className="map-place map-place-mercia">Mercia</span>
            <span className="map-place map-place-wessex">Wessex</span>
            <span className="map-place map-place-winchester">Winchester</span>
            <span className="map-date">Anno Domini · DCCCLXXI</span>
          </div>
        </div>
        <div className="site-container hero-footnotes" aria-label="Product principles">
          <span>Immersive by design</span>
          <span>Grounded in evidence</span>
          <span>Made for curious minds</span>
        </div>
      </section>

      <section className="section manifesto-section">
        <div className="site-container narrow-intro">
          <p className="eyebrow">A different way into history</p>
          <h2>Scholarship with a sense of discovery.</h2>
          <p>
            We turn rigorous research into experiences that reward curiosity.
            Start with a person, a place or a single day. Follow the connections
            and watch a whole age come into view.
          </p>
        </div>
      </section>

      <section className="section product-feature-section">
        <div className="site-container product-feature-grid">
          <div className="phone-stage">
            <IPhoneMockup
              src="/screenshots/today.png"
              alt="England 871 Today screen showing a daily Chronicle story"
              sizes="(max-width: 839px) 250px, 250px"
              className="phone-home"
              screenBackground="#fefaf1"
              statusBarBackground="#eef2f5"
              statusBarTheme="light"
              priority
            />
            <div className="stage-caption">01 · First release</div>
          </div>

          <div className="product-feature-copy">
            <p className="eyebrow">Introducing our first app</p>
            <h2>England 871</h2>
            <p className="large-copy">
              From Alfred the Great to Richard II, explore more than five
              centuries of medieval England.
            </p>
            <p>
              England 871 is an immersive history app covering medieval England
              from 871 to 1399. It brings the period to life through daily
              stories, layered maps, guided learning and interactive decisions.
            </p>
            <ul className="tick-list">
              <li>Travel through 871–1399 on a connected timeline</li>
              <li>Explore monarchs, battles, ordinary life and Chronicle Cards</li>
              <li>See how evidence and interpretation shape the story</li>
            </ul>
            <ButtonLink href="/england-871" variant="secondary">
              Explore the app <span aria-hidden="true">→</span>
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section experiences-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Inside every Chronicle Atlas experience</p>
              <h2>Many ways to enter the story.</h2>
            </div>
            <p>
              Choose a structured path or follow your curiosity. Each feature
              adds another layer to the world.
            </p>
          </div>
          <div className="feature-grid">
            {experiences.map((item, index) => (
              <FeatureCard
                key={item.title}
                eyebrow={item.eyebrow}
                title={item.title}
                symbol={item.symbol}
                featured={index === 0 || index === 7}
              >
                {item.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section course-section">
        <div className="site-container course-grid">
          <div>
            <p className="eyebrow eyebrow-gold">From spark to understanding</p>
            <h2>Explore freely. Learn with purpose.</h2>
          </div>
          <ol className="course-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Begin with a moment</h3>
                <p>A scene, object or decision opens the door.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>See the connections</h3>
                <p>Maps and chronicle cards reveal the wider pattern.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Test your understanding</h3>
                <p>Interactive campaigns turn knowledge into judgement.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="site-container final-cta">
          <div>
            <p className="eyebrow">The first chapter</p>
            <h2>Enter medieval England.</h2>
            <p>Explore the story from Alfred the Great to Richard II.</p>
          </div>
          <div className="final-cta-actions">
            <ButtonLink href="/england-871" variant="light">
              Discover England 871
            </ButtonLink>
            <AppStoreButton light />
          </div>
        </div>
      </section>
    </>
  );
}
