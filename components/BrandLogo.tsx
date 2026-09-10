import seal from "@/lib/atlas-seal.json";

type BrandLogoProps = {
  variant?: "primary" | "light" | "monochrome";
  symbolOnly?: boolean;
  className?: string;
};

export function AtlasSealSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`atlas-seal-symbol ${className}`.trim()}
      viewBox={seal.viewBox}
      focusable="false"
    >
      <path
        d={seal.ring}
        fill="none"
        stroke="currentColor"
        strokeLinecap="butt"
        strokeWidth="8"
      />
      <path d={seal.star} fill="currentColor" />
      {seal.panels.map((path) => (
        <path d={path} fill="currentColor" key={path} />
      ))}
    </svg>
  );
}

export function BrandLogo({
  variant = "primary",
  symbolOnly = false,
  className = "",
}: BrandLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={`brand-logo brand-logo-${variant}${
        symbolOnly ? " brand-logo-symbol" : ""
      } ${className}`.trim()}
    >
      <AtlasSealSymbol />
      {!symbolOnly && <span className="brand-logo-wordmark">Chronicle Atlas</span>}
    </span>
  );
}
