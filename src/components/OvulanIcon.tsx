"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ArtF from "../assets/images/ArtF.png";
import Midnight from "../assets/images/Midnight.png";

export const OvulanIcon = () => {
  return (
    <section className="w-full bg-white text-black py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-3/5 h-[60vh] lg:h-[80vh] relative rounded-3xl overflow-hidden"
        >
          <Image 
            src={ArtF}
            alt="The Ovulan Legacy"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </motion.div>

        <div className="w-full lg:w-2/5 flex flex-col pt-16 lg:pt-32 lg:pl-16 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-8 mb-16"
          >
            <div className="relative w-32 h-48 shrink-0 rounded-lg overflow-hidden bg-gray-100 shadow-xl">
              <Image 
                src={Midnight}
                alt="Midnight Chronograph"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain scale-110 drop-shadow-xl p-2"
              />
            </div>
            
            <div className="flex flex-col justify-center h-full pt-2">
              <span className="text-[#8c6a2e] tracking-[0.2em] text-xs uppercase font-bold mb-2">Featured</span>
              <h3 className="font-serif text-2xl mb-3 leading-tight">Midnight <br/> Chronograph</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                Deep navy detailing and advanced functionality for the modern professional.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-black text-white p-10 sm:p-14 rounded-3xl lg:-ml-32 mt-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <span className="inline-block w-12 h-[1px] bg-[#c5a059] mb-6"></span>
              <h2 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight">
                The Icon <br /> <span className="italic text-white/80">of</span> Ovulan
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-8">
                The Midnight Chronograph stands as our most sought-after timepiece,
                admired by collectors and professionals alike. With its deep navy
                detailing, precision chronograph movement and bold yet refined
                presence, it has become a symbol of prestige for those who demand both
                style and performance.
              </p>
              
              <button className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold text-[#c5a059] group-hover:text-white transition-colors duration-300">
                Explore Collection
                <span className="w-8 h-[1px] bg-[#c5a059] group-hover:bg-white transition-all duration-300 group-hover:w-12"></span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
