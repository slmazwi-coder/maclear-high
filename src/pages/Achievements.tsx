import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, BookOpen, GraduationCap, Award, ChartArea } from 'lucide-react';
import { getResultsByYear, type YearResults } from '../admin/utils/storage';

export const Achievements = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const [results, setResults] = useState<YearResults | null>(null);

  useEffect(() => {
    setResults(getResultsByYear(activeYear));
  }, [activeYear]);

  const years = ['2025', '2024', '2023', '2022'];

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Academic Achievements</h1>
        
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto italic">
          Recording consistent excellence in technical and skilled disciplines since 1988.
        </p>

        {/* Matric Results Tabs */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-10 py-3 rounded-2xl font-black transition-all shadow-sm uppercase tracking-widest ${
                  activeYear === year 
                    ? 'bg-school-primary text-white scale-105 shadow-xl' 
                    : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                }`}
              >
                Matric {year}
              </button>
            ))}
          </div>

          <div className="bg-black text-white rounded-[3rem] p-12 border-8 border-gray-900 shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 text-white/5 pointer-events-none">
                <GraduationCap size={280} />
             </div>
             
             {results ? (
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                 <div>
                    <h2 className="text-4xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter">
                       <span className="w-12 h-2 bg-school-primary" />
                       Class of {activeYear}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
                          <p className="text-5xl font-black text-school-primary">{results.overall}%</p>
                          <p className="text-gray-400 font-bold uppercase text-xs mt-2 tracking-widest">Overall Pass Rate</p>
                       </div>
                       <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
                          <p className="text-5xl font-black text-white">{activeYear === '2025' ? '100' : '90'}%</p>
                          <p className="text-gray-400 font-bold uppercase text-xs mt-2 tracking-widest">Technical Pass Rate</p>
                       </div>
                    </div>
                    <div className="mt-8 p-8 bg-school-primary/10 border border-school-primary/20 rounded-3xl">
                       <h3 className="font-black uppercase tracking-widest mb-4">Top Technical High Performer</h3>
                       <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-school-primary flex items-center justify-center">
                             <Star className="text-school-primary" />
                          </div>
                          <div>
                             <p className="font-bold text-xl uppercase italic">Class Hero</p>
                             <p className="text-gray-400 text-sm">7 Distinctions in Engineering Subjects</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-2xl font-black mb-8 border-b-2 border-school-primary/30 pb-4 uppercase tracking-widest">Subject Excellence</h3>
                    <div className="space-y-4">
                       {results.subjects.map((sub, i) => (
                         <div key={i} className="flex flex-col gap-1">
                            <div className="flex justify-between items-end mb-1">
                               <span className="font-bold text-sm uppercase tracking-wide text-gray-300">{sub.subject}</span>
                               <span className="font-black text-school-primary text-xl">{sub.rate}%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${sub.rate}%` }}
                                 className="bg-school-primary h-full rounded-full"
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
             ) : (
               <div className="text-center py-20">
                 <p className="text-gray-500 text-xl font-bold uppercase tracking-widest">Results data pending for {activeYear}</p>
               </div>
             )}
          </div>
        </div>

        {/* Featured Accolades */}
        <section className="mb-12">
           <h2 className="section-title">Special Merit Awards</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                 { title: "National Skills Award", value: "Gold", icon: <Award className="text-red-500" /> },
                 { title: "Innovation Trophy", value: "2024", icon: <Star className="text-black" /> },
                 { title: "Academic Excellence", value: "Top 5", icon: <GraduationCap className="text-red-500" /> },
              ].map((merit, i) => (
                 <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-200 flex flex-col items-center text-center group hover:bg-black transition-all duration-500">
                    <div className="p-4 bg-white rounded-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                       {merit.icon}
                    </div>
                    <h4 className="font-black text-lg mb-1 group-hover:text-white uppercase tracking-tighter">{merit.title}</h4>
                    <p className="text-school-primary font-black text-2xl group-hover:text-red-400 italic">{merit.value}</p>
                 </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};
