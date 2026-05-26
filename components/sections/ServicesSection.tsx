import { CAPABILITIES } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="build" className="chapter" data-chapter="III" data-screen-label="03 Practice">
      <div className="chapter__head">
        <div className="chapter__num">Chapter III</div>
        <div className="chapter__label">The practice · eight kinds of work</div>
      </div>

      <h2 className="capabilities__intro fx-up">
        Eight ways I turn <em>an idea</em> into something a customer can actually use.
      </h2>

      <div className="cap-grid">
        {CAPABILITIES.map((cap) => (
          <article key={cap.idx} className="cap" data-cursor="hover">
            <div className="cap__head">
              <span className="cap__idx">{cap.idx}</span>
              <span
                className="cap__glyph"
                dangerouslySetInnerHTML={{ __html: cap.glyph }}
                aria-hidden="true"
              />
            </div>
            <h3 className="cap__title">{cap.title}</h3>
            <p className="cap__desc">{cap.desc}</p>
            <div className="cap__tags">
              {cap.tags.map((t) => (
                <span key={t} className="cap__tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
