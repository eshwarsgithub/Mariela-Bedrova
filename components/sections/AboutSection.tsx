import { MANIFESTO_PRINCIPLES } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="manifesto" className="chapter" data-chapter="II" data-screen-label="02 Manifesto">
      <div className="chapter__head">
        <div className="chapter__num">Chapter II</div>
        <div className="chapter__label">A short manifesto · on the work</div>
      </div>

      <div className="manifesto__body">
        <aside className="manifesto__aside">
          {MANIFESTO_PRINCIPLES.map((p) => (
            <p key={p.num}>
              <strong>{p.num}</strong><br />
              {p.lines[0]}<br />
              {p.lines[1]}
            </p>
          ))}
        </aside>

        <div className="manifesto__main">
          <p data-split="true">
            I build AI tools, automations, and fast MVPs for businesses, creators,
            and startups — usually the kind of work that quietly disappears time,
            money, and patience.
          </p>
          <p data-split="true">
            The point isn&rsquo;t the technology. The point is a customer answered
            at 2am, a lead followed up before lunch, a booking that didn&rsquo;t
            need a human, an idea tested in a week instead of a quarter.
          </p>
          <p className="quiet" data-split="true">
            Practical. Simple. Scalable. Aimed squarely at real business
            problems &mdash; not the imaginary ones.
          </p>
        </div>
      </div>
    </section>
  );
}
