import React from "react";

const RotatingBadge = ({ size = "lg" }) => {
  const config = {
    sm: {
      outer: 80,
      cx: 40,
      r: 40,
      pathR: 29,
      fontSize: 5.5,
      inner: 40,
      plusSize: "18px",
      text: "BEST SOLUTION • BEST SOLUTION • BEST SOLUTION • BEST SOLUTION •",
    },
    md: {
      outer: 110,
      cx: 55,
      r: 55,
      pathR: 40,
      fontSize: 6.5,
      inner: 55,
      plusSize: "24px",
      text: "BEST SOLUTION • BEST SOLUTION • BEST SOLUTION • BEST SOLUTION •",
    },
    lg: {
      outer: 146,
      cx: 73,
      r: 73,
      pathR: 55,
      fontSize: 7.5,
      inner: 73,
      plusSize: "30px",
      text: "BEST SOLUTION • BEST SOLUTION • BEST SOLUTION • BEST SOLUTION •",
    },
  };

  const c = config[size];

  // unique id — multiple instance for reduce conflict 
  const pathId = `textCircle-${size}-${Math.random().toString(36).slice(2, 7)}`;

  const circumference = +(2 * Math.PI * c.pathR).toFixed(2);

  const wrapperStyle =
    size === "lg"
      ? {
          width: "clamp(90px, 10vw, 146px)",
          height: "clamp(90px, 10vw, 146px)",
        }
      : { width: `${c.outer}px`, height: `${c.outer}px` };

  const innerStyle =
    size === "lg"
      ? {
          width: "clamp(45px, 5vw, 73px)",
          height: "clamp(45px, 5vw, 73px)",
        }
      : { width: `${c.inner}px`, height: `${c.inner}px` };

  const plusStyle =
    size === "lg"
      ? { fontSize: "clamp(16px, 1.8vw, 30px)" }
      : { fontSize: c.plusSize };

  // arc path — Safari & Firefox - reliable
  const arcPath = [
    `M ${c.cx}, ${c.cx}`,
    `m -${c.pathR}, 0`,
    `a ${c.pathR},${c.pathR} 0 1,1 ${c.pathR * 2},0`,
    `a ${c.pathR},${c.pathR} 0 1,1 -${c.pathR * 2},0`,
  ].join(" ");

  return (
    <div
      className="relative flex items-center justify-center"
      style={wrapperStyle}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        width={c.outer}
        height={c.outer}
        viewBox={`0 0 ${c.outer} ${c.outer}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          // CSS animation 
          animation: "rotateBadge 12s linear infinite",
          display: "block", 
        }}
      >
        {/* background circle */}
        <circle cx={c.cx} cy={c.cx} r={c.r} fill="#1a1a1a" />

        <defs>
          <path id={pathId} d={arcPath} />
        </defs>

        <text
          fill="white"
          fontWeight="600"
          fontSize={c.fontSize}
          // cross-browser font stack
          fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
          letterSpacing="0.5"
        >
          <textPath
            // href modern + xlinkHref legacy Safari/older browser
            href={`#${pathId}`}
            xlinkHref={`#${pathId}`}
            startOffset="0%"
        
          >
            {c.text}
          </textPath>
        </text>
      </svg>

   
      <div
        className="absolute rounded-full bg-[#F4F3F0] flex items-center justify-center shadow-md z-10"
        style={{
          ...innerStyle,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
         
        }}
      >
        <span
          style={{
            ...plusStyle,
            color: "#1a1a1a",
            fontWeight: "700",
            lineHeight: "1",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
          className="pr-[5px]"
        >
          +
        </span>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes rotateBadge {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RotatingBadge;