import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="site-container not-found-inner">
        <p className="eyebrow eyebrow-gold">404 · Lost to the chronicle</p>
        <h1>This page has slipped out of history.</h1>
        <p>The record you were looking for could not be found.</p>
        <ButtonLink href="/" variant="light">Return to the atlas</ButtonLink>
      </div>
    </section>
  );
}
