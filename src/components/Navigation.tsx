import { memo } from 'react';
// src/components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = memo(function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
      className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[95%] max-w-6xl px-2 md:px-0"
    >
      <motion.div 
        className="relative max-w-7xl mx-auto px-3 md:px-6 py-3 md:py-4 flex justify-between items-center bg-[#0a0a0c]/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-[#16c060]/20 overflow-visible z-[80]"
        whileHover={{ 
          borderColor: "rgba(22,192,96,0.4)",
          boxShadow: "0 0 30px rgba(22,192,96,0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#16c060]/5 via-transparent to-[#16c060]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(22,192,96,0.05) 0%, transparent 50%, rgba(22,192,96,0.05) 100%)",
              "linear-gradient(270deg, rgba(22,192,96,0.05) 0%, transparent 50%, rgba(22,192,96,0.05) 100%)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="relative flex items-center space-x-4 z-10"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div>
            <img src={logo} alt="logo" className="cover w-13 h-13 transition-all duration-300" />
          </motion.div>
          <motion.span 
            className="text-lg font-michroma text-white tracking-wide"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Code<motion.span 
              className="text-[#16c060]"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(22,192,96,0.5)",
                  "0 0 10px rgba(22,192,96,0.8)",
                  "0 0 5px rgba(22,192,96,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >2</motion.span>Z
          </motion.span>
        </motion.div>

        <div className="relative flex items-center space-x-6 z-10">
          <ul className="hidden lg:flex space-x-8 text-white">
            {[
              { name: "Home", link: "#home" },
              { name: "About Us", link: "#about" },
              { name: "Our Services", link: "#services" },
              { name: "Our Portfolio", link: "#portfolio" },
            ].map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.a
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.link);
                  }}
                  className="relative text-[#eaeaea]/70 hover:text-[#16c060] font-electrolize transition-colors duration-200 cursor-none group tracking-wide"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    textShadow: "0 0 8px rgba(22,192,96,0.6)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#16c060] to-[#23e276] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{ backgroundColor: "rgba(22,192,96,0.1)" }}
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="group relative hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#16c060] to-[#23e276] text-[#0a0a0c] font-electrolize rounded-lg transition-all duration-200 overflow-hidden tracking-wide"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px rgba(22,192,96,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#23e276] to-[#16c060] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg relative z-50"
            style={{ backgroundColor: "rgba(22,192,96,0.1)" }}
            onClick={() => setIsMobileMenuOpen(true)}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(22,192,96,0.2)",
              boxShadow: "0 0 15px rgba(22,192,96,0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <motion.svg 
              className="w-5 h-5 text-[#16c060]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Mobile Menu Panel */}
                <motion.div 
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="fixed top-0 right-0 w-[85%] sm:w-80 h-screen bg-gradient-to-br from-[#0a0a0c]/95 via-[#141619]/95 to-[#0a0a0c]/95 backdrop-blur-2xl border-l-2 border-[#16c060]/30 shadow-2xl shadow-[#16c060]/20 z-[70] flex flex-col"
                >
                  {/* Header */}
                  <div className="flex justify-between items-center p-6 border-b border-[#16c060]/20">
                    <motion.h2 
                      className="text-xl font-michroma text-[#16c060] tracking-wider"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      MENU
                    </motion.h2>
                    <motion.button 
                      className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
                      style={{ backgroundColor: "rgba(22,192,96,0.1)" }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 90,
                        backgroundColor: "rgba(22,192,96,0.2)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.svg 
                        className="w-6 h-6 text-[#16c060]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </motion.svg>
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col justify-between px-6">
                    <ul className="mt-10 space-y-6">
                      {[
                        { name: "Home", link: "#home" },
                        { name: "About Us", link: "#about" },
                        { name: "Our Services", link: "#services" },
                        { name: "Our Portfolio", link: "#portfolio" },
                        { name: "Testimonials", link: "#testimonials" },
                        { name: "Contact", link: "#contact" },
                      ].map((item, index) => (
                        <motion.li 
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <motion.a
                            href={item.link}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(item.link);
                              setIsMobileMenuOpen(false);
                            }}
                            className="group relative block text-lg font-electrolize text-[#eaeaea]/70 hover:text-[#16c060] p-2 border-l-2 rounded-md border-[#16c060]/30 transition-colors duration-300 tracking-wide"
                          >
                            <span className="relative z-10">{item.name}</span>
                            {/* Animated underline */}
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#16c060] to-[#23e276] origin-left"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                            {/* Glow effect */}
                            <motion.div
                              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                              style={{ backgroundColor: "rgba(22,192,96,0.05)" }}
                            />
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="p-6 border-t mt-5 border-[#16c060]/20">
                    <motion.button
                      onClick={() => {
                        scrollToSection("#contact");
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full py-3 px-6 bg-gradient-to-r from-[#16c060] to-[#23e276] text-[#0a0a0c] font-syncopate-bold text-sm rounded-lg transition-all duration-300 overflow-hidden relative group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="relative z-10">GET IN TOUCH</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#23e276] to-[#16c060] opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.nav>
  );
  //   const scrollToSection = (href: string) => {
  //     const element = document.querySelector(href);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   return (
  //     <motion.nav
  //       initial={{ y: -100, opacity: 0 }}
  //       animate={{ y: 0, opacity: 1 }}
  //       transition={{ duration: 0.5, ease: "easeOut" }}
  //       className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl"
  //     >
  //       <div className="relative">
  //         {/* Glass background with subtle border */}
  //         <div className="absolute inset-0 bg-[#0a0a0c]/60 backdrop-blur-xl rounded-2xl border border-[#16c060]/20" />

  //         {/* Content */}
  //         <div className="relative px-6 py-3.5 flex justify-between items-center">

  //           {/* Logo */}
  //           <a
  //             href="#home"
  //             onClick={(e) => {
  //               e.preventDefault();
  //               scrollToSection("#home");
  //             }}
  //             className="flex items-center gap-2.5 group cursor-pointer"
  //           >
  //             <div className="w-9 h-9 bg-gradient-to-br from-[#16c060] to-[#23e276] rounded-lg flex items-center justify-center shadow-lg shadow-[#16c060]/20 group-hover:shadow-[#16c060]/40 transition-all duration-300">
  //               <span className="text-[#0a0a0c] font-black text-lg">C2Z</span>
  //             </div>
  //             <span className="text-lg font-bold text-white">
  //               Code<span className="text-[#16c060]">2</span>Z
  //             </span>
  //           </a>

  //           {/* Desktop Navigation */}
  //           <ul className="hidden md:flex items-center gap-8">
  //             {[
  //               { name: "Home", link: "#home" },
  //               { name: "About", link: "#about" },
  //               { name: "Services", link: "#services" },
  //               { name: "Portfolio", link: "#portfolio" },
  //             ].map((item: NavItem) => (
  //               <li key={item.name}>
  //                 <a
  //                   href={item.link}
  //                   onClick={(e) => {
  //                     e.preventDefault();
  //                     scrollToSection(item.link);
  //                   }}
  //                   className="text-[#eaeaea]/70 hover:text-[#16c060] font-medium text-sm transition-colors duration-200"
  //                 >
  //                   {item.name}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>

  //           {/* CTA Button */}
  //           <button
  //             onClick={() => scrollToSection("#contact")}
  //             className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#16c060] to-[#23e276] text-[#0a0a0c] font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-[#16c060]/30 hover:scale-105 transition-all duration-200"
  //           >
  //             Let's Talk
  //             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //             </svg>
  //           </button>

  //           {/* Mobile Menu Button */}
  //           <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-[#16c060]/10 hover:bg-[#16c060]/20 transition-colors">
  //             <svg className="w-5 h-5 text-[#16c060]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  //             </svg>
  //           </button>

  //         </div>
  //       </div>
  //     </motion.nav>
  //   );
  // }
});

export default Navbar;