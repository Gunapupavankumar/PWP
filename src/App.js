import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ApiProvider } from './context/ApiContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import Profile from './pages/Profile';
import GoalTracker from './pages/GoalTracker';
import HealthInfo from './pages/HealthInfo';

function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/health-info" element={<HealthInfo />} />
              
              <Route path="/patient/dashboard" element={
                <PrivateRoute role="patient">
                  <PatientDashboard />
                </PrivateRoute>
              } />
              
              <Route path="/patient/goals" element={
                <PrivateRoute role="patient">
                  <GoalTracker />
                </PrivateRoute>
              } />
              
              <Route path="/patient/profile" element={
                <PrivateRoute role="patient">
                  <Profile />
                </PrivateRoute>
              } />
              
              <Route path="/provider/dashboard" element={
                <PrivateRoute role="provider">
                  <ProviderDashboard />
                </PrivateRoute>
              } />
              
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </Router>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
