import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-texture" aria-hidden="true" />
      <div className="site-container page-hero-inner">
        <p className="eyebrow eyebrow-gold">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
        {children}
      </div>
    </section>
  );
}
