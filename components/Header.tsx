import Link from "next/link";

const navigation = [
  { href: "/england-871", label: "England 871" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="brand" href="/" aria-label="Chronicle Atlas home">
          <span className="brand-mark" aria-hidden="true">
            CA
          </span>
          <span className="brand-name">Chronicle Atlas</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-feature" href="/england-871#app-store">
            The app
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/england-871#app-store">The app</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
