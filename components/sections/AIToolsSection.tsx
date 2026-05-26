"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { AI_TOOLS } from "@/lib/data";

/* Remap all tool colors to Auralis palette spectrum */
const AURALIS_TOOL_COLORS = [
  "#4F46E5", "#6366F1", "#818CF8", "#A5B4FC",
  "#06B6D4", "#22D3EE", "#67E8F9", "#A5F3FC",
  "#4F46E5", "#6366F1", "#06B6D4", "#22D3EE",
  "#818CF8", "#67E8F9",
];

function ToolPill({ name, index }: { name: string; index: number }) {
  const color = AURALIS_TOOL_COLORS[index % AURALIS_TOOL_COLORS.length];
  return (
    <div
      className="group relative rounded flex items-center gap-2.5 shrink-0 mx-2 px-4 py-2.5 cursor-default"
      style={{
        background: "#111116",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}50`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      <div
        className="w-5 h-5 rounded flex items-center justify-center shrink-0 text-[9px] font-bold font-mono"
        style={{ background: `${color}14`, color, border: `1px solid ${color}30` }}
        aria-hidden="true"
      >
        {name[0]}
      </div>
      <span
        className="text-xs font-medium whitespace-nowrap transition-colors duration-150"
        style={{ color: "#8B92A5", fontFamily: "Geist, system-ui, sans-serif" }}
      >
        {name}
      </span>
    </div>
  );
}

const doubled = [...AI_TOOLS, ...AI_TOOLS];

export default function AIToolsSection() {
  return (
    <section id="tools" className="relative z-10 section-py overflow-hidden">
      <div className="section-container mb-14">
        <SectionHeading
          eyebrow="My Toolkit"
          title={
            <>
              Built With the{" "}
              <span className="text-gradient">Frontier Stack</span>
            </>
          }
          subtitle="I work with the most powerful AI tools available — so you get results that aren't possible any other way."
        />
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #030308, transparent)", zIndex: 10 }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #030308, transparent)", zIndex: 10 }}
          aria-hidden="true"
        />

        {/* Row 1 */}
        <div className="flex overflow-hidden mb-3" aria-label="AI tools I use">
          <div className="flex animate-marquee pause-on-hover">
            {doubled.map((tool, i) => (
              <ToolPill key={`r1-${i}`} name={tool.name} index={i} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="flex animate-marquee-rev pause-on-hover">
            {doubled.map((tool, i) => (
              <ToolPill key={`r2-${i}`} name={tool.name} index={doubled.length - i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
