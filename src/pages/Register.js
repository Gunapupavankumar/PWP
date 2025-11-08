import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useApi } from '../context/ApiContext';
import Input from '../components/Input';
import Button from '../components/Button';

const Register = () => {
  const [error, setError] = useState('');
  const { register: registerUser } = useAuth();
  const { createUser } = useApi();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      role: 'patient',
      consent: false
    }
  });

  const selectedRole = watch('role');

  const onSubmit = async (data) => {
    setError('');

    if (!data.consent) {
      setError('You must consent to data usage');
      return;
    }

    const result = await registerUser(data, createUser);
    
    if (result.success) {
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
