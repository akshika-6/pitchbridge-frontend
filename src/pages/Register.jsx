
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { API_BASE_URL } from '../config';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'founder',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//   e.preventDefault();
//    console.log("Form Data Being Sent:", formData);
//   try {
//     await axios.post(`${API_BASE_URL}/api/users`, formData);
//     navigate('/login');
//   } catch (err) {
//     console.error('Registration error:', err.response);
//     setError(err.response?.data?.message || 'Registration failed. Please try again.');
//   }
// };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 px-4">
//       <motion.form
//         onSubmit={handleRegister}
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
//           Create an Account
//         </h2>

//         {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

//         <div className="space-y-4">
//           <input
//             name="name"
//             value={formData.name}
//             placeholder="Your Full Name"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             required
//           />

//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             placeholder="Email Address"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             required
//           />

//           <input
//             name="password"
//             type="password"
//             value={formData.password}
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             required
//           />

//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//           >
//             <option value="founder">🚀 Founder</option>
//             <option value="investor">💰 Investor</option>
//             <option value="admin">🛡️ Admin</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//           >
//             Register
//           </button>
//         </div>

//         <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
//             Login here
//           </a>
//         </p>
//       </motion.form>
//     </div>
//   );
// };

// export default Register;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { API_BASE_URL } from '../config';

// // import userIcon from '../assets/user.svg';
// // import emailIcon from '../assets/email.svg';
// // import passwordIcon from '../assets/password.svg';
// // import ideaIcon from '../assets/idea.svg';
// // import teamIcon from '../assets/team.svg';
// // import stageIcon from '../assets/stage.svg';

// import { User, Mail, Lock, Lightbulb, Users, BarChart } from 'lucide-react';



// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     idea: '',
//     teamSize: '',
//     stage: '',
//     role: 'founder',
//     termsAccepted: false,
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       return setError("Passwords do not match");
//     }
//     if (!formData.termsAccepted) {
//       return setError("You must agree to the Terms & Conditions");
//     }

//     try {
//       const payload = { ...formData };
//       delete payload.confirmPassword;
//       delete payload.termsAccepted;

//       await axios.post(`${API_BASE_URL}/api/users`, payload);
//       navigate('/login');
//     } catch (err) {
//       console.error('Registration error:', err.response);
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
//       {/* Top Nav */}
//       <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
//         <h1 className="text-2xl font-bold text-blue-600 dark:text-white">PitchBridge</h1>
//         <div className="space-x-4 text-gray-700 dark:text-gray-300">
//           <a href="/" className="hover:text-blue-500">Home</a>
//           <a href="/login" className="hover:text-blue-500">Login</a>
//           <a href="/register" className="hover:text-blue-500">Sign Up</a>
//           <a href="#" className="hover:text-blue-500">Startup</a>
//           <a href="#" className="hover:text-blue-500">Investor</a>
//         </div>
//       </div>

//       {/* Signup Form */}
//       <div className="flex justify-center items-center px-4 py-10">
//         <motion.form
//           onSubmit={handleRegister}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
//             Create an Account
//           </h2>

//           {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

//           <div className="space-y-4">
//             {[
//               { name: "name", type: "text", placeholder: "Full Name", icon: userIcon },
//               { name: "email", type: "email", placeholder: "Email", icon: emailIcon },
//               { name: "password", type: "password", placeholder: "Password", icon: passwordIcon },
//               { name: "confirmPassword", type: "password", placeholder: "Confirm Password", icon: passwordIcon },
//               { name: "idea", type: "text", placeholder: "Your Startup Idea", icon: ideaIcon },
//               { name: "teamSize", type: "number", placeholder: "Team Size", icon: teamIcon },
//               { name: "stage", type: "text", placeholder: "Startup Stage (e.g., MVP, Scaling)", icon: stageIcon }
//             ].map(({ name, type, placeholder, icon }) => (
//               <div key={name} className="flex items-center border rounded-lg px-3 py-2 dark:border-gray-600">
//                 <img src={icon} alt="" className="h-5 w-5 mr-2 opacity-70" />
//                 <input
//                   type={type}
//                   name={name}
//                   placeholder={placeholder}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   required={name !== "idea" && name !== "teamSize" && name !== "stage"}
//                   className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
//                 />
//               </div>
//             ))}

//             {/* Role Selection */}
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             >
//               <option value="founder">🚀 Founder</option>
//               <option value="investor">💰 Investor</option>
//               <option value="admin">🛡️ Admin</option>
//             </select>

//             {/* Terms */}
//             <label className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-2">
//               <input
//                 type="checkbox"
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 className="accent-blue-600"
//               />
//               <span>I agree to the Terms & Conditions</span>
//             </label>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//             >
//               Create Account
//             </button>
//           </div>

//           <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
//               Login here
//             </a>
//           </p>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { API_BASE_URL } from '../config';

