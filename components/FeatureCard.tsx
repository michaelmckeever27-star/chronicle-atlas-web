import type { ReactNode } from "react";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  symbol?: string;
  featured?: boolean;
};

export function FeatureCard({
  eyebrow,
  title,
  children,
  symbol = "✦",
  featured = false,
}: FeatureCardProps) {
  return (
    <article className={`feature-card${featured ? " feature-card-large" : ""}`}>
      <div className="feature-card-top">
        <span className="feature-symbol" aria-hidden="true">
          {symbol}
        </span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
