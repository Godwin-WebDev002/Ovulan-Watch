"use client";

import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";

export const WhatPeopleSay = () => {
  return (
    <section className="w-full bg-black text-white py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 relative"
        >
          <span className="text-[#c5a059] tracking-[0.3em] text-xs uppercase font-bold mb-4 block">Testimonials</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif leading-tight">
            What Our People <br /> 
            <span className="italic text-white/70">Have To Say...</span>
          </h2>
          
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative"
          >
            <div className="absolute -top-10 -left-6 text-[120px] font-serif text-white/5 leading-none select-none">"</div>
            <div className="flex gap-1 text-[#c5a059] mb-8 text-sm">
              {[...Array(5)].map((_, i) => <BsStarFill key={i} />)}
            </div>
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90 mb-8 italic">
              I purchased the Ovulan Midnight Chronograph and was blown away by
              the craftsmanship. The weight, the precision, and the attention to
              detail match some of the finest Swiss brands I've owned. It's not
              just a watch—it's a statement piece I'm proud to wear daily.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#c5a059]"></div>
              <span className="text-sm tracking-widest uppercase font-semibold">Tommy R.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative lg:mt-32"
          >
            <div className="absolute -top-10 -left-6 text-[120px] font-serif text-white/5 leading-none select-none">"</div>
            <div className="flex gap-1 text-[#c5a059] mb-8 text-sm">
              {[...Array(5)].map((_, i) => <BsStarFill key={i} />)}
            </div>
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90 mb-8 italic">
              My Ovulan Aureum Classic is everything I wanted in a luxury watch.
              The two-tone design turns heads wherever I go and it feels as if it
              was made just for me. From packaging to customer service, the
              experience was pure luxury from start to finish.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#c5a059]"></div>
              <span className="text-sm tracking-widest uppercase font-semibold">Daniel K.</span>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center lg:justify-between items-center gap-12 mt-32 pt-16 border-t border-white/10"
        >
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-serif text-5xl sm:text-6xl text-white mb-2">1200+</h1>
            <p className="text-[#c5a059] tracking-[0.2em] uppercase text-xs font-semibold">5-Star Reviews</p>
          </div>
          
          <div className="hidden lg:block w-[1px] h-16 bg-white/10"></div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-serif text-5xl sm:text-6xl text-white mb-2">10,000+</h1>
            <p className="text-[#c5a059] tracking-[0.2em] uppercase text-xs font-semibold">Happy Clients</p>
          </div>
          
          <div className="hidden lg:block w-[1px] h-16 bg-white/10"></div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-serif text-5xl sm:text-6xl text-white mb-2">1952</h1>
            <p className="text-[#c5a059] tracking-[0.2em] uppercase text-xs font-semibold">Established</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
