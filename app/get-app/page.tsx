import { AppIcon } from "@/components/AppIcon";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Get England 871",
  description:
    "Open England 871 on the App Store and explore medieval England from Alfred the Great to Richard II.",
  path: "/get-app",
});

export default function GetAppPage() {
  return (
    <section className="get-app-page">
      <div className="site-container get-app-inner">
        <div className="get-app-card">
          <AppIcon className="get-app-icon" priority />
          <p className="eyebrow">Available for iPhone</p>
          <h1>England 871</h1>
          <p className="get-app-description">
            Explore medieval England from 871 to 1399 through illustrated
            Chronicles, connected Series, people, a timeline and an interactive map.
          </p>
          <AppStoreButton label="Open in the App Store" />
          <p className="get-app-safari-note">
            If your in-app browser prevents the App Store from opening, open
            this page in Safari and tap the button again.
          </p>
        </div>
        <Link className="get-app-home-link" href="/">
          Visit Chronicle Atlas
        </Link>
      </div>
    </section>
  );
}
