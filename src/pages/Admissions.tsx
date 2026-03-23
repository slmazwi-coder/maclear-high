import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Upload, User, GraduationCap, Building, Phone, AlertCircle, Wrench } from 'lucide-react';

export const Admissions = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title">2026 Admissions</h1>
          <p className="text-xl text-gray-600 italic">Joining the Legacy of Kwa Komani Technical Excellence</p>
        </div>

        {/* Admissions Info Card */}
        <div className="bg-black text-white p-10 rounded-[3rem] mb-12 border-l-8 border-school-primary shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 text-white/5">
              <Wrench size={160} />
           </div>
           <div className="relative z-10">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Information for Applicants</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                 Kwa Komani Technical High School is a specialized institution focusing on technical sciences and skilled trades. 
                 Admission is competitive and based on academic merit and technical aptitude.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-school-primary rounded-lg">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <p className="font-bold">Technical Focus</p>
                       <p className="text-xs text-gray-500 uppercase">Skilled trades & Engineering</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                       <AlertCircle size={20} className="text-school-primary" />
                    </div>
                    <div>
                       <p className="font-bold">Admission Fee</p>
                       <p className="text-xs text-gray-500 uppercase">Non-refundable administrative fee</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <form className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 space-y-12">
          {/* Section 1: Student Details */}
          <section>
            <h3 className="text-2xl font-black text-black mb-8 flex items-center gap-3 uppercase tracking-tighter border-b-2 border-gray-100 pb-4">
              <User className="text-school-primary" size={24} /> Student Particulars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">First Name(s)</label>
                <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Surname</label>
                <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Date of Birth</label>
                <input type="date" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Gender</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Current Grade / Applying For</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all">
                  <option>Grade 8 (New Intake)</option>
                  <option>Grade 9</option>
                  <option>Grade 10 (Technical Specialization)</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 2: Parent/Guardian */}
          <section>
            <h3 className="text-2xl font-black text-black mb-8 flex items-center gap-3 uppercase tracking-tighter border-b-2 border-gray-100 pb-4">
              <Building className="text-school-primary" size={24} /> Guardian Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Guardian Full Name</label>
                <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Guardian ID Number</label>
                <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Primary Phone</label>
                <input className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
              </div>
            </div>
          </section>

          {/* Section 3: Documents */}
          <section>
            <h3 className="text-2xl font-black text-black mb-8 flex items-center gap-3 uppercase tracking-tighter border-b-2 border-gray-100 pb-4">
              <Upload className="text-school-primary" size={24} /> Document Uploads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Admission Fee Receipt', desc: 'Proof of administrative fee payment' },
                { label: 'Guardian ID Document', desc: 'Certified copy of legal guardian ID' },
                { label: 'Student Birth Certificate', desc: 'Certified copy of learner birth cert' },
                { label: 'Latest Report Card', desc: 'Reflecting recent academic performance' },
              ].map((doc, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-[2rem] border border-gray-200 group hover:border-school-primary transition-all">
                  <p className="font-bold text-black mb-1">{doc.label}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">{doc.desc}</p>
                  <input type="file" className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-gray-200 file:text-black hover:file:bg-school-primary hover:file:text-white" />
                </div>
              ))}
            </div>
          </section>

          <div className="pt-8">
            <button type="submit" className="w-full btn-primary bg-black hover:bg-school-primary flex items-center justify-center gap-2 py-5 text-white font-black uppercase tracking-[0.4em] shadow-xl group">
              Submit Application <Send size={18} className="group-hover:translate-x-1" />
            </button>
            <div className="flex items-center justify-center gap-2 mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck size={14} className="text-school-primary" /> Encrypted Submission Secure
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Send = ({ size, className }: { size: number, className?: string }) => (
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
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);