// import { User, Mail, Lock, Lightbulb, Users, BarChart } from 'lucide-react';
// import Navbar from '../components/Navbar';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     idea: '',
//     teamSize: '',
//     stage: '',
//     role: 'founder',
//     termsAccepted: false,
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       return setError("Passwords do not match");
//     }
//     if (!formData.termsAccepted) {
//       return setError("You must agree to the Terms & Conditions");
//     }

//     try {
//       const payload = { ...formData };
//       delete payload.confirmPassword;
//       delete payload.termsAccepted;

//       await axios.post(`${API_BASE_URL}/api/users`, payload);
//       navigate('/login');
//     } catch (err) {
//       console.error('Registration error:', err.response);
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
//       {/* Top Navigation */}
//       <Navbar />

//       {/* Signup Form */}
//       <div className="flex justify-center items-center px-4 py-10">
//         <motion.form
//           onSubmit={handleRegister}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
//             Create an Account
//           </h2>

//           {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

//           <div className="space-y-4">
//             {[
//               { name: "name", type: "text", placeholder: "Full Name", icon: <User className="h-5 w-5 mr-2 opacity-70" /> },
//               { name: "email", type: "email", placeholder: "Email", icon: <Mail className="h-5 w-5 mr-2 opacity-70" /> },
//               { name: "password", type: "password", placeholder: "Password", icon: <Lock className="h-5 w-5 mr-2 opacity-70" /> },
//               { name: "confirmPassword", type: "password", placeholder: "Confirm Password", icon: <Lock className="h-5 w-5 mr-2 opacity-70" /> },
//               { name: "idea", type: "text", placeholder: "Your Startup Idea", icon: <Lightbulb className="h-5 w-5 mr-2 opacity-70" /> },
//               { name: "teamSize", type: "number", placeholder: "Team Size", icon: <Users className="h-5 w-5 mr-2 opacity-70" /> },
//               { name: "stage", type: "text", placeholder: "Startup Stage (e.g., MVP, Scaling)", icon: <BarChart className="h-5 w-5 mr-2 opacity-70" /> }
//             ].map(({ name, type, placeholder, icon }) => (
//               <div key={name} className="flex items-center border rounded-lg px-3 py-2 dark:border-gray-600">
//                 {icon}
//                 <input
//                   type={type}
//                   name={name}
//                   placeholder={placeholder}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   required={name !== "idea" && name !== "teamSize" && name !== "stage"}
//                   className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
//                 />
//               </div>
//             ))}

//             {/* Role Selection */}
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             >
//               <option value="founder">🚀 Founder</option>
//               <option value="investor">💰 Investor</option>
//               <option value="admin">🛡️ Admin</option>
//             </select>

//             {/* Terms */}
//             <label className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-2">
//               <input
//                 type="checkbox"
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 className="accent-blue-600"
//               />
//               <span>I agree to the Terms & Conditions</span>
//             </label>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//             >
//               Create Account
//             </button>
//           </div>

//           <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
//               Login here
//             </a>
//           </p>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { API_BASE_URL } from '../config';

// import {
//   User,
//   Mail,
//   Lock,
//   Lightbulb,
//   Users,
//   BarChart,
//   DollarSign,
//   Briefcase,
//   Building2
// } from 'lucide-react';
// import Navbar from '../components/Navbar';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role: 'founder',
//     termsAccepted: false,
//     // Founder fields
//     idea: '',
//     teamSize: '',
//     stage: '',
//     // Investor fields
//     budget: '',
//     interests: '',
//     companyName: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       return setError("Passwords do not match");
//     }
//     if (!formData.termsAccepted) {
//       return setError("You must agree to the Terms & Conditions");
//     }

//     try {
//       const payload = { ...formData };
//       delete payload.confirmPassword;
//       delete payload.termsAccepted;

