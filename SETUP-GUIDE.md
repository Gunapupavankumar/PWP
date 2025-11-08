# Quick Setup Guide

## 🚨 PowerShell Error Fix

If you see this error:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled
```

### Solution: Use CMD instead of PowerShell

1. Open **Command Prompt (CMD)** - NOT PowerShell
2. Navigate to project folder:
   ```cmd
   cd C:\Users\nikhi\OneDrive\Desktop\HCL_TECH\healthcare-portal
   ```
3. Run installation:
   ```cmd
   npm install
   ```

## 🎯 Quick Start (3 Easy Steps)

### Step 1: Install Dependencies
Double-click `install.cmd` OR run in CMD:
```cmd
npm install
```

### Step 2: Start JSON Server
Double-click `start-server.cmd` OR run in CMD:
```cmd
npm run server
```
Keep this terminal open!

### Step 3: Start React App
Open a NEW terminal, double-click `start-app.cmd` OR run in CMD:
```cmd
npm start
```

## ✅ What's Included

### ✨ Modern UI with Tailwind CSS
- Beautiful gradient backgrounds
- Responsive design
- Smooth animations
- Professional color scheme

### 🧩 Reusable Components
- `Button` - Multiple variants (primary, secondary, danger, success)
- `Card` - Container with title and icon
- `Input` - Form input with validation
- `StatCard` - Dashboard metrics with progress bars
- `Sidebar` - Navigation menu

### 📊 Features Implemented
1. **Authentication**
   - Login/Register with role selection
   - JWT token simulation
   - Protected routes

2. **Patient Dashboard**
   - Wellness goal cards (Steps, Active Time, Sleep)
   - Progress bars with percentages
   - Preventive care reminders
   - Health tip of the day

3. **Goal Tracker**
   - Log daily goals (steps, water, sleep)
   - View goal history in table
   - Recommended daily targets

4. **Profile Management**
   - View/edit patient information
   - Health data (allergies, medications)
   - Privacy & security information

5. **Provider Dashboard**
   - View assigned patients
   - Patient compliance status
   - Patient goal history

6. **Health Info Page**
   - Preventive care guidelines
   - Privacy policy
   - HIPAA compliance info

### 🎨 Design Features
- Sidebar navigation (matching your image)
- Stat cards with icons and progress bars
- Color-coded metrics (green, red, purple)
- Responsive grid layouts
- Modern card-based UI

### 🔌 API Integration
- Centralized API context
- Axios for HTTP requests
- JSON Server for mock backend
- RESTful endpoints

## 🔑 Test Accounts

**Patient:**
- Email: patient@test.com
- Password: password123

**Provider:**
- Email: provider@test.com
- Password: password123

## 📱 Pages & Routes

- `/login` - Login page
- `/register` - Registration page
- `/patient/dashboard` - Patient dashboard (protected)
- `/patient/goals` - Goal tracker (protected)
- `/patient/profile` - Profile management (protected)
- `/provider/dashboard` - Provider dashboard (protected)
- `/health-info` - Public health information

## 🎯 Time Breakdown

Total: ~3 hours

1. **Setup (20 min)**
   - Tailwind CSS configuration
   - Project structure
   - Base components

2. **Components (30 min)**
   - Reusable UI components
   - Sidebar navigation
   - Stat cards

3. **Authentication (30 min)**
   - Login/Register pages
   - Auth context
   - Protected routes

4. **Patient Features (70 min)**
   - Dashboard with stats
   - Goal tracker
   - Profile management

5. **Provider Features (30 min)**
   - Provider dashboard
   - Patient list
   - Patient details

6. **Polish (10 min)**
   - Responsive design
   - Error handling
   - Final testing

## 🚀 Ready to Go!

Your project is now fully set up with:
- ✅ Tailwind CSS styling
- ✅ Reusable components
- ✅ Context API for state management
- ✅ Axios for API calls
- ✅ Responsive design
- ✅ Modern UI matching your reference image

Just run the installation and start coding! 🎉
