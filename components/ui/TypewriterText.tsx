"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases: string[];
}

export default function TypewriterText({ phrases }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = phrases[phraseIdx];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIdx < current.length) {
            setDisplayed(current.slice(0, charIdx + 1));
            setCharIdx((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIdx > 0) {
            setDisplayed(current.slice(0, charIdx - 1));
            setCharIdx((c) => c - 1);
          } else {
            setIsDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 35 : charIdx === phrases[phraseIdx].length ? 2000 : 70
    );

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx, phrases]);

  return (
    <span
      style={{
        background: "linear-gradient(135deg, #818CF8 0%, #6366F1 35%, #22D3EE 80%, #06B6D4 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "Geist, system-ui, sans-serif",
        fontWeight: 500,
      }}
    >
      {displayed}
      <span
        className="ml-0.5"
        style={{
          WebkitTextFillColor: "#06B6D4",
          color: "#06B6D4",
          animation: "pulse 1s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
