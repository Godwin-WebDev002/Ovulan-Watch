import { useState } from "react";
import { motion } from "framer-motion";

// The main Header component with responsive design.
// The component is self-contained and manages its own state for the mobile menu.
export const Tester = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white h-[100vh] w-full flex flex-col relative overflow-hidden">
      <motion.nav
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="px-4 md:px-8 lg:px-12 py-4 fixed w-full flex justify-between items-center bg-black bg-opacity-50 backdrop-blur-md mt-2 z-20"
      >
        <h1 className="text-3xl font-semibold">Ovulan</h1>
        <div className="hidden lg:flex w-full md:w-1/2 lg:justify-end lg:items-center space-x-8">
          <ul className="flex space-x-6 items-center font-semibold">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
          <button className="my-1 px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Order Now
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </motion.nav>

      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className="lg:hidden fixed inset-y-0 right-0 w-64 bg-black bg-opacity-90 backdrop-blur-lg z-30 flex flex-col items-start p-8 space-y-6"
      >
        <button
          onClick={toggleMenu}
          className="self-end p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col space-y-6 text-xl">
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              Story
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              Manufacturing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              Collection
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="w-full mt-8 px-5 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          onClick={toggleMenu}
        >
          Order Now
        </button>
      </motion.nav>

      <main className="px-4 sm:px-8 lg:px-12 w-full pt-20 flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col text-[clamp(2rem,15vw,12rem)] leading-[0.9] font-bold text-gray-50/20 top-[15vh] md:top-[10vh] left-[5%] md:left-[5%] z-0"
        >
          <h1>Timeless</h1>
          <h1 className="ml-[-1vw]">Elegance</h1>
          <h1 className="ml-[-1vw]">Me</h1>
          <h1 className="ml-[-1vw]">Precision</h1>
        </motion.div>

        <motion.img
          initial={{ x: 60 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          src="HeadW.png"
          alt="A stylish watch"
          className="hidden lg:block absolute right-12 top-1/2 transform -translate-y-1/2 w-[35vw] max-w-[600px] z-10"
        />

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-[35vh] lg:mt-[20vh] w-full lg:w-1/2 p-6 rounded-md z-10 bg-black bg-opacity-50 backdrop-blur-md"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-4">
            Luxury That <br className="hidden md:block" /> Lasts a Lifetime.
          </h1>
          <p className="text-base md:text-lg mb-8">
            Ovulan redefines luxury with precision craftsmanship and timeless
            design. Our watches blend elegance and performance, created for
            those who demand sophistication in every detail.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 md:gap-8 mt-10">
            <div className="text-center">
              <h1 className="font-semibold text-3xl md:text-4xl">5-Year</h1>
              <p className="text-sm">International Warranty</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-3xl md:text-4xl">4.9</h1>
              <p className="text-sm">4,300 ratings</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold text-3xl md:text-4xl">250+</h1>
              <p className="text-sm">Hours of Craftsmanship</p>
            </div>
          </div>
        </motion.div>
      </main>
    </header>
  );
};
