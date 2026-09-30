import { AppStoreButton } from "./AppStoreButton";
import { premiumBillingDisclosure, premiumPricing } from "@/lib/pricing";
export function PricingPanel() {
  return (
    <div className="pricing-panel compact-pricing">
      <article className="pricing-card" data-reveal>
        <p className="eyebrow">Free to download</p>
        <h3>A first step into the past.</h3>
        <p>
          Begin with the free selection of stories and discover the way England
          871 brings history together.
        </p>
        <p className="access-note">
          <span aria-hidden="true">✓</span> Selected content. No subscription
          needed to start.
        </p>
      </article>
      <article className="pricing-card pricing-card-premium" data-reveal>
        <p className="eyebrow">England 871 Premium</p>
        <h3>Let your curiosity lead.</h3>
        <p>
          Unlock the full story library and complete historical Series. Monthly
          and annual plans include the same Premium access.
        </p>
        <p className="compact-price">
          <strong>{premiumPricing.monthlyPrice}</strong> / month <span>or</span>{" "}
          <strong>{premiumPricing.annualPrice}</strong> / year
        </p>
        <AppStoreButton
          label="Explore England 871"
          placement="feature-section"
        />
        <small>{premiumBillingDisclosure}</small>
      </article>
    </div>
  );
}
