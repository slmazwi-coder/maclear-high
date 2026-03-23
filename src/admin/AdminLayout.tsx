import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout } from './utils/storage';
import { Newspaper, Info, Trophy, FileText, Activity, Users, Phone, LogOut, LayoutDashboard, ShieldCheck, Shield, Clock, CreditCard, BookOpen } from 'lucide-react';

const adminTabs = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/news', label: 'News', icon: Newspaper },
  { path: '/admin/about', label: 'About', icon: Info },
  { path: '/admin/achievements', label: 'Achievements', icon: Trophy },
  { path: '/admin/documents', label: 'Documents', icon: FileText },
  { path: '/admin/sports', label: 'Sports (Music)', icon: Shield },
  { path: '/admin/extra-curricular', label: 'Extra-Curricular', icon: Activity },
  { path: '/admin/applications', label: 'Applications', icon: Users },
  { path: '/admin/payments', label: 'Payments', icon: CreditCard },
  { path: '/admin/policy', label: 'Policy', icon: BookOpen },
  { path: '/admin/contact', label: 'Contact', icon: Phone },
];

export const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Banner */}
      <div className="bg-school-primary text-white text-center py-1 text-xs font-bold uppercase tracking-widest">
        ⚙ Admin Mode — Kwa Komani Official Staff Portal
      </div>

      {/* Admin Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-tighter">
                <span className="text-school-primary">KKH</span> Staff Portal
              </Link>
              <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-[10px] font-bold text-red-400 uppercase tracking-tighter">
                <ShieldCheck size={12} />
                AMD Active
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-1">
              {adminTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = location.pathname === tab.path;
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-school-primary text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};
