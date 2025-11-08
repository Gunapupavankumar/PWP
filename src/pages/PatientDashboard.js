import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';

const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const { getGoals, getReminders, getHealthTips } = useApi();
  const navigate = useNavigate();
  const [goals, setGoals] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [healthTip, setHealthTip] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      const [goalsRes, remindersRes, tipsRes] = await Promise.all([
        getGoals({ userId: user.id }),
        getReminders({ userId: user.id }),
        getHealthTips()
      ]);

      setGoals(goalsRes.data.reverse());
      setReminders(remindersRes.data.filter(r => r.status === 'pending'));
      
      const today = new Date().toISOString().split('T')[0];
      const todayTip = tipsRes.data.find(t => t.date === today);
      setHealthTip(todayTip ? todayTip.tip : tipsRes.data[0]?.tip || 'Stay healthy!');
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const latestGoal = goals[0] || { steps: 0, waterIntake: 0, sleepHours: 0 };
  const stepsProgress = Math.min((latestGoal.steps / 10000) * 100, 100);
  const waterProgress = Math.min((latestGoal.waterIntake / 8) * 100, 100);
  const sleepProgress = Math.min((latestGoal.sleepHours / 8) * 100, 100);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-8 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}</h1>
              <p className="text-gray-600 text-sm">Track your wellness journey</p>
            </div>
            <Button onClick={handleLogout} variant="secondary">
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Wellness Goals Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Wellness Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                icon="👟"
                title="Steps"
                value={latestGoal.steps.toLocaleString()}
                subtitle="/8000 steps"
                progress={stepsProgress}
                color="green"
              />
              
              <StatCard
                icon="🔥"
                title="Active Time"
                value="56"
                subtitle="/60 mins | 1712 Kcal | 1.23km"
                progress={93}
                color="red"
              />
              
              <StatCard
                icon="😴"
                title="Sleep"
                value={`${latestGoal.sleepHours} hrs`}
                subtitle="11:30 pm - 06:00 am"
                progress={sleepProgress}
                color="purple"
              />
            </div>
          </div>

          {/* Preventive Care Reminders */}
          <div className="mb-8">
            <Card title="Preventive Care Reminders" icon="🔔">
              {reminders.length > 0 ? (
                <ul className="space-y-3">
                  {reminders.map(reminder => (
                    <li key={reminder.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">
                        {reminder.type === 'lab' && '🧪'}
                        {reminder.type === 'dental' && '🦷'}
                        {reminder.type === 'vision' && '👁️'}
                        {reminder.type === 'checkup' && '🏥'}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{reminder.title}</p>
                        <p className="text-sm text-gray-600">Upcoming: {reminder.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No upcoming appointments</p>
              )}
            </Card>
          </div>

          {/* Health Tip of the Day */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span>💡</span> Health Tip of the Day
            </h3>
            <p className="text-white/90">{healthTip}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
