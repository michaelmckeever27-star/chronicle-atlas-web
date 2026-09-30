import Image from "next/image";
import { MarketingScreenshot } from "./MarketingScreenshot";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

const stories = [
  {
    title: "A crown without control",
    hook: "Two living kings called Henry. One ceremony—and a struggle over who really ruled.",
    image: "/screenshots/v2/story-crown.webp",
    alt: "Historical depiction of the coronation and banquet of Henry the Young King, as shown in the England 871 reader",
    category: "Royal politics",
    time: "4 min read",
    href: ENGLAND_871_APP_STORE_URL,
    action: "Discover in the app · App Store ↗",
    note: "Historical depiction · from the app",
  },
  {
    title: "Alfred’s Kingdom on the Brink",
    hook: "A war to survive, an uncertain settlement and the work of building a stronger Wessex.",
    image: "/screenshots/v2/story-alfred.webp",
    alt: "Historical illustration used for Alfred’s Kingdom on the Brink in the supplied England 871 library preview",
    category: "Early kingdoms",
    time: "5 min read",
    href: ENGLAND_871_APP_STORE_URL,
    action: "Discover in the app · App Store ↗",
    note: "Historical depiction · from the app",
  },
  {
    title: "A Day in a Medieval Village",
    hook: "Work, food and obligation. Step beyond the crown into an evidence-led Midlands household, c. 1250.",
    image: "/editorial/everyday-life.webp",
    alt: "Labelled artistic reconstruction of people working in a medieval English town",
    category: "Everyday life",
    time: "Website sample",
    href: "#sample",
    action: "Read the website sample ↓",
    note: "Artistic reconstruction",
  },
];
export function StoryShowcase() {
  return (
    <section className="section story-section" id="stories">
      <div className="site-container">
        <div className="section-heading-row" data-reveal>
          <div>
            <p className="eyebrow">Small stories. A bigger picture.</p>
            <h2>
              One story can
              <br />
              <span>open a whole world.</span>
            </h2>
          </div>
          <p>
            103 illustrated stories, connected Series and a fresh route through
            the past. Here are three places to begin.
          </p>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <article
              className="story-card"
              key={story.title}
              style={
                { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
              }
              data-reveal
            >
              <div className="story-art">
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={720}
                  height={480}
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 360px"
                />
                <span>{story.note}</span>
              </div>
              <div className="story-card-copy">
                <p className="story-meta">
                  {story.category}
                  <span>{story.time}</span>
                </p>
                <h3>{story.title}</h3>
                <p>{story.hook}</p>
                <a
                  href={story.href}
                  data-download-placement={
                    story.href === ENGLAND_871_APP_STORE_URL
                      ? "feature-section"
                      : undefined
                  }
                >
                  {story.action}
                </a>
              </div>
            </article>
          ))}
        </div>
        <details className="library-preview">
          <summary>
            Take a look around the story library and Explore{" "}
            <span aria-hidden="true">+</span>
          </summary>
          <div className="library-preview-grid">
            <MarketingScreenshot name="library" />
            <MarketingScreenshot name="explore" />
          </div>
        </details>
      </div>
    </section>
  );
}
