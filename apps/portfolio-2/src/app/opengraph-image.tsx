import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = `${DATA.name} - ${DATA.role} | ${DATA.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const topSkills = [...DATA.skills.backend.slice(0, 4), ...DATA.skills.frontend.slice(0, 3)];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0B0C0E",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow circle */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 169, 77, 0.15) 0%, rgba(11, 12, 14, 0) 70%)",
          }}
        />

        {/* LEFT COLUMN */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "680px",
            zIndex: 10,
          }}
        >
          {/* Availability Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              borderRadius: "9999px",
              border: "1px solid rgba(52, 211, 153, 0.3)",
              backgroundColor: "rgba(52, 211, 153, 0.1)",
              width: "fit-content",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#34D399",
                boxShadow: "0 0 10px #34D399",
              }}
            />
            <span
              style={{
                color: "#34D399",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              {DATA.availability}
            </span>
          </div>

          {/* Name & Title */}
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#F2F0EA",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            {DATA.name}
          </h1>

          <p
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#FFA94D",
              margin: 0,
              marginBottom: "20px",
            }}
          >
            {DATA.role}
          </p>

          <p
            style={{
              fontSize: "20px",
              color: "#9A9691",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: "32px",
            }}
          >
            {DATA.tagline} {DATA.bio}
          </p>

          {/* Tech stack tags derived centrally from DATA */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {topSkills.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  backgroundColor: "#131417",
                  border: "1px solid #232428",
                  color: "#F2F0EA",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - MACOS BROWSER CARD PREVIEW */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "360px",
            backgroundColor: "#16171B",
            borderRadius: "16px",
            border: "1px solid #232428",
            padding: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            zIndex: 10,
          }}
        >
          {/* Traffic dots & Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
              borderBottom: "1px solid #232428",
              paddingBottom: "14px",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
            </div>
            <div
              style={{
                color: "#34D399",
                fontSize: "12px",
                fontWeight: 600,
                backgroundColor: "rgba(52, 211, 153, 0.1)",
                padding: "2px 8px",
                borderRadius: "4px",
                border: "1px solid rgba(52, 211, 153, 0.2)",
              }}
            >
              ● 200 OK
            </div>
          </div>

          {/* Metric Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px",
                backgroundColor: "#131417",
                borderRadius: "8px",
                border: "1px solid #1B1C20",
              }}
            >
              <span style={{ color: "#66625D", fontSize: "12px" }}>RECOMMENDATIONS API</span>
              <span style={{ color: "#34D399", fontSize: "12px", fontWeight: 700 }}>P95: &lt;100ms</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px",
                backgroundColor: "#131417",
                borderRadius: "8px",
                border: "1px solid #1B1C20",
              }}
            >
              <span style={{ color: "#66625D", fontSize: "12px" }}>INFRA LATENCY</span>
              <span style={{ color: "#FFA94D", fontSize: "12px", fontWeight: 700 }}>P99: 4.2ms</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px",
                backgroundColor: "#131417",
                borderRadius: "8px",
                border: "1px solid #1B1C20",
              }}
            >
              <span style={{ color: "#66625D", fontSize: "12px" }}>SYSTEM UPTIME</span>
              <span style={{ color: "#34D399", fontSize: "12px", fontWeight: 700 }}>99.98%</span>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              paddingTop: "14px",
              borderTop: "1px solid #232428",
              color: "#FFA94D",
              fontSize: "14px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{DATA.url.replace('https://', '')}</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
