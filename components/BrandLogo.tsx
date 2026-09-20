import Image from "next/image";
import companyLogo from "@/public/brand/chronicle-atlas-logo.webp";
import companySymbol from "@/public/brand/chronicle-atlas-symbol.png";

type BrandLogoProps = {
  symbolOnly?: boolean;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  symbolOnly = false,
  className = "",
  decorative = false,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={`brand-logo${symbolOnly ? " brand-logo-symbol" : ""} ${className}`.trim()}>
      <Image
        src={symbolOnly ? companySymbol : companyLogo}
        alt={decorative ? "" : symbolOnly ? "Chronicle Atlas CA monogram" : "Chronicle Atlas"}
        className={symbolOnly ? "company-symbol" : "company-logo"}
        priority={priority}
        unoptimized
      />
    </span>
  );
}
