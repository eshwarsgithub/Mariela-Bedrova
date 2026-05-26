export default function ProjectsSection() {
  return (
    <section id="work" className="work" data-chapter="IV" data-screen-label="04 Work">
      <div className="work__head">
        <div>
          <div className="chapter__num">Chapter IV</div>
        </div>
        <h2 className="fx-up">Selected <em>builds</em>, in motion.</h2>
        <div className="work__count">
          <strong>06</strong>
          <span>Things in the world</span>
        </div>
      </div>

      <div className="work__track-wrap">
        <div className="work__track">

          {/* Card 1 — Concierge.ai */}
          <article className="work-card" data-cursor="hover">
            <div className="work-card__art">
              <span className="work-card__chip">AI Assistant</span>
              <span className="work-card__year">2026</span>
              <svg className="work-card__art-svg" viewBox="0 0 580 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#dbeafe"/><stop offset="1" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
                <rect width="580" height="640" fill="url(#g1)"/>
                <g stroke="#4f46e5" strokeWidth="1" fill="none" opacity="0.4">
                  <circle cx="290" cy="320" r="60"/><circle cx="290" cy="320" r="120"/>
                  <circle cx="290" cy="320" r="180"/><circle cx="290" cy="320" r="240"/>
                </g>
                <g transform="translate(80 240)">
                  <rect width="240" height="64" rx="32" fill="#fafaff" opacity="0.9"/>
                  <circle cx="32" cy="32" r="6" fill="#8b5cf6"/>
                  <text x="56" y="38" fontFamily="Geist, sans-serif" fontSize="14" fill="#14121f">Hi — can you book a room for two?</text>
                </g>
                <g transform="translate(220 340)">
                  <rect width="280" height="64" rx="32" fill="#14121f"/>
                  <text x="24" y="38" fontFamily="Geist, sans-serif" fontSize="14" fill="#fafaff">Friday or Saturday? I can hold both.</text>
                </g>
              </svg>
            </div>
            <div className="work-card__meta">
              <div>
                <h3 className="work-card__title">Concierge.ai</h3>
                <div className="work-card__sub">Hospitality · Bookings · 24/7 reception</div>
              </div>
              <div className="work-card__arrow" data-magnetic="0.4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </article>

          {/* Card 2 — LeadLoop OS */}
          <article className="work-card" data-cursor="hover">
            <div className="work-card__art">
              <span className="work-card__chip">Automation</span>
              <span className="work-card__year">2026</span>
              <svg className="work-card__art-svg" viewBox="0 0 580 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ede9fe"/><stop offset="1" stopColor="#6366f1"/>
                  </linearGradient>
                </defs>
                <rect width="580" height="640" fill="url(#g2)"/>
                <g stroke="#4f46e5" strokeWidth="1.2" fill="none">
                  <rect x="60" y="60" width="120" height="80" rx="8"/><rect x="230" y="60" width="120" height="80" rx="8"/>
                  <rect x="400" y="60" width="120" height="80" rx="8"/><rect x="60" y="280" width="120" height="80" rx="8"/>
                  <rect x="230" y="280" width="120" height="80" rx="8"/><rect x="400" y="280" width="120" height="80" rx="8"/>
                  <rect x="60" y="500" width="120" height="80" rx="8"/><rect x="230" y="500" width="120" height="80" rx="8"/>
                  <rect x="400" y="500" width="120" height="80" rx="8"/>
                  <path d="M180 100h50M350 100h50M120 140v140M290 140v140M460 140v140M180 320h50M350 320h50M120 360v140M290 360v140M460 360v140"/>
                </g>
                <g fill="#8b5cf6" fontFamily="JetBrains Mono, monospace" fontSize="11">
                  <text x="76" y="106">trigger</text><text x="246" y="106">enrich</text><text x="416" y="106">score</text>
                  <text x="76" y="326">draft</text><text x="246" y="326">review</text><text x="416" y="326">send</text>
                  <text x="76" y="546">log</text><text x="246" y="546">sync</text><text x="416" y="546">notify</text>
                </g>
              </svg>
            </div>
            <div className="work-card__meta">
              <div>
                <h3 className="work-card__title">LeadLoop OS</h3>
                <div className="work-card__sub">B2B · Outreach pipeline · 9-step graph</div>
              </div>
              <div className="work-card__arrow" data-magnetic="0.4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </article>

          {/* Card 3 — Brandstack */}
          <article className="work-card" data-cursor="hover">
            <div className="work-card__art">
              <span className="work-card__chip">MVP · 14 days</span>
              <span className="work-card__year">2025</span>
              <svg className="work-card__art-svg" viewBox="0 0 580 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fafaff"/><stop offset="1" stopColor="#c084fc"/>
                  </linearGradient>
                </defs>
                <rect width="580" height="640" fill="url(#g3)"/>
                <g transform="translate(70 70)">
                  <rect width="440" height="500" rx="14" fill="#fafaff" stroke="#a855f7" strokeWidth="1"/>
                  <rect x="20" y="20" width="80" height="14" rx="7" fill="#a855f7"/>
                  <rect x="20" y="60" width="240" height="36" rx="6" fill="#ede9fe"/>
                  <rect x="20" y="120" width="400" height="280" rx="8" fill="#ede9fe"/>
                  <g stroke="#8b5cf6" strokeWidth="1.4" fill="none">
                    <path d="M40 360 L100 300 L160 320 L220 240 L280 280 L340 200 L400 220"/>
                  </g>
                  <g fill="#8b5cf6">
                    <circle cx="40" cy="360" r="3"/><circle cx="100" cy="300" r="3"/><circle cx="160" cy="320" r="3"/>
                    <circle cx="220" cy="240" r="3"/><circle cx="280" cy="280" r="3"/><circle cx="340" cy="200" r="3"/>
                    <circle cx="400" cy="220" r="3"/>
                  </g>
                  <rect x="20" y="420" width="120" height="40" rx="20" fill="#14121f"/>
                  <text x="50" y="446" fontFamily="Geist, sans-serif" fontSize="13" fill="#fafaff">Generate</text>
                </g>
              </svg>
            </div>
            <div className="work-card__meta">
              <div>
                <h3 className="work-card__title">Brandstack</h3>
                <div className="work-card__sub">Content engine · Creators · 14-day MVP</div>
              </div>
              <div className="work-card__arrow" data-magnetic="0.4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </article>

          {/* Card 4 — Helpline */}
          <article className="work-card" data-cursor="hover">
            <div className="work-card__art">
              <span className="work-card__chip">Support</span>
              <span className="work-card__year">2025</span>
              <svg className="work-card__art-svg" viewBox="0 0 580 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#93c5fd"/><stop offset="1" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
                <rect width="580" height="640" fill="url(#g4)"/>
                <g transform="translate(60 80)" fill="#fafaff" opacity="0.95">
                  <rect width="460" height="44" rx="22"/>
                  <rect y="64" width="380" height="44" rx="22"/>
                  <rect y="128" width="420" height="44" rx="22"/>
                  <rect y="192" width="320" height="44" rx="22"/>
                  <rect y="256" width="440" height="44" rx="22"/>
                  <rect y="320" width="280" height="44" rx="22"/>
                  <rect y="384" width="400" height="44" rx="22"/>
                  <rect y="448" width="340" height="44" rx="22"/>
                </g>
                <g transform="translate(60 80)" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#14121f">
                  <text x="20" y="28">&#8627; Where is my order #4821?</text>
                  <text x="20" y="92">&#8627; Shipped Mon · arriving Thu</text>
                  <text x="20" y="156">&#8627; I&apos;d like to change the address</text>
                  <text x="20" y="220">&#8627; Done. Confirmation sent.</text>
                  <text x="20" y="284">&#8627; Refund for damaged item</text>
                  <text x="20" y="348">&#8627; Escalated to human agent</text>
                  <text x="20" y="412">&#8627; Resolved · 4m 18s</text>
                  <text x="20" y="476">&#8627; Thank you</text>
                </g>
              </svg>
            </div>
            <div className="work-card__meta">
              <div>
                <h3 className="work-card__title">Helpline</h3>
                <div className="work-card__sub">DTC · Tier-1 support · 78% deflection</div>
              </div>
              <div className="work-card__arrow" data-magnetic="0.4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </article>

          {/* Card 5 — Recall */}
          <article className="work-card" data-cursor="hover">
            <div className="work-card__art">
              <span className="work-card__chip">Internal Tool</span>
              <span className="work-card__year">2025</span>
              <svg className="work-card__art-svg" viewBox="0 0 580 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ede9fe"/><stop offset="1" stopColor="#a78bfa"/>
                  </linearGradient>
                </defs>
                <rect width="580" height="640" fill="url(#g5)"/>
                <g transform="translate(80 80)">
                  <rect width="420" height="40" rx="6" fill="#fafaff"/>
                  <text x="20" y="26" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#14121f">&#8984;K · ask anything across your team</text>
                </g>
                <g transform="translate(80 150)" fontFamily="Geist, sans-serif" fill="#14121f">
                  <rect width="420" height="380" rx="10" fill="#fafaff" opacity="0.96"/>
                  <text x="20" y="40" fontSize="13" fill="#8b5cf6">RESULT · 0.4s</text>
                  <text x="20" y="80" fontSize="22">Q3 revenue is ahead of plan</text>
                  <text x="20" y="108" fontSize="22">by 11.4% — driven by EU mid-</text>
                  <text x="20" y="136" fontSize="22">market and a new bookings flow.</text>
                  <rect x="20" y="170" width="380" height="1" fill="#e9d5ff"/>
                  <text x="20" y="200" fontSize="12" fill="#5b5670">SOURCES</text>
                  <text x="20" y="230" fontSize="13">· Q3-board-deck.pdf, slide 4</text>
                  <text x="20" y="256" fontSize="13">· Sales-CRM weekly digest</text>
                  <text x="20" y="282" fontSize="13">· #revenue Slack channel</text>
                  <text x="20" y="308" fontSize="13">· Founders Friday memo</text>
                </g>
              </svg>
            </div>
            <div className="work-card__meta">
              <div>
                <h3 className="work-card__title">Recall</h3>
                <div className="work-card__sub">Knowledge copilot · ⌘K for ops</div>
              </div>
              <div className="work-card__arrow" data-magnetic="0.4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </article>

          {/* Card 6 — Wayfare */}
          <article className="work-card" data-cursor="hover">
            <div className="work-card__art">
              <span className="work-card__chip">Travel</span>
              <span className="work-card__year">2025</span>
              <svg className="work-card__art-svg" viewBox="0 0 580 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g6" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#fafaff"/><stop offset="1" stopColor="#818cf8"/>
                  </linearGradient>
                </defs>
                <rect width="580" height="640" fill="url(#g6)"/>
                <g transform="translate(70 100)" fill="none" stroke="#4f46e5" strokeWidth="1.4">
                  <path d="M0 200 C 100 80, 220 320, 360 160 S 480 80, 440 40"/>
                </g>
                <g transform="translate(70 100)" fill="#8b5cf6">
                  <circle cx="0" cy="200" r="6"/><circle cx="180" cy="200" r="6"/>
                  <circle cx="360" cy="160" r="6"/><circle cx="440" cy="40" r="6"/>
                </g>
                <g transform="translate(70 100)" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#14121f">
                  <text x="-10" y="220">Sofia</text><text x="170" y="220">Istanbul</text>
                  <text x="340" y="180">Athens</text><text x="410" y="32">Rome</text>
                </g>
                <g transform="translate(70 400)">
                  <rect width="440" height="160" rx="10" fill="#fafaff" opacity="0.95"/>
                  <text x="20" y="34" fontFamily="Geist, sans-serif" fontSize="13" fill="#8b5cf6">10-DAY ITINERARY · €1,840 · CONFIRMED</text>
                  <text x="20" y="68" fontFamily="Geist, sans-serif" fontSize="20" fill="#14121f">4 cities, 3 flights, 4 hotels</text>
                  <text x="20" y="96" fontFamily="Geist, sans-serif" fontSize="20" fill="#14121f">2 dinners booked, 1 spa</text>
                  <text x="20" y="138" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5b5670">drafted in 42s · zero copy-paste</text>
                </g>
              </svg>
            </div>
            <div className="work-card__meta">
              <div>
                <h3 className="work-card__title">Wayfare</h3>
                <div className="work-card__sub">Travel · Itinerary &amp; booking agent</div>
              </div>
              <div className="work-card__arrow" data-magnetic="0.4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </article>

          {/* End card */}
          <div className="work__end">
            <span className="chapter__num">Fin · IV</span>
            <p>Have an idea that&rsquo;s been sitting in a notes app? <em>Let&rsquo;s build it in two weeks.</em></p>
            <a className="nav__cta" href="#contact" data-magnetic="0.3" data-cursor="hover">
              <span className="nav__cta-dot" />
              Start a build →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
