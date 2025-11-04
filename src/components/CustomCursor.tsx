import  { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth Move
  const springX = useSpring(x, { stiffness: 250, damping: 25 });
  const springY = useSpring(y, { stiffness: 250, damping: 25 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 15);
      y.set(e.clientY - 15);
    };

    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .interactive").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .interactive").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [x, y]);

  return (
    <motion.div
      {...({ className: "custom-cursor" } as any)}
      style={{
        translateX: springX,
        translateY: springY,
        scale: hovered ? 1.8 : 1,
        opacity: hovered ? 0.9 : 0.6,
        background: "radial-gradient(circle,rgba(37, 194, 50, 0.74) 0%, #1FB622 80%)",
        boxShadow: hovered
          ? "0 0 40px 10px rgba(37,194,51,0.6)"
          : "0 0 20px 4px rgba(37,194,51,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
