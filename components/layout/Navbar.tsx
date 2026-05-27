"use client";

const CHAPTERS = [
  { href: "#prologue",  label: "I · Prologue"  },
  { href: "#manifesto", label: "II · Manifesto" },
  { href: "#build",     label: "III · Practice" },
  { href: "#work",      label: "IV · Work"      },
  { href: "#process",   label: "V · Method"     },
  { href: "#contact",   label: "VI · Contact"   },
];

// NAV_HEIGHT matches the fixed nav padding so sections aren't hidden behind it
const NAV_OFFSET = -80;

function scrollToSection(id: string) {
  const target = document.querySelector(id);
  if (!target) return;

  // Use Lenis if available so the smooth-scroll engine handles it correctly
  // and ScrollTrigger pin spacers are accounted for.
  const lenis = (window as unknown as Record<string, unknown>).__lenis as
    | { scrollTo: (el: Element | number, opts: Record<string, unknown>) => void }
    | undefined;

  if (lenis) {
    lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
  } else {
    const y = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  scrollToSection(href);
}

export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#prologue" onClick={(e) => handleNav(e, "#prologue")}>
        <span className="nav__brand-mark" />
        Mariela <i>Bedrova</i>
      </a>

      <nav className="nav__chapters" aria-label="Chapters">
        {CHAPTERS.map((c) => (
          <a
            key={c.href}
            href={c.href}
            onClick={(e) => handleNav(e, c.href)}
          >
            {c.label}
          </a>
        ))}
      </nav>

      <a
        className="nav__cta"
        href="#contact"
        data-magnetic="0.25"
        data-cursor="hover"
        onClick={(e) => handleNav(e, "#contact")}
      >
        <span className="nav__cta-dot" />
        Open for new builds
      </a>
    </header>
  );
}
