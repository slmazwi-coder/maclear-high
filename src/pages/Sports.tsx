import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, Dumbbell, Shield, Medal, MedalIcon } from 'lucide-react';
import { getSports, type Sport } from '../admin/utils/storage';

export const Sports = () => {
  const [sports, setSports] = useState<Sport[]>(getSports());
  const [activeSport, setActiveSport] = useState<string>(sports[0]?.id || '');

  useEffect(() => {
    setSports(getSports());
    if (sports.length > 0 && !activeSport) {
      setActiveSport(sports[0].id);
    }
  }, []);

  const currentSport = sports.find(s => s.id === activeSport);

  if (!currentSport) return null;

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title text-center">Sports Athletics</h1>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Maclear High School has a proud sporting tradition. Our sports codes are organized across various age groups, ensuring development from junior levels to the Senior Team.
        </p>

        {/* Sport Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setActiveSport(sport.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                activeSport === sport.id
                  ? 'bg-school-primary text-white shadow-xl scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Dumbbell size={18} />
              {sport.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSport.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sport Info */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-16 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black text-school-primary mb-6 uppercase tracking-tighter">
                    {currentSport.name}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {currentSport.description}
                  </p>
                  
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-gray-800">
                    <Shield className="text-school-primary" /> Active Age Groups
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {currentSport.ageGroups.map((age, i) => (
                      <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-bold text-school-primary shadow-sm hover:border-school-primary transition-colors">
                        {age}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white flex items-center justify-center text-gray-400">
                  {currentSport.name.toLowerCase() === 'rugby' ? (
                    <img src="/Sports/rugby first team.jpg" alt="Rugby" className="w-full h-full object-cover" />
                  ) : currentSport.name.toLowerCase() === 'netball' ? (
                    <img src="/Sports/Netball first team.jpg" alt="Netball" className="w-full h-full object-cover" />
                  ) : currentSport.image ? (
                    <img src={currentSport.image} alt={currentSport.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center font-bold tracking-widest uppercase">
                      <Trophy size={64} className="mx-auto mb-4 opacity-50" />
                      Placeholder Image
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Fixtures & First Team Showcase (Conditional for Rugby & Netball) */}
            {(currentSport.name.toLowerCase() === 'rugby' || currentSport.name.toLowerCase() === 'netball') && (
              <div className="mb-16">
                <h3 className="text-3xl font-black text-school-primary flex items-center justify-center gap-3 mb-8 uppercase tracking-tighter">
                  <Trophy className="text-yellow-500" /> 
                  First Team & Latest Fixtures
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* First Team Image */}
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
                    <h4 className="text-xl font-bold text-school-primary mb-4 text-center">First Team Squad</h4>
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                      <img 
                        src={`/Sports/${currentSport.name.toLowerCase() === 'rugby' ? 'rugby first team.jpg' : 'Netball first team.jpg'}`} 
                        alt={`${currentSport.name} First Team`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Fixtures Image */}
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
                    <h4 className="text-xl font-bold text-school-primary mb-4 text-center">Season Fixtures</h4>
                    <div className="aspect-[3/4] lg:aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                      <img 
                        src={`/Sports/${currentSport.name === 'Rugby' ? 'Rugby fixture.jpg' : 'Netball fixture.jpg'}`} 
                        alt={`${currentSport.name} Fixtures`}
                        className="w-full h-full object-contain bg-white"
                      />
                    </div>
                  </div>
                  
                  {/* League Results */}
                  <div className="lg:col-span-2 bg-school-primary/5 rounded-2xl p-6 shadow-md border border-school-primary/20">
                    <h4 className="text-xl font-bold text-school-primary mb-6 text-center">Latest League Results</h4>
                    <div className={`grid grid-cols-1 ${currentSport.name === 'Rugby' ? 'md:grid-cols-2' : ''} gap-8`}>
                      {currentSport.name === 'Rugby' ? (
                        <>
                          <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                            <img src="/Sports/Rugby league resulstfirst.jpg" alt="Rugby First Team Results" className="w-full h-full object-contain" />
                            <p className="text-center font-bold text-sm py-2">First Team Results</p>
                          </div>
                          <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-sm">
                            <img src="/Sports/Rugby league result u13.jpg" alt="Rugby U13 Results" className="w-full h-full object-contain" />
                            <p className="text-center font-bold text-sm py-2">U13 Results</p>
                          </div>
                        </>
                      ) : (
                        <div className="aspect-video md:aspect-[21/9] bg-white rounded-xl overflow-hidden shadow-sm max-w-4xl mx-auto w-full">
                          <img src="/Sports/Netball league results.jpg" alt="Netball League Results" className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Hall of Fame for the specific sport */}
            <div className="mb-16 text-center">
              <h3 className="text-3xl font-black text-school-primary flex items-center justify-center gap-3 mb-4 uppercase tracking-tighter">
                <Star className="text-yellow-500" fill="currentColor" /> 
                {currentSport.name} Hall of Fame 
                <Star className="text-yellow-500" fill="currentColor" />
              </h3>
              <p className="text-gray-600 mb-8 italic">Honoring extraordinary athletes who shaped the legacy of this sport.</p>

              {currentSport.hallOfFame.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentSport.hallOfFame.map((hof, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center group"
                    >
                      <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 overflow-hidden border-4 border-school-primary/20 mb-4 flex items-center justify-center">
                        {hof.image ? (
                          <img src={hof.image} alt={hof.name} className="w-full h-full object-cover" />
                        ) : (
                          <Medal size={48} className="text-gray-400" />
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-school-primary transition-colors">{hof.name}</h4>
                      <p className="font-semibold text-school-primary text-sm uppercase tracking-wider mb-2">{hof.achievement}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center text-gray-500">
                  <MedalIcon size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="font-medium text-lg">No Hall of Fame records documented yet for {currentSport.name}.</p>
                </div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
