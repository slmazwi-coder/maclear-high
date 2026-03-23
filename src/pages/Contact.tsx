import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Globe } from 'lucide-react';
import { getContact, type ContactInfo } from '../admin/utils/storage';

export const Contact = () => {
  const [info, setInfo] = useState<ContactInfo>(getContact());

  useEffect(() => {
    setInfo(getContact());
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Contact Kwa Komani</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-black mb-8 uppercase tracking-tighter">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              We are located in the heart of Mlungisi Township, Queenstown. Whether you have inquiries about our technical programs, 
              music department, or admissions, we are here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-school-primary rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Physical Address</h3>
                  <p className="text-gray-600 mt-1">{info.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 text-black rounded-xl border border-gray-200">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Postal Address</h3>
                  <p className="text-gray-600 mt-1">{info.postalAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-school-primary rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone Number</h3>
                  <p className="text-gray-600 mt-1">{info.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-school-primary rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email Address</h3>
                  <p className="text-gray-600 mt-1">{info.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 text-black rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Operating Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-1 text-gray-600">
                    <span>Mon - Thu:</span> <span className="font-bold text-black">{info.monThu}</span>
                    <span>Friday:</span> <span className="font-bold text-black">{info.friday}</span>
                    <span>Weekend:</span> <span className="text-school-primary font-bold uppercase text-xs mt-1">{info.weekend}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Subject</label>
                <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all">
                   <option>General Inquiry</option>
                   <option>Admissions</option>
                   <option>Technical Workshops</option>
                   <option>Music Department</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-school-primary focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary bg-black hover:bg-school-primary flex items-center justify-center gap-2 group text-white font-black uppercase tracking-[0.2em] py-4">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">
                 <ShieldCheck size={12} className="text-school-primary" /> Anti-Spam Protected
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className="rounded-[3rem] overflow-hidden h-[450px] shadow-2xl border-4 border-gray-50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.544521458!2d26.86!3d-31.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5da2!2zMTg3NCBQZWxlbSBSZCwgTWx1bmdpc2ksIFF1ZWVuc3Rvd24sIDUzMjA!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
          />
        </div>
      </div>
    </div>
  );
};
