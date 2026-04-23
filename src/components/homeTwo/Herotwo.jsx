import Image from "next/image";
import { Plus } from "lucide-react";

const PLUS_POSITIONS = [
  // Top row
  "top-[30px] left-[75px]",
  "top-[30px] left-1/2 -translate-x-1/2",
  "top-[30px] right-[75px]",
  // Bottom row
  "bottom-[30px] left-[75px]",
  "bottom-[30px] left-1/2 -translate-x-1/2",
  "bottom-[30px] right-[75px]",
];

const SERVICES = [
  "Business Consultancy",
  "Financial Planning",
  "Vat & Tax Consultancy",
  "Strategic Business Advisory",
  "Sales & CRM Strategy",
];

const Herotwo = () => {
  return (
    <section className="relative h-[600px] md:h-[750px] xl:h-[950px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero2.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Vertical grid lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="max-w-[1770px] mx-auto h-full px-[75px] relative">
          {/* Left line */}
          <div className="absolute left-[75px] top-0 bottom-0 w-px bg-white/15" />
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/15" />
          {/* Right line */}
          <div className="absolute right-[75px] top-0 bottom-0 w-px bg-white/15" />
        </div>
      </div>

      {/* Max width container */}
      <div className="relative z-10 max-w-[1770px] mx-auto h-full px-[75px]">
        {/* Plus icons */}
        {PLUS_POSITIONS.map((position, index) => (
          <Plus
            key={index}
            size={13}
            strokeWidth={2}
            className={`absolute text-white/80 ${position}`}
          />
        ))}

        {/* Est. year — top right */}
        <span className="absolute top-[22px] right-[100px] text-white font-light text-[clamp(20px,3vw,42px)] leading-tight tracking-tight">
          (Est. 2010)
        </span>

        {/* Services list — right side, vertically centered-ish */}
        <div className="absolute top-[30%] -translate-y-[65%] right-[150px] text-right space-y-[6px]">
          {SERVICES.map((service, i) => (
            <p
              key={i}
              className="text-white text-[clamp(10px,1.1vw,15px)] font-light leading-snug tracking-wide"
            >
              {service}
            </p>
          ))}
        </div>

        {/* CONSULTANT — top left, large */}
        <h1
          className="absolute left-[75px] font-black text-white uppercase leading-none tracking-tighter"
          style={{
            fontSize: "clamp(48px, 12vw, 200px)",
            top: "clamp(60px, 12%, 160px)",
          }}
        >
          CONSULTANT
        </h1>

        {/* AGENCY_ — bottom right */}
        <div
          className="absolute right-[75px] font-black text-white uppercase leading-none tracking-tighter flex items-end gap-3"
          style={{
            fontSize: "clamp(48px, 12vw, 200px)",
            bottom: "clamp(80px, 14%, 180px)",
          }}
        >
          <span>AGENCY</span>
          {/* Underscore line */}
          <span
            className="block bg-white self-end mb-[0.12em]"
            style={{
              width: "clamp(30px, 6vw, 110px)",
              height: "clamp(4px, 0.8vw, 14px)",
            }}
          />
        </div>

        {/* Tagline + CTA — bottom left */}
        <div
          className="absolute left-[75px] flex flex-col gap-4"
          style={{ bottom: "clamp(40px, 6%, 80px)" }}
        >
          <p className="text-white font-medium text-[clamp(14px,1.8vw,24px)] leading-snug max-w-[420px]">
            Transforming your vision
            <br />
            into measurable success
          </p>
          <button className="self-start flex items-center gap-2 bg-white text-black font-medium rounded-full px-6 py-3 text-[clamp(12px,1.1vw,15px)] hover:bg-white/90 transition-colors group">
            Get started now
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herotwo;