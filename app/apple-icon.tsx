import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#111111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#C9A052",
            fontSize: 120,
            fontWeight: 700,
            fontFamily: "serif",
            lineHeight: 1,
            marginTop: 4,
          }}
        >
          O
        </span>
      </div>
    ),
    { ...size }
  );
}
