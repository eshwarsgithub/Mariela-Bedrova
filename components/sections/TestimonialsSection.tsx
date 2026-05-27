"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const ACCENTS = ["#4F46E5", "#8B5CF6", "#06B6D4"];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
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

        {/* ── Cards ─────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(16px, 2.5vw, 28px)",
            alignItems: "start",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.13, ease: [0.215, 0.61, 0.355, 1] }}
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.8)",
                border: "1px solid var(--c-line)",
                borderTop: `3px solid ${ACCENTS[i]}`,
                borderRadius: 16,
                padding: "clamp(24px, 3.5vw, 36px)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, transform 0.2s ease",
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 20px 48px -12px ${ACCENTS[i]}22, 0 4px 16px rgba(0,0,0,0.06)`,
                transition: { duration: 0.22 },
              }}
            >
              {/* Decorative large quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: -8,
                  right: 16,
                  fontFamily: "var(--f-display)",
                  fontSize: 120,
                  lineHeight: 1,
                  color: ACCENTS[i],
                  opacity: 0.07,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars + highlight */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{ display: "flex", gap: 3 }}
                  role="img"
                  aria-label={`${t.stars} out of 5 stars`}
                >
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star
                      key={si}
                      style={{ width: 14, height: 14 }}
                      fill="#F59E0B"
                      color="#F59E0B"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "var(--f-mono)",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: ACCENTS[i],
                    background: `${ACCENTS[i]}10`,
                    border: `1px solid ${ACCENTS[i]}28`,
                    padding: "4px 10px",
                    borderRadius: 100,
                  }}
                >
                  {t.highlight}
                </span>
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "var(--c-ink-soft)",
                  marginBottom: 28,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                style={{ height: 1, background: "var(--c-line)", marginBottom: 20 }}
                aria-hidden="true"
              />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${ACCENTS[i]}, ${ACCENTS[i]}80)`,
                    boxShadow: `0 0 0 3px ${ACCENTS[i]}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--f-display)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    flexShrink: 0,
                    letterSpacing: "0.01em",
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: 15,
                      letterSpacing: "-0.01em",
                      color: "var(--c-ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--f-mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--c-ink-quiet)",
                      marginTop: 3,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px" style={{ background: "var(--c-line)" }} aria-hidden="true" />
    </section>
  );
}
