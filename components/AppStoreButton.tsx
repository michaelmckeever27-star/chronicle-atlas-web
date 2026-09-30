import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

export function AppStoreButton({
  light = false,
  label = "Download for iPhone",
  placement = "feature-section",
}: {
  light?: boolean;
  label?: string;
  placement?: "hero" | "navigation" | "feature-section" | "final-cta" | "fallback";
}) {
  return (
    <a
      className={`app-store-button${light ? " app-store-button-light" : ""}`}
      href={ENGLAND_871_APP_STORE_URL}
      data-download-placement={placement}
    >
      <span>{label}</span>
      <span className="button-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
