//AboutUs.tsx
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage1 from "../assets/about/about1.jpg";
import aboutImage2 from "../assets/about/about2.jpg";
import aboutImage3 from "../assets/about/about3.jpg";

interface AboutItem {
  title: string;
  text: string;
  image: string;
}

const aboutData: AboutItem[] = [
  {
    title: "Our History",
    text: "Our History:We began with a simple vision: to bridge the gap between theoretical knowledge and practical application. Our journey started in a small classroom, fueled by our passion for teaching programming. Through intensive workshops and mentoring sessions, we have graduated a generation of skilled developers who are now contributing to building the digital future. This is our cherished legacy, the foundation upon which we continue to build.",
    image: aboutImage1,
  },
  {
    title: "Our Mission:",
    text: "Our mission is to build a smarter, more efficient digital world by developing systems based on logical and analytical thinking. We believe that technology is the key to progress, and we are always seeking to provide innovative solutions that empower our clients to achieve their goals and exceed their expectations.",
    image: aboutImage2,
  },
  {
    title: "Our vision:",
    text: "We envision a world where achievements are forged through productive teamwork. We believe our strength lies in uniting our efforts and drawing upon our diverse backgrounds to create a brighter and more inclusive future.",
    image: aboutImage3,
  },
];

export default function AboutUs(): React.JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  // Floating particles disabled for maximum performance
  const particles = useMemo(() => 
    [...Array(0)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 8,
      delay: Math.random() * 3,
    })),
    []
  );

  // Typewriter effect for text
  useEffect(() => {
    const currentText = aboutData[index].text;
    let i = 0;
    setDisplayedText("");
    setIsTyping(true);
    
    const typeWriter = setInterval(() => {
      if (i < currentText.length) {
        setDisplayedText(currentText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typeWriter);
      }
    }, 30);
    
    return () => clearInterval(typeWriter);
  }, [index]);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p: number) => (p + 1) % aboutData.length),
      8000 // Increased to allow typewriter to complete
    );
    return () => clearInterval(t);
  }, []);

  const current: AboutItem = aboutData[index];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-15">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Animated diagonal lines - DISABLED FOR PERFORMANCE */}
        {/* <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(34,197,94,0.05) 100px,
              rgba(34,197,94,0.05) 102px
            )`
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        /> */}
      </div>
      
      {/* Animated orbs - DISABLED FOR PERFORMANCE */}
      {/* <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -100, 80, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", right: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-l from-cyan-400/15 to-green-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 100, -60, 0],
            scale: [0.8, 1.2, 0.9, 0.8],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "15%", left: "10%" }}
        />
      </div> */}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-green-400 rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, -5, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-aldrich text-center text-green-400 mb-4 drop-shadow-[0_0_8px_#22c55e] relative"
        >
          About Us
        </motion.h2>

        <motion.div className="flex justify-center w-full">
          <motion.div 
            className="text-gray-300 mb-8 sm:mb-12 max-w-2xl text-center font-electrolize text-lg sm:text-xl leading-relaxed relative px-4"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
            
            {/* Glowing text effect */}
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(34,197,94,0)",
                  "0 0 8px rgba(34,197,94,0.3)",
                  "0 0 0px rgba(34,197,94,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Learn more about our mission, values, and how we work.
            </motion.span>
            
            {/* Floating particles around text */}
            <motion.div
              className="absolute -top-2 -left-2 w-1 h-1 bg-green-400 rounded-full opacity-60"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute -top-1 right-4 w-1 h-1 bg-emerald-400 rounded-full opacity-60"
              animate={{
                y: [0, -6, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-1 left-8 w-1 h-1 bg-green-300 rounded-full opacity-60"
              animate={{
                y: [0, -4, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full max-w-5xl px-4 gap-8 md:gap-0">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 via-transparent to-green-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <motion.img
                  src={current.image}
                  alt={current.title}
                  className="relative rounded-xl shadow-neon w-full h-64 sm:h-80 object-cover border-2 border-transparent group-hover:border-green-400/30 transition-all duration-500"
                  whileHover={{ y: -5 }}
                />
                {/* Floating overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-green-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(34,197,94,0.1) 0%, transparent 50%, rgba(34,197,94,0.1) 100%)",
                      "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, transparent 50%, rgba(34,197,94,0.1) 100%)",
                      "linear-gradient(225deg, rgba(34,197,94,0.1) 0%, transparent 50%, rgba(34,197,94,0.1) 100%)",
                      "linear-gradient(315deg, rgba(34,197,94,0.1) 0%, transparent 50%, rgba(34,197,94,0.1) 100%)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.h3 
                  className="text-3xl font-syncopate text-cyber-green mb-4 border-b border-green-700 inline-block"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {current.title}
                </motion.h3>
                
                {/* Typewriter text */}
                <div className="text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                  <motion.p
                    className="font-orbitron"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {displayedText}
                    {isTyping && (
                      <motion.span
                        className="inline-block w-0.5 h-5 bg-green-400 ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    )}
                  </motion.p>
                </div>

                <motion.button 
                  className="group relative bg-transparent border-2 border-green-400 text-green-400 font-bold px-8 py-3 rounded-lg overflow-hidden transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 0 30px rgba(34,197,94,0.6), 0 0 60px rgba(34,197,94,0.4), 0 0 90px rgba(34,197,94,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {/* Animated background layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Glitch effect bars */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-[2px] bg-green-400"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover fill effect */}
                  <motion.div
                    className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20"
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                    whileHover={{ 
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                      opacity: 0.2
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  
                  {/* Text content */}
                  <span className="relative z-10 flex items-center font-michroma text-xs tracking-wide gap-3 group-hover:text-white transition-colors duration-300">
                    <motion.span
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(34,197,94,0)",
                          "0 0 10px rgba(34,197,94,0.8)",
                          "0 0 0px rgba(34,197,94,0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      READ MORE
                    </motion.span>
                    
                    {/* Animated arrow with trail effect */}
                    <div className="relative">
                      <motion.span
                        className="text-xl"
                        animate={{ 
                          x: [0, 8, 0],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                      <motion.span
                        className="absolute top-0 left-0 text-xl opacity-30"
                        animate={{ 
                          x: [0, 4, 0],
                          opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                      >
                        →
                      </motion.span>
                      <motion.span
                        className="absolute top-0 left-0 text-xl opacity-10"
                        animate={{ 
                          x: [0, 2, 0],
                          opacity: [0.1, 0.05, 0.1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </span>
                  
                  {/* Pulse effect on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-green-400 rounded-lg opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
