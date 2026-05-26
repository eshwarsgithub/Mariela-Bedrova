"use client";

import { motion } from "framer-motion";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = { Search, Map, Rocket, TrendingUp };
const STEP_COLORS = ["#4F46E5", "#6366F1", "#06B6D4", "#22D3EE"];

export default function ProcessSection() {
  return (
    <section id="process" className="relative z-10 section-py">
      <div className="section-container">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From Idea to{" "}
              <span className="text-gradient">Launch in Weeks</span>
            </>
          }
          subtitle="A proven 4-step process that gets from zero to measurable results faster than you'd think possible."
        />

        <div className="mt-14 relative">
          {/* Connecting gradient line — desktop */}
          <div
            className="hidden lg:block absolute h-px"
            style={{
              top: "3.25rem",
              left: "12.5%",
              right: "12.5%",
              background: "linear-gradient(90deg, #4F46E5, #6366F1, #06B6D4, #22D3EE)",
              opacity: 0.25,
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.iconName] ?? Search;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="relative rounded-lg p-7 text-center group"
                  style={{
                    background: "#111116",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${STEP_COLORS[i]}40`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 36px rgba(0,0,0,0.4)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Step number */}
                  <div
                    className="font-mono text-[9px] font-semibold tracking-[0.2em] uppercase mb-4"
                    style={{ color: "rgba(255,255,255,0.12)" }}
                  >
                    {step.number}
                  </div>

                  {/* Icon box */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-5 relative z-10 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${STEP_COLORS[i]}40`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: STEP_COLORS[i] }} aria-hidden="true" />
                  </div>

                  <h3
                    className="text-sm font-semibold text-white mb-2.5 font-display"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#8B92A5" }}>
                    {step.description}
                  </p>

                  {/* Bottom accent on hover */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-px rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${STEP_COLORS[i]}, transparent)` }}
                    aria-hidden="true"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
