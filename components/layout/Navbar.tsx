const CHAPTERS = [
  { href: "#prologue",  label: "I · Prologue"  },
  { href: "#manifesto", label: "II · Manifesto" },
  { href: "#build",     label: "III · Practice" },
  { href: "#work",      label: "IV · Work"      },
  { href: "#numbers",   label: "V · Signal"     },
  { href: "#process",   label: "VI · Method"    },
  { href: "#contact",   label: "VII · Contact"  },
];

export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#prologue">
        <span className="nav__brand-mark" />
        Mariela <i>Bedrova</i>
      </a>

      <nav className="nav__chapters" aria-label="Chapters">
        {CHAPTERS.map((c) => (
          <a key={c.href} href={c.href}>{c.label}</a>
        ))}
      </nav>

      <a
        className="nav__cta"
        href="#contact"
        data-magnetic="0.25"
        data-cursor="hover"
      >
        <span className="nav__cta-dot" />
        Open for new builds
      </a>
    </header>
  );
}
