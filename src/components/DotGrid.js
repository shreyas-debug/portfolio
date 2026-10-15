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

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let currentMouse = { x: 0, y: 0 };
    const scheduleDraw = () => {
      if (!rafRef.current && !document.hidden) rafRef.current = requestAnimationFrame(draw);
    };
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      scheduleDraw();
    };
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      if (reducedMotion.matches) return;
      mouseRef.current = { x: e.clientX, y: e.clientY };
      scheduleDraw();
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      rafRef.current = null;
      const target = mouseRef.current;
      currentMouse.x += (target.x - currentMouse.x) * 0.16;
      currentMouse.y += (target.y - currentMouse.y) * 0.16;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const mx = (currentMouse.x / width - 0.5) * MAX_SHIFT * 2;
      const my = (currentMouse.y / height - 0.5) * MAX_SHIFT * 2;

      for (let x = SPACING; x < width; x += SPACING) {
        for (let y = SPACING; y < height; y += SPACING) {
          const dist = Math.hypot(x - currentMouse.x, y - currentMouse.y);
          const influence = Math.max(0, 1 - dist / 220);
          const dx = mx * influence;
          const dy = my * influence;
          const alpha = 0.045 + influence * 0.15;
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, DOT_R + influence * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(145, 130, 112, ${alpha})`;
          ctx.fill();
        }
      }
      if (Math.abs(target.x - currentMouse.x) + Math.abs(target.y - currentMouse.y) > 0.2) scheduleDraw();
    };
    resize();
    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else scheduleDraw();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, width: "100vw", height: "100vh"
    }} />
  );
}
