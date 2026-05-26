"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const mouse = { x: -999, y: -999 };
    const target = { x: -999, y: -999 };

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function onMouseMove(e: MouseEvent) {
      target.x = e.clientX;
      target.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (target.x === -999) { raf = requestAnimationFrame(draw); return; }

      mouse.x = lerp(mouse.x === -999 ? target.x : mouse.x, target.x, 0.08);
      mouse.y = lerp(mouse.y === -999 ? target.y : mouse.y, target.y, 0.08);

      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 380);
      grad.addColorStop(0,    "rgba(79,70,229,0.10)");
      grad.addColorStop(0.4,  "rgba(99,102,241,0.06)");
      grad.addColorStop(0.75, "rgba(6,182,212,0.03)");
      grad.addColorStop(1,    "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  );
}
