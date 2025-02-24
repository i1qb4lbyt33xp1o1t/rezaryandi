"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function KontakPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

      {/* Kontak Section */}
      <section className="flex flex-col items-center text-center px-6 mt-24 relative">
        {/* Background Glow Effect */}
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-30 blur-3xl rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold mt-6 text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Kontak
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hubungi saya untuk kerja sama dalam UI/UX Web Development dan Photoshop Design.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6 w-full max-w-lg flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Nama"
            className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea rows={4} />
</textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            Kirim Pesan
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-6 flex flex-col items-center gap-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p>Email: <span className="text-blue-400">your.email@example.com</span></p>
          <p>WhatsApp: <span className="text-blue-400">+62 812 3456 7890</span></p>
          <p>LinkedIn: <Link href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:underline">linkedin.com/in/yourprofile</Link></p>
          <p>GitHub: <Link href="https://github.com/yourgithub" className="text-blue-400 hover:underline">github.com/yourgithub</Link></p>
        </motion.div>
      </section>
    </div>
  );
}
