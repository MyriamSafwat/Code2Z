import { FaLaptopCode, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMemo } from "react";

const ServicesSection = () => {
  const particles = useMemo(
    () =>
      [...Array(15)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  const services = [
    {
      title: "Web Design & Development",
      icon: FaLaptopCode,
      items: [
        "Custom Web Development",
        "Responsive UI/UX",
        "E-Commerce Platforms",
        "Corporate Websites",
      ],
    },
    {
      title: "Marketing Services & Technical Support",
      icon: FaChartLine,
      items: [
        "Digital Marketing (SEO & Ads)",
        "Technical Support & Maintenance",
        "Team Training",
        "Social Media Management",
      ],
    },
    {
      title: "Mobile Application Development",
      icon: FaMobileAlt,
      items: [
        "User-First UI/UX",
        "API & Dashboard Integration",
        "Publishing to Play Store & App Store",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-black text-gray-200 py-12 sm:py-20 px-4 sm:px-8 font-poppins overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute w-3/4 sm:w-96 h-3/4 sm:h-96 bg-gradient-to-r from-[#24E06F]/20 to-[#1BC65F]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "70%" }}
        />
        <motion.div
          className="absolute w-2/3 sm:w-80 h-2/3 sm:h-80 bg-gradient-to-l from-[#24E06F]/15 to-[#78FFB5]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "20%", left: "10%" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-[#24E06F] rounded-full opacity-20"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl text-center font-michroma text-green-400 mb-4 tracking-wide drop-shadow-[0_0_8px_#22c55e]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-center text-base sm:text-lg font-electrolize text-gray-300 mb-12 sm:mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Complete solutions for your project start here.
          <br />
          We offer a wide range of technical and consulting services to
          accelerate growth.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-gradient-to-br from-[#0E0E0E] to-[#1a1a1a] border border-neutral-800 rounded-2xl 
                         flex flex-col justify-between p-6 sm:p-8 hover:border-[#24E06F]
                         hover:shadow-[0_0_25px_rgba(36,224,111,0.2)]
                         transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#24E06F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(36,224,111,0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(36,224,111,0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(36,224,111,0.05) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(36,224,111,0.05) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Icon + Title */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <service.icon className="text-[#24E06F] text-3xl sm:text-4xl mx-auto mb-4 drop-shadow-[0_0_10px_rgba(36,224,111,0.3)]" />
                </motion.div>
                <h3 className="text-[#24E06F] text-lg sm:text-xl text-center font-aldrich mb-4 tracking-wide">
                  {service.title}
                </h3>

                {/* List */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 text-sm sm:text-base font-electrolize flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + i * 0.1,
                      }}
                      whileHover={{ x: 8, color: "#24E06F" }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-[#24E06F] rounded-full flex-shrink-0"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative text-center bg-gradient-to-br from-[#121212] to-[#1a1a1a] border-2 border-[#24E06F] rounded-2xl p-6 sm:p-10 mt-12 sm:mt-16 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="relative text-xl sm:text-2xl font-aldrich text-[#24E06F] mb-3 tracking-wide">
            Are you ready for your digital leap?
          </motion.h3>
          <p className="relative text-gray-300 text-sm sm:text-base font-electrolize mb-6 leading-relaxed">
            Don't let your website be just an online presence. <br />
            Make it a powerful tool that works for you.
          </p>
          <motion.a
            href="#contact"
            className="relative inline-block bg-[#24E06F] text-[#0D0D0D] font-michroma text-sm px-6 py-3 rounded-lg
                       hover:bg-[#1BC65F] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
