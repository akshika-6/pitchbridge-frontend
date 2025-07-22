// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   Home,
//   BarChart3,
//   User,
//   MessageCircle,
//   Settings,
//   HelpCircle,
//   Mail,
//   LogOut,
// } from 'lucide-react';

// const Sidebar = ({ role }) => {
//   const location = useLocation();

//   const links = [
//     { to: '/', label: 'Home', icon: <Home /> },
//     { to: '/dashboard', label: role === 'investor' ? 'Investor Deck' : 'Pitch Deck', icon: <BarChart3 /> },
//     { to: '/profile', label: 'Profile', icon: <User /> },
//     { to: '/messages', label: 'Messages', icon: <MessageCircle /> },
//     { to: '/settings', label: 'Settings', icon: <Settings /> },
//     { to: '/faq', label: 'FAQ / Help', icon: <HelpCircle /> },
//     { to: '/contact', label: 'Contact', icon: <Mail /> },
//     { to: '/logout', label: 'Logout', icon: <LogOut /> },
//   ];

//   return (
//     <div className="min-h-screen w-64 bg-white dark:bg-gray-900 shadow-md p-4 fixed">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
//         PitchBridge
//       </h2>
//       {/* <ul className="space-y-4">
//         {links.map((link) => (
//           <li key={link.to}>
//             <Link
//               to={link.to}
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200
//                 ${
//                   location.pathname === link.to
//                     ? 'bg-blue-600 text-white'
//                     : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
//                 }`}
//             >
//               <span>{link.icon}</span>
//               <span className="text-md">{link.label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul> */}
//       <ul className="space-y-2">
//   <li><a href="/dashboard" className="hover:text-blue-400">Dashboard</a></li>
//   <li><a href="/profile" className="hover:text-blue-400">Profile</a></li>
//   <li><a href="/messages" className="hover:text-blue-400">Messages</a></li>
//   <li><a href="/settings" className="hover:text-blue-400">Settings</a></li>
//   <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
//   <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
//   <li><a href="/logout" className="hover:text-red-400">Logout</a></li>
// </ul>
//     </div>
//   );
// };

// export default Sidebar;


// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { LogOut, Home, User, MessageSquare, Settings, HelpCircle, FilePlus, BookOpen, Upload } from 'lucide-react';

// const Sidebar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <div className="h-screen w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md px-4 py-6 space-y-6">
//       <h2 className="text-xl font-bold mb-4">PitchBridge</h2>

//       <nav className="flex flex-col space-y-3">
//         <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-600">
//           <Home size={18} /> Dashboard
//         </Link>
//         <Link to="/profile" className="flex items-center gap-2 hover:text-blue-600">
//           <User size={18} /> Profile
//         </Link>
//         <Link to="/messages" className="flex items-center gap-2 hover:text-blue-600">
//           <MessageSquare size={18} /> Messages
//         </Link>

//         {/* Founder-specific links */}
//         {user?.role === 'founder' && (
//           <>
//             <Link to="/submit-pitch" className="flex items-center gap-2 hover:text-blue-600">
//               <Upload size={18} /> Upload Pitch Deck
//             </Link>
//             <Link to="/add-startup" className="flex items-center gap-2 hover:text-blue-600">
//               <FilePlus size={18} /> Add Startup
//             </Link>
//             <Link to="/investors" className="flex items-center gap-2 hover:text-blue-600">
//               <BookOpen size={18} /> Explore Investors
//             </Link>
//           </>
//         )}

//         {/* Investor-specific links */}
//         {user?.role === 'investor' && (
//           <>
//             <Link to="/upload-investor-deck" className="flex items-center gap-2 hover:text-blue-600">
//               <Upload size={18} /> Upload Investor Deck
//             </Link>
//             <Link to="/startups" className="flex items-center gap-2 hover:text-blue-600">
//               <BookOpen size={18} /> Explore Startups
//             </Link>
//           </>
//         )}

//         {/* Common links */}
//         <Link to="/settings" className="flex items-center gap-2 hover:text-blue-600">
//           <Settings size={18} /> Settings
//         </Link>
//         <Link to="/faq" className="flex items-center gap-2 hover:text-blue-600">
//           <HelpCircle size={18} /> FAQ / Help
//         </Link>
//         <Link to="/contact" className="flex items-center gap-2 hover:text-blue-600">
//           <HelpCircle size={18} /> Contact
//         </Link>

//         <button onClick={handleLogout} className="flex items-center gap-2 text-left hover:text-red-600">
//           <LogOut size={18} /> Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;




