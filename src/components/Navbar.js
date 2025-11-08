import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            🏥 Healthcare Portal
          </Link>
          
          <div className="flex items-center gap-6">
            {user && user.role === 'patient' && (
              <>
                <Link to="/patient/dashboard" className="hover:text-blue-200 transition-colors">
                  Dashboard
                </Link>
                <Link to="/patient/goals" className="hover:text-blue-200 transition-colors">
                  Goals
                </Link>
                <Link to="/patient/profile" className="hover:text-blue-200 transition-colors">
                  Profile
                </Link>
              </>
            )}
            
            {user && user.role === 'provider' && (
              <Link to="/provider/dashboard" className="hover:text-blue-200 transition-colors">
                Dashboard
              </Link>
            )}
            
            <Link to="/health-info" className="hover:text-blue-200 transition-colors">
              Health Info
            </Link>
            
            {user && (
              <>
                <span className="text-sm">👤 {user.name}</span>
                <Button onClick={handleLogout} variant="danger" className="text-sm">
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
