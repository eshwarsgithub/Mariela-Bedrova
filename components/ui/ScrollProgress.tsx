"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left"
      style={{
        scaleX,
        height: "2px",
        background: "linear-gradient(90deg, #4F46E5 0%, #6366F1 40%, #06B6D4 75%, #22D3EE 100%)",
        zIndex: 200,
        boxShadow: "0 0 10px rgba(79,70,229,0.5), 0 0 20px rgba(6,182,212,0.3)",
      }}
      aria-hidden="true"
    />
  );
}
