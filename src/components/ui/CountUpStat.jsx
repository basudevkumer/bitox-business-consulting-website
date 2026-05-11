"use client";
import { useEffect, useRef, useState } from "react";

const CountUpStat = ({
  value,
  label,
  description,
  duration = 1800,
  className = "",
  statTextClass = "text-[40px] md:text-[56px] font-bold text-primary leading-none tabular-nums",
  labelClass = "font-semibold text-primary mt-[12px]",
  descClass = "text-tarnary para-sm mt-[8px]",
  hideLabel = false,
}) => {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  const raw = String(value);
  const match = raw.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
  const prefix = match ? match[1] : "";
  const numericTarget = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  const isFloat = String(numericTarget).includes(".");
  const decimals = isFloat ? (String(numericTarget).split(".")[1]?.length ?? 1) : 0;

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

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = eased * numericTarget;
      setCurrent(isFloat ? parseFloat(next.toFixed(decimals)) : Math.round(next));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started]);

  const displayValue = isFloat ? current.toFixed(decimals) : current;

  return (
    <div ref={ref} className={className}>
      <p className={`tabular-nums ${statTextClass}`}>
        {prefix}{displayValue}{suffix}
      </p>
      {!hideLabel && label && <p className={labelClass}>{label}</p>}
      {description && <p className={descClass}>{description}</p>}
    </div>
  );
};

export default CountUpStat;