// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { API_BASE_URL } from './config';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Startups from './pages/Startups';
// import StartupDetail from './pages/StartupDetail';
// import SubmitPitch from './pages/SubmitPitch';
// import Notifications from './pages/Notifications';
// import RateStartup from './pages/RateStartup';

// // ✅ New components to add (you must create these files)
// import CreateStartup from './pages/CreateStartup';
// import AdminUsers from './pages/admin/Users';
// import AdminActivity from './pages/admin/Activity';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.get(`${API_BASE_URL}/api/users`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(res => setUser(res.data))
//       .catch(() => setUser(null));
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
//         <Route path="/startups" element={<Startups />} />
//         <Route path="/startups/:id" element={<StartupDetail />} />
        
//         {/* 🔽 Protected Routes */}
//         <Route path="/submit-pitch" element={user ? <SubmitPitch user={user} /> : <Navigate to="/login" />} />
//         <Route path="/create-startup" element={user ? <CreateStartup user={user} /> : <Navigate to="/login" />} />
//         <Route path="/notifications" element={user ? <Notifications user={user} /> : <Navigate to="/login" />} />
//         <Route path="/rate-startup" element={user ? <RateStartup user={user} /> : <Navigate to="/login" />} />

//         {/* 🔽 Admin routes */}
//         <Route path="/admin/users" element={user ? <AdminUsers user={user} /> : <Navigate to="/login" />} />
//         <Route path="/admin/activity" element={user ? <AdminActivity user={user} /> : <Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './config';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Startups from './pages/Startups';
import StartupDetail from './pages/StartupDetail';
import SubmitPitch from './pages/SubmitPitch';
import Notifications from './pages/Notifications';
import RateStartup from './pages/RateStartup';
import CreateStartup from './pages/CreateStartup';

import AdminUsers from './pages/admin/Users';
import AdminActivity from './pages/admin/Activity';

// ✅ Newly added placeholder pages (create these if not already created)
import InvestorDeck from './pages/InvestorDeck';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Logout from './pages/Logout';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${API_BASE_URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/startups/:id" element={<StartupDetail />} />

        {/* 🔒 Protected Routes */}
        <Route path="/submit-pitch" element={user ? <SubmitPitch user={user} /> : <Navigate to="/login" />} />
        <Route path="/create-startup" element={user ? <CreateStartup user={user} /> : <Navigate to="/login" />} />
        <Route path="/notifications" element={user ? <Notifications user={user} /> : <Navigate to="/login" />} />
        <Route path="/rate-startups" element={user ? <RateStartup user={user} /> : <Navigate to="/login" />} />
        <Route path="/investor-deck" element={user ? <InvestorDeck user={user} /> : <Navigate to="/login" />} />
        <Route path="/messages" element={user ? <Messages user={user} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
        <Route path="/settings" element={user ? <Settings user={user} /> : <Navigate to="/login" />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />

        {/* 🔧 Admin Routes */}
        <Route path="/admin/users" element={user ? <AdminUsers user={user} /> : <Navigate to="/login" />} />
        <Route path="/admin/activity" element={user ? <AdminActivity user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

