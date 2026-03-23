import React, { useState } from 'react';
import { getWeekendResults, setWeekendResults, generateId, getSportCodes, type WeekendResult } from '../utils/storage';
import { runFullDefenseScan } from '../utils/defense';
import { Save, Plus, Trash2, ShieldCheck, Loader2, Trophy } from 'lucide-react';

export const WeekendResultsEditor = () => {
  const [results, setResults] = useState<WeekendResult[]>(getWeekendResults());
  const sportCodes = getSportCodes();
  const [saved, setSaved] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const save = async () => {
    setIsScanning(true);
    const result = await runFullDefenseScan({ data: JSON.stringify(results) }, 'sports');
    setIsScanning(false);
    if (!result.safe) { alert(`🛡️ AMD ALERT: ${result.reason}`); return; }
    setWeekendResults(results);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addResult = () => setResults([...results, {
    id: generateId(), sport: 'Rugby', team: '', opponent: '',
    scoreHome: '0', scoreAway: '0', result: 'Win', date: new Date().toISOString().split('T')[0], venue: 'Home'
  }]);

  const removeResult = (id: string) => setResults(results.filter(r => r.id !== id));
  const update = (id: string, field: keyof WeekendResult, value: string) => setResults(results.map(r => r.id === id ? { ...r, [field]: value } : r));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3"><Trophy size={24} /> Weekend Results Editor</h1>
        <div className="flex flex-col items-end gap-2">
          <button onClick={save} disabled={isScanning} className="flex items-center gap-2 bg-school-green text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-800 disabled:opacity-50">
            {isScanning ? (<><Loader2 size={18} className="animate-spin" /> Scanning...</>) : (<><Save size={18} /> {saved ? 'Saved ✓' : 'Save Changes'}</>)}
          </button>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <ShieldCheck size={12} className="text-green-500" /> AMD Active
          </div>
        </div>
      </div>

      <button onClick={addResult} className="flex items-center gap-1 text-sm text-school-green hover:underline mb-6"><Plus size={14} /> Add Match Result</button>

      <div className="space-y-4">
        {results.map(r => (
          <div key={r.id} className="bg-gray-800 border border-gray-700 rounded-2xl p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <select value={r.sport} onChange={e => update(r.id, 'sport', e.target.value)} className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm">
                {sportCodes.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
              <input value={r.team} onChange={e => update(r.id, 'team', e.target.value)} placeholder="Team (e.g., 1st XV)" className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm" />
              <input value={r.opponent} onChange={e => update(r.id, 'opponent', e.target.value)} placeholder="Opponent" className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm" />
              <select value={r.result} onChange={e => update(r.id, 'result', e.target.value)} className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm">
                <option>Win</option><option>Loss</option><option>Draw</option>
              </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center">
              <input value={r.scoreHome} onChange={e => update(r.id, 'scoreHome', e.target.value)} placeholder="Home score" className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm" />
              <input value={r.scoreAway} onChange={e => update(r.id, 'scoreAway', e.target.value)} placeholder="Away score" className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm" />
              <input type="date" value={r.date} onChange={e => update(r.id, 'date', e.target.value)} className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm" />
              <select value={r.venue} onChange={e => update(r.id, 'venue', e.target.value)} className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white text-sm">
                <option>Home</option><option>Away</option>
              </select>
              <button onClick={() => removeResult(r.id)} className="text-gray-500 hover:text-red-400 justify-self-end"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
