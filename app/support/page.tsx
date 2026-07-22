import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Support",
  description:
    "Get help with England 871, the Chronicle Atlas app covering medieval England from 871 to 1399, including accounts, subscriptions and feedback.",
  path: "/support",
});

const topics = [
  {
    number: "01",
    title: "Account help",
    text: "Sign-in issues, email changes, saved progress and account access.",
    subject: "Account help",
  },
  {
    number: "02",
    title: "Subscription help",
    text: "Questions about Premium access, annual billing or subscription status.",
    subject: "Subscription help",
  },
  {
    number: "03",
    title: "Restore purchases",
    text: "Help recovering Premium after reinstalling or moving to a new iPhone.",
    subject: "Restore purchases",
  },
  {
    number: "04",
    title: "Report a historical issue",
    text: "Tell us about a factual concern, disputed interpretation or missing source.",
    subject: "Historical issue",
  },
  {
    number: "05",
    title: "App feedback",
    text: "Share a suggestion, accessibility concern or idea for a future chronicle.",
    subject: "App feedback",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Help centre"
        title="How can we help?"
        intro="Whether you have a practical problem or a historical question, your message will reach the Chronicle Atlas team."
      >
        <ButtonLink href="mailto:support@chronicleatlas.app" variant="light">
          Email support
        </ButtonLink>
      </PageHero>

      <section className="section support-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Common support topics</p>
              <h2>Start with the right subject.</h2>
            </div>
            <p>
              Including your account email, device model and iOS version can
              help us understand technical problems more quickly. Never email a
              password or full payment-card details.
            </p>
          </div>
          <div className="support-grid">
            {topics.map((topic) => (
              <article className="support-card" key={topic.title}>
                <span>{topic.number}</span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
                <a
                  href={`mailto:support@chronicleatlas.app?subject=${encodeURIComponent(`England 871 — ${topic.subject}`)}`}
                >
                  Contact us <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section support-note-section">
        <div className="site-container support-note">
          <div>
            <p className="eyebrow">Subscription tip</p>
            <h2>Billing is managed by Apple.</h2>
          </div>
          <p>
            You can view, change or cancel an App Store subscription in iPhone
            Settings under your Apple ID. If access is missing after purchase,
            open England 871 and choose <strong>Restore Purchases</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