//       await axios.post(`${API_BASE_URL}/api/users`, payload);
//       navigate('/login');
//     } catch (err) {
//       console.error('Registration error:', err.response);
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   const commonFields = [
//     { name: 'name', type: 'text', placeholder: 'Full Name', icon: <User className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'email', type: 'email', placeholder: 'Email', icon: <Mail className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'password', type: 'password', placeholder: 'Password', icon: <Lock className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', icon: <Lock className="h-5 w-5 mr-2 opacity-70" /> },
//   ];

//   const founderFields = [
//     { name: 'idea', type: 'text', placeholder: 'Startup Idea', icon: <Lightbulb className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'teamSize', type: 'number', placeholder: 'Team Size', icon: <Users className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'stage', type: 'text', placeholder: 'Startup Stage (e.g., MVP)', icon: <BarChart className="h-5 w-5 mr-2 opacity-70" /> },
//   ];

//   const investorFields = [
//     { name: 'budget', type: 'text', placeholder: 'Investment Budget', icon: <DollarSign className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'interests', type: 'text', placeholder: 'Interests (Tech, Health...)', icon: <Briefcase className="h-5 w-5 mr-2 opacity-70" /> },
//     { name: 'companyName', type: 'text', placeholder: 'Company Name', icon: <Building2 className="h-5 w-5 mr-2 opacity-70" /> },
//   ];

//   const selectedFields = formData.role === 'founder' ? founderFields : investorFields;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
//       <Navbar />
//       <div className="flex justify-center items-center px-4 py-10">
//         <motion.form
//           onSubmit={handleRegister}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
//             Create an Account
//           </h2>

//           {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

//           <div className="space-y-4">
//             {[...commonFields, ...selectedFields].map(({ name, type, placeholder, icon }) => (
//               <div key={name} className="flex items-center border rounded-lg px-3 py-2 dark:border-gray-600">
//                 {icon}
//                 <input
//                   type={type}
//                   name={name}
//                   placeholder={placeholder}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
//                 />
//               </div>
//             ))}

//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             >
//               <option value="founder">🚀 Founder</option>
//               <option value="investor">💰 Investor</option>
//               <option value="admin">🛡️ Admin</option>
//             </select>

//             <label className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-2">
//               <input
//                 type="checkbox"
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 className="accent-blue-600"
//               />
//               <span>I agree to the Terms & Conditions</span>
//             </label>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//             >
//               Create Account
//             </button>
//           </div>

//           <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
//               Login here
//             </a>
//           </p>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default Register;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config';

import {
  User,
  Mail,
  Lock,
  Lightbulb,
  Users,
  BarChart,
  DollarSign,
  Briefcase,
  Building2
} from 'lucide-react';

import Navbar from '../components/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'founder',
    termsAccepted: false,
    // Founder fields
    idea: '',
    teamSize: '',
    stage: '',
    // Investor fields
    budget: '',
    interests: '',
    companyName: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }
    if (!formData.termsAccepted) {
      return setError("You must agree to the Terms & Conditions");
    }

    try {
      const payload = { ...formData };
      delete payload.confirmPassword;
      delete payload.termsAccepted;

      await axios.post(`${API_BASE_URL}/api/users`, payload);
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err.response);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const commonFields = [
    { name: 'name', type: 'text', placeholder: 'Full Name', icon: <User className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'email', type: 'email', placeholder: 'Email', icon: <Mail className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'password', type: 'password', placeholder: 'Password', icon: <Lock className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', icon: <Lock className="h-5 w-5 mr-2 opacity-70" /> },
  ];

  const founderFields = [
    { name: 'idea', type: 'text', placeholder: 'Startup Idea', icon: <Lightbulb className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'teamSize', type: 'number', placeholder: 'Team Size', icon: <Users className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'stage', type: 'text', placeholder: 'Startup Stage (e.g., MVP)', icon: <BarChart className="h-5 w-5 mr-2 opacity-70" /> },
  ];

  const investorFields = [
    { name: 'budget', type: 'text', placeholder: 'Investment Budget', icon: <DollarSign className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'interests', type: 'text', placeholder: 'Interests (Tech, Health...)', icon: <Briefcase className="h-5 w-5 mr-2 opacity-70" /> },
    { name: 'companyName', type: 'text', placeholder: 'Company Name', icon: <Building2 className="h-5 w-5 mr-2 opacity-70" /> },
  ];

  const dynamicFields =
    formData.role === 'founder'
      ? founderFields
      : formData.role === 'investor'
      ? investorFields
      : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="flex justify-center items-center px-4 py-10">
        <motion.form
  onSubmit={handleRegister}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
>
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
    Create an Account
  </h2>

  {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

  <div className="space-y-4">
    {/* 🔽 Role selection moved to top */}
    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    >
      <option value="founder">🚀 Founder</option>
      <option value="investor">💰 Investor</option>
      <option value="admin">🛡️ Admin</option>
    </select>

    {/* 👤 Common + Dynamic Form Fields */}
    {[...commonFields, ...dynamicFields].map(({ name, type, placeholder, icon }) => (
      <div key={name} className="flex items-center border rounded-lg px-3 py-2 dark:border-gray-600">
        {icon}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          required
          className="w-full bg-transparent outline-none text-gray-800 dark:text-white"
        />
      </div>
    ))}

    {/* ✅ Terms */}
    <label className="flex items-center text-sm text-gray-600 dark:text-gray-300 space-x-2">
      <input
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleChange}
        className="accent-blue-600"
      />
      <span>I agree to the Terms & Conditions</span>
    </label>

    {/* 🟦 Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
    >
      Create Account
    </button>
  </div>

  <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
    Already have an account?{' '}
    <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
      Login here
    </a>
  </p>
</motion.form>

      </div>
    </div>
  );
};

export default Register;



