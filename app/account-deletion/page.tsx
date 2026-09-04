import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Local Data and Deletion",
  description:
    "How to reset locally stored England 871 progress and manage related App Store subscription information.",
  path: "/account-deletion",
});

export default function AccountDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy and data"
        title="Local data and deletion"
        intro="England 871 does not create a user account. Your Chronicle progress and preferences are stored locally on your iPhone and can be reset in the app."
      />

      <section className="section deletion-section">
        <div className="site-container deletion-grid">
          <div className="deletion-steps">
            <p className="eyebrow">Reset local progress</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h2>Open Settings</h2>
                  <p>
                    In England 871, open <strong>My Chronicle</strong>, then
                    select <strong>Settings</strong>.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h2>Choose the reset control</h2>
                  <p>
                    Under <strong>Your Chronicle</strong>, choose{" "}
                    <strong>Reset local progress</strong>.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h2>Confirm the action</h2>
                  <p>
                    Review the confirmation message, then choose{" "}
                    <strong>Reset local progress</strong> again. The reset is
                    permanent for the Chronicle data held on that iPhone.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <aside className="data-panel">
            <p className="eyebrow eyebrow-gold">What the reset removes</p>
            <ul>
              <li>Bookmarks and recently viewed items</li>
              <li>Reading and course progress</li>
              <li>Campaign decisions and quiz results</li>
              <li>Achievements and rewards</li>
              <li>Reminder choices and local preferences</li>
            </ul>
            <p>
              Chronicle Atlas does not hold this progress in a cloud account and
              cannot remotely retrieve or restore it. Deleting England 871 may
              also remove locally stored progress, depending on device and
              backup behaviour.
            </p>
          </aside>
        </div>
      </section>

      <section className="section deletion-warning-section">
        <div className="site-container deletion-warning">
          <div>
            <p className="eyebrow">Premium access</p>
            <h2>Local progress and purchases are separate.</h2>
          </div>
          <p>
            Resetting progress or deleting the app does not cancel an App Store
            subscription. Manage or cancel the subscription separately through
            Apple. <strong>Restore Purchases</strong> may restore an eligible
            Premium entitlement associated with the same Apple ID, but it does
            not restore historical progress or preferences.
          </p>
        </div>
      </section>

      <section className="section support-note-section">
        <div className="site-container support-note">
          <div>
            <p className="eyebrow">For Meta</p>
            <h2>No Meta-linked account or profile.</h2>
          </div>
          <div>
            <p>
              England 871 does not use Facebook Login and does not maintain a
              Meta-linked user account or cloud progress profile. Chronicle
              Atlas therefore has no Meta-linked England 871 account data to
              delete.
            </p>
            <p>
              For questions about personal information you voluntarily supplied
              in a support or privacy message, email{" "}
              <a href="mailto:privacy@chronicleatlas.app">privacy@chronicleatlas.app</a>.
              Apple and RevenueCat control their own transaction and entitlement
              records under their policies and retention obligations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
