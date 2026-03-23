import React, { useState } from 'react';
import { getSportCodes, setSportCodes, getSportHallOfFame, setSportHallOfFame, generateId, type SportCode, type SportHallOfFameEntry } from '../utils/storage';
import { runFullDefenseScan } from '../utils/defense';
import { Save, Plus, Trash2, ShieldCheck, Loader2, Trophy, Star } from 'lucide-react';

export const SportsEditor = () => {
  const [codes, setCodes] = useState<SportCode[]>(getSportCodes());
  const [fame, setFame] = useState<SportHallOfFameEntry[]>(getSportHallOfFame());
  const [saved, setSaved] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const save = async () => {
    setIsScanning(true);
    const allData = { codes: JSON.stringify(codes), fame: JSON.stringify(fame) };
    const result = await runFullDefenseScan(allData, 'sports');
    setIsScanning(false);
    if (!result.safe) { alert(`🛡️ AMD ALERT: ${result.reason}`); return; }
    setSportCodes(codes);
    setSportHallOfFame(fame);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addCode = () => setCodes([...codes, { id: generateId(), name: '', description: '', image: '', featured: false }]);
  const removeCode = (id: string) => setCodes(codes.filter(c => c.id !== id));
  const updateCode = (id: string, field: keyof SportCode, value: any) => setCodes(codes.map(c => c.id === id ? { ...c, [field]: value } : c));

  const addFame = () => setFame([...fame, { id: generateId(), sport: codes[0]?.name || 'Rugby', name: '', achievement: '', year: '2025', image: '' }]);
  const removeFame = (id: string) => setFame(fame.filter(f => f.id !== id));
  const updateFame = (id: string, field: keyof SportHallOfFameEntry, value: string) => setFame(fame.map(f => f.id === id ? { ...f, [field]: value } : f));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Sports Editor</h1>
        <div className="flex flex-col items-end gap-2">
          <button onClick={save} disabled={isScanning} className="flex items-center gap-2 bg-school-green text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-800 disabled:opacity-50">
            {isScanning ? (<><Loader2 size={18} className="animate-spin" /> Scanning...</>) : (<><Save size={18} /> {saved ? 'Saved ✓' : 'Save Changes'}</>)}
          </button>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <ShieldCheck size={12} className="text-green-500" /> AMD Policy Protection Active
          </div>
        </div>
      </div>

      {/* Sport Codes */}
      <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2"><Star size={18} /> Sport Codes</h2>
          <button onClick={addCode} className="flex items-center gap-1 text-sm text-school-green hover:underline"><Plus size={14} /> Add Sport</button>
        </div>
        <div className="space-y-4">
          {codes.map(code => (
            <div key={code.id} className="bg-gray-700 rounded-xl p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
                <input value={code.name} onChange={e => updateCode(code.id, 'name', e.target.value)} placeholder="Sport name" className="bg-gray-600 border border-gray-500 rounded-xl px-4 py-2 text-white text-sm" />
                <label className="flex items-center gap-2 text-sm text-gray-300">
                  <input type="checkbox" checked={code.featured} onChange={e => updateCode(code.id, 'featured', e.target.checked)} className="rounded" /> Featured (dominant)
                </label>
                <button onClick={() => removeCode(code.id)} className="text-gray-500 hover:text-red-400 justify-self-end"><Trash2 size={16} /></button>
              </div>
              <textarea value={code.description} onChange={e => updateCode(code.id, 'description', e.target.value)} rows={2} placeholder="Description" className="w-full bg-gray-600 border border-gray-500 rounded-xl px-4 py-2 text-white text-sm" />
            </div>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2"><Trophy size={18} /> Sports Hall of Fame</h2>
          <button onClick={addFame} className="flex items-center gap-1 text-sm text-school-green hover:underline"><Plus size={14} /> Add Entry</button>
        </div>
        <div className="space-y-4">
          {fame.map(entry => (
            <div key={entry.id} className="bg-gray-700 rounded-xl p-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
              <select value={entry.sport} onChange={e => updateFame(entry.id, 'sport', e.target.value)} className="bg-gray-600 border border-gray-500 rounded-xl px-4 py-2 text-white text-sm">
                {codes.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
              <input value={entry.name} onChange={e => updateFame(entry.id, 'name', e.target.value)} placeholder="Player name" className="bg-gray-600 border border-gray-500 rounded-xl px-4 py-2 text-white text-sm" />
              <input value={entry.achievement} onChange={e => updateFame(entry.id, 'achievement', e.target.value)} placeholder="Achievement" className="bg-gray-600 border border-gray-500 rounded-xl px-4 py-2 text-white text-sm" />
              <input value={entry.year} onChange={e => updateFame(entry.id, 'year', e.target.value)} placeholder="Year" className="bg-gray-600 border border-gray-500 rounded-xl px-4 py-2 text-white text-sm" />
              <button onClick={() => removeFame(entry.id)} className="text-gray-500 hover:text-red-400 justify-self-end"><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
