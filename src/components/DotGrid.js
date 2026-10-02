import React, { useRef, useEffect } from "react";

export function DotGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const SPACING = 32;
    const DOT_R = 1.1;
    const MAX_SHIFT = 3;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const mx = (mouseRef.current.x / width - 0.5) * MAX_SHIFT * 2;
      const my = (mouseRef.current.y / height - 0.5) * MAX_SHIFT * 2;

      for (let x = SPACING; x < width; x += SPACING) {
        for (let y = SPACING; y < height; y += SPACING) {
          const dist = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);
          const influence = Math.max(0, 1 - dist / 220);
          const dx = mx * influence;
          const dy = my * influence;
          const alpha = 0.045 + influence * 0.15;
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, DOT_R + influence * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.fill();
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, width: "100vw", height: "100vh"
    }} />
  );
}
