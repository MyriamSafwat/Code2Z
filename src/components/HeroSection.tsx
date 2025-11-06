import { memo } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from "react";

const HeroSection = memo(function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoize particle positions to prevent recalculation on every render
  const particlePositions = useMemo(() => 
    [...Array(8)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 80 + Math.random() * 2,
      delay: Math.random() * 2,
    })),
    []
  );

  // Floating code snippets
  const codeSnippets = useMemo(() => [
    { text: "</>", left: 10, top: 20, delay: 0 },
    { text: "{ }", left: 85, top: 15, delay: 0.5 },
    { text: "→", left: 15, top: 75, delay: 1 },
    { text: "★", left: 90, top: 70, delay: 1.5 },
  ], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-[#16c060] rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-[#23e276] rounded-full blur-3xl opacity-15"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, #16c060 0%, transparent 100%)`,
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#16c060] rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute text-[#16c060] font-mono text-3xl font-bold opacity-20"
            style={{
              left: `${snippet.left}%`,
              top: `${snippet.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: snippet.delay,
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-auto min-h-[70vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-6xl md:text-6xl lg:text-8xl font-michroma text-white mt-18 mb-10 leading-tight tracking-wider"
          >
            Code<span className="text-[#16c060]">2</span>Z
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-2xl md:text-2xl font-electrolize text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Transforming ideas into powerful digital solutions with cutting-edge technology and innovative design.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            {["Web Apps", "Mobile Apps", "AI Solutions", "Cloud Infrastructure"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group relative px-3 sm:px-4 py-1.5 sm:py-2 border border-[#16c060]/20 rounded-lg text-[#eaeaea]/80 text-xs sm:text-sm font-medium transition-all cursor-default overflow-hidden"
                style={{ backgroundColor: "rgba(22,192,96,0.05)" }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(22,192,96,0.1)"
                }}
              >
                {/* Animated traveling border on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Top */}
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#16c060] to-transparent animate-border-travel-horizontal" />
                  {/* Right */}
                  <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#23e276] to-transparent animate-border-travel-vertical" style={{ animationDelay: '0.25s' }} />
                  {/* Bottom */}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#16c060] to-transparent animate-border-travel-horizontal" style={{ animationDelay: '0.5s' }} />
                  {/* Left */}
                  <span className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#23e276] to-transparent animate-border-travel-vertical" style={{ animationDelay: '0.75s' }} />
                </span>
                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-gradient-to-r from-[#16c060]/20 via-[#23e276]/20 to-[#16c060]/20" />
                {/* Text content */}
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              aria-label="Start your project with C2Z"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#16c060] text-black font-syncopate-bold text-base sm:text-lg rounded-lg hover:bg-[#14a855] transition-colors duration-300 flex items-center justify-center gap-2 min-w-[200px]"
            >
              <span className="relative text-sm z-10 flex items-center gap-2">
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#23e276] to-[#16c060] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => scrollToSection("#portfolio")}
              aria-label="View our portfolio"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#16c060] text-[#16c060] font-syncopate text-base sm:text-lg rounded-lg hover:bg-[#16c060] hover:text-black transition-colors duration-300 min-w-[200px]"
            >
              <span className="flex items-center text-sm gap-2">
                View Portfolio
                <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </button>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
});

export default HeroSection;