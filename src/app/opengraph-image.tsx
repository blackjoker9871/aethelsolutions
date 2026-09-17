import { ImageResponse } from "next/og";

export const alt = "Aethel Solutions — AI Engineering & Business Systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F7F6F2",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Violet Ambient Glow */}
        <div
          style={{
            position: "absolute",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109, 74, 255, 0.12) 0%, rgba(247, 246, 242, 0) 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top Bar: Eyebrow + Status */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #EEEAFF",
              boxShadow: "0 2px 8px rgba(23, 21, 47, 0.04)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#6D4AFF",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                color: "#6D4AFF",
                textTransform: "uppercase",
              }}
            >
              AETHELSOLUTIONS PRIVATE LIMITED
            </span>
          </div>

          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#17152F",
              letterSpacing: "0.1em",
              opacity: 0.6,
            }}
          >
            aethelsolution.in
          </div>
        </div>

        {/* Central Brand Statement */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "#6D4AFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(109, 74, 255, 0.35)",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#FFFFFF",
                  transform: "rotate(45deg)",
                  borderRadius: "2px",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "72px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#17152F",
              }}
            >
              AETHEL
            </div>
          </div>

          <div
            style={{
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "0.25em",
              color: "#6D4AFF",
              textTransform: "uppercase",
            }}
          >
            THE NEXT ORDER.
          </div>

          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#17152F",
              opacity: 0.75,
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            AI Engineering • Custom Software • Business Systems • Workflow Automation
          </div>
        </div>

        {/* Bottom Bar: System Nodes */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {["AI SYSTEMS", "AI AUTOMATION", "CUSTOM SOFTWARE", "PROCESS ARCHITECTURE"].map(
            (label) => (
              <div
                key={label}
                style={{
                  padding: "8px 20px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #EEEAFF",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#17152F",
                  opacity: 0.8,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
