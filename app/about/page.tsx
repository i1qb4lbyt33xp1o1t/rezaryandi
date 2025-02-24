"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
        setWindowWidth(window.innerWidth); // Pastikan window tersedia
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Navbar */}
      <header className="backdrop-blur-md bg-gray-900/80 text-white py-4 px-6 shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-extrabold text-blue-400 tracking-wide">My Portfolio</div>

          {!isMobile ? (
            <nav>
              <ul className="flex gap-6 text-lg">
                {["Home", "About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item, index) => (
                  <li key={index} className="relative group cursor-pointer transition-all duration-300">
                    <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-300">
                      {item}
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none transition-transform duration-300">
              {menuOpen ? <X size={28} className="transform rotate-180 transition-all duration-300" /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {isMobile && menuOpen && (
          <nav className="bg-gray-800/90 text-white mt-3 py-4 rounded-lg shadow-md transition-all duration-300">
            <ul className="flex flex-col items-center gap-4 text-lg">
              {["Home", "About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item, index) => (
                <li key={index} className="hover:text-blue-400 transition duration-300 cursor-pointer">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* About Section */}
      <section className="flex flex-col items-center text-center px-6 mt-24 relative">
        {/* Background Glow Effect */}
        <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-30 blur-3xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Profile Image with Animation */}
        <motion.img
          src="/your-photo.jpg" // Ganti dengan gambar profil
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-2xl border-4 border-blue-400 object-cover"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Title & Subtitle */}
        <motion.h1
          className="text-5xl font-extrabold mt-6 text-white bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-2 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Saya adalah seorang Web Developer, UI/UX Designer, dan Freelancer yang berfokus pada pengembangan website modern dan responsif. Dengan pengalaman dalam teknologi terbaru, saya berusaha untuk menciptakan solusi digital yang inovatif dan berkualitas tinggi.
        </motion.p>

        {/* More Details */}
        <motion.div
          className="mt-8 text-left max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-400">My Journey</h2>
          <p className="text-gray-300 mt-2">
            Saya memulai perjalanan dalam dunia pengembangan web sejak beberapa tahun yang lalu. Dengan minat dalam desain UI/UX dan keamanan siber, saya mengembangkan berbagai proyek mulai dari sistem informasi hingga aplikasi berbasis Next.js dan JavaFX.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/portfolio">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105">
              Lihat Portfolio
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Floating Glow Particles */}
      {windowWidth && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-50"
              initial={{ y: "100vh", x: Math.random() * windowWidth }}
              animate={{ y: "-10vh", x: Math.random() * windowWidth }}
              transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
