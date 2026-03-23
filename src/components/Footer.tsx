import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Music } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-school-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">Kwa Komani</h3>
            <p className="text-red-500 font-bold mb-6 text-sm">
              Technical High School
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-school-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-school-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-school-primary/30 pb-2">Physical Address</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1 text-school-primary" size={18} />
                <span>1874 Pelem Road, Mlungisi Township,<br/>Queenstown, 5320</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-school-primary" size={18} />
                <span>0458382074</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-school-primary/30 pb-2">Postal Address</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="shrink-0 mt-1 text-school-primary" size={18} />
                <span>P O Box 1159, Queenstown, 5320</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-school-primary/30 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-school-primary transition-colors">About KKH</Link></li>
              <li><Link to="/extra-curricular" className="hover:text-school-primary transition-colors">Music & Culture</Link></li>
              <li><Link to="/achievements" className="hover:text-school-primary transition-colors">Matric Results</Link></li>
              <li><Link to="/school-fees" className="hover:text-school-primary transition-colors">School Fees</Link></li>
              <li><Link to="/policy" className="hover:text-school-primary transition-colors">Policies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kwa Komani Technical High School. All Rights Reserved.</p>
          <div className="mt-2 flex items-center justify-center gap-2">
             <Link to="/admin/login" className="hover:text-school-primary transition-colors text-xs">KHK Staff Portal</Link>
             <span className="text-gray-700">|</span>
             <span className="text-xs">Established 1988</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
