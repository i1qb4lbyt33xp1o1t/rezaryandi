"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function LayananPage() {
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

  const services = [
    {
      title: "UI/UX Design",
      description: "Membantu dalam pembuatan desain antarmuka dan pengalaman pengguna yang modern dan menarik.",
      icon: "🖌️",
    },
    {
      title: "Web Development",
      description: "Membangun website responsif dan interaktif dengan teknologi modern seperti Next.js dan Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "Wireframing & Prototyping",
      description: "Membuat wireframe dan prototype sebelum pengembangan aplikasi menggunakan Figma atau Adobe XD.",
      icon: "📐",
    },
    {
      title: "Photoshop Editing",
      description: "Desain visual, poster, dan manipulasi foto menggunakan Adobe Photoshop.",
      icon: "🎨",
    },
    {
      title: "Logo & Branding Design",
      description: "Membantu membuat logo dan branding kit yang profesional dan menarik.",
      icon: "🏷️",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Navbar */}
      <header className="backdrop-blur-md bg-gray-900/80 text-white py-4 px-6 shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-extrabold text-blue-400 tracking-wide">My Portfolio</div>

          {!isMobile ? (
            <nav>
              <ul className="flex gap-6 text-lg">
                {["Home","About", "Skills", "Portfolio", "Layanan", "Kontak"].map((item, index) => (
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

      {/* Layanan Section */}
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
          Layanan
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Berikut adalah layanan yang saya tawarkan terkait UI/UX dan desain grafis.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-bold text-blue-400 mt-4">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
