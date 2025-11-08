import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const GoalTracker = () => {
  const { user, logout } = useAuth();
  const { getGoals, createGoal } = useApi();
  const navigate = useNavigate();
  const [goals, setGoals] = useState([]);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      steps: '',
      waterIntake: '',
      sleepHours: ''
    }
  });

  useEffect(() => {
    fetchGoals();
  }, [user]);

  const fetchGoals = async () => {
    try {
      const response = await getGoals({ userId: user.id });
      setGoals(response.data.reverse());
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };

  const onSubmit = async (data) => {
    setMessage('');

    try {
      const goalData = {
        userId: user.id,
        date: data.date,
        steps: parseInt(data.steps),
        waterIntake: parseInt(data.waterIntake),
        sleepHours: parseFloat(data.sleepHours)
      };

      await createGoal(goalData);
      
      setMessage('Goal logged successfully! ✅');
      reset({
        date: new Date().toISOString().split('T')[0],
        steps: '',
        waterIntake: '',
        sleepHours: ''
      });
      
      fetchGoals();
      
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error logging goal. Please try again.');
    }
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
              <h1 className="text-2xl font-bold text-gray-900">📝 Goal Tracker</h1>
              <p className="text-gray-600 text-sm">Track your daily wellness goals</p>
            </div>
            <Button onClick={handleLogout} variant="secondary">
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Log Goals Form */}
            <Card title="Log Today's Goals" icon="📝">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Date"
                  type="date"
                  error={errors.date?.message}
                  {...register('date', {
                    required: 'Date is required',
                    validate: {
                      notFuture: (value) => {
                        const selectedDate = new Date(value);
                        const today = new Date();
                        today.setHours(23, 59, 59, 999);
                        return selectedDate <= today || 'Cannot log goals for future dates';
                      }
                    }
                  })}
                />

                <Input
                  label="👟 Steps Taken"
                  type="number"
                  placeholder="e.g., 10000"
                  error={errors.steps?.message}
                  {...register('steps', {
                    required: 'Steps are required',
                    min: {
                      value: 0,
                      message: 'Steps cannot be negative'
                    },
                    max: {
                      value: 100000,
                      message: 'Steps must be less than 100,000'
                    },
                    valueAsNumber: true
                  })}
                />

                <Input
                  label="💧 Water Intake (glasses)"
                  type="number"
                  placeholder="e.g., 8"
                  error={errors.waterIntake?.message}
                  {...register('waterIntake', {
                    required: 'Water intake is required',
                    min: {
                      value: 0,
                      message: 'Water intake cannot be negative'
                    },
                    max: {
                      value: 30,
                      message: 'Water intake must be less than 30 glasses'
                    },
                    valueAsNumber: true
                  })}
                />

                <Input
                  label="😴 Sleep Hours"
                  type="number"
                  placeholder="e.g., 7.5"
                  step="0.5"
                  error={errors.sleepHours?.message}
                  {...register('sleepHours', {
                    required: 'Sleep hours are required',
                    min: {
                      value: 0,
                      message: 'Sleep hours cannot be negative'
                    },
                    max: {
                      value: 24,
                      message: 'Sleep hours cannot exceed 24'
                    },
                    valueAsNumber: true
                  })}
                />

                {message && (
                  <div className={`px-4 py-3 rounded-lg ${
                    message.includes('Error') 
                      ? 'bg-red-50 border border-red-200 text-red-700' 
                      : 'bg-green-50 border border-green-200 text-green-700'
                  }`}>
                    {message}
                  </div>
                )}

                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Logging...' : 'Log Goals'}
                </Button>
              </form>
            </Card>

            {/* Goal History */}
            <Card title="Your Goal History" icon="📊">
              {goals.length > 0 ? (
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
                      {goals.map(goal => (
                        <tr key={goal.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2 text-sm">{goal.date}</td>
                          <td className="py-3 px-2 text-sm">{goal.steps.toLocaleString()}</td>
                          <td className="py-3 px-2 text-sm">{goal.waterIntake}</td>
                          <td className="py-3 px-2 text-sm">{goal.sleepHours}h</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">No goals logged yet. Start tracking today!</p>
              )}
            </Card>
          </div>

          {/* Recommended Goals */}
          <Card title="📋 Recommended Daily Goals" icon="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-4xl">👟</span>
                <div>
                  <p className="font-semibold text-gray-900">Steps</p>
                  <p className="text-sm text-gray-600">10,000 steps per day</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-4xl">💧</span>
                <div>
                  <p className="font-semibold text-gray-900">Water</p>
                  <p className="text-sm text-gray-600">8 glasses (64 oz) per day</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <span className="text-4xl">😴</span>
                <div>
                  <p className="font-semibold text-gray-900">Sleep</p>
                  <p className="text-sm text-gray-600">7-9 hours per night</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;
