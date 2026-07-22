export function AppStoreButton({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`app-store-button${light ? " app-store-button-light" : ""}`}
      aria-label="Coming soon on the App Store"
      aria-disabled="true"
      role="button"
    >
      <span className="apple-mark" aria-hidden="true">
        ●
      </span>
      <span>
        <small>Coming soon on the</small>
        App Store
      </span>
    </span>
  );
}
