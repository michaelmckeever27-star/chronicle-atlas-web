import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing use of Chronicle Atlas and England 871, including local progress, App Store subscriptions, educational content and acceptable use.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The terms for using England 871, the Chronicle Atlas website and Premium content."
      lastUpdated="4 September 2026"
    >
      <section>
        <h2>1. About these terms</h2>
        <p>
          These terms form an agreement between you and Chronicle Atlas Ltd
          (“Chronicle Atlas”, “we”, “us” or “our”) when you access England 871,
          our immersive history app covering medieval England from 871 to 1399,
          this website or another service that links to these terms. By using
          the service, you agree to these terms. If you do not agree, do not use
          the service.
        </p>
      </section>

      <section>
        <h2>2. Local progress and preferences</h2>
        <p>
          England 871 does not currently create user accounts. Reading history,
          bookmarks, achievements, course activity, campaign decisions and
          preferences are stored locally on the iPhone where you use the app.
          They do not synchronise or transfer to another device and may be lost
          if the app is deleted. Chronicle Atlas cannot remotely retrieve or
          restore data held only on your iPhone.
        </p>
      </section>

      <section>
        <h2>3. Free access and Premium</h2>
        <p>
          England 871 includes free content and optional Premium content.
          Premium is offered as an annual auto-renewing subscription. The
          localised price and subscription period shown by Apple on the App
          Store purchase screen at the time of purchase apply.
        </p>
        <p>
          Payment is charged to your Apple ID through the App Store. Unless you
          cancel, Apple renews the subscription automatically in accordance with
          the terms shown when you subscribe. You can manage or cancel your
          subscription through your Apple account settings. Resetting local
          progress or deleting the app does not cancel an App Store subscription.
        </p>
        <p>
          Refunds, billing disputes and changes to payment details are handled
          by Apple under its policies. <strong>Restore Purchases</strong> may
          recover an active Premium entitlement associated with the same Apple
          ID. It does not restore reading history, bookmarks, achievements,
          campaign decisions or other Chronicle progress and preferences stored
          locally on a previous installation or device.
        </p>
      </section>

      <section>
        <h2>4. Educational content and historical interpretation</h2>
        <p>
          Chronicle Atlas is provided for general educational, entertainment
          and personal use. It is not academic, legal or professional advice.
          Historical knowledge is incomplete and interpretations can differ. We
          aim for accuracy and transparency, but do not guarantee that content
          is comprehensive, error-free or the only reasonable interpretation of
          the evidence.
        </p>
        <p>
          Dates, maps, reconstructions, narrative details and interactive
          decisions may involve scholarly judgement. Interactive choices do not
          claim to reproduce private historical conversations exactly. We may
          revise content as research develops or mistakes are identified.
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
          infringe another person’s rights.
        </p>
      </section>

      <section>
        <h2>7. Availability and changes</h2>
        <p>
          We may update, add or remove features and content. We do not promise
          uninterrupted or permanent availability. Core downloaded content is
          designed to remain available offline, while purchases, restoration
          and subscription management require a working connection to Apple and
          RevenueCat. If a paid service changes materially, any rights or
          remedies required by consumer law remain unaffected.
        </p>
      </section>

      <section>
        <h2>8. Consumer rights and liability</h2>
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
        <h2>9. Ending use and removing local data</h2>
        <p>
          You may stop using England 871 at any time. You can remove locally
          stored Chronicle progress through <strong>My Chronicle → Settings →
          Reset local progress</strong>. You may also delete the app, although
          locally stored data may be affected by device and backup behaviour.
          Removing local data or deleting the app does not cancel your App Store
          subscription, which must be managed separately through Apple.
        </p>
      </section>

      <section>
        <h2>10. Governing law and contact</h2>
        <p>
          These terms are governed by the laws of England and Wales. Any
          mandatory consumer rights you have in your home country remain
          preserved.
        </p>
        <p>
          Questions can be sent to{" "}
          <a href="mailto:legal@chronicleatlas.app">legal@chronicleatlas.app</a>.
        </p>
      </section>
    </LegalPage>
  );
}
