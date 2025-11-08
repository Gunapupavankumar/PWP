<<<<<<< HEAD
# Healthcare Wellness Portal

A modern React-based healthcare wellness and preventive care portal with Tailwind CSS and JSON Server backend.

## ✨ Features

- 🔐 Secure authentication (Patient & Provider roles)
- 📊 Patient dashboard with wellness tracking
- 📝 Goal tracker (steps, water, sleep)
- 👤 Profile management
- 👨‍⚕️ Provider dashboard with patient overview
- 🏥 Public health information page
- 📱 Fully responsive design with Tailwind CSS
- 🔒 HIPAA compliance considerations
- 🎨 Modern UI with reusable components

## 🛠 Tech Stack

- React 18
- Tailwind CSS 3
- React Router DOM v6
- Axios
- Context API for state management
- JSON Server (mock backend)
- Recharts for data visualization

## 🚀 Installation

### Option 1: Using CMD (Recommended for Windows)

1. Double-click `install.cmd` to install dependencies
2. Double-click `start-server.cmd` to start JSON Server
3. Double-click `start-app.cmd` to start React app (in a new terminal)

### Option 2: Manual Installation

```cmd
cd healthcare-portal
npm install
```

Then run in separate terminals:

**Terminal 1 (JSON Server):**
```cmd
npm run server
```

**Terminal 2 (React App):**
```cmd
npm start
```

### Fix PowerShell Execution Policy (if needed)

If you get a PowerShell error, run this in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 🌐 Access

- React App: `http://localhost:3000`
- JSON Server API: `http://localhost:5000`

## 🔑 Demo Credentials

**Patient Account:**
- Email: `patient@test.com`
- Password: `password123`

**Provider Account:**
- Email: `provider@test.com`
- Password: `password123`

## 📁 Project Structure

```
healthcare-portal/
├── public/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Input.js
│   │   ├── Navbar.js
│   │   ├── PrivateRoute.js
│   │   ├── Sidebar.js
│   │   └── StatCard.js
│   ├── context/             # Context API
│   │   ├── ApiContext.js    # Centralized API calls
│   │   └── AuthContext.js   # Authentication state
│   ├── pages/               # Page components
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── PatientDashboard.js
│   │   ├── ProviderDashboard.js
│   │   ├── GoalTracker.js
│   │   ├── Profile.js
│   │   └── HealthInfo.js
│   ├── App.js
│   └── index.js
├── db.json                  # JSON Server database
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## 🔌 API Endpoints (JSON Server)

- `GET/POST /users` - User authentication & registration
- `GET/POST /goals` - Daily wellness goals
- `GET/PATCH /reminders` - Preventive care reminders
- `GET /patients` - Patient list for providers
- `GET /healthTips` - Daily health tips

## 🔒 Security Features

- JWT token simulation with localStorage
- Role-based access control (RBAC)
- Protected routes
- Password hashing consideration (simulated)
- HIPAA compliance information
- Data consent checkbox on registration
- Secure API context for centralized data management

## 🎨 Key Components

### Reusable Components
- **Button**: Customizable button with variants (primary, secondary, danger, success)
- **Card**: Container component with optional title and icon
- **Input**: Form input with label, error handling, and validation
- **StatCard**: Dashboard stat card with progress bar
- **Sidebar**: Navigation sidebar with active state

### Context Providers
- **AuthContext**: Manages user authentication state
- **ApiContext**: Centralizes all API calls using Axios

## ⏱ Development Timeline

Estimated: 3 hours
- ✅ Setup & Tailwind Config: 20 min
- ✅ Reusable Components: 30 min
- ✅ Auth Pages (Login/Register): 30 min
- ✅ Patient Dashboard: 40 min
- ✅ Goal Tracker: 30 min
- ✅ Profile & Provider Dashboard: 30 min
- ✅ Testing & Polish: 10 min

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Next Steps

1. Add more chart visualizations
2. Implement real JWT authentication
3. Add appointment scheduling
4. Integrate with real healthcare APIs
5. Add push notifications for reminders
6. Implement data export functionality
=======
# PWP
Hackathon-Project
>>>>>>> 3559afc7a5776174ac3a8cf6d350854fe0358864
