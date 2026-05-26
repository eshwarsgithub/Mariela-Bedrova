"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

const CARD_ACCENTS = ["#4F46E5", "#6366F1", "#06B6D4"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 section-py">
      <div className="section-container">
        <SectionHeading
          eyebrow="Client Results"
          title={
            <>
              Real People,{" "}
              <span className="text-gradient">Real Outcomes</span>
            </>
          }
          subtitle="Don't take my word for it — here's what clients say after working with me."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative rounded-lg p-7 flex flex-col group"
              style={{
                background: "#111116",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${CARD_ACCENTS[i]}40`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px rgba(0,0,0,0.5)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Top colored accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-px rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${CARD_ACCENTS[i]}, transparent)` }}
                aria-hidden="true"
              />

              {/* Stars */}
              <div
                className="flex gap-0.5 mb-4"
                role="img"
                aria-label={`${t.stars} out of 5 stars`}
              >
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5" fill="#EAB308" color="#EAB308" aria-hidden="true" />
                ))}
              </div>

              {/* Highlight badge */}
              <span className="eyebrow-badge mb-5 self-start">{t.highlight}</span>

              {/* Quote */}
              <blockquote
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "#8B92A5" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold text-white font-display shrink-0`}
                  style={{ background: `linear-gradient(135deg, ${CARD_ACCENTS[i]}, ${CARD_ACCENTS[i]}90)` }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white font-display">{t.name}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: "#4B5563" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
