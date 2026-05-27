"use client";

import { AI_TOOLS } from "@/lib/data";

const TOOL_COLORS = [
  "#4F46E5", "#6366F1", "#818CF8", "#A5B4FC",
  "#06B6D4", "#22D3EE", "#67E8F9", "#A78BFA",
  "#4F46E5", "#6366F1", "#06B6D4", "#22D3EE",
  "#818CF8", "#67E8F9",
];

function ToolPill({ name, index }: { name: string; index: number }) {
  const color = TOOL_COLORS[index % TOOL_COLORS.length];
  return (
    <div
      className="group relative flex items-center gap-3 shrink-0 mx-2.5 px-5 py-3 rounded-xl cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(8px)",
        transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = `${color}14`;
        el.style.borderColor = `${color}55`;
        el.style.boxShadow = `0 0 20px ${color}22`;
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.borderColor = "rgba(255,255,255,0.09)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Colored initial badge */}
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-bold font-mono"
        style={{
          background: `linear-gradient(135deg, ${color}30, ${color}15)`,
          border: `1px solid ${color}45`,
          color,
        }}
        aria-hidden="true"
      >
        {name[0]}
      </div>

      {/* Tool name */}
      <span
        className="text-sm font-medium whitespace-nowrap"
        style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--f-sans)", letterSpacing: "0.01em" }}
      >
        {name}
      </span>

      {/* Hover glow dot */}
      <div
        className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
        style={{ background: color }}
        aria-hidden="true"
      />
    </div>
  );
}

const doubled = [...AI_TOOLS, ...AI_TOOLS];

export default function AIToolsSection() {
  return (
    <section
      id="tools"
      className="relative z-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #07060f 0%, #0b0a16 50%, #07060f 100%)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* Top & bottom fade to blend with surrounding sections */}
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #07060f, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #07060f, transparent)" }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span
            className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase px-4 py-2 rounded-full"
            style={{
              color: "#818CF8",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.22)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#06B6D4", boxShadow: "0 0 6px #06B6D4" }}
              aria-hidden="true"
            />
            My Toolkit
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="font-display leading-[1.06]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            Built With the{" "}
            <span
              style={{
                background: "linear-gradient(120deg, #6366F1 0%, #818CF8 40%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frontier Stack
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p
          className="text-center max-w-xl mx-auto text-base leading-relaxed mb-16"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          The most powerful AI tools available — so you get results that aren&rsquo;t possible any other way.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="relative pb-20">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(90deg, #07060f, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(270deg, #07060f, transparent)" }}
          aria-hidden="true"
        />

        {/* Row 1 — left */}
        <div className="flex overflow-hidden mb-4" aria-label="AI tools I use">
          <div className="flex animate-marquee pause-on-hover">
            {doubled.map((tool, i) => (
              <ToolPill key={`r1-${i}`} name={tool.name} index={i} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex overflow-hidden mb-4" aria-hidden="true">
          <div className="flex animate-marquee-rev pause-on-hover">
            {doubled.map((tool, i) => (
              <ToolPill key={`r2-${i}`} name={tool.name} index={doubled.length - i} />
            ))}
          </div>
        </div>

        {/* Row 3 — left (offset) */}
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee pause-on-hover" style={{ animationDuration: "50s" }}>
            {doubled.map((tool, i) => (
              <ToolPill key={`r3-${i}`} name={tool.name} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
