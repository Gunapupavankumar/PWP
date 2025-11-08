import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../context/ApiContext';
import Input from '../components/Input';
import Button from '../components/Button';

const Register = () => {
  const [error, setError] = useState('');
  const [providers, setProviders] = useState([]);
  const { register: registerUser } = useAuth();
  const { createUser, getProviders, createPatientRecord } = useApi();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      role: 'patient',
      consent: false,
      providerId: ''
    }
  });

  const selectedRole = watch('role');

  useEffect(() => {
    // Fetch providers when component mounts
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const response = await getProviders();
      setProviders(response.data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  const onSubmit = async (data) => {
    setError('');

    if (!data.consent) {
      setError('You must consent to data usage');
      return;
    }

    // For patients, ensure provider is selected
    if (data.role === 'patient' && !data.providerId) {
      setError('Please select a healthcare provider');
      return;
    }

    const result = await registerUser(data, createUser);
    
    if (result.success) {
      // If patient, create patient record for provider dashboard
      if (data.role === 'patient' && data.providerId) {
        try {
          await createPatientRecord({
            providerId: parseInt(data.providerId),
            patientId: result.user.id,
            name: data.name,
            compliance: 'good',
            lastCheckup: new Date().toISOString().split('T')[0],
            missedAppointments: 0
          });
        } catch (error) {
          console.error('Error creating patient record:', error);
        }
      }
      
      navigate('/login');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🏥 Healthcare Portal</h1>
          <p className="text-gray-600">Create your account</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role <span className="text-red-500">*</span>
            </label>
            <select 
              className={`input ${errors.role ? 'border-red-500' : ''}`}
              {...register('role', { required: 'Role is required' })}
            >
              <option value="patient">Patient</option>
              <option value="provider">Healthcare Provider</option>
            </select>
            {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>}
          </div>

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

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password (min 6 characters)"
            error={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'Password must contain uppercase, lowercase, and number'
              }
            })}
          />

          {selectedRole === 'patient' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Healthcare Provider <span className="text-red-500">*</span>
                </label>
                <select 
                  className={`input ${errors.providerId ? 'border-red-500' : ''}`}
                  {...register('providerId', { 
                    required: selectedRole === 'patient' ? 'Please select a healthcare provider' : false 
                  })}
                >
                  <option value="">-- Select a Provider --</option>
                  {providers.map(provider => (
                    <option key={provider.id} value={provider.id}>
                      {provider.name} - {provider.specialty}
                    </option>
                  ))}
                </select>
                {errors.providerId && <p className="mt-1 text-sm text-red-500">{errors.providerId.message}</p>}
              </div>

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
                    }
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

              <Input
                label="Allergies"
                placeholder="List any allergies (optional)"
                error={errors.allergies?.message}
                {...register('allergies')}
              />

              <Input
                label="Current Medications"
                placeholder="List current medications (optional)"
                error={errors.medications?.message}
                {...register('medications')}
              />
            </>
          )}

          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <input
              type="checkbox"
              className="mt-1"
              {...register('consent', {
                required: 'You must consent to continue'
              })}
            />
            <div className="flex-1">
              <label className="text-sm text-gray-700">
                I consent to the collection and use of my health data in accordance with HIPAA regulations
              </label>
              {errors.consent && (
                <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Register'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
