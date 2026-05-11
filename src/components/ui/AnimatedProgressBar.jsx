"use client";
import { useEffect, useRef, useCallback } from "react";

export default function AnimatedProgressBar({
  label,
  value = 0,
  duration = 1100,
  color = "#02090F",
}) {
  const wrapRef = useRef(null);
  const fillRef = useRef(null);
  const thumbRef = useRef(null);
  const valRef = useRef(null);
  const started = useRef(false);

  const set = useCallback((pct) => {
    const p = Math.max(0, Math.min(100, pct));
    fillRef.current.style.transform = `scaleX(${p / 100})`;
    thumbRef.current.style.transform = `translate(calc(${p}cqw - 50%), -50%)`;
    valRef.current.textContent = `${Math.round(p)}%`;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return;
        started.current = true;

        let t0 = null;
        const tick = (ts) => {
          t0 ??= ts;
          const p = Math.min((ts - t0) / duration, 1);
          set((1 - Math.pow(1 - p, 3)) * value);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [value, duration, set]);

  const onPointerDown = (e) => e.currentTarget.setPointerCapture(e.pointerId);
  const onPointerMove = (e) => {
    if (e.buttons !== 1) return;
    const r = fillRef.current.parentElement.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };

  return (
    <div ref={wrapRef} className="mb-7">
      <div className="flex justify-between items-baseline mb-2.5">
        <span className="text-sm font-medium text-primary">{label}</span>
        <span ref={valRef} className="text-[13px] text-primary tabular-nums">
          0%
        </span>
      </div>

      <div
        className="relative h-1 rounded-full bg-[#D9D9D9] cursor-pointer"
        style={{ containerType: "inline-size" }}
      >
        <div
          ref={fillRef}
          className="absolute inset-0 rounded-full origin-left pointer-events-none"
          style={{
            background: color,
            transform: "scaleX(0)",
            willChange: "transform",
          }}
        />

        <div
          ref={thumbRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          className="absolute top-1/2 left-0 size-[18px] rounded-full bg-white border border-gray- shadow-sm cursor-grab touch-none"
          style={{
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}
