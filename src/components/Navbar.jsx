// // src/components/Navbar.jsx
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Menu, X, Sun, Moon } from 'lucide-react';
// import NavbarLinks from './NavbarLinks';



// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const logoutHandler = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md transition duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         <Link to="/" className="text-2xl font-bold">
//           PitchBridge
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link to="/" className="hover:text-blue-500">Home</Link>
//           <Link to="/startups" className="hover:text-blue-500">Startups</Link>
//           {user?.role === 'founder' && (
//             <Link to="/submit-pitch" className="hover:text-blue-500">Submit Pitch</Link>
//           )}
//           {user?.role === 'investor' && (
//             <Link to="/notifications" className="hover:text-blue-500">Notifications</Link>
//           )}
//           {user && (
//             <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
//           )}
//           {user ? (
//             <button onClick={logoutHandler} className="text-red-500 hover:underline">Logout</button>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-blue-500">Login</Link>
//               <Link to="/register" className="hover:text-blue-500">Register</Link>
//             </>
//           )}
//           <button onClick={toggleDarkMode} className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center space-x-2">
//           <button onClick={toggleDarkMode}>
//             {darkMode ? <Sun size={22} /> : <Moon size={22} />}
//           </button>
//           <button onClick={toggleMenu}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
//           <Link to="/" className="block hover:text-blue-500">Home</Link>
//           <Link to="/startups" className="block hover:text-blue-500">Startups</Link>
//           {user?.role === 'founder' && (
//             <Link to="/submit-pitch" className="block hover:text-blue-500">Submit Pitch</Link>
//           )}
//           {user?.role === 'investor' && (
//             <Link to="/notifications" className="block hover:text-blue-500">Notifications</Link>
//           )}
//           {user && (
//             <Link to="/dashboard" className="block hover:text-blue-500">Dashboard</Link>
//           )}
//           {user ? (
//             <button onClick={logoutHandler} className="block text-red-500 hover:underline">Logout</button>
//           ) : (
//             <>
//               <Link to="/login" className="block hover:text-blue-500">Login</Link>
//               <Link to="/register" className="block hover:text-blue-500">Register</Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-gray-800 dark:text-white shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">
          PitchBridge
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavbarLinks user={user} logoutHandler={logoutHandler} />
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <NavbarLinks user={user} logoutHandler={logoutHandler} mobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
