import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Shield, Users, ChevronRight } from 'lucide-react';
import { getWeekendResults, type WeekendResult } from '../admin/utils/storage';
import { Link } from 'react-router-dom';

export const WeekendResults = () => {
  const [results, setResults] = useState<WeekendResult[]>(getWeekendResults());

  useEffect(() => {
    setResults(getWeekendResults());
  }, []);

  if (results.length === 0) return null;

  const sportIcons: Record<string, any> = {
    'Rugby': Shield,
    'Netball': Users,
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-school-green flex items-center gap-3">
            <Trophy className="text-yellow-500" /> Weekend Results
          </h2>
          <Link to="/sports" className="text-school-green font-medium text-sm flex items-center gap-1 hover:underline">
            View Sports <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.slice(0, 8).map((result, i) => {
            const Icon = sportIcons[result.sport] || Trophy;
            const isWin = result.result === 'Win';
            const isDraw = result.result === 'Draw';

            return (
              <motion.div
                key={result.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`bg-white rounded-2xl shadow-md border-l-4 p-5 ${
                  isWin ? 'border-l-green-500' : isDraw ? 'border-l-yellow-500' : 'border-l-red-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-school-green" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{result.sport}</span>
                  <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${
                    isWin ? 'bg-green-100 text-green-700' : isDraw ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {result.result}
                  </span>
                </div>
                <p className="font-bold text-gray-800 text-sm mb-1">{result.team}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">vs {result.opponent}</span>
                  <span className="font-bold text-lg text-school-green">{result.scoreHome} - {result.scoreAway}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{result.venue} • {result.date}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
