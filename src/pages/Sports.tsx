import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Medal, Shield, Dribbble, Target, Dumbbell, Users, Star, Calendar } from 'lucide-react';
import { getSportCodes, getSportHallOfFame, type SportCode, type SportHallOfFameEntry } from '../admin/utils/storage';

const sportIcons: Record<string, any> = {
  'Rugby': Shield,
  'Netball': Users,
  'Cricket': Target,
  'Hockey': Dribbble,
  'Athletics': Dumbbell,
};

export const Sports = () => {
  const [sportCodes, setSportCodes] = useState<SportCode[]>(getSportCodes());
  const [hallOfFame, setHallOfFame] = useState<SportHallOfFameEntry[]>(getSportHallOfFame());
  const [activeSport, setActiveSport] = useState('Rugby');

  useEffect(() => {
    setSportCodes(getSportCodes());
    setHallOfFame(getSportHallOfFame());
  }, []);

  const featuredSports = sportCodes.filter(s => s.featured);
  const otherSports = sportCodes.filter(s => !s.featured);
  const filteredFame = hallOfFame.filter(e => e.sport === activeSport);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Sports at Maclear High</h1>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Sport is at the heart of Maclear High School. With Rugby and Netball as our dominant codes, 
          we compete with passion and pride at district, regional, and provincial levels.
        </p>

        {/* Featured Sports (Rugby & Netball) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-school-green mb-8 flex items-center gap-3">
            <Star className="text-yellow-500" /> Dominant Sport Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSports.map((sport, i) => {
              const Icon = sportIcons[sport.name] || Trophy;
              return (
                <motion.div
                  key={sport.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-school-green to-school-blue-dark rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Icon size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{sport.name}</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Featured</span>
                      </div>
                    </div>
                    <p className="text-blue-100 text-lg leading-relaxed">{sport.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Other Sports */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-school-green mb-8 flex items-center gap-3">
            <Dumbbell className="text-school-green" /> Other Sport Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSports.map((sport, i) => {
              const Icon = sportIcons[sport.name] || Trophy;
              return (
                <motion.div
                  key={sport.id}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
                >
                  <div className="aspect-video bg-blue-50 flex items-center justify-center relative">
                    <Icon size={64} className="text-school-green/30" />
                    <div className="absolute inset-0 bg-school-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{sport.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{sport.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Sport Hall of Fame */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-school-green mb-4 flex items-center justify-center gap-4">
              <Trophy className="text-yellow-500 w-12 h-12" />
              Sports Hall of Fame
              <Trophy className="text-yellow-500 w-12 h-12" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognizing individuals who have represented Maclear High at the highest levels.
            </p>
          </div>

          {/* Sport filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sportCodes.map(sport => (
              <button
                key={sport.id}
                onClick={() => setActiveSport(sport.name)}
                className={`px-6 py-2 rounded-full font-bold transition-all text-sm ${
                  activeSport === sport.name
                    ? 'bg-school-green text-white shadow-lg scale-105'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-school-green hover:text-school-green'
                }`}
              >
                {sport.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSport}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredFame.length > 0 ? (
                <div className="bg-gradient-to-br from-school-green to-school-blue-dark rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Medal className="text-yellow-400" /> {activeSport} Legends
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFame.map((entry, i) => (
                      <motion.div
                        key={entry.id}
                        whileHover={{ y: -4 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold text-lg">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-bold text-lg">{entry.name}</p>
                            <p className="text-sm text-blue-200">{entry.year}</p>
                          </div>
                        </div>
                        <p className="text-blue-100 text-sm italic">{entry.achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                  <Trophy size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-400 text-lg">No Hall of Fame entries for {activeSport} yet.</p>
                  <p className="text-gray-400 text-sm">Entries can be added via the Staff Portal.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};
