// src/components/AnimatedShapes.tsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedShapes: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // سمك الخط بيتغير مع الاسكرول
  const strokeWidth = useTransform(scrollYProgress, [0, 0.5, 1], [1, 8, 2]);
  // حجم الدوائر بيتغير تدريجيًا
  const circleRadius = useTransform(scrollYProgress, [0.6, 1], [0, 50]);
  // اللون بيتغير كمان بالتدريج
  const strokeColor = useTransform(scrollYProgress, [0, 1], ["#1FB622", "#25C233"]);

  return (
    <motion.svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      viewBox="0 0 800 600"
    >
      {/* خطوط متحركة */}
      <motion.line
        x1="100"
        y1="100"
        x2="700"
        y2="100"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <motion.line
        x1="100"
        y1="200"
        x2="700"
        y2="200"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* دوائر تظهر بالتدريج في المرحلة الأخيرة */}
      <motion.circle
        cx="200"
        cy="400"
        r={circleRadius}
        stroke={strokeColor}
        strokeWidth="3"
        fill="transparent"
      />
      <motion.circle
        cx="600"
        cy="400"
        r={circleRadius}
        stroke={strokeColor}
        strokeWidth="3"
        fill="transparent"
      />
    </motion.svg>
  );
};

export default AnimatedShapes;
