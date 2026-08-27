import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

export function AppStoreButton({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`app-store-button${light ? " app-store-button-light" : ""}`}
      href={ENGLAND_871_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download England 871 on the App Store (opens in a new tab)"
    >
      <span className="apple-mark" aria-hidden="true">
        ●
      </span>
      <span>
        <small>Download on the</small>
        App Store
      </span>
    </a>
  );
}
