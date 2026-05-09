"use client";

import { motion } from "framer-motion";
import Aureum from "../assets/images/Aureum.png";
import Midnight from "../assets/images/Midnight.png";
import Argentum from "../assets/images/Argentum.png";
import Image from "next/image";

const collections = [
  {
    id: 1,
    title: "Aureum Classics",
    desc: "With a stainless-steel finish, minimalist markers and refined craftsmanship the Aureum honors Ovulan's commitment to achieving style and reliability.",
    img: Aureum,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Midnight Chronograph",
    desc: "Featuring deep navy detailing and Chronograph functionality, the Midnight blends contemporary elegance with advanced performance for the modern professional.",
    img: Midnight,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Ovulan Argentum",
    desc: "The Ovulan Argentum is a masterpiece of understated luxury, its full stainless-steel design—from polished bezel to final brushed bracelet—radiates modern elegance.",
    img: Argentum,
    delay: 0.6,
  },
];

export const TopCollection = () => {
  return (
    <section className="w-full py-32 px-6 sm:px-12 bg-black relative z-10 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-24 text-center"
      >
        <span className="text-[#c5a059] tracking-[0.3em] text-sm uppercase font-semibold mb-4">Discover</span>
        <h2 className="text-4xl sm:text-5xl font-serif text-white">The Signature Collection</h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mt-8" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 w-full max-w-7xl mx-auto">
        {collections.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl overflow-hidden mb-8 border border-white/5 group-hover:border-[#c5a059]/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-8 transition-transform duration-700 ease-out group-hover:scale-110 z-0">
                <div className="relative w-full h-full">
                  <Image 
                    src={item.img} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex justify-center">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059] pb-1">View Details</span>
              </div>
            </div>

            <div className="text-center px-4">
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#c5a059] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
