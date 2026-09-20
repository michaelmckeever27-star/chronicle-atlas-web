import { MarketingScreenshot } from "./MarketingScreenshot";
import type { ScreenshotName } from "@/lib/screenshots";

const features: { image: ScreenshotName; label: string; title: string; text: string; note: string }[] = [
  {
    image: "reader",
    label: "Short illustrated stories",
    title: "A little history. A few minutes.",
    text: "Read one card at a time. Each Chronicle turns a historical moment into a short, connected story, with room to pause and pick up where you left off.",
    note: "Source notes and image details help you look beyond the story.",
  },
  {
    image: "map",
    label: "An interactive map",
    title: "Put history on the map.",
    text: "Find the places behind the stories. Select a town, royal centre or other historical location, then follow its connections to the people and events around it.",
    note: "Explore places across medieval England, 871–1399.",
  },
  {
    image: "timeline",
    label: "Five centuries, connected",
    title: "See how the story unfolds.",
    text: "From Alfred the Great to Richard II, connect the turning points in order. Search dated events or choose an era to understand what came before—and what followed.",
    note: "A timeline of England from 871 to 1399.",
  },
  {
    image: "people",
    label: "Historical lives",
    title: "Meet the people. Know their stories.",
    text: "Explore rulers, nobles, commanders and influential women. Follow lives in context, with dates, roles and links into the wider history.",
    note: "Historical depictions are not a claim of accurate likeness.",
  },
];

export function AppTour() {
  return (
    <>
      <div className="feature-stories">
        {features.map((feature, index) => (
          <section className={`feature-story${index % 2 ? " feature-story-reverse" : ""}${index === 0 ? " feature-story-blue" : ""}`} key={feature.image}>
            <div className="site-container feature-story-inner">
              <div className="feature-story-copy">
                <p className="eyebrow">{feature.label}</p>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
                <p className="feature-note">{feature.note}</p>
              </div>
              <MarketingScreenshot name={feature.image} />
            </div>
          </section>
        ))}
      </div>
      <section className="section discovery-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">There is more than one way in</p>
              <h2>Follow your curiosity.</h2>
            </div>
            <p>Choose a story, follow a Series or explore a subject. Everyday life, women and family belong here alongside the history of power.</p>
          </div>
          <div className="discovery-grid">
            <article>
              <div className="discovery-copy">
                <h3>Find your next story.</h3>
                <p>Browse 80 stories, from early kingdoms onwards. Search the library or follow connected reading paths in Series.</p>
              </div>
              <MarketingScreenshot name="library" />
            </article>
            <article>
              <div className="discovery-copy">
                <h3>Choose your way into the past.</h3>
                <p>Explore brings stories, people, the timeline and map together. Start with a subject that interests you.</p>
              </div>
              <MarketingScreenshot name="explore" />
            </article>
          </div>
          <p className="section-footnote">Screens shown from England 871. Some stories require Premium.</p>
        </div>
      </section>
    </>
  );
}
