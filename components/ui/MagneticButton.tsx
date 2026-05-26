"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
}

export default function MagneticButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 22 });
  const springY = useSpring(y, { stiffness: 350, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <div
        className={cn(
          "relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 h-11 text-sm font-medium tracking-wide font-display cursor-pointer select-none",
          className
        )}
        style={
          variant === "primary"
            ? { color: "white" }
            : {
                color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }
        }
      >
        {variant === "primary" && (
          <>
            {/* Solid indigo background */}
            <span
              className="absolute inset-0 rounded-full"
              style={{ background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #06B6D4 100%)" }}
            />
            {/* Shimmer */}
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% center", "-200% center"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}
        <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      </div>
    </motion.div>
  );

  const wrapperClass = "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/60 rounded-full";
  const primaryStyle = variant === "primary"
    ? { filter: "drop-shadow(0 0 16px rgba(79,70,229,0.4))" }
    : undefined;

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={wrapperClass} style={primaryStyle}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={wrapperClass}
      style={primaryStyle}
    >
      {inner}
    </button>
  );
}
