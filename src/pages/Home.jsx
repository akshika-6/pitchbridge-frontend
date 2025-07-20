// // src/pages/Home.jsx
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { API_BASE_URL } from '../config';

// import startupImg from '../assets/startup-illustration.jpg';


// const Home = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       fetch(`${API_BASE_URL}/api/users`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then(res => res.json())
//         .then(data => setUser(data))
//         .catch(() => setUser(null));
//     }
//   }, []);

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 pt-32 pb-20">
//         <div className="text-center md:text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
//           >
//             Connect. Pitch. Fund.
//           </motion.h1>
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
//             PitchBridge helps innovators reach investors with confidence and clarity.
//           </p>
//           <div className="flex justify-center md:justify-start gap-4">
//             <Link
//               to="/login"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//             >
//               Get Started
//             </Link>
//             <Link
//               to="/register"
//               className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <img
//   src={startupImg}
//   alt="Startup illustration"
//   className="w-80 md:w-[400px] mb-10 md:mb-0"
// />

//         </motion.div>
//       </section>

//       {/* Role-Based Section */}
//       {user && (
//         <motion.section
//           className="mt-6 max-w-4xl mx-auto px-4 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
//             {user.role === 'founder'
//               ? 'Build and pitch your startup idea!'
//               : user.role === 'investor'
//               ? 'Discover startups to invest in!'
//               : 'Welcome to PitchBridge!'}
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400">
//             {user.role === 'founder'
//               ? 'Submit your pitch, manage your startup profile, and get noticed by top investors.'
//               : user.role === 'investor'
//               ? 'Browse promising startups, review pitches, and connect with upcoming entrepreneurs.'
//               : 'Sign in to unlock tailored features for your role.'}
//           </p>
//         </motion.section>
//       )}

//       {/* How It Works */}
//       <section className="py-16 px-6 bg-white text-center dark:bg-gray-900">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {[
//             { title: 'Sign Up', desc: 'Register as a startup or investor and build your profile.' },
//             { title: 'Connect', desc: 'Browse opportunities and interact with promising ventures.' },
//             { title: 'Invest or Get Funded', desc: 'Make informed decisions and close deals seamlessly.' },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-blue-600 text-4xl font-bold mb-4">{idx + 1}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Startups */}
//       <section className="py-16 px-6 bg-blue-50 dark:bg-gray-800">
//         <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-white mb-10">
//           Featured Startups
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {[1, 2, 3].map(i => (
//             <motion.div
//               key={i}
//               className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 hover:shadow-lg transition"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                 Startup #{i}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 Innovative solution tackling real-world problems with scalable models.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Why PitchBridge */}
//       <section className="py-16 px-6 text-center bg-white dark:bg-gray-900">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Why Choose PitchBridge?</h2>
//         <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
//           We’re more than just a platform — we’re a community committed to innovation, transparency, and growth.
//         </p>
//         <motion.div
//           className="flex flex-wrap justify-center gap-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           {['Secure & Transparent', 'Investor Verified', 'Supportive Community'].map((text, i) => (
//             <div
//               key={i}
//               className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-4 rounded-full font-medium shadow-sm"
//             >
//               {text}
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-6 bg-blue-600 text-white text-center">
//         <motion.h2
//           className="text-3xl font-bold mb-4"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Ready to build the future?
//         </motion.h2>
//         <p className="mb-6">Join the PitchBridge community today.</p>
//         <Link
//           to="/register"
//           className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
//         >
//           Get Started
//         </Link>
//       </section>
//     </>
//   );
// };

// export default Home;

// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';

import startupImg from '../assets/startup-illustration.jpg'; // ✅ this is your hero background

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${API_BASE_URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* ✅ Updated Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6 pt-32 pb-20">
        {/* Background Image */}
        <img
          src={startupImg}
          alt="Startup Background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Connect. Pitch. Fund.
          </motion.h1>
          <p className="text-lg md:text-xl mb-6">
            PitchBridge helps innovators reach investors with confidence and clarity.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </section>

      {/* Role-Based Section */}
      {user && (
        <motion.section
          className="mt-6 max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
            {user.role === 'founder'
              ? 'Build and pitch your startup idea!'
              : user.role === 'investor'
              ? 'Discover startups to invest in!'
              : 'Welcome to PitchBridge!'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {user.role === 'founder'
              ? 'Submit your pitch, manage your startup profile, and get noticed by top investors.'
              : user.role === 'investor'
              ? 'Browse promising startups, review pitches, and connect with upcoming entrepreneurs.'
              : 'Sign in to unlock tailored features for your role.'}
          </p>
        </motion.section>
      )}

      {/* How It Works */}
      <section className="py-16 px-6 bg-white text-center dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: 'Sign Up', desc: 'Register as a startup or investor and build your profile.' },
            { title: 'Connect', desc: 'Browse opportunities and interact with promising ventures.' },
            { title: 'Invest or Get Funded', desc: 'Make informed decisions and close deals seamlessly.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-4xl font-bold mb-4">{idx + 1}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-16 px-6 bg-blue-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-white mb-10">
          Featured Startups
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-4 hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Startup #{i}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Innovative solution tackling real-world problems with scalable models.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why PitchBridge */}
<section className="py-16 px-6 text-center bg-white dark:bg-gray-900">
  <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
    Why Choose PitchBridge?
  </h2>
  <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
    We’re more than just a platform — we’re a community committed to innovation, transparency, and growth.
  </p>
  <motion.div
    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow text-blue-900 dark:text-blue-100">
      <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
      <p>Connect with the right people using our intelligent recommendation engine.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow text-blue-900 dark:text-blue-100">
      <h3 className="text-xl font-semibold mb-2">Secure & Transparent</h3>
      <p>Built with trust in mind — every interaction is protected and visible.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow text-blue-900 dark:text-blue-100">
      <h3 className="text-xl font-semibold mb-2">Investor Verified</h3>
      <p>All investors go through verification to ensure credibility and confidence.</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow text-blue-900 dark:text-blue-100">
      <h3 className="text-xl font-semibold mb-2">Founder Friendly Tools</h3>
      <p>Powerful tools tailored to help founders pitch, connect, and grow their startups effortlessly.</p>
    </div>
  </motion.div>
</section>



      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to build the future?
        </motion.h2>
        <p className="mb-6">Join the PitchBridge community today.</p>
        <Link
          to="/register"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-100 transition"
        >
          Get Started
        </Link>
      </section>
    </>
  );
};

export default Home;
