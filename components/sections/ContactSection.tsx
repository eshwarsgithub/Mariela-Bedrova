"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowRight, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE_META } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${SITE_META.email}?subject=${subject}&body=${body}`);
  }

  return (
    <section id="contact" className="relative z-10 section-py">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Ready to Build{" "}
              <span className="text-gradient">Something Amazing?</span>
            </>
          }
          subtitle="Let's talk about how AI can transform your business. Send me a message and I'll get back to you within 24 hours."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3
              className="text-xl font-semibold mb-3 font-display"
              style={{ letterSpacing: "-0.015em", color: "var(--c-ink)" }}
            >
              Let&apos;s work together
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#8B92A5" }}>
              Whether you need an AI agent, a custom app, a content system, or just
              strategic clarity — I&apos;m here to help you move faster with AI.
            </p>

            {/* Email card */}
            <a
              href={`mailto:${SITE_META.email}`}
              className="flex items-center gap-4 rounded-lg px-5 py-4 mb-3 self-start group transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/60"
              style={{
                background: "#111116",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(79,70,229,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #4F46E5, #06B6D4)" }}
              >
                <Mail className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[9px] tracking-wider uppercase mb-0.5" style={{ color: "#4B5563" }}>
                  Email me
                </div>
                <div
                  className="text-sm font-medium truncate transition-colors duration-200 group-hover:text-white"
                  style={{ color: "#8B92A5" }}
                >
                  {SITE_META.email}
                </div>
              </div>
              <ArrowRight
                className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#4B5563" }}
                aria-hidden="true"
              />
            </a>

            <div className="flex items-center gap-2 mb-8">
              <MessageCircle className="w-3 h-3" style={{ color: "#22D3EE" }} aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-wide" style={{ color: "#4B5563" }}>
                Typically responds within 24 hours
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {[
                { href: SITE_META.social.linkedin, label: "LinkedIn", aria: "Connect on LinkedIn" },
                { href: SITE_META.social.twitter, label: "Twitter / X", aria: "Follow on Twitter / X" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.aria}
                  className="rounded px-4 py-2.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/60"
                  style={{
                    background: "#111116",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#8B92A5",
                    fontFamily: "Geist, system-ui, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(79,70,229,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#8B92A5";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: "#111116", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Top indigo→cyan bar */}
              <div
                className="h-px w-full"
                style={{ background: "linear-gradient(90deg, #4F46E5, #6366F1, #06B6D4)" }}
                aria-hidden="true"
              />
              <form onSubmit={handleSubmit} noValidate className="p-8 space-y-5">
                {[
                  { id: "contact-name",    name: "name",    type: "text",  label: "Name",    autoComplete: "name",  placeholder: "Your name…" },
                  { id: "contact-email",   name: "email",   type: "email", label: "Email",   autoComplete: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label
                      htmlFor={field.id}
                      className="block font-mono text-[10px] font-semibold tracking-[0.1em] uppercase"
                      style={{ color: "#8B92A5" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required
                      aria-required="true"
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-[10px] font-semibold tracking-[0.1em] uppercase"
                    style={{ color: "#8B92A5" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    placeholder="Tell me about your project or what you need…"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="pt-1">
                  <MagneticButton
                    variant="primary"
                    type="submit"
                    aria-label="Send message"
                    className="w-full justify-center"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    Send Message
                  </MagneticButton>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
