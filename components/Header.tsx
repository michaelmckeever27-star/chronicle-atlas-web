"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { ENGLAND_871_APP_STORE_URL } from "@/lib/links";

const navigation = [
  { href: "/#tour", label: "Explore the app" },
  { href: "/#stories", label: "What’s inside" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    firstMobileLink.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="brand" href="/" aria-label="Chronicle Atlas home">
          <BrandLogo decorative priority />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a className="nav-download" href={ENGLAND_871_APP_STORE_URL} data-download-placement="navigation">
            Get the app <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a className="mobile-download" href={ENGLAND_871_APP_STORE_URL} data-download-placement="navigation">Get app <span aria-hidden="true">↗</span></a>
        <button
          ref={menuButton}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        aria-label="Mobile navigation"
        className={`mobile-navigation${open ? " mobile-navigation-open" : ""}`}
        id="mobile-navigation"
      >
        <div className="site-container mobile-navigation-inner">
          {navigation.map((item, index) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              ref={index === 0 ? firstMobileLink : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={ENGLAND_871_APP_STORE_URL} data-download-placement="navigation">
            Download for iPhone
          </a>
        </div>
      </nav>
    </header>
  );
}
