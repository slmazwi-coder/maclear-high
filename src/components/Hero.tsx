import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { url: "/Hero/Hero 1.jpg", caption: "Academic Excellence Since 1980" },
  { url: "/Hero/Hero 2.jpg", caption: "Developing Future Leaders" },
  { url: "/Hero/Hero 3.jpg", caption: "Excellence in Every Field" },
  { url: "/Hero/Hero 4.jpg", caption: "Maclear High School" },
  { url: "/Hero/Hero 5.jpg", caption: "Aiming High • Mik Hoog" },
  { url: "/Hero/Hero 6.jpg", caption: "Regional Choral Champions" },
  { url: "/Hero/Hero 7.jpg", caption: "Pride of Maclear" },
  { url: "/Hero/Hero 8.jpg", caption: "Passion in Sport" },
  { url: "/Hero/Hero 9.jpg", caption: "Nurturing Talent & Vision" },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].caption}
            className="h-full w-full object-cover object-center grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
          <div className="absolute bottom-20 left-0 right-0 text-center z-20">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={`caption-${currentIndex}`}
              className="text-white/80 text-lg md:text-xl font-bold tracking-widest uppercase"
            >
              {slides[currentIndex].caption}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.img
          src="/Logo/Badge.jpg"
          alt="Maclear High School Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="h-32 w-32 md:h-40 md:w-40 rounded-xl border-4 border-school-primary shadow-2xl mb-8 object-contain bg-white p-2"
        />
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-black mb-4 uppercase drop-shadow-2xl"
        >
          <span className="text-white">Maclear</span> <span className="text-school-primary">High</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-bold italic border-y-2 border-white/20 py-2"
        >
          "Technical Excellence & Innovation"
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex gap-4"
        >
          <a href="/admissions" className="btn-primary bg-school-primary text-white hover:bg-white hover:text-black">
            Enroll Now
          </a>
          <a href="/about" className="btn-primary border-2 border-white bg-transparent hover:bg-white/10">
            About MHS
          </a>
        </motion.div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-school-primary transition-colors">
        <ChevronLeft size={32} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-school-primary transition-colors">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-school-primary w-8' : 'bg-white/40 w-3'}`}
          />
        ))}
      </div>
    </div>
  );
};
