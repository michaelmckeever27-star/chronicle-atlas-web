import Image from "next/image";
import appIcon from "@/public/brand/england-871-app-icon.webp";

export function AppIcon({ className = "", decorative = false, priority = false }: {
  className?: string;
  decorative?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src={appIcon}
      alt={decorative ? "" : "England 871 app icon: yellow crown and 871 on cobalt"}
      className={`app-icon ${className}`.trim()}
      priority={priority}
      unoptimized
    />
  );
}
