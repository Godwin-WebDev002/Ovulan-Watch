"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { BiX } from "react-icons/bi";
import HeadW from "../assets/images/HeadW.png";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity1 = useTransform(scrollY, [0, 500], [1, 0]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Story", "Manufacturing", "Collection", "About", "Contact"];

  return (
    <header className="relative w-full h-[100svh] min-h-[800px] flex flex-col overflow-hidden bg-black">

      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#c5a059]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#8c6a2e]/20 blur-[100px] rounded-full pointer-events-none" />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full flex justify-between items-center px-6 sm:px-12 py-5 z-50 transition-all duration-500 ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 py-4" : "bg-transparent py-6"
          }`}
      >
        <h1 className="text-3xl font-serif tracking-widest text-white uppercase relative group cursor-pointer">
          Ovulan
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
        </h1>

        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-8 text-sm tracking-widest uppercase text-white/70">
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                whileHover={{ y: -2, color: "#fff" }}
                className="transition-colors cursor-pointer relative group"
              >
                {link}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </motion.li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-[#e8d095] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Order Now
          </motion.button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors z-50 relative"
        >
          {isMenuOpen ? <BiX size={32} className="text-white" /> : (
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-[2px] bg-white rounded-full" />
              <span className="w-3/4 h-[2px] bg-white rounded-full self-end" />
              <span className="w-full h-[2px] bg-white rounded-full" />
            </div>
          )}
        </button>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8"
        >
          <ul className="flex flex-col space-y-8 text-3xl font-serif text-center">
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <a href="#" onClick={toggleMenu} className="hover:text-[#c5a059] transition-colors">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 px-12 py-4 border border-[#c5a059] text-[#c5a059] font-sans tracking-widest uppercase text-sm hover:bg-[#c5a059] hover:text-black transition-all duration-300"
            onClick={toggleMenu}
          >
            Order Now
          </motion.button>
        </motion.div>
      </motion.nav>

      <main className="flex-1 w-full relative flex items-center justify-center px-6 sm:px-12 pt-24">

        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0"
        >
          <h1 className="text-[12vw] leading-[0.8] font-bold text-white/5 font-serif tracking-tighter mix-blend-overlay">TIMELESS</h1>
          <h1 className="text-[12vw] leading-[0.8] font-bold text-white/5 font-serif tracking-tighter mix-blend-overlay ml-[10vw]">ELEGANCE</h1>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full">

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 flex flex-col items-start text-left pt-20 lg:pt-0"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#c5a059]"></span>
              <span className="text-[#c5a059] tracking-[0.3em] text-sm uppercase font-semibold">New Collection</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] mb-8">
              Luxury That <br />
              <span className="italic text-white/90">Lasts a</span> Lifetime.
            </h1>

            <p className="text-lg text-white/60 max-w-md font-light leading-relaxed mb-12">
              Ovulan redefines luxury timekeeping with precision craftsmanship and
              timeless design. Our watches blend elegance and performance, created
              for those who demand sophistication in every detail.
            </p>

            <div className="flex gap-8 lg:gap-12 w-full pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white">5-Year</span>
                <span className="text-xs tracking-wider text-white/50 uppercase mt-1">Warranty</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white">4.9</span>
                <span className="text-xs tracking-wider text-white/50 uppercase mt-1">4.3k Ratings</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-3xl font-serif text-white">250+</span>
                <span className="text-xs tracking-wider text-white/50 uppercase mt-1">Hours Craft</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 absolute lg:relative top-20 lg:top-0 right-[-10%] lg:right-0 opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto h-full lg:h-auto flex items-center justify-end"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              <div className="absolute inset-0 bg-[#c5a059]/10 blur-[80px] rounded-full"></div>
              <Image
                src={HeadW}
                alt="Ovulan Luxury Watch"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </main>
    </header>
  );
};
