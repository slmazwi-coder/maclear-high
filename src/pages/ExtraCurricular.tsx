import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Music, Trophy, Mic, BookOpen, Star, Award, Users } from 'lucide-react';
import { getActivities, type Activity } from '../admin/utils/storage';

const AchievementCard = ({ title, year, rank, category }: { title: string, year: string, rank: string, category: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-school-primary transition-all"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-red-50 text-school-primary rounded-xl group-hover:bg-school-primary group-hover:text-white transition-colors">
        <Trophy size={24} />
      </div>
      <div>
        <h4 className="font-black text-lg text-black">{title}</h4>
        <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">{category} • {year}</p>
      </div>
    </div>
    <div className="text-right">
      <span className="text-2xl font-black text-school-primary">{rank}</span>
    </div>
  </motion.div>
);

export const ExtraCurricular = () => {
  const [activities, setActivities] = useState<Activity[]>(getActivities());

  useEffect(() => {
    setActivities(getActivities());
  }, []);

  const culturalActivities = activities.filter(a => a.category === 'Culture');
  const technicalActivities = activities.filter(a => a.category === 'Technical');

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Extra-Curricular Excellence</h1>

        {/* Music Section - THE PRIDE OF KKH */}
        <section className="mb-24">
          <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none">
               <Music size={240} />
            </div>
            <div className="relative z-10">
               <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2">
                     <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter border-l-8 border-school-primary pl-6">
                        National <br/> <span className="text-school-primary">Music</span> Giants
                     </h2>
                     <p className="text-xl text-gray-400 leading-relaxed mb-8 italic">
                        "Where technical precision meets choral harmony."
                     </p>
                     <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Kwa Komani Technical High School is globally recognized for its choral excellence. 
                        Our music department has consistently secured national titles, 
                        proving that technical learners are also creative powerhouses.
                     </p>
                     <div className="flex gap-4">
                        <div className="px-4 py-2 bg-school-primary rounded-full font-bold text-sm uppercase">National Champions 2023-2025</div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/2">
                     <div className="grid grid-cols-1 gap-4">
                        <AchievementCard title="National Choral Championships" year="2025" rank="1st" category="Music" />
                        <AchievementCard title="Provincial Vocal Arts" year="2024" rank="Gold" category="Music" />
                        <AchievementCard title="Regional Choir Competition" year="2023" rank="1st" category="Music" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Culture & Talent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           <section>
              <h2 className="text-2xl font-black text-black mb-8 flex items-center gap-3 uppercase">
                 <Users className="text-school-primary" /> Cultural Programs
              </h2>
              <div className="space-y-6">
                 {culturalActivities.map((act, i) => (
                    <div key={i} className="card group hover:bg-black hover:text-white transition-all duration-500">
                       <h3 className="text-xl font-bold mb-2 group-hover:text-school-primary">{act.name}</h3>
                       <p className="text-gray-600 group-hover:text-gray-400">{act.description}</p>
                    </div>
                 ))}
              </div>
           </section>

           <section>
              <h2 className="text-2xl font-black text-black mb-8 flex items-center gap-3 uppercase">
                 <Award className="text-school-primary" /> Technical Extra-Curricular
              </h2>
              <div className="space-y-6">
                 {technicalActivities.map((act, i) => (
                    <div key={i} className="card border-l-4 border-school-primary">
                       <h3 className="text-xl font-bold mb-2 text-black">{act.name}</h3>
                       <p className="text-gray-600">{act.description}</p>
                    </div>
                 ))}
              </div>
           </section>
        </div>

        {/* Hall of Fame */}
        <section className="text-center">
           <h2 className="text-3xl font-black text-black mb-12 uppercase tracking-widest">Recent Accolades</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                 { title: "Young Engineer Award", year: "2024", icon: <Wrench size={32} /> },
                 { title: "National Spelling Bee - Finalist", year: "2025", icon: <BookOpen size={32} /> },
                 { title: "Public Speaking Champions", year: "2023", icon: <Mic size={32} /> },
              ].map((acc, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <div className="p-4 bg-gray-50 text-black rounded-2xl mb-4 group-hover:bg-school-primary">
                       {acc.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{acc.title}</h4>
                    <p className="text-gray-400 font-bold uppercase text-xs">{acc.year}</p>
                 </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

const Wrench = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
