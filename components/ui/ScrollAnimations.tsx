"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    let cleanup: (() => void) | null = null;

    (async () => {
      const [{ default: Lenis }, gsapModule, scrollTriggerModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      const { gsap } = gsapModule;
      const { ScrollTrigger } = scrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.4,
        wheelMultiplier: 1.0,
      });

      (window as unknown as Record<string, unknown>).__lenis = lenis;

      let rafId: number;
      function rafLoop(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(rafLoop);
      }
      rafId = requestAnimationFrame(rafLoop);

      lenis.on("scroll", () => ScrollTrigger.update());
      gsap.ticker.add((time: number) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // ── Magnetic buttons ──────────────────────────────────
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const strength = parseFloat(el.dataset.magnetic ?? "0.3");
        const onMove = (e: Event) => {
          const pe = e as PointerEvent;
          const r = el.getBoundingClientRect();
          const x = pe.clientX - (r.left + r.width / 2);
          const y = pe.clientY - (r.top  + r.height / 2);
          gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: "power3.out" });
        };
        const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" });
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
      });

      // ── Chips toggle ──────────────────────────────────────
      document.querySelectorAll<HTMLElement>(".chip").forEach((c) => {
        c.addEventListener("click", () => c.classList.toggle("is-on"));
      });

      // ── Form submit ───────────────────────────────────────
      const form = document.querySelector<HTMLFormElement>(".contact__form");
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const btn = form.querySelector<HTMLButtonElement>(".contact__submit");
          if (!btn) return;
          const orig = btn.innerHTML;
          btn.innerHTML = '<span>Sent — talk soon</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12l4 4 10-10"/></svg>';
          (btn as HTMLElement).style.background = "var(--c-violet)";
          setTimeout(() => { btn.innerHTML = orig; (btn as HTMLElement).style.background = ""; form.reset(); }, 2800);
        });
      }

      // ── Active nav/gauge ──────────────────────────────────
      const navLinks = document.querySelectorAll<HTMLElement>(".nav__chapters a, .gauge__item");
      function setActive(id: string) {
        navLinks.forEach((l) => {
          const match = l.getAttribute("href") === "#" + id || (l as HTMLElement).dataset.target === id;
          l.classList.toggle("active", !!match);
        });
      }

      // ── Hero entrance ─────────────────────────────────────
      gsap.set(".hero__title .line span", { yPercent: 110 });
      gsap.set(".hero__meta-block, .hero__lede, .hero__scroll", { opacity: 0, y: 16 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(".hero__meta-block", { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power2.out" })
        .to(".hero__title .line span", { yPercent: 0, duration: 1.2, stagger: 0.08, ease: "expo.out" }, "-=0.3")
        .to(".hero__lede",       { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, "-=0.7")
        .to(".hero__scroll",     { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.5");

      // ── Chapter palette transitions ───────────────────────
      document.querySelectorAll<HTMLElement>("[data-chapter]").forEach((sec) => {
        const id = sec.dataset.chapter!;
        ScrollTrigger.create({
          trigger: sec,
          start: "top 60%",
          end: "bottom 40%",
          onEnter:     () => { (window as Record<string, unknown>).__paintedBg && (window as Record<string, { setChapter: (k: string) => void }>).__paintedBg.setChapter(id); setActive(sec.id); },
          onEnterBack: () => { (window as Record<string, unknown>).__paintedBg && (window as Record<string, { setChapter: (k: string) => void }>).__paintedBg.setChapter(id); setActive(sec.id); },
        });
      });

      // ── Word split reveals (data-split) ───────────────────
      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        const text = el.textContent ?? "";
        el.innerHTML = "";
        text.split(/(\s+)/).forEach((part) => {
          if (/\s+/.test(part)) {
            el.appendChild(document.createTextNode(part));
          } else {
            const wrap = document.createElement("span");
            wrap.style.cssText = "display:inline-block;overflow:hidden;vertical-align:top;";
            const inner = document.createElement("span");
            inner.style.display = "inline-block";
            inner.textContent = part;
            inner.classList.add("word");
            wrap.appendChild(inner);
            el.appendChild(wrap);
          }
        });
        gsap.from(el.querySelectorAll(".word"), {
          scrollTrigger: { trigger: el, start: "top 82%" },
          yPercent: 110, duration: 1, stagger: 0.04, ease: "expo.out",
        });
      });

      // ── Generic reveals ───────────────────────────────────
      gsap.utils.toArray<HTMLElement>(".fx-up").forEach((el) => {
        gsap.to(el, { scrollTrigger: { trigger: el, start: "top 86%" }, opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      });
      gsap.utils.toArray<HTMLElement>(".fx-fade").forEach((el) => {
        gsap.to(el, { scrollTrigger: { trigger: el, start: "top 88%" }, opacity: 1, duration: 1.1, ease: "power2.out" });
      });
      gsap.utils.toArray<HTMLElement>(".fx-clip").forEach((el) => {
        gsap.to(el, { scrollTrigger: { trigger: el, start: "top 85%" }, clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "expo.out" });
      });

      // ── Cap grid stagger ─────────────────────────────────
      gsap.from(".cap", {
        scrollTrigger: { trigger: ".cap-grid", start: "top 78%" },
        y: 60, opacity: 0, duration: 0.9, stagger: 0.07, ease: "power3.out",
      });

      // ── Number counters ───────────────────────────────────
      document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
        const target   = parseFloat(el.dataset.counter   ?? "0");
        const decimals = parseInt(el.dataset.decimals    ?? "0", 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 2.2, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
          onUpdate: () => { el.textContent = obj.v.toFixed(decimals); },
        });
      });

      // ── Horizontal pinned work ────────────────────────────
      const workWrap  = document.querySelector<HTMLElement>(".work__track-wrap");
      const workTrack = document.querySelector<HTMLElement>(".work__track");
      if (workWrap && workTrack) {
        const getAmt = () => -(workTrack.scrollWidth - window.innerWidth);
        const horiz = gsap.to(workTrack, {
          x: getAmt,
          ease: "none",
          scrollTrigger: {
            trigger: ".work__track-wrap",
            start: "top top",
            end: () => "+=" + Math.abs(getAmt()),
            pin: ".work__track-wrap",
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        gsap.utils.toArray<HTMLElement>(".work-card").forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              containerAnimation: horiz,
              start: "left 90%",
              end: "left 50%",
              scrub: true,
            },
            y: 40, opacity: 0.4, scale: 0.96,
          });
        });
      }

      // ── Footer parallax ───────────────────────────────────
      gsap.to(".foot__lock", {
        yPercent: -8,
        scrollTrigger: { trigger: ".foot", start: "top bottom", end: "bottom top", scrub: true },
      });

      // ── Manifesto color sweep ─────────────────────────────
      const manifestoWords = document.querySelectorAll<HTMLElement>(".manifesto__main .word");
      if (manifestoWords.length) {
        gsap.fromTo(manifestoWords,
          { color: "#bbb6cd" },
          {
            color: "#14121f", stagger: 0.04,
            scrollTrigger: { trigger: ".manifesto__main", start: "top 75%", end: "bottom 60%", scrub: 0.8 },
          }
        );
      }

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      cleanup = () => {
        cancelAnimationFrame(rafId);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        lenis.destroy();
      };
    })();

    return () => { cleanup?.(); };
  }, []);

  return null;
}
