"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";
import project6 from "../assets/projects/project6.jpg";

const projects = [
  {
    title: "Crypto Monitoring Website Design",
    description: "A sleek, dark-mode landing page concept for a cryptocurrency tracking and trading platform.",
    image: project1,
  },
  {
    title: "NFT Marketplace Landing Page",
    description: "A vibrant, purple-themed website design for exploring and auctioning digital art and NFTs.",
    image: project2,
  },
  {
    title: "NFT Project Landing Page",
    description: "A sleek, purple-themed website design for an NFT project called 'Rackers,' featuring 3D illustrations.",
    image: project3,
  },
  {
    title: "Portfolio Website",
    description: "A modern and user-friendly crypto monitoring website design.",
    image: project4,
  },
  {
    title: "Intelligent Crypto Trading Platform",
    description: "A dark-mode website design for an AI-powered cryptocurrency trading and analytics platform.",
    image: project5,
  },
    {
    title: "AI Support Agent Platform",
    description: "A sleek, dark-mode website for a platform that builds AI agents for customer support.",
    image: project6,
  },
];

export default function Portfolio() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let position = 0;
    const speed = 0.5; // lower = slower, higher = faster

    const animate = () => {
      position -= speed;
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth / 2;
        if (Math.abs(position) >= totalWidth) position = 0;
        containerRef.current.firstElementChild!.setAttribute(
          "style",
          `transform: translateX(${position}px); transition: none;`
        );
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full py-20 bg-black text-white" id="portfolio">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-aldrich text-center text-green-400 mb-4 drop-shadow-[0_0_8px_#22c55e] relative">
          Our Portfolio
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-electrolize mb-10 max-w-xl mx-auto leading-relaxed">
          Explore some of our featured projects and creative designs.
        </p>

        <div
          ref={containerRef}
          className="relative overflow-hidden w-full max-w-5xl mx-auto"
        >
          <motion.div animate={controls} className="flex gap-6 w-[200%]">
            {[...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-gray-900 to-black border border-green-700/20 rounded-2xl overflow-hidden flex-shrink-0 w-60 sm:w-64 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition"
              >
                <div className="overflow-hidden aspect-[4/5]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-lg sm:text-xl font-aldrich text-green-400 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm sm:text-base font-electrolize">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-sm font-medium text-black font-syncopate-bold rounded-full shadow-lg transition">
            More Coming Soon →
          </button>
        </div>
      </div>
    </section>
  );
}
