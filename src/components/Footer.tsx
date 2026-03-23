import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-school-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Maclear High School</h3>
            <p className="text-blue-200 mb-6 italic">
              "Aim High • Mik Hoog"
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100057144321164" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>1 Murray Street, Maclear, 5480</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>045 932 1032</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>maclearhighschool1@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-blue-200">
              <li><a href="/about" className="hover:text-white transition-colors">About Our School</a></li>
              <li><a href="/school-fees" className="hover:text-white transition-colors">School Fees</a></li>
              <li><a href="/achievements" className="hover:text-white transition-colors">Hall of Fame</a></li>
              <li><a href="/admissions" className="hover:text-white transition-colors">Apply Online</a></li>
              <li><a href="/school-policy" className="hover:text-white transition-colors">School Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">School Hours</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span>07:30 - 15:30</span></li>
              <li className="flex justify-between"><span>Friday:</span> <span>07:30 - 13:30</span></li>
              <li className="flex justify-between"><span>Sat - Sun:</span> <span>Closed</span></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-blue-200">P.O. Box 29, Maclear, 5480</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Maclear High School. All Rights Reserved. | Aim High • Mik Hoog</p>
          <Link to="/admin/login" className="text-blue-300/30 hover:text-blue-200/60 text-xs mt-2 inline-block transition-colors">Staff Portal</Link>
        </div>
      </div>
    </footer>
  );
};
