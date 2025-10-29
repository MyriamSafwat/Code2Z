import React, { useEffect, useState, useRef } from "react";

type Props = {
  containerId?: string;
  onSkip: () => void;
};

const SIZE = 64;
const STROKE = 6;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUM = 2 * Math.PI * RADIUS;

export default function ScrollProgressCircle({ containerId = "intro-wrapper", onSkip }: Props) {
  const [progress, setProgress] = useState<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const calc = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const raw = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      setProgress(raw);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calc);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    calc();

    return () => {
      container.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerId]);

  const dashOffset = CIRCUM * (1 - progress);

  return (
    <div className="progress-circle" role="region" aria-label="Intro progress">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <defs>
          <linearGradient id="grad1" x1="0" x2="1">
            <stop offset="0%" stopColor="#1FB622" />
            <stop offset="100%" stopColor="#25C233" />
          </linearGradient>
        </defs>

        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={STROKE}
          fill="transparent"
        />

        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke="url(#grad1)"
          strokeWidth={STROKE}
          fill="transparent"
          strokeDasharray={CIRCUM}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 200ms linear" }}
        />
      </svg>

      <button
        aria-label="Skip Intro"
        className="progress-center-btn"
        onClick={() => onSkip()}
        title="Skip Intro"
      >
        {Math.round(progress * 100) === 100 ? "Go" : "Skip"}
      </button>
    </div>
  );
}
