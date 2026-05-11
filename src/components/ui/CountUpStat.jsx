"use client";
import { useEffect, useRef, useState } from "react";

/**
 * CountUpStat
 *
 * Parses a value string like "68+", "98%", "3.5x", "$1M" — extracts the
 * numeric part, animates it, then re-attaches the non-numeric suffix/prefix.
 *
 * Props:
 *  - value      {string|number}  — e.g. "68+", "98%", 42
 *  - label      {string}         — e.g. "Completed Projects"
 *  - description{string}         — optional sub-text
 *  - duration   {number}         — animation duration ms (default 1800)
 *  - className  {string}         — extra wrapper classes
 *
 * Usage:
 *  <CountUpStat value="68+" label="Completed Projects" description="..." />
 *  <CountUpStat value="98%" label="Success Rate" />
 *  <CountUpStat value={42}  label="Team Members" />
 */
const CountUpStat = ({
  value,
  label,
  description,
  duration = 1800,
  className = "",
}) => {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Parse value: separate leading prefix (e.g. "$"), number, suffix (e.g. "+", "%", "x", "M")
  const raw = String(value);
  const match = raw.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
  const prefix = match ? match[1] : "";
  const numericTarget = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  const isFloat = raw.includes(".");
  const decimals = isFloat ? (raw.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 1) : 0;

  // Intersection Observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // rAF count-up
  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = eased * numericTarget;

      setCurrent(isFloat ? parseFloat(next.toFixed(decimals)) : Math.round(next));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, numericTarget, duration, isFloat, decimals]);

  const displayValue = isFloat ? current.toFixed(decimals) : current;

  return (
    <div ref={ref} className={className}>
      <p className="text-[40px] md:text-[56px] font-bold text-primary leading-none tabular-nums">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <p className="font-semibold text-primary mt-[12px]">{label}</p>
      {description && (
        <p className="text-tarnary para-sm mt-[8px]">{description}</p>
      )}
    </div>
  );
};

export default CountUpStat;