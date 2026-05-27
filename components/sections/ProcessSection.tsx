"use client";

import { motion } from "framer-motion";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = { Search, Map, Rocket, TrendingUp };
const STEP_COLORS  = ["#4F46E5", "#6366F1", "#06B6D4", "#22D3EE"];
const STEP_LABELS  = ["Discovery", "Blueprint", "Build Sprint", "Go Live"];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 overflow-hidden"
      style={{ background: "var(--c-paper)" }}
    >
      {/* Top rule */}
      <div className="w-full h-px" style={{ background: "var(--c-line)" }} aria-hidden="true" />

      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "clamp(80px, 12vh, 120px) var(--gutter)",
        }}
      >

        {/* ── Heading ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ marginBottom: "clamp(48px, 8vh, 72px)" }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--c-ink-quiet)",
              }}
            >
              VI · Method
            </span>
            <span
              style={{ height: 1, width: 40, background: "var(--c-line)", flexShrink: 0 }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#4F46E5",
                background: "rgba(79,70,229,0.08)",
                border: "1px solid rgba(79,70,229,0.18)",
                padding: "5px 12px",
                borderRadius: 100,
              }}
            >
              How It Works
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "var(--c-ink)",
              }}
            >
              From Idea to{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(120deg, #4F46E5 0%, #8B5CF6 50%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Launch in Weeks
              </em>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--c-ink-soft)",
                lineHeight: 1.6,
                maxWidth: "38ch",
              }}
            >
              A four-step process that gets from zero to measurable results faster than you&rsquo;d think possible.
            </p>
          </div>
        </motion.div>

        {/* ── Step cards ─────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(14px, 2vw, 24px)",
          }}
        >
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.iconName] ?? Search;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.13, ease: [0.215, 0.61, 0.355, 1] }}
                className="group"
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid var(--c-line)",
                  borderTop: `3px solid ${STEP_COLORS[i]}`,
                  borderRadius: 16,
                  padding: "clamp(24px, 3vw, 36px)",
                  overflow: "hidden",
                  backdropFilter: "blur(12px)",
                  transition: "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.97)";
                  el.style.boxShadow = `0 20px 48px -12px ${STEP_COLORS[i]}22, 0 4px 16px rgba(0,0,0,0.06)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.75)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Watermark number */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -8,
                    right: -4,
                    fontFamily: "var(--f-display)",
                    fontWeight: 700,
                    fontSize: "clamp(80px, 9vw, 120px)",
                    lineHeight: 1,
                    color: STEP_COLORS[i],
                    opacity: 0.055,
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `${STEP_COLORS[i]}10`,
                    border: `1.5px solid ${STEP_COLORS[i]}35`,
                    boxShadow: `0 0 0 5px ${STEP_COLORS[i]}07`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 28,
                    transition: "transform 0.3s ease",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Icon style={{ width: 18, height: 18, color: STEP_COLORS[i] }} aria-hidden="true" />
                </div>

                {/* Step meta */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--f-mono)",
                      fontSize: 9,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: STEP_COLORS[i],
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{ height: 1, width: 18, background: `${STEP_COLORS[i]}50` }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--f-mono)",
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--c-ink-quiet)",
                    }}
                  >
                    {STEP_LABELS[i]}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    color: "var(--c-ink)",
                    marginBottom: 14,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: 32,
                    height: 1,
                    background: `${STEP_COLORS[i]}50`,
                    borderRadius: 1,
                    marginBottom: 14,
                    transition: "width 0.3s ease",
                  }}
                  aria-hidden="true"
                />

                {/* Description */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--c-ink-soft)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px" style={{ background: "var(--c-line)" }} aria-hidden="true" />
    </section>
  );
}
