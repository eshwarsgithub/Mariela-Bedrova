import Image from "next/image";
import { SITE_META } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="prologue" className="chapter hero" data-chapter="I" data-screen-label="01 Prologue">

      {/* Meta row */}
      <div className="hero__meta">
        <div className="hero__meta-block">
          <span>Portfolio</span>
          <strong>Volume 01 · MMXXVI</strong>
        </div>
        <div className="hero__meta-block">
          <span>Filed under</span>
          <strong>AI · Automation · Rapid MVPs</strong>
        </div>
        <div className="hero__meta-block right">
          <span>From</span>
          <strong>{SITE_META.location}</strong>
        </div>
      </div>

      {/* Title + portrait side by side */}
      <div
        className="hero__content-row"
        style={{
          alignSelf: "center",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "clamp(32px, 5vw, 72px)",
          margin: "clamp(16px, 3vh, 32px) 0",
        }}
      >
        <h1 className="hero__title" style={{ margin: 0, flex: 1 }}>
          <span className="line"><span>Mariela</span></span>
          <span className="line"><span>builds <em>practical</em> AI</span></span>
          <span className="line"><span>for people who need it <span className="amp">&amp;</span> ship.</span></span>
        </h1>

        <div
          className="hero__portrait-img"
          style={{
            position: "relative",
            width: "clamp(160px, 20vw, 280px)",
            height: "clamp(160px, 20vw, 280px)",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: "0 0 0 3px #8b5cf6, 0 0 0 8px rgba(139,92,246,0.12), 0 20px 56px rgba(139,92,246,0.25)",
          }}
        >
          <Image
            src="/mariela-bedrova.jpg"
            alt="Mariela Bedrova"
            fill
            priority
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 220px, 280px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="hero__foot">
        <p className="hero__lede">
          <strong>Entrepreneur, vibe-coder, CEO.</strong>{" "}
          {SITE_META.lede}
        </p>
        <div className="hero__scroll">
          <span>Begin the story</span>
          <span className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

    </section>
  );
}
