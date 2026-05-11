"use client";
import { useEffect, useRef, useState } from "react";

/**
 * AnimatedProgressBar
 *
 * Props:
 *  - label      {string}  — skill/category name
 *  - value      {number}  — target percentage (0–100)
 *  - duration   {number}  — animation duration in ms (default 1200)
 *  - color      {string}  — filled-bar color (default "#111827")
 *  - trackColor {string}  — empty-bar color  (default "#e5e7eb")
 *  - className  {string}  — extra wrapper classes
 */
const AnimatedProgressBar = ({
  label,
  value,
  duration = 1200,
  color = "#111827",
  trackColor = "#e5e7eb",
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Intersection Observer — trigger once when element enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Count-up animation
  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(startValue + (value - startValue) * eased));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, value, duration]);

  return (
    <div ref={ref} className={`mb-[30px] ${className}`}>
      {/* Label + Percentage */}
      <div className="flex items-center justify-between mb-[10px]">
        <label className="text-base font-medium text-primary">{label}</label>
        <span className="text-base font-medium text-primary tabular-nums">
          {current}%
        </span>
      </div>

      {/* Progress Bar Track */}
      <div
        className="w-full h-[4px] rounded-full overflow-hidden"
        style={{ backgroundColor: trackColor }}
      >
        {/* Animated Fill */}
        <div
          className="h-full rounded-full"
          style={{
            width: `${current}%`,
            backgroundColor: color,
            transition: started ? "none" : undefined, // rAF handles it
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;