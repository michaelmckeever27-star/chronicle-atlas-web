import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

export function AppStoreButton({
  light = false,
  label = "Download for iPhone",
}: {
  light?: boolean;
  label?: string;
}) {
  return (
    <a
      className={`app-store-button${light ? " app-store-button-light" : ""}`}
      href={ENGLAND_871_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      <span>{label}</span>
      <span className="button-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
