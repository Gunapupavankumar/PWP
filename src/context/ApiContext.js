import React, { createContext, useContext } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const API_BASE_URL = 'http://localhost:5000';

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within ApiProvider');
  }
  return context;
};

export const ApiProvider = ({ children }) => {
  // User APIs
  const getUsers = (params) => axios.get(`${API_BASE_URL}/users`, { params });
  const createUser = (data) => axios.post(`${API_BASE_URL}/users`, data);
  const updateUser = (id, data) => axios.patch(`${API_BASE_URL}/users/${id}`, data);

  // Goals APIs
  const getGoals = (params) => axios.get(`${API_BASE_URL}/goals`, { params });
  const createGoal = (data) => axios.post(`${API_BASE_URL}/goals`, data);
  const updateGoal = (id, data) => axios.patch(`${API_BASE_URL}/goals/${id}`, data);
  const deleteGoal = (id) => axios.delete(`${API_BASE_URL}/goals/${id}`);

  // Reminders APIs
  const getReminders = (params) => axios.get(`${API_BASE_URL}/reminders`, { params });
  const updateReminder = (id, data) => axios.patch(`${API_BASE_URL}/reminders/${id}`, data);

  // Patients APIs
  const getPatients = (params) => axios.get(`${API_BASE_URL}/patients`, { params });

  // Health Tips APIs
  const getHealthTips = () => axios.get(`${API_BASE_URL}/healthTips`);

  const value = {
    getUsers,
    createUser,
    updateUser,
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
    getReminders,
    updateReminder,
    getPatients,
    getHealthTips,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
