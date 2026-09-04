import Link from "next/link";

const productLinks = [
  { href: "/england-871", label: "England 871" },
  { href: "/support", label: "Support" },
  { href: "/account-deletion", label: "Data deletion" },
];

const companyLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms-of-use", label: "Terms of use" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              CA
            </span>
            <span className="brand-name">Chronicle Atlas</span>
          </Link>
          <p>History, vividly told.</p>
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
            England 871 is an immersive history app covering medieval England
            from 871 to 1399.
          </p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Chronicle Atlas Ltd.</p>
        <p>Made in Britain with a fascination for the past.</p>
      </div>
    </footer>
  );
}
