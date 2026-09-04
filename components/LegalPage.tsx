import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  lastUpdated: string;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
  lastUpdated,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="legal-section section">
        <div className="site-container legal-grid">
          <aside className="legal-aside">
            <p className="eyebrow">Document status</p>
            <p>Last updated {lastUpdated}</p>
          </aside>
          <article className="legal-content">{children}</article>
        </div>
      </section>
    </>
  );
}
