import  { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrollProgressCircle from "./ScrollProgressCircle";
import Home from "../pages/Home";

type IntroProps = {
  onFinish?: () => void;
};

const sectionData = [
  { id: "s1", title: "C2Z", subtitle: "Your Digital Partner in Growth.", subtitle2: "We craft technology that empowers your vision." },
  { id: "s2", title: "Engineering Excellence", subtitle: "Building scalable, high-performance software.", subtitle2: "From web to mobile — engineered to perfection." },
  { id: "s3", title: "Creative Design", subtitle: "Where aesthetics meet functionality.", subtitle2: "Interfaces that engage, inspire, and convert." },
  { id: "s4", title: "Innovation at Heart", subtitle: "We push boundaries through smart solutions.", subtitle2: "Transforming ideas into tangible digital reality." },
  { id: "s5", title: "Collaborate & Grow", subtitle: "Partnerships built on trust and transparency.", subtitle2: "Together, we create lasting digital impact." },
];

export default function Intro({ onFinish }: IntroProps) {
  const [showHome, setShowHome] = useState(sessionStorage.getItem("introShown") === "true");
  const containerRef = useRef<HTMLDivElement>(null!);

  const finish = () => {
    const introWrapper = document.getElementById("intro-wrapper");
    if (introWrapper) {
      introWrapper.style.transition = "opacity 1.2s ease";
      introWrapper.style.opacity = "0";
    }
    sessionStorage.setItem("introShown", "true");
    setTimeout(() => {
      setShowHome(true);
      onFinish?.();
    }, 1800);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (container.scrollTop >= maxScroll - 2) finish();
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {!showHome ? (
        <motion.div
          id="intro-wrapper"
          ref={containerRef}
          className="intro-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {sectionData.map((s, idx) => (
            <IntroSection key={s.id} title={s.title} subtitle={s.subtitle} subtitle2={s.subtitle2} index={idx} />
          ))}

          <div className="text-white text-sm mt-4 text-center">Scroll to explore • Or skip</div>

          <ScrollProgressCircle containerId="intro-wrapper" onSkip={() => finish()} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// COMPONENT: IntroSection
function IntroSection({ title, subtitle, subtitle2, index }: { title: string; subtitle: string; subtitle2?: string; index: number }) {
  const ref = useRef<HTMLElement>(null!);
  const isInView = useInView(ref as React.RefObject<Element>, { margin: "-10% 0px -10% 0px", amount: 0.5 });

  const animationPresets = [
    {
      title: { hidden: { y: -90, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 1.8, ease: "easeOut" } },
      subtitle: { hidden: { x: 80, opacity: 0 }, visible: { x: 0, opacity: 1 }, transition: { duration: 2, delay: 0.4, ease: "easeOut" } },
      subtitle2: { hidden: { x: 80, opacity: 0 }, visible: { x: 0, opacity: 1 }, transition: { duration: 2, delay: 0.4, ease: "easeOut" } },
    },
    {
      title: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 }, transition: { duration: 2, delay: 1.4, ease: "easeOut" } },
      subtitle: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 1.6, ease: "easeOut" } },
      subtitle2: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 1.6, ease: "easeOut" } },
    },
    {
      title: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 }, transition: { duration: 2, delay: 2.4, ease: "easeOut" } },
      subtitle: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 2.6, ease: "easeOut" } },
      subtitle2: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 2.6, ease: "easeOut" } },
    },
    {
      title: { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 2, ease: "easeOut" } },
      subtitle: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 2.2, ease: "easeOut" } },
      subtitle2: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 }, transition: { duration: 2, delay: 2.2, ease: "easeOut" } },
    },
    {
      title: { hidden: { rotate: -10, scale: 0.8, opacity: 0 }, visible: { rotate: 0, scale: 1, opacity: 1 }, transition: { duration: 2, delay: 2.4, ease: "easeOut" } },
      subtitle: { hidden: { opacity: 0 }, visible: { opacity: 1 }, transition: { duration: 2, delay: 2.6, ease: "easeOut" } },
      subtitle2: { hidden: { opacity: 0 }, visible: { opacity: 1 }, transition: { duration: 2, delay: 2.6, ease: "easeOut" } },
    },
  ];

  const { title: titleVariants, subtitle: subtitleVariants, subtitle2: subtitle2Variants } = animationPresets[index % animationPresets.length];

  const gradients = [
    "linear-gradient(270deg, #090909,rgba(17,77,18,0.34), #090909)",
    "linear-gradient(270deg, #090909,rgba(17,77,18,0.34), #090909)",
    "linear-gradient(270deg, #090909,rgba(17,77,18,0.39), #090909)",
    "linear-gradient(270deg, #090909,rgba(17,77,18,0.44), #090909)",
    "linear-gradient(270deg, #090909,rgba(17,77,18,0.49), #090909)",
  ];

  return (
    <motion.section
      ref={ref}
      className="intro-section flex flex-col justify-center items-center relative min-h-screen text-white text-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Grid */}
      <motion.div
        className="animated-grid"
        initial={{ opacity: 0, y: -24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {[...Array(10)].map((_, row) => (
          <div className="grid grid-cols-12" key={row}>
            {[...Array(12)].map((_, col) => (
              <div className="grid-cell" key={col}></div>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: gradients[index % gradients.length],
          backgroundSize: "300% 300%",
          zIndex: -2,
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        className="font-bold"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        style={{
          fontSize: "clamp(3rem, 6vw, 6rem)",
          letterSpacing: "2px",
          textShadow: "0 8px 32px rgba(255,255,255,0.2)",
        }}
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 max-w-xl opacity-85 text-lg"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={subtitleVariants}
        style={{ lineHeight: 1.6 }}
      >
        {subtitle}
      </motion.p>

      {/* Subtitle 2 */}
      <motion.p
        className="mt-4 max-w-xl opacity-85 text-lg"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={subtitle2Variants}
        style={{ lineHeight: 1.6 }}
      >
        {subtitle2}
      </motion.p>
    </motion.section>
  );
}
