import { AppStoreButton } from "./AppStoreButton";
import { premiumBillingDisclosure, premiumPricing } from "@/lib/pricing";

export function PricingPanel() {
  return (
    <div className="pricing-panel">
      <article className="pricing-card pricing-card-free">
        <p className="eyebrow">Free to download</p>
        <h3>Begin with selected stories.</h3>
        <p className="price-line"><strong>£0</strong> to start</p>
        <ul>
          <li>A selected Chronicle from the archive</li>
          <li>Selected people, places and reference entries</li>
          <li>Stories chosen to introduce the wider timeline</li>
          <li>Local progress with no account required</li>
        </ul>
      </article>
      <article className="pricing-card pricing-card-premium">
        <p className="eyebrow eyebrow-gold">England 871 Premium</p>
        <h3>Choose how you subscribe.</h3>
        <p className="premium-equal-access">Both plans include the same Premium access.</p>
        <div className="premium-options" aria-label="England 871 Premium subscription options">
          <div className="premium-option">
            <div>
              <strong>Monthly</strong>
              <span>Billed monthly</span>
            </div>
            <b>{premiumPricing.monthlyPrice} <small>/ month</small></b>
          </div>
          <div className="premium-option premium-option-annual">
            <div>
              {premiumPricing.hasAnnualSaving && (
                <span className="premium-saving-badge">Save {premiumPricing.annualSavingPercent}%</span>
              )}
              <strong>Annual</strong>
              <span>Billed yearly</span>
            </div>
            <b>{premiumPricing.annualPrice} <small>/ year</small></b>
          </div>
        </div>
        {premiumPricing.hasAnnualSaving && (
          <p className="premium-saving-copy">
            Save {premiumPricing.annualSavingPrice} compared with 12 monthly payments.
          </p>
        )}
        <ul>
          <li>On-demand choice across the Premium story library</li>
          <li>Complete historical Series and connected reading paths</li>
          <li>Deeper exploration across people, timeline and map</li>
          <li>Manage and restore through the App Store</li>
        </ul>
        <AppStoreButton light label="Get England 871" />
        <small>{premiumBillingDisclosure}</small>
      </article>
    </div>
  );
}
