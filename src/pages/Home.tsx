import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Music, Trophy, Settings, ShieldCheck, ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Vision & Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter">
                Empowering the <br/> <span className="text-school-primary">Technical Leaders</span> <br/> of Tomorrow
              </h2>
              <div className="w-24 h-2 bg-black mb-8" />
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Since 1988, Kwa Komani Technical High School has been at the forefront of skilled education. 
                We combine rigorous technical sciences with practical, hands-on workshop experience.
              </p>
              <div className="flex gap-4">
                <a href="/about" className="btn-primary flex items-center gap-2">
                   Our Story <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black text-white p-8 rounded-3xl flex flex-col items-center text-center">
                 <Wrench size={40} className="text-school-primary mb-4" />
                 <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Technical</h3>
                 <p className="text-xs text-gray-400">Engineering & Skilled Trades</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-3xl flex flex-col items-center text-center">
                 <Music size={40} className="text-black mb-4" />
                 <h3 className="font-bold uppercase tracking-widest text-sm mb-2 text-black">Culture</h3>
                 <p className="text-xs text-gray-500">Choral Music Champions</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-3xl flex flex-col items-center text-center">
                 <Trophy size={40} className="text-black mb-4" />
                 <h3 className="font-bold uppercase tracking-widest text-sm mb-2 text-black">Excellence</h3>
                 <p className="text-xs text-gray-500">Top Regional Results</p>
              </div>
              <div className="bg-school-primary text-white p-8 rounded-3xl flex flex-col items-center text-center">
                 <Settings size={40} className="text-white mb-4" />
                 <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Innovation</h3>
                 <p className="text-xs text-red-200">Modern Technical Skills</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Focus Highlight */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-widest">Focused on Skilled Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Engineering Graphics", desc: "Foundational design for technical innovation." },
              { title: "Workshop Practice", desc: "Hands-on experience with modern machinery." },
              { title: "Technical Sciences", desc: "Theoretical backbone of engineering trades." },
            ].map((f, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl hover:bg-school-primary transition-colors duration-500 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-black uppercase">{f.title}</h3>
                <p className="text-gray-500 group-hover:text-black font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMD Alert (Retained for system trust) */}
      <div className="bg-gray-50 py-4 border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-school-primary" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Anti-Malicious Defense System Active — Kwa Komani Official Portal</span>
         </div>
      </div>
    </div>
  );
};
