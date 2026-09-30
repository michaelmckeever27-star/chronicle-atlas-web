import { AppIcon } from "./AppIcon";
import { AppStoreButton } from "./AppStoreButton";
export function DownloadSection() {
  return (
    <section className="section final-cta-section">
      <div className="brand-ribbon ribbon-final" aria-hidden="true" />
      <div className="site-container final-cta" data-reveal>
        <div>
          <div className="download-identity">
            <AppIcon decorative />
            <p className="eyebrow">England 871 · for iPhone</p>
          </div>
          <h2>
            Find your way
            <br />
            <span>into the past.</span>
          </h2>
          <p>
            A story to read. A world to explore. Make time for a little history.
          </p>
        </div>
        <div className="final-cta-actions">
          <AppStoreButton placement="final-cta" />
          <p>Free to download · Optional Premium</p>
          <a href="/england-871">
            More about England 871 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
