"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ArtS from "../assets/images/ArtS.png";
import ArtP from "../assets/images/ArtP.png";

export const TimeArt = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-black py-32 px-6 sm:px-12 relative overflow-hidden flex items-center justify-center min-h-[900px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 relative z-10">
        
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[3/4] lg:w-1/3 z-20"
        >
          <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#c5a059]/20 mix-blend-overlay z-10" />
            <Image 
              src={ArtS} 
              alt="Craftsmanship Art" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/3 flex flex-col items-center text-center z-30"
        >
          <span className="text-[#c5a059] tracking-[0.3em] text-xs sm:text-sm uppercase font-semibold mb-6">The Heritage</span>
          
          <h2 className="text-5xl sm:text-6xl font-serif text-white leading-tight mb-8">
            Where Time <br /> 
            <span className="italic text-white/80">Becomes</span> Art
          </h2>
          
          <p className="text-white/60 leading-relaxed font-light text-sm sm:text-base mb-10 max-w-md">
            At Ovulan, we believe a watch is more than a way to tell time—it's a
            reflection of character, heritage, and aspiration. Our timepieces are
            crafted with meticulous attention to detail, binding timeless designs
            with modern precision. From boardroom to evening, Ovulan watches embody
            sophistication for those who value elegance in every second.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/20 text-white font-sans tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover Story
          </motion.button>
        </motion.div>

        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[4/5] lg:w-1/3 z-10 hidden md:block"
        >
          <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#c5a059]/10 mix-blend-overlay z-10" />
            <Image 
              src={ArtP} 
              alt="Design Process" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
