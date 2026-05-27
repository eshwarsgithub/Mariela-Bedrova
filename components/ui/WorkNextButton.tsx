"use client";

export default function WorkNextButton() {
  function handleNext() {
    const track = document.querySelector<HTMLElement>(".work__track");
    const card  = document.querySelector<HTMLElement>(".work-card");
    if (!track || !card) return;

    const gap  = parseFloat(getComputedStyle(track).gap) || 60;
    const step = card.offsetWidth + gap;

    const lenis = (window as Record<string, unknown>).__lenis as { scrollTo: (target: number, opts: Record<string, unknown>) => void } | undefined;
    if (lenis) {
      lenis.scrollTo(window.scrollY + step, { duration: 0.8, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    } else {
      window.scrollBy({ top: step, behavior: "smooth" });
    }
  }

  return (
    <button
      className="work__next-btn"
      onClick={handleNext}
      aria-label="Next project"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
