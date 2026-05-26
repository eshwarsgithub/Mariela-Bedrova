const CHAPTERS = [
  { roman: "I",   target: "prologue"  },
  { roman: "II",  target: "manifesto" },
  { roman: "III", target: "build"     },
  { roman: "IV",  target: "work"      },
  { roman: "V",   target: "numbers"   },
  { roman: "VI",  target: "process"   },
  { roman: "VII", target: "contact"   },
];

export default function ChapterGauge() {
  return (
    <aside className="gauge" aria-hidden="true">
      {CHAPTERS.map((c) => (
        <div
          key={c.target}
          className="gauge__item"
          data-target={c.target}
        >
          <span>{c.roman}</span>
          <span className="gauge__bar" />
        </div>
      ))}
    </aside>
  );
}
