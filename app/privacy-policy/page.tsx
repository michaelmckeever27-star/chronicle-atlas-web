import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Chronicle Atlas Ltd and England 871, including local iPhone storage, App Store subscriptions and support communications.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How Chronicle Atlas Ltd handles information when you use England 871, visit this website or contact us."
      lastUpdated="4 September 2026"
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          Chronicle Atlas Ltd (“Chronicle Atlas”, “we”, “us” or “our”) develops
          educational history experiences, including England 871, an iOS app
          covering medieval England from 871 to 1399. Chronicle Atlas Ltd is the
          data controller for personal information that we receive directly,
          such as a message sent to us for support.
        </p>
        <p>
          Questions about privacy can be sent to{" "}
          <a href="mailto:privacy@chronicleatlas.app">privacy@chronicleatlas.app</a>.
        </p>
      </section>

      <section>
        <h2>2. No Chronicle Atlas accounts</h2>
        <p>
          England 871 does not currently provide user accounts, sign-up,
          sign-in or user profiles. The app does not create a Chronicle Atlas
          cloud account for you.
        </p>
      </section>

      <section>
        <h2>3. Your local Chronicle</h2>
        <p>
          Reading progress, completed content, bookmarks, achievements,
          campaign decisions, quiz results, rewards, recently viewed items,
          reminder choices, appearance settings and other preferences are
          stored locally on your iPhone. They are not stored in a Chronicle
          Atlas cloud account and do not synchronise or transfer to another
          device.
        </p>
        <p>
          Local Chronicle data may be lost if England 871 is deleted. Chronicle
          Atlas cannot remotely retrieve, view or restore progress that is held
          only on your iPhone. You can erase this data from the app by opening{" "}
          <strong>My Chronicle</strong>, selecting <strong>Settings</strong>,
          choosing <strong>Reset local progress</strong> and confirming the
          action. Read the full <a href="/account-deletion">data deletion instructions</a>.
        </p>
      </section>

      <section>
        <h2>4. App Store purchases and Premium access</h2>
        <p>
          Apple processes purchases and subscription billing through the App
          Store. RevenueCat manages subscription entitlement information so the
          app can determine whether Premium access is active. This may include
          an anonymous app identifier, product and transaction information, and
          the current entitlement status. Chronicle Atlas does not receive your
          full payment-card details.
        </p>
        <p>
          <strong>Restore Purchases</strong> can restore an eligible Premium
          entitlement associated with the same Apple ID. It does not restore
          reading history, bookmarks, achievements, campaign decisions or other
          Chronicle progress stored locally on a previous installation or
          device.
        </p>
        <p>
          Apple and RevenueCat may retain transaction and entitlement records
          under their own policies and legal obligations. You can read the{" "}
          <a href="https://www.apple.com/uk/legal/privacy/en-ww/">Apple Privacy Policy</a>
          {" "}and <a href="https://www.revenuecat.com/privacy">RevenueCat Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>5. Notifications</h2>
        <p>
          Daily Chronicle reminders are scheduled locally on your iPhone.
          Notification permission, reminder time and reminder preferences are
          handled on the device. England 871 does not register a remote push
          notification token with Chronicle Atlas. You can change notification
          permission in iPhone Settings or turn the reminder off in the app.
        </p>
      </section>

      <section>
        <h2>6. Analytics and advertising</h2>
        <p>
          The released version of England 871 does not send in-app analytics or
          Meta App Events to Chronicle Atlas or an advertising provider. We do
          not use the app to serve personalised advertising.
        </p>
      </section>

      <section>
        <h2>7. Support and privacy correspondence</h2>
        <p>
          If you contact us, we receive the information you choose to include,
          such as your name or email address, message, relevant screenshots and
          diagnostic details. We use this information to respond, investigate
          problems, protect our services and meet legal obligations. Please do
          not send passwords or full payment-card details.
        </p>
        <p>
          We retain correspondence only for as long as reasonably necessary for
          those purposes, including resolving disputes and keeping appropriate
          business or legal records.
        </p>
      </section>

      <section>
        <h2>8. This website</h2>
        <p>
          This website does not provide user accounts and does not include
          advertising trackers, website analytics or account cookies. It is
          hosted by Vercel, which may process technical request information such
          as an IP address, browser or device information, request details and
          timestamps to deliver, operate and secure the site. Vercel handles
          that information under its{" "}
          <a href="https://vercel.com/legal/privacy-notice">Privacy Notice</a>.
        </p>
      </section>

      <section>
        <h2>9. Sharing, security and your rights</h2>
        <p>
          We do not sell personal information. We share information only where
          needed with service providers described in this policy, where
          required by law, or to protect rights and safety. We use reasonable
          technical and organisational measures designed to protect information
          we control, although no digital service can guarantee absolute
          security.
        </p>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, restrict or object to our use of your personal information,
          and to receive a portable copy. To make a request about information
          Chronicle Atlas controls, email{" "}
          <a href="mailto:privacy@chronicleatlas.app">privacy@chronicleatlas.app</a>.
          We may need to verify your identity. In the UK, you may also complain
          to the Information Commissioner’s Office.
        </p>
      </section>

      <section>
        <h2>10. Children, international processing and changes</h2>
        <p>
          England 871 is an educational service for a general audience. It does
          not provide accounts or knowingly ask children to submit personal
          information to Chronicle Atlas. Apple, RevenueCat, Vercel or an email
          provider may process information outside the United Kingdom using
          safeguards required by applicable law.
        </p>
        <p>
          We may update this policy when the app, website, providers or law
          changes. The current revision date will be published on this page.
        </p>
      </section>
    </LegalPage>
  );
}
