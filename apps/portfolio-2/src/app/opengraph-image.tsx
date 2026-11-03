import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = `${DATA.name} — ${DATA.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f7f2",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "#c7dfa9",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "#b5d4c0",
            opacity: 0.6,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "10px", zIndex: 10 }}>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid #d9e4d7",
              backgroundColor: "#eef4e9",
              fontSize: "16px",
              fontWeight: 600,
              color: "#235b45",
            }}
          >
            ● {DATA.heroNote}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", zIndex: 10 }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#18221e",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {DATA.headline.start}{" "}
            <span style={{ color: "#235b45" }}>{DATA.headline.highlight}</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#68736c",
              maxWidth: "800px",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {DATA.intro}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "30px",
            borderTop: "1px solid #e4e8df",
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#18221e" }}>
            {DATA.brandName}
            <span style={{ color: "#235b45" }}>.</span>
          </div>
          <div style={{ fontSize: "16px", color: "#68736c" }}>
            {DATA.url.replace(/^https?:\/\//, "")} · {DATA.role}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
