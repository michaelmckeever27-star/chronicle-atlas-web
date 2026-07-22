import Image from "next/image";
import type { CSSProperties } from "react";

type StatusBarTheme = "light" | "dark";

type ScreenCanvasProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  screenshotHasStatusBar?: boolean;
  statusBarTheme?: StatusBarTheme;
  screenBackground?: string;
  statusBarBackground?: string;
  time?: string;
};

type IPhoneMockupProps = ScreenCanvasProps & {
  className?: string;
};

function StatusBar({ time }: { time: string }) {
  return (
    <div className="iphone-status-bar" aria-hidden="true">
      <span className="iphone-status-time">{time}</span>
      <span className="iphone-dynamic-island" />
      <span className="iphone-status-icons">
        <span className="iphone-signal">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="iphone-wifi" />
        <span className="iphone-battery"><i /></span>
      </span>
    </div>
  );
}

export function ScreenCanvas({
  src,
  alt,
  sizes,
  priority = false,
  screenshotHasStatusBar = false,
  statusBarTheme = "light",
  screenBackground = "#eef2f5",
  statusBarBackground = screenBackground,
  time = "9:41",
}: ScreenCanvasProps) {
  const canvasStyle = {
    "--screen-canvas-background": screenBackground,
    "--screen-status-background": statusBarBackground,
  } as CSSProperties;

  return (
    <div
      className={`iphone-screen screen-canvas iphone-screen-${statusBarTheme} ${
        screenshotHasStatusBar
          ? "screen-canvas-native-status"
          : "screen-canvas-synthetic-status"
      }`}
      style={canvasStyle}
    >
      {!screenshotHasStatusBar && <StatusBar time={time} />}
      <div className="screen-canvas-image">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="app-screen-image"
          priority={priority}
        />
      </div>
    </div>
  );
}

export function IPhoneMockup({
  className = "",
  ...screenProps
}: IPhoneMockupProps) {
  return (
    <div className={`iphone-mockup ${className}`.trim()}>
      <span className="iphone-side-button iphone-mute-button" aria-hidden="true" />
      <span className="iphone-side-button iphone-volume-up" aria-hidden="true" />
      <span className="iphone-side-button iphone-volume-down" aria-hidden="true" />
      <span className="iphone-side-button iphone-power-button" aria-hidden="true" />

      <div className="iphone-device-shell">
        <ScreenCanvas {...screenProps} />
      </div>
    </div>
  );
}
