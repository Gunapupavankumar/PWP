import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const patientLinks = [
    { path: '/patient/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/patient/goals', label: 'My Goals', icon: '🎯' },
    { path: '/patient/profile', label: 'Profile', icon: '👤' },
  ];

  const providerLinks = [
    { path: '/provider/dashboard', label: 'Dashboard', icon: '📋' },
  ];

  const links = user?.role === 'patient' ? patientLinks : providerLinks;

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-primary text-white min-h-screen p-6 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Health</h1>
        <p className="text-sm text-blue-200">Wellness Portal</p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(link.path)
                ? 'bg-white text-primary font-semibold'
                : 'hover:bg-blue-600'
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
        
        <Link
          to="/health-info"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/health-info')
              ? 'bg-white text-primary font-semibold'
              : 'hover:bg-blue-600'
          }`}
        >
          <span className="text-xl">ℹ️</span>
          <span>Health Info</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
