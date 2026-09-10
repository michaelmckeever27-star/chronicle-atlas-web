import { AppStoreButton } from "./AppStoreButton";

export function PricingPanel() {
  return (
    <div className="pricing-panel">
      <article className="pricing-card pricing-card-free">
        <p className="eyebrow">Free to download</p>
        <h3>Begin with a complete story.</h3>
        <p className="price-line"><strong>£0</strong> to start</p>
        <ul>
          <li>A complete Daily Chronicle</li>
          <li>Alfred and his family: six free episodes</li>
          <li>Selected people, places and reference stories</li>
          <li>Local progress with no account required</li>
        </ul>
      </article>
      <article className="pricing-card pricing-card-premium">
        <p className="eyebrow eyebrow-gold">England 871 Premium</p>
        <h3>Follow the whole story.</h3>
        <p className="price-line"><strong>£19.99</strong> per year in the UK</p>
        <ul>
          <li>The full 72-story Chronicle archive</li>
          <li>The remaining complete royal series</li>
          <li>Deeper courses, maps and interactive campaigns</li>
          <li>Manage and restore through the App Store</li>
        </ul>
        <AppStoreButton light />
        <small>Local App Store pricing may vary. Purchase in the iPhone app.</small>
      </article>
    </div>
  );
}
