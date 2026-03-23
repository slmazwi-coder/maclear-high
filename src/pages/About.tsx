import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { User, Quote, Wrench, Settings, Music } from 'lucide-react';
import { getAbout, type AboutInfo } from '../admin/utils/storage';

export const About = () => {
  const [data, setData] = useState<AboutInfo>(getAbout());

  useEffect(() => {
    setData(getAbout());
  }, []);
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">About Kwa Komani Technical High School</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black mb-6">Our Legacy Since {data.establishedYear}</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              {data.historyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-12 flex gap-4">
               <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border-t-4 border-school-primary">
                  <Wrench className="text-school-primary mb-2" size={32} />
                  <span className="font-bold text-sm uppercase">Technical</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border-t-4 border-black">
                  <Settings className="text-black mb-2" size={32} />
                  <span className="font-bold text-sm uppercase">Skilled</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border-t-4 border-school-primary">
                  <Music className="text-school-primary mb-2" size={32} />
                  <span className="font-bold text-sm uppercase">Choral</span>
               </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100"
          >
            <img 
              src="/About/Campus.jpg" 
              alt="Kwa Komani Technical High School Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white font-bold text-xl uppercase tracking-widest">
               Established 1988
            </div>
          </motion.div>
        </div>

        {/* Principal's Message */}
        <section className="bg-black text-white rounded-[3rem] p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5">
            <Quote size={180} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="col-span-1">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-school-primary shadow-2xl bg-gray-800 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-gray-500 p-6 text-center">
                  <User size={80} className="mb-4 opacity-20" />
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-school-primary">Principal</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white">{data.principalName}</h3>
                <p className="text-red-500 font-bold uppercase text-xs tracking-widest">{data.principalTitle}</p>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-4xl font-black text-white mb-8 border-l-4 border-school-primary pl-6 py-2">Principal's Vision</h2>
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed italic">
                {data.principalMessage.map((p, i) => (
                  <p key={i}>"{p}"</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical focus section */}
        <section className="py-16 mb-16">
           <div className="bg-gray-50 rounded-3xl p-12 border-2 border-dashed border-gray-200">
              <h2 className="text-3xl font-black text-black mb-8 text-center uppercase tracking-tighter">A Specialized Technical Institution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700">
                 <div>
                    <h3 className="text-xl font-bold text-school-primary mb-4 flex items-center gap-2">
                       <Wrench size={24} /> Skilled Trades
                    </h3>
                    <p className="leading-relaxed">
                       Kwa Komani Technical High School is renowned for providing intensive skilled training across various trades. 
                       Our specialized workshops are equipped with modern machinery to ensure our learners are ready for industry demands.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                       <Settings size={24} /> Technical Sciences
                    </h3>
                    <p className="leading-relaxed">
                       Our curriculum balances academic excellence with technical proficiency. We offer Technical Mathematics 
                       and Technical Sciences to provide the theoretical backbone for engineering and innovation.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* RCL Student Council */}
        <section className="mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-black text-black mb-10 flex items-center justify-center gap-4 uppercase">
               <span className="w-12 h-1 bg-school-primary" />
               Student Leadership
               <span className="w-12 h-1 bg-school-primary" />
            </h2>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 max-w-5xl mx-auto group">
              <img 
                src="/About/RCL STudent Council.jpg" 
                alt="Kwa Komani Technical High School RCL Student Council" 
                className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="text-gray-500 mt-8 text-xl italic max-w-3xl mx-auto font-medium">
              Our Representative Council of Learners — empowering technical leaders of tomorrow since 1988.
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
};
