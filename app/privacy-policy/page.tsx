import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Draft privacy policy for Chronicle Atlas Ltd and England 871, our immersive history app covering medieval England from 871 to 1399.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How Chronicle Atlas Ltd expects to collect, use and protect personal information in England 871 and related services."
      draft
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          Chronicle Atlas Ltd (“Chronicle Atlas”, “we”, “us” or “our”) develops
          educational history experiences, including England 871, an iOS app
          covering medieval England from 871 to 1399. For the personal information
          described in this policy, Chronicle Atlas Ltd is the data controller
          unless another organisation is identified.
        </p>
        <p>
          Questions about privacy can be sent to{" "}
          <a href="mailto:privacy@chronicleatlas.app">privacy@chronicleatlas.app</a>.
        </p>
      </section>

      <section>
        <h2>2. Information we may collect</h2>
        <h3>Account and sign-up information</h3>
        <p>
          If you create an account, we may collect your email address, an
          internal user identifier and authentication records. Authentication is
          expected to be provided by Supabase. Chronicle Atlas does not receive
          or store your password in readable form.
        </p>
        <h3>Progress and preferences</h3>
        <p>
          We may store course progress, completed lessons, saved chronicle cards,
          reading history, notification preferences and other settings so your
          experience can continue across sessions or supported devices.
        </p>
        <h3>Subscription information</h3>
        <p>
          Subscriptions are expected to be processed by Apple through the App
          Store and managed in the app through RevenueCat. We may receive a
          subscription status, product identifier, transaction reference and
          entitlement information. We do not receive your full payment-card
          details.
        </p>
        <h3>Support correspondence</h3>
        <p>
          If you contact us, we receive the information you include in your
          email, such as your contact details, message, relevant screenshots and
          any diagnostic information you choose to provide.
        </p>
        <h3>Notifications</h3>
        <p>
          If you enable notifications, the app may process a device notification
          token and your notification preferences to deliver the alerts you
          select. You can change notification permissions in iOS Settings.
        </p>
      </section>

      <section>
        <h2>3. Analytics and diagnostics</h2>
        <p>
          Analytics should only be described here if they are present in the
          released app. If Chronicle Atlas enables an analytics or crash-reporting
          service, this policy must be updated before launch to name the provider,
          explain what it collects, identify the purpose and describe any
          available controls. This draft does not assume that analytics are in
          use.
        </p>
        <p>
          Apple may independently provide aggregated App Store or device
          diagnostics subject to Apple’s settings and privacy terms.
        </p>
      </section>

      <section>
        <h2>4. How we use information</h2>
        <p>We may use personal information to:</p>
        <ul>
          <li>create, secure and maintain your account;</li>
          <li>save and synchronise your progress and preferences;</li>
          <li>confirm Premium access and help restore purchases;</li>
          <li>send requested notifications;</li>
          <li>answer support requests and investigate problems;</li>
          <li>protect the app, our users and our legal rights; and</li>
          <li>comply with applicable law.</li>
        </ul>
      </section>

      <section>
        <h2>5. Legal bases</h2>
        <p>
          Where UK data protection law applies, we expect to rely on: performance
          of a contract when providing your account and subscription; legitimate
          interests in operating, securing and improving the service; consent
          where required, including for optional notifications; and legal
          obligations where we must retain or disclose information.
        </p>
      </section>

      <section>
        <h2>6. Service providers and sharing</h2>
        <p>
          We may share the minimum necessary information with service providers
          acting on our behalf, including Supabase for authentication and data
          services, RevenueCat for subscription entitlements, Apple for App Store
          billing and notification delivery, and an email provider for support.
          Each provider handles information under its own terms as applicable.
        </p>
        <p>
          We do not sell personal information. We may disclose information if
          required by law, to protect rights or safety, or as part of a corporate
          transaction subject to appropriate safeguards.
        </p>
      </section>

      <section>
        <h2>7. Retention and security</h2>
        <p>
          We intend to keep account and progress data while your account is
          active and for only as long afterwards as reasonably necessary for the
          purposes described above. Support and transaction records may be kept
          longer where needed for legal, accounting, fraud-prevention or dispute
          purposes. Final retention periods should be confirmed before launch.
        </p>
        <p>
          We use reasonable technical and organisational measures designed to
          protect personal information. No digital service can guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2>8. Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, restrict or object to the use of your personal information, and
          to receive a portable copy. You may also withdraw consent where consent
          is the basis for processing.
        </p>
        <p>
          To make a request, email{" "}
          <a href="mailto:privacy@chronicleatlas.app">privacy@chronicleatlas.app</a>.
          We may need to verify your identity. You can also read our{" "}
          <a href="/account-deletion">account deletion instructions</a>. In the
          UK, you may complain to the Information Commissioner’s Office.
        </p>
      </section>

      <section>
        <h2>9. Children</h2>
        <p>
          England 871 is an educational service for a general audience and is
          not intended to collect personal information from children without the
          permissions required by law. The final age position and any parental
          consent process must be confirmed before launch.
        </p>
      </section>

      <section>
        <h2>10. International transfers and changes</h2>
        <p>
          Some providers may process information outside the United Kingdom. We
          will use appropriate transfer safeguards where required. We may update
          this policy as the app, providers or law changes and will publish the
          revised date on this page.
        </p>
      </section>
    </LegalPage>
  );
}
