import { SITE_META } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="prologue" className="chapter hero" data-chapter="I" data-screen-label="01 Prologue">
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

      <h1 className="hero__title">
        <span className="line"><span>Mariela</span></span>
        <span className="line"><span>builds <em>practical</em> AI</span></span>
        <span className="line"><span>for people who need it <span className="amp">&amp;</span> ship.</span></span>
      </h1>

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
