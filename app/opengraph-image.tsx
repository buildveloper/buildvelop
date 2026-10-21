import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background: "#07070B",
          color: "#F6F4FF",
          padding: "64px 72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 640,
            height: 640,
            borderRadius: 9999,
            left: -180,
            top: -220,
            background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 9999,
            right: -160,
            bottom: -260,
            background: "radial-gradient(circle, rgba(255,77,157,0.45), transparent 68%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: "linear-gradient(135deg, #8B5CF6, #FF4D9D 50%, #FF8A3D)",
              color: "#0B0710",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            b
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>
              buildveloper
            </span>
            <span style={{ fontSize: 16, color: "#A7A2B8" }}>Christopher John</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              maxWidth: 900,
            }}
          >
            AI software that solves real business problems.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#A7A2B8" }}>
            AI apps · SaaS products · Automations · Systems that work
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12, fontSize: 18, color: "#A7A2B8" }}>
            <span>Abuja, Nigeria</span>
            <span style={{ color: "#FF4D9D" }}>→</span>
            <span>worldwide</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.14)",
              padding: "10px 18px",
              fontSize: 18,
              color: "#F6F4FF",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 9999, background: "#3DF58B" }} />
            Taking new projects
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
