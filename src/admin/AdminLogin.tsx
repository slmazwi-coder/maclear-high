import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from './utils/storage';
import { Lock, Eye, EyeOff, ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Invalid password. Access Denied.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl p-10 w-full max-w-md border border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-school-primary" />
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-school-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Website</span>
        </Link>
        
        <div className="text-center mb-10">
          <img src="/Logo/Badge.jpg" alt="KKH Badge" className="w-20 h-20 rounded-2xl mx-auto mb-6 object-contain bg-white p-2 border-2 border-school-primary" />
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            <span className="text-school-primary">KKH</span> Staff Portal
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Authorized Access Only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-[10px] font-black text-school-primary mb-2 uppercase tracking-[0.2em] ml-1">Secure Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                className="w-full px-5 py-4 bg-gray-800 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-school-primary transition-all font-mono"
                placeholder="••••••••••••"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-red-500 text-xs font-black text-center uppercase tracking-widest"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full bg-school-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] active:scale-95"
          >
            Authenticate
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-10 opacity-30">
           <ShieldCheck size={14} className="text-school-primary" />
           <span className="text-[10px] font-bold uppercase text-white tracking-[0.4em]">AMD Secure Access</span>
        </div>
      </div>
    </div>
  );
};
