import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111712",
          border: "3px solid #c7a765",
          color: "#e0c587",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 25,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-1px",
          width: "100%",
        }}
      >
        CA
      </div>
    ),
    size,
  );
}
