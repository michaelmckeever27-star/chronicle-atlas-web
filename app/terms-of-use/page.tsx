import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Draft terms governing use of Chronicle Atlas and England 871, including App Store subscriptions, educational content and acceptable use.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The proposed terms for using England 871, Chronicle Atlas accounts and Premium content."
      draft
    >
      <section>
        <h2>1. About these terms</h2>
        <p>
          These terms form an agreement between you and Chronicle Atlas Ltd
          (“Chronicle Atlas”, “we”, “us” or “our”) when you access England 871,
          our immersive history app covering medieval England from 871 to 1399,
          our website or another service that links to them. By using the service,
          you agree to these terms. If you do not agree, do not use the service.
        </p>
      </section>

      <section>
        <h2>2. Accounts</h2>
        <p>
          You must provide accurate information, keep access to your account
          secure and notify us promptly if you believe it has been compromised.
          You are responsible for activity carried out through your account,
          except where the law provides otherwise.
        </p>
      </section>

      <section>
        <h2>3. Free access and Premium</h2>
        <p>
          England 871 may include free content and optional Premium content. The
          expected Premium offering is an annual auto-renewing subscription. The
          price and subscription period shown in the App Store purchase screen
          at the time of purchase will apply.
        </p>
        <p>
          Payment is charged to your Apple ID through the App Store. Unless you
          cancel, Apple may renew the subscription automatically in accordance
          with the terms shown when you subscribe. You can manage or cancel your
          subscription through your Apple account settings. Deleting the app or
          your Chronicle Atlas account does not by itself cancel an App Store
          subscription.
        </p>
        <p>
          Refunds, billing disputes and changes to payment details are handled by
          Apple under its policies. Where available, “Restore Purchases” can be
          used to recover an active entitlement associated with your Apple ID.
        </p>
      </section>

      <section>
        <h2>4. Educational content and historical interpretation</h2>
        <p>
          Chronicle Atlas is provided for general educational and personal use.
          It is not academic, legal or professional advice. Historical knowledge
          is incomplete and interpretations can differ. We aim for accuracy and
          transparency, but do not guarantee that content is comprehensive,
          error-free or the only reasonable interpretation of the evidence.
        </p>
        <p>
          Dates, maps, reconstructions and narrative details may involve
          scholarly judgement. We may revise content as research develops or
          mistakes are identified.
        </p>
      </section>

      <section>
        <h2>5. Licence and intellectual property</h2>
        <p>
          Subject to these terms, we give you a limited, personal,
          non-exclusive, non-transferable and revocable right to use the service
          for non-commercial educational and entertainment purposes. Chronicle
          Atlas and its licensors retain all rights in the app, writing, design,
          artwork, software, branding, maps and other content.
        </p>
        <p>
          You may not copy, republish, sell, scrape, reverse engineer, bypass
          access controls or create a competing dataset from the service, except
          where applicable law expressly permits it.
        </p>
      </section>

      <section>
        <h2>6. Acceptable use</h2>
        <p>
          You must not misuse the service, interfere with its operation, attempt
          unauthorised access, introduce malicious code, use it unlawfully or
          infringe another person’s rights. We may suspend or terminate access
          where reasonably necessary to protect the service, other users or our
          rights.
        </p>
      </section>

      <section>
        <h2>7. Availability and changes</h2>
        <p>
          We may update, add or remove features and content. We do not promise
          uninterrupted or permanent availability. If a paid service changes
          materially, any rights or remedies required by consumer law remain
          unaffected.
        </p>
      </section>

      <section>
        <h2>8. Liability</h2>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be
          excluded, including liability for death or personal injury caused by
          negligence, fraud, or your mandatory consumer rights. To the extent
          permitted by law, we are not responsible for losses that were not
          reasonably foreseeable, for business losses arising from personal use,
          or for matters outside our reasonable control.
        </p>
      </section>

      <section>
        <h2>9. Ending use and deleting an account</h2>
        <p>
          You may stop using the service at any time and request account deletion
          using our <a href="/account-deletion">account deletion process</a>.
          Provisions intended to continue—such as intellectual property,
          liability and dispute terms—will survive termination.
        </p>
      </section>

      <section>
        <h2>10. Governing law and contact</h2>
        <p>
          These terms are expected to be governed by the laws of England and
          Wales, with any mandatory rights you have in your home country
          preserved. The appropriate courts and dispute wording should be
          confirmed during legal review.
        </p>
        <p>
          Questions can be sent to{" "}
          <a href="mailto:legal@chronicleatlas.app">legal@chronicleatlas.app</a>.
        </p>
      </section>
    </LegalPage>
  );
}
