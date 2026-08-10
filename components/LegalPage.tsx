import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  draft?: boolean;
  lastUpdated?: string;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
  draft = false,
  lastUpdated = "22 July 2026",
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="legal-section section">
        <div className="site-container legal-grid">
          <aside className="legal-aside">
            <p className="eyebrow">Document status</p>
            <p>Last updated {lastUpdated}</p>
            {draft && <span className="status-label">Draft for review</span>}
          </aside>
          <article className="legal-content">
            {draft && (
              <div className="draft-notice">
                <strong>Pre-launch draft.</strong> This document is provided as
                a practical starting point and should be reviewed by a qualified
                legal professional before the app or website launches.
              </div>
            )}
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
