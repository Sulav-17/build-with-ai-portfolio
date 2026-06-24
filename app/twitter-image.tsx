import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#020617",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "6px",
            background: "#38bdf8",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "40px", fontWeight: 700 }}>
            Sulav Baral
          </div>
          <div style={{ fontSize: "70px", fontWeight: 700 }}>
            AI Engineer & Software Developer
          </div>
          <div style={{ color: "#cbd5e1", fontSize: "34px" }}>
            Applied AI • Data • Automation • Backend
          </div>
        </div>
        <div style={{ color: "#94a3b8", fontSize: "28px" }}>
          Practical systems across AI, data, automation, and backend work.
        </div>
      </div>
    ),
    size,
  );
}
