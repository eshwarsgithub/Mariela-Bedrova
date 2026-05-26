"use client";

import { useEffect, useRef } from "react";

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 55;
const LINK_DISTANCE = 160;
const SPEED = 0.28;

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let nodes: NeuralNode[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildNodes();
    }

    function buildNodes() {
      if (!canvas) return;
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Move nodes, bounce on edges */
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      /* Draw connections */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= LINK_DISTANCE) continue;

          const alpha = (1 - dist / LINK_DISTANCE) * 0.14;
          const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          grad.addColorStop(0, `rgba(79,70,229,${alpha})`);
          grad.addColorStop(1, `rgba(6,182,212,${alpha})`);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      /* Draw nodes */
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.25)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Neural mesh canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle ambient color pools */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(-20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(20%, 20%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />
    </div>
  );
}
