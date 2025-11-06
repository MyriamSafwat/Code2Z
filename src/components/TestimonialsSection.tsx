import { memo, useState } from 'react';
import { motion } from 'framer-motion';

// import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Disabled for performance
import { useMemo } from "react";
import testimonials from "../data/testimonialsData.ts";

const Testimonials = memo(function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Floating particles disabled for maximum performance
  const particles = useMemo(() => 
    [...Array(0)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 3,
    })),
    []
  );

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-800">
      {/*  Lottie Background - DISABLED FOR PERFORMANCE */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-black to-gray-800">
        {/* <DotLottieReact
          src="https://lottie.host/5cd7e966-9bf7-443b-8ecf-ccbd9872c5c5/f7fXtTdaRt.lottie"
          loop
          autoplay
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Wave pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2322c55e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Animated Background Orbs - DISABLED FOR PERFORMANCE */}
      {/* <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", right: "15%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-l from-cyan-400/15 to-green-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 80, 0],
            y: [0, 60, -30, 0],
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
              y: [0, -20, 0],
              x: [0, 10, -5, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
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
      {/* Title and subtitle text */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-aldrich text-center text-green-400 mb-4 drop-shadow-[0_0_8px_#22c55e] relative"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>
        <motion.span 
          className="text-center mt-0 mb-6 text-lg text-gray-400 font-electrolize mx-auto block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real Feedback from Our Valued Clients
        </motion.span>

        {/* Carousel container */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isHovered ? 120 : 70,
                ease: "linear",
              },
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {[...testimonials, ...testimonials].map((e, index) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#2C2C2C] to-[#1f1f1f] rounded-2xl p-5 min-w-[280px] md:min-w-0 flex flex-col justify-between w-[380px] h-[220px] shadow-lg border border-gray-700/30 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(34,197,94,0.1)",
                    borderColor: "rgba(34,197,94,0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-green-400 to-transparent" />
                    <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-green-400 to-transparent" />
                  </div>
                  
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.05) 0%, transparent 70%)",
                        "radial-gradient(circle at 70% 30%, rgba(34,197,94,0.05) 0%, transparent 70%)",
                        "radial-gradient(circle at 70% 70%, rgba(34,197,94,0.05) 0%, transparent 70%)",
                        "radial-gradient(circle at 30% 70%, rgba(34,197,94,0.05) 0%, transparent 70%)",
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative flex items-center justify-between pt-4 z-10">
                    {/* Left Area */}
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={e.image}
                        alt={e.name}
                        className="w-18 h-18 rounded-md object-cover border-2 border-transparent group-hover:border-green-400/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div>
                        <motion.h3 
                          className="text-[#EEEEEE] font-syncopate pb-2 tracking-wide"
                          whileHover={{ color: "#22c55e" }}
                          transition={{ duration: 0.2 }}
                        >
                          {e.name}
                        </motion.h3>
                        <motion.p 
                          className="text-sm font-orbitron text-[#1FB622]"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {e.jobTitle}
                        </motion.p>
                      </div>
                    </motion.div>
                    {/* Right Area */}
                    <motion.a
                      href="#"
                      className="text-[#EEEEEE] hover:text-green-700 rounded-full bg-[#1FB622] p-2 flex items-center justify-center mr-2 group-hover:bg-green-400 transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  </div>
                  {/* text */}
                  <motion.div 
                    className="relative border-t border-gray-200 pt-2 font-electrolize font-light text-sm tracking-wide text-[#EEEEEE] z-10"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {e.text}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;