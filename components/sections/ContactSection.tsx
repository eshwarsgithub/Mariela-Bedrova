"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Clock, Send } from "lucide-react";
import { SITE_META } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]  = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SITE_META.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      id="contact"
      style={{ position: "relative", zIndex: 20, overflow: "hidden", background: "var(--c-paper)" }}
    >
      {/* Top rule */}
      <div className="w-full h-px" style={{ background: "var(--c-line)" }} aria-hidden="true" />

      <div
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "clamp(80px, 12vh, 120px) var(--gutter) clamp(80px, 12vh, 120px)",
        }}
      >

        {/* ── Heading ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ marginBottom: "clamp(48px, 8vh, 80px)" }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--c-ink-quiet)",
              }}
            >
              VII · Contact
            </span>
            <span style={{ height: 1, width: 40, background: "var(--c-line)", flexShrink: 0 }} aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8B5CF6",
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.18)",
                padding: "5px 12px",
                borderRadius: 100,
              }}
            >
              Get In Touch
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--c-ink)",
              marginBottom: 16,
            }}
          >
            Ready to Build{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(120deg, #4F46E5 0%, #8B5CF6 50%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Something Amazing?
            </em>
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "var(--c-ink-soft)",
              lineHeight: 1.6,
              maxWidth: "52ch",
            }}
          >
            Let&rsquo;s talk about how AI can transform your business. Send me a message and I&rsquo;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* ── Two cards ────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(16px, 3vw, 32px)",
            alignItems: "start",
          }}
        >

          {/* ── Left card — contact info ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid var(--c-line)",
              borderTop: "3px solid #4F46E5",
              borderRadius: 16,
              padding: "clamp(28px, 4vw, 44px)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Section label */}
            <div
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 9,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#4F46E5",
                marginBottom: 20,
              }}
            >
              Contact Details
            </div>

            <h3
              className="font-display"
              style={{
                fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--c-ink)",
                marginBottom: 10,
              }}
            >
              Let&rsquo;s work together
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--c-ink-soft)",
                lineHeight: 1.65,
                marginBottom: 32,
                maxWidth: "36ch",
              }}
            >
              Whether you need an AI agent, a custom app, or just strategic clarity — I&rsquo;m here to help you move faster.
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: "var(--c-line)", marginBottom: 28 }} aria-hidden="true" />

            {/* Email */}
            <div style={{ marginBottom: 28 }}>
              <div
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 9,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--c-ink-quiet)",
                  marginBottom: 10,
                }}
              >
                Direct Email
              </div>
              <a
                href={`mailto:${SITE_META.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "var(--c-ink)",
                  textDecoration: "none",
                }}
                className="group"
              >
                <span
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(79,70,229,0.08)",
                    border: "1px solid rgba(79,70,229,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Mail style={{ width: 14, height: 14, color: "#4F46E5" }} />
                </span>
                <span
                  className="font-display group-hover:text-[#4F46E5] transition-colors duration-200"
                  style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", letterSpacing: "-0.01em" }}
                >
                  {SITE_META.email}
                </span>
                <ArrowUpRight
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ width: 14, height: 14, color: "#4F46E5", marginLeft: "auto", flexShrink: 0 }}
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Response time */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 14px",
                borderRadius: 8,
                background: "rgba(79,70,229,0.04)",
                border: "1px solid rgba(79,70,229,0.1)",
                marginBottom: 28,
              }}
            >
              <Clock style={{ width: 13, height: 13, color: "#4F46E5", flexShrink: 0 }} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--c-ink-soft)",
                }}
              >
                Typically responds within 24 hours
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "var(--c-line)", marginBottom: 24 }} aria-hidden="true" />

            {/* Social links */}
            <div>
              <div
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 9,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--c-ink-quiet)",
                  marginBottom: 14,
                }}
              >
                Find Me Online
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { href: SITE_META.social.linkedin, label: "LinkedIn", sub: "Connect professionally" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 0",
                      borderBottom: "1px solid var(--c-line-soft)",
                      textDecoration: "none",
                    }}
                  >
                    <div>
                      <div
                        className="group-hover:text-[#4F46E5] transition-colors duration-200 font-display"
                        style={{ fontSize: 15, letterSpacing: "-0.01em", color: "var(--c-ink)", marginBottom: 2 }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--f-mono)",
                          fontSize: 10,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--c-ink-quiet)",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="opacity-25 group-hover:opacity-100 transition-all duration-200"
                      style={{ width: 15, height: 15, color: "#4F46E5", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right card — form ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.215, 0.61, 0.355, 1] }}
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid var(--c-line)",
              borderTop: "3px solid #8B5CF6",
              borderRadius: 16,
              padding: "clamp(28px, 4vw, 44px)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Section label */}
            <div
              style={{
                fontFamily: "var(--f-mono)",
                fontSize: 9,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8B5CF6",
                marginBottom: 28,
              }}
            >
              Send a Message
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 28 }}>

              {/* Name + email row */}
              <div className="contact-form-grid">
                {[
                  { id: "c-name",  name: "name",  type: "text",  label: "Your name",    autoComplete: "name",  placeholder: "e.g. Mariela" },
                  { id: "c-email", name: "email", type: "email", label: "Email address", autoComplete: "email", placeholder: "you@company.com" },
                ].map((f) => (
                  <div key={f.id} className="field" style={{ minWidth: 0 }}>
                    <label htmlFor={f.id}>{f.label}</label>
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      required
                      aria-required="true"
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="field">
                <label htmlFor="c-message">Your message</label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  placeholder="Tell me about your project — what problem you're solving and what a win looks like…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact__submit"
                style={{
                  alignSelf: "flex-start",
                  ...(sent ? { background: "var(--c-violet)" } : {}),
                }}
              >
                {sent ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    Sent — talk soon
                  </>
                ) : (
                  <>
                    <Send style={{ width: 15, height: 15 }} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px" style={{ background: "var(--c-line)" }} aria-hidden="true" />
    </section>
  );
}
