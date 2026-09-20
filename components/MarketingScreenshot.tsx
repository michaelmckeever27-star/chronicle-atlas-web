import Image from "next/image";
import { screenshots, type ScreenshotName } from "@/lib/screenshots";

export function MarketingScreenshot({
  name,
  priority = false,
  className = "",
}: {
  name: ScreenshotName;
  priority?: boolean;
  className?: string;
}) {
  const screenshot = screenshots[name];
  return (
    <figure className={`marketing-panel ${className}`.trim()}>
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={1320}
        height={2868}
        sizes={priority
          ? "(max-width: 479px) calc(100vw - 40px), (max-width: 767px) 360px, 340px"
          : "(max-width: 479px) calc(100vw - 40px), (max-width: 767px) 360px, (max-width: 1023px) 340px, 380px"}
        priority={priority}
      />
      <figcaption>
        <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size ${name === "home" ? "Today" : name} screenshot (opens in a new tab)`}>
          View full-size screenshot <span aria-hidden="true">↗</span>
        </a>
      </figcaption>
    </figure>
  );
}
