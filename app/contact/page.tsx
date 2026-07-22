import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Chronicle Atlas Ltd about England 871, press, partnerships, historical research or general enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Chronicle Atlas Ltd"
        title="Let’s talk about history."
        intro="For product questions, thoughtful corrections, partnerships or press enquiries, get in touch with our team."
      />
      <section className="section contact-section">
        <div className="site-container contact-grid">
          <div className="contact-primary">
            <p className="eyebrow">General enquiries</p>
            <h2>Start a conversation.</h2>
            <p>
              Email is the best way to reach Chronicle Atlas Ltd. Please include
              a clear subject line and any useful context; we will route your
              message to the right person.
            </p>
            <ButtonLink href="mailto:support@chronicleatlas.com" variant="secondary">
              support@chronicleatlas.com
            </ButtonLink>
          </div>
          <div className="contact-options">
            <article>
              <span>01</span>
              <div>
                <h3>Product support</h3>
                <p>Account, subscription and technical help for England 871.</p>
                <a href="/support">Visit support →</a>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Historical corrections</h3>
                <p>Flag a factual question or share relevant scholarship.</p>
                <a href="mailto:support@chronicleatlas.com?subject=Historical%20correction">Email the editorial team →</a>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Press & partnerships</h3>
                <p>Media requests, educational collaborations and licensing.</p>
                <a href="mailto:support@chronicleatlas.com?subject=Press%20or%20partnership%20enquiry">Send an enquiry →</a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section company-note-section">
        <div className="site-container company-note">
          <span className="brand-mark brand-mark-large" aria-hidden="true">CA</span>
          <div>
            <p className="eyebrow">The company</p>
            <h2>Chronicle Atlas Ltd</h2>
            <p>
              We create premium digital history experiences that combine careful
              scholarship, cinematic storytelling and intuitive interaction.
              England 871, covering medieval England from Alfred the Great to
              Richard II, is our first release.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