//  correct

// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import {
//   LogOut,
//   Home,
//   User,
//   MessageSquare,
//   Settings,
//   HelpCircle,
//   FilePlus,
//   BookOpen,
//   Upload,
// } from 'lucide-react';

// const Sidebar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const linkClass = (path) =>
//     `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
//       location.pathname === path
//         ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white'
//         : 'hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800'
//     }`;

//   return (
//     <div className="h-screen w-64 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 shadow-lg p-6 border-r border-gray-200 dark:border-gray-800">
//       <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 tracking-wide">PitchBridge</h2>

//       <nav className="flex flex-col space-y-2">
//         <Link to="/dashboard" className={linkClass('/dashboard')}>
//           <Home size={18} /> Dashboard
//         </Link>
//         <Link to="/profile" className={linkClass('/profile')}>
//           <User size={18} /> Profile
//         </Link>
//         <Link to="/messages" className={linkClass('/messages')}>
//           <MessageSquare size={18} /> Messages
//         </Link>

//         {user?.role === 'founder' && (
//           <>
//             <Link to="/submit-pitch" className={linkClass('/submit-pitch')}>
//               <Upload size={18} /> Upload Pitch
//             </Link>
//             <Link to="/add-startup" className={linkClass('/add-startup')}>
//               <FilePlus size={18} /> Add Startup
//             </Link>
//             <Link to="/investors" className={linkClass('/investors')}>
//               <BookOpen size={18} /> Explore Investors
//             </Link>
//           </>
//         )}

//         {user?.role === 'investor' && (
//           <>
//             <Link to="/upload-investor-deck" className={linkClass('/upload-investor-deck')}>
//               <Upload size={18} /> Upload Investor Deck
//             </Link>
//             <Link to="/startups" className={linkClass('/startups')}>
//               <BookOpen size={18} /> Explore Startups
//             </Link>
//           </>
//         )}

//         <Link to="/settings" className={linkClass('/settings')}>
//           <Settings size={18} /> Settings
//         </Link>
//         <Link to="/faq" className={linkClass('/faq')}>
//           <HelpCircle size={18} /> FAQ
//         </Link>
//         <Link to="/contact" className={linkClass('/contact')}>
//           <HelpCircle size={18} /> Contact
//         </Link>

//         <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 rounded-md hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900 transition-colors">
//           <LogOut size={18} /> Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LogOut,
  Home,
  User,
  MessageSquare,
  Settings,
  HelpCircle,
  FilePlus,
  BookOpen,
  Upload,
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
      location.pathname === path
        ? 'bg-white/20 text-white font-semibold'
        : 'hover:bg-white/10 text-white'
    }`;

  return (
    <div
      className="h-screen w-64 text-white shadow-lg p-6 border-r border-blue-800"
      style={{ backgroundColor: '#7070f3' }}
    >
      <h2 className="text-2xl font-bold mb-8 tracking-wide">PitchBridge</h2>

      <nav className="flex flex-col space-y-2">
        <Link to="/" className={linkClass('/')}>
  <Home size={18} /> Home
</Link>

        <Link to="/profile" className={linkClass('/profile')}>
          <User size={18} /> Profile
        </Link>
        <Link to="/messages" className={linkClass('/messages')}>
          <MessageSquare size={18} /> Messages
        </Link>

        {user?.role === 'founder' && (
          <>
            <Link to="/submit-pitch" className={linkClass('/submit-pitch')}>
              <Upload size={18} /> Upload Pitch
            </Link>
            <Link to="/add-startup" className={linkClass('/add-startup')}>
              <FilePlus size={18} /> Add Startup
            </Link>
            <Link to="/investors" className={linkClass('/investors')}>
              <BookOpen size={18} /> Explore Investors
            </Link>
          </>
        )}

        {user?.role === 'investor' && (
          <>
            <Link to="/upload-investor-deck" className={linkClass('/upload-investor-deck')}>
              <Upload size={18} /> Upload Investor Deck
            </Link>
            <Link to="/startups" className={linkClass('/startups')}>
              <BookOpen size={18} /> Explore Startups
            </Link>
          </>
        )}

        <Link to="/settings" className={linkClass('/settings')}>
          <Settings size={18} /> Settings
        </Link>
        <Link to="/faq" className={linkClass('/faq')}>
          <HelpCircle size={18} /> FAQ
        </Link>
        <Link to="/contact" className={linkClass('/contact')}>
          <HelpCircle size={18} /> Contact
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-red-100 hover:text-white hover:bg-red-500 transition-colors"
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

