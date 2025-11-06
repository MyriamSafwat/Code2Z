import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-width bg-cover bg-center text-[#E7E7E7] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-poppins"
      style={{
        backgroundImage: "url('bg.jpg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side */}
          <motion.div 
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-michroma mb-15 text-transparent bg-clip-text bg-gradient-to-r from-[#24E06F] to-[#78FFB5] drop-shadow-[0_0_5px_rgba(36,224,111,0.4)] tracking-wider">
              Code2Z
            </h2>

            <p className="text-[#DCDCDC] text-sm sm:text-base font-electrolize leading-relaxed mb-4 sm:mb-5 max-w-full lg:max-w-[400px]">
              We help you build a powerful digital future through smart, modern
              solutions tailored to your business needs. Let your brand grow
              with strong identity and cutting-edge technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <motion.a 
                href="mailto:info@code2z.com"
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-7 h-7 bg-gradient-to-br from-[#24E06F] to-[#78FFB5] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#24E06F] font-syncopate text-xs tracking-wide">Email</p>
                  <p className="text-[#DCDCDC] font-orbitron text-sm group-hover:text-[#24E06F] transition-colors">info@code2z.com</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://wa.me/201277697483"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-7 h-7 bg-gradient-to-br from-[#24E06F] to-[#78FFB5] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#24E06F] font-syncopate text-xs tracking-wide">WhatsApp</p>
                  <p className="text-[#DCDCDC] font-orbitron text-sm group-hover:text-[#24E06F] transition-colors">+(20) 127 769 7483</p>
                </div>
              </motion.a>

              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-7 h-7 bg-gradient-to-br from-[#24E06F] to-[#78FFB5] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#24E06F] font-syncopate text-xs tracking-wide">Address</p>
                  <p className="text-[#DCDCDC] font-orbitron text-sm">10th of Ramadan street, Egypt</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div 
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-[#24E06F] text-xl sm:text-2xl mb-4 font-aldrich tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>
            <motion.form 
              className="flex flex-col gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-gradient-to-r from-[#151515] to-[#1a1a1a] border border-[#24E06F] text-[#E5E5E5] text-sm placeholder:text-gray-400 focus:bg-gradient-to-r focus:from-[#1E1E1E] focus:to-[#252525] focus:border-[#2AFF84] focus:shadow-[0_0_15px_rgba(36,224,111,0.3)] outline-none transition-all duration-300 hover:border-[#2AFF84] hover:shadow-[0_0_10px_rgba(36,224,111,0.2)]"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded-lg bg-gradient-to-r from-[#151515] to-[#1a1a1a] border border-[#24E06F] text-[#E5E5E5] text-sm placeholder:text-gray-400 focus:bg-gradient-to-r focus:from-[#1E1E1E] focus:to-[#252525] focus:border-[#2AFF84] focus:shadow-[0_0_15px_rgba(36,224,111,0.3)] outline-none transition-all duration-300 hover:border-[#2AFF84] hover:shadow-[0_0_10px_rgba(36,224,111,0.2)]"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-lg bg-gradient-to-r from-[#151515] to-[#1a1a1a] border border-[#24E06F] text-[#E5E5E5] text-sm placeholder:text-gray-400 focus:bg-gradient-to-r focus:from-[#1E1E1E] focus:to-[#252525] focus:border-[#2AFF84] focus:shadow-[0_0_15px_rgba(36,224,111,0.3)] outline-none transition-all duration-300 hover:border-[#2AFF84] hover:shadow-[0_0_10px_rgba(36,224,111,0.2)]"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.textarea
                placeholder="Project Description"
                required
                className="w-full p-3 rounded-lg bg-gradient-to-r from-[#151515] to-[#1a1a1a] border border-[#24E06F] text-[#E5E5E5] text-sm h-28 resize-none placeholder:text-gray-400 focus:bg-gradient-to-r focus:from-[#1E1E1E] focus:to-[#252525] focus:border-[#2AFF84] focus:shadow-[0_0_15px_rgba(36,224,111,0.3)] outline-none transition-all duration-300 hover:border-[#2AFF84] hover:shadow-[0_0_10px_rgba(36,224,111,0.2)]"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="group relative w-full bg-transparent border-2 border-[#24E06F] text-[#24E06F] font-orbitron p-3 rounded-lg text-sm tracking-wide overflow-hidden transition-all duration-300 hover:text-[#0D0D0D] hover:shadow-[0_0_25px_rgba(36,224,111,0.4)] before:absolute before:inset-0 before:bg-[#24E06F] before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
