import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';

const ProviderDashboard = () => {
  const { user, logout } = useAuth();
  const { getPatients, getGoals, getReminders } = useApi();
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientGoals, setPatientGoals] = useState([]);
  const [patientReminders, setPatientReminders] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, [user]);

  const fetchPatients = async () => {
    try {
      const response = await getPatients({ providerId: user.id });
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handlePatientClick = async (patient) => {
    setSelectedPatient(patient);
    
    try {
      const [goalsRes, remindersRes] = await Promise.all([
        getGoals({ userId: patient.patientId }),
        getReminders({ userId: patient.patientId })
      ]);
      
      setPatientGoals(goalsRes.data.reverse());
      setPatientReminders(remindersRes.data);
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  const getComplianceBadge = (compliance) => {
    const badges = {
      excellent: 'bg-green-100 text-green-800 border-green-300',
      good: 'bg-blue-100 text-blue-800 border-blue-300',
      'needs-attention': 'bg-yellow-100 text-yellow-800 border-yellow-300'
    };
    return badges[compliance] || badges['needs-attention'];
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Provider Dashboard 👨‍⚕️</h1>
              <p className="text-gray-600 text-sm">Welcome, {user.name}</p>
            </div>
            <Button onClick={handleLogout} variant="secondary">
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Patients List */}
            <Card title="📋 My Patients" icon="">
              {patients.length > 0 ? (
                <div className="space-y-3">
                  {patients.map(patient => (
                    <div 
                      key={patient.id} 
                      className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200"
                      onClick={() => handlePatientClick(patient)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-gray-900">{patient.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplianceBadge(patient.compliance)}`}>
                          {patient.compliance}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Last Checkup: {patient.lastCheckup}</p>
                        <p>Missed Appointments: {patient.missedAppointments}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No patients assigned</p>
              )}
            </Card>

            {/* Patient Details */}
            {selectedPatient && (
              <>
                <Card title={`Patient: ${selectedPatient.name}`} icon="📊" className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Recent Goals</h4>
                  {patientGoals.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Date</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Steps</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Water</th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">Sleep</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patientGoals.slice(0, 5).map(goal => (
                            <tr key={goal.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 px-2 text-sm">{goal.date}</td>
                              <td className="py-3 px-2 text-sm">{goal.steps}</td>
                              <td className="py-3 px-2 text-sm">{goal.waterIntake}</td>
                              <td className="py-3 px-2 text-sm">{goal.sleepHours}h</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-600">No goals logged</p>
                  )}

                  <h4 className="font-semibold text-gray-900 mt-6 mb-3">Preventive Care Status</h4>
                  {patientReminders.length > 0 ? (
                    <div className="space-y-3">
                      {patientReminders.map(reminder => (
                        <div key={reminder.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <span className="text-2xl">
                            {reminder.status === 'completed' ? '✅' : '⏰'}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{reminder.title}</p>
                            <p className="text-sm text-gray-600">Date: {reminder.date}</p>
                            <p className="text-sm text-gray-600 capitalize">Status: {reminder.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No reminders</p>
                  )}
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
