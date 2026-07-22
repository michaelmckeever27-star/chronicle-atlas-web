import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Account Deletion",
  description:
    "Request deletion of your Chronicle Atlas or England 871 account and associated personal data.",
  path: "/account-deletion",
});

export default function AccountDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Your account"
        title="Request account deletion"
        intro="You can ask us to delete your Chronicle Atlas account and personal data associated with England 871."
      />
      <section className="section deletion-section">
        <div className="site-container deletion-grid">
          <div className="deletion-steps">
            <p className="eyebrow">How to make a request</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h2>Email us</h2>
                  <p>
                    Write to <a href="mailto:privacy@chronicleatlas.app">privacy@chronicleatlas.app</a> from the address connected to your account.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h2>Use the subject line</h2>
                  <p><strong>Account deletion request — England 871</strong></p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h2>Confirm the request</h2>
                  <p>
                    We may ask you to verify account ownership before deletion
                    to protect your information.
                  </p>
                </div>
              </li>
            </ol>
            <ButtonLink
              href="mailto:privacy@chronicleatlas.app?subject=Account%20deletion%20request%20%E2%80%94%20England%20871"
              variant="secondary"
            >
              Start deletion request
            </ButtonLink>
          </div>

          <aside className="data-panel">
            <p className="eyebrow eyebrow-gold">What may be deleted</p>
            <ul>
              <li>Account profile and authentication link</li>
              <li>Saved course and reading progress</li>
              <li>Saved chronicle cards and preferences</li>
              <li>Notification preferences and linked device tokens</li>
              <li>Other app data associated with your account</li>
            </ul>
            <p>
              Some limited records may be retained where required for legal,
              security, fraud-prevention or accounting purposes. We will explain
              any applicable retention when responding to your request.
            </p>
          </aside>
        </div>
      </section>

      <section className="section deletion-warning-section">
        <div className="site-container deletion-warning">
          <div>
            <p className="eyebrow">Before you delete</p>
            <h2>Account deletion is separate from cancellation.</h2>
          </div>
          <p>
            Deleting your Chronicle Atlas account does not automatically cancel
            an annual subscription billed by Apple. Manage or cancel the
            subscription separately in your Apple account settings. Apple and
            RevenueCat may retain transaction records under their own legal
            obligations and policies.
          </p>
        </div>
      </section>
    </>
  );
}
