import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const productLinks = [
  { href: "/#tour", label: "Inside the app" },
  { href: "/#sample", label: "Try a Chronicle" },
  { href: "/england-871", label: "England 871" },
];

const companyLinks = [
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms-of-use", label: "Terms of use" },
  { href: "/account-deletion", label: "Data deletion" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Chronicle Atlas home">
            <BrandLogo />
          </Link>
          <p>History, vividly told—one connected story at a time.</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <ul>
            {productLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-heading">Company</p>
          <ul>
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-note">
          <p className="footer-heading">Chronicle Atlas Ltd</p>
          <p>
            Publisher of England 871, an immersive history app covering medieval
            England from 871 to 1399.
          </p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Chronicle Atlas Ltd.</p>
        <p>England 871 · available for iPhone</p>
      </div>
    </footer>
  );
}
