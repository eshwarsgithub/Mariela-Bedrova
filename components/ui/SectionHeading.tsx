import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={centered ? "text-center" : ""}>
      {/* Eyebrow — JetBrains Mono, cyan, rectangular per Auralis spec */}
      <div className={`mb-5 ${centered ? "flex justify-center" : ""}`}>
        <span className="eyebrow-badge">
          <span className="glow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      </div>
      <h2
        className="font-display leading-[1.08] mb-5"
        style={{
          fontWeight: 500,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          letterSpacing: "-0.025em",
          color: "var(--c-ink)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
          style={{ color: "#8B92A5" }}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
