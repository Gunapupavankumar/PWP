import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const Profile = () => {
  const { user, updateUserData, logout } = useAuth();
  const { updateUser } = useApi();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
      age: user.age || '',
      phone: user.phone || '',
      allergies: user.allergies || '',
      medications: user.medications || ''
    }
  });

  const onSubmit = async (data) => {
    setMessage('');

    try {
      await updateUser(user.id, data);
      updateUserData(data);
      
      setMessage('Profile updated successfully! ✅');
      setIsEditing(false);
      
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error updating profile. Please try again.');
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
              <h1 className="text-2xl font-bold text-gray-900">👤 My Profile</h1>
              <p className="text-gray-600 text-sm">Manage your personal information</p>
            </div>
            <Button onClick={handleLogout} variant="secondary">
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <Card>
                {!isEditing ? (
                  <div>
                    <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-200">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                        <p className="text-gray-600 capitalize">{user.role}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                        <p className="text-gray-900">{user.email}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                          <p className="text-gray-900">{user.age || 'Not provided'}</p>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                          <p className="text-gray-900">{user.phone || 'Not provided'}</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Allergies</label>
                        <p className="text-gray-900">{user.allergies || 'None'}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Current Medications</label>
                        <p className="text-gray-900">{user.medications || 'None'}</p>
                      </div>
                    </div>

                    <Button onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Edit Profile Information</h3>

                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      error={errors.name?.message}
                      {...register('name', {
                        required: 'Full name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters'
                        },
                        pattern: {
                          value: /^[a-zA-Z\s]+$/,
                          message: 'Name can only contain letters and spaces'
                        }
                      })}
                    />

                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      error={errors.email?.message}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Age"
                        type="number"
                        placeholder="Age"
                        error={errors.age?.message}
                        {...register('age', {
                          min: {
                            value: 1,
                            message: 'Age must be at least 1'
                          },
                          max: {
                            value: 120,
                            message: 'Age must be less than 120'
                          },
                          valueAsNumber: true
                        })}
                      />

                      <Input
                        label="Phone"
                        type="tel"
                        placeholder="Phone number"
                        error={errors.phone?.message}
                        {...register('phone', {
                          pattern: {
                            value: /^[0-9\-\+\(\)\s]+$/,
                            message: 'Invalid phone number'
                          },
                          minLength: {
                            value: 10,
                            message: 'Phone must be at least 10 digits'
                          }
                        })}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                      <textarea
                        rows="3"
                        className={`input ${errors.allergies ? 'border-red-500' : ''}`}
                        placeholder="List any allergies"
                        {...register('allergies', {
                          maxLength: {
                            value: 500,
                            message: 'Allergies description is too long'
                          }
                        })}
                      />
                      {errors.allergies && (
                        <p className="mt-1 text-sm text-red-500">{errors.allergies.message}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                      <textarea
                        rows="3"
                        className={`input ${errors.medications ? 'border-red-500' : ''}`}
                        placeholder="List current medications"
                        {...register('medications', {
                          maxLength: {
                            value: 500,
                            message: 'Medications description is too long'
                          }
                        })}
                      />
                      {errors.medications && (
                        <p className="mt-1 text-sm text-red-500">{errors.medications.message}</p>
                      )}
                    </div>

                    {message && (
                      <div className={`px-4 py-3 rounded-lg ${
                        message.includes('Error') 
                          ? 'bg-red-50 border border-red-200 text-red-700' 
                          : 'bg-green-50 border border-green-200 text-green-700'
                      }`}>
                        {message}
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setIsEditing(false)} 
                        variant="secondary"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>

            {/* Security Info */}
            <div>
              <Card className="bg-blue-50 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🔒</span> Privacy & Security
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Your health information is protected under HIPAA regulations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>All data is encrypted in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Access is logged and monitored</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Only authorized healthcare providers can view your information</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>You can request a copy of your data at any time</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
