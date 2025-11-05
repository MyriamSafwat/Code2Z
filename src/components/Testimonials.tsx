import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import testimonials from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/*  Lottie Background */}
      <div className="absolute inset-0 -z-10">
        <DotLottieReact
          src="https://lottie.host/5cd7e966-9bf7-443b-8ecf-ccbd9872c5c5/f7fXtTdaRt.lottie"
          loop
          autoplay
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-20"></div>
      </div>
      {/* Title and subtitle text */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-oxanium font-bold mb-2 text-center text-[#1FB622]">
          What Our Clients Say
        </h2>
        <span className="text-center mt-0 mb-6 text-lg font-bold shadow-lg font-cairo">
         Real Feedback from Our Valued Clients
        </span>
        {/* Carousel container */}
        <div className="overflow-hidden w-full">
           <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }} 
          >
            {[...testimonials, ...testimonials].map((e, index) => {
              const Icon = e.icon; 
              return (
                <div
                  key={index}
                  className="bg-[#2C2C2C] rounded-2xl  p-5 min-w-[280px] md:min-w-0 flex flex-col justify-between w-[380px] h-[220px] shadow-lg"
                >
                  <div className="flex items-center justify-between pt-4">
                    {/* Left Area */}
                    <div className="flex items-center gap-3">
                      <img
                        src={e.image}
                        alt={e.name}
                        className="w-18 h-18 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-[#EEEEEE] font-cairo pb-2">{e.name}</h3>
                        <p className="text-sm font-cairo text-[#1FB622]">{e.jobTitle}</p>
                      </div>
                    </div>
                    {/* Right Area */}
                    <a href="#" className="text-[#EEEEEE] hover:text-green-700 rounded-full bg-[#1FB622] p-2 flex items-center justify-center mr-2">
                      <Icon size={18} />
                    </a>
                  </div>
                  {/* text */}
                  <div className="border-t border-gray-200 pt-2 font-cairo text-[#EEEEEE] ">
                    {e.text}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
