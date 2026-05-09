"use client";

import { motion } from "framer-motion";
import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import Image from "next/image";
import SubN from "../assets/images/SubN.png";

export const Subscribe = () => {
  return (
    <div className="w-full bg-[#0a0a0a] text-white relative overflow-hidden pt-32">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <span className="text-[#c5a059] tracking-[0.3em] text-xs uppercase font-bold mb-4">Newsletter</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Join Our Circle <br/> <span className="italic text-white/70">of</span> Timekeepers
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-10 max-w-md">
              Be the first to discover new collections, exclusive releases, and refined insights from the world of Ovulan.
            </p>

            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-40 text-white placeholder-white/30 focus:outline-none focus:border-[#c5a059]/50 focus:bg-white/10 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#c5a059] text-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 h-[400px] relative rounded-2xl overflow-hidden border border-white/5 group"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image
              src={SubN}
              alt="Ovulan Craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
            />
          </motion.div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-20" />

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-12">
          
          <div className="lg:col-span-2 flex flex-col">
            <h1 className="text-3xl font-serif tracking-widest uppercase mb-6 text-white">Ovulan</h1>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8 max-w-xs">
              Redefining luxury timekeeping with precision craftsmanship and timeless design for the modern professional.
            </p>
            <div className="flex flex-col gap-3 text-white/70 text-sm font-light">
              <span className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><PiPhoneCall className="text-[#c5a059]"/> +1 (800) 123-4567</span>
              <span className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><BiEnvelope className="text-[#c5a059]"/> support@ovulan.com</span>
              <span className="flex items-center gap-3"><BiCalendar className="text-[#c5a059]"/> Mon-Sat 8am - 7pm GMT</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-white/50 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">New Arrivals</li>
              <li className="hover:text-white transition-colors cursor-pointer">Best Sellers</li>
              <li className="hover:text-white transition-colors cursor-pointer">The Collection</li>
              <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-white/50 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
              <li className="hover:text-white transition-colors cursor-pointer">Journal</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-white/50 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
              <li className="hover:text-white transition-colors cursor-pointer">Warranty</li>
              <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <BsTwitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                <BsYoutube size={16} />
              </a>
            </div>
          </div>
        </footer>

        <div className="w-full border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
          <span>&copy; {new Date().getFullYear()} Ovulan Timepieces. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};
