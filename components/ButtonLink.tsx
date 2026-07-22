import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classNames = `button button-${variant} ${className}`.trim();

  if (external) {
    return (
      <a className={classNames} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href}>
      {children}
    </Link>
  );
}
