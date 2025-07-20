// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Briefcase,
//   Rocket,
//   Bell,
//   Users,
//   BarChart3,
//   Star,
// } from "lucide-react";
// import { API_BASE_URL } from "../config";

// const ICONS = {
//   Briefcase: <Briefcase />,
//   Rocket: <Rocket />,
//   Bell: <Bell />,
//   Users: <Users />,
//   ActivityBarChart: <BarChart3 />,
//   Star: <Star />,
// };

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // holds name, email, role
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true); // ✅ added

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/dashboard`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) throw new Error("Failed to load dashboard");

//         const data = await res.json();
//         const userData = JSON.parse(localStorage.getItem("user"));

//         setUser(userData);
//         setCards(data.cards);
//       } catch (error) {
//         console.error("Dashboard error:", error);
//       } finally {
//         setLoading(false); // ✅ important!
//       }
//     };

//     fetchDashboard();
//   }, []);

//   // ✅ Display loading screen
//   if (loading) {
//     return <div className="pt-24 px-4 text-center">Loading...</div>;
//   }

//   // ✅ Show fallback if user data is missing
//   if (!user) {
//     return (
//       <div className="pt-24 px-4 text-center text-red-600">
//         Failed to load user data. Please try logging in again.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-white">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
//         <p className="mb-1 text-gray-600 dark:text-gray-300">📧 {user.email}</p>
//         <p className="mb-6">
//           🧑‍💼 Role:{" "}
//           <span className="font-semibold capitalize">{user.role}</span>
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {cards.map((card, index) => (
//             <DashboardCard
//               key={index}
//               title={card.title}
//               to={card.path}
//               icon={ICONS[card.icon] || <Briefcase />}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ✅ Reusable dashboard card
// const DashboardCard = ({ icon, title, to }) => (
//   <Link to={to}>
//     <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-[1.02]">
//       <div className="text-blue-600 dark:text-blue-400">{icon}</div>
//       <span className="font-medium">{title}</span>
//     </div>
//   </Link>
// );

// export default Dashboard;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Home,
//   Briefcase,
//   User,
//   MessageCircle,
//   Settings,
//   HelpCircle,
//   Phone,
//   LogOut,
//   Rocket,
//   Users,
//   Bell,
// } from "lucide-react";
// import { API_BASE_URL } from "../config";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/dashboard`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (!res.ok) throw new Error("Failed to load dashboard");
//         const userData = JSON.parse(localStorage.getItem("user"));
//         setUser(userData);
//       } catch (error) {
//         console.error("Dashboard error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   if (loading) return <div className="pt-24 text-center">Loading...</div>;
//   if (!user)
//     return (
//       <div className="pt-24 text-center text-red-600">
//         Failed to load user. Please log in again.
//       </div>
//     );

//   return (
//     <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-6 space-y-4 hidden md:block">
//         <h2 className="text-2xl font-bold text-blue-600 mb-6">PitchBridge</h2>
//         <NavItem to="/" icon={<Home />} label="Home" />
//         <NavItem to="/pitch-deck" icon={<Rocket />} label="Pitch Deck" />
//         <NavItem to="/investor-deck" icon={<Briefcase />} label="Investor Deck" />
//         <NavItem to="/profile" icon={<User />} label="Profile" />
//         <NavItem to="/messages" icon={<MessageCircle />} label="Messages" />
//         <NavItem to="/settings" icon={<Settings />} label="Settings" />
//         <NavItem to="/faq" icon={<HelpCircle />} label="FAQ / Help" />
//         <NavItem to="/contact" icon={<Phone />} label="Contact" />
//         <NavItem to="/logout" icon={<LogOut />} label="Logout" />
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h1 className="text-3xl font-bold mb-2">
//           Welcome, {user.name} 👋
//         </h1>
//         <p className="mb-1 text-gray-600 dark:text-gray-300">📧 {user.email}</p>
//         <p className="mb-6">
//           🧑‍💼 Role:{" "}
//           <span className="font-semibold capitalize">{user.role}</span>
//         </p>

//         <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow space-y-4">
//           <h2 className="text-2xl font-semibold">What would you like to do today?</h2>
//           <ul className="list-disc pl-5 space-y-1">
//             <li>
//               Upload or update your <strong>Pitch Deck</strong>
//             </li>
//             <li>
//               Explore potential <strong>Investors</strong>
//             </li>
//             <li>
//               Check your <strong>Messages</strong> and respond
//             </li>
//             <li>
//               Review and update your <strong>Profile</strong>
//             </li>
//             <li>
//               Adjust your <strong>Settings</strong>
//             </li>
//           </ul>
//           <p>
//             Use the navigation menu on the left to begin. Let’s build something
//             great together! 🚀
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// };

// // Sidebar nav item
// const NavItem = ({ to, icon, label }) => (
//   <Link
//     to={to}
//     className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition"
//   >
//     <span>{icon}</span>
//     <span>{label}</span>
//   </Link>
// );

// export default Dashboard;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Home,
//   Briefcase,
//   User,
//   MessageCircle,
//   Settings,
//   HelpCircle,
//   Phone,
//   LogOut,
//   Rocket,
// } from "lucide-react";
// import { API_BASE_URL } from "../config";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/dashboard`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error("Failed to load dashboard");
//         const userData = JSON.parse(localStorage.getItem("user"));
//         setUser(userData);
//       } catch (error) {
//         console.error("Dashboard error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   if (loading) return <div className="pt-24 text-center">Loading...</div>;
//   if (!user)
//     return (
//       <div className="pt-24 text-center text-red-600">
//         Failed to load user. Please log in again.
//       </div>
//     );

//   return (
//     <div className="flex min-h-screen bg-[#f4f6f9]">
//       {/* Sidebar */}
//       <aside className="fixed top-0 left-0 h-full w-60 bg-[#7070f3] text-white p-6 z-50">
//         <div className="text-2xl font-bold text-center mb-8">PitchBridge</div>
//         <nav className="flex flex-col space-y-3">
//           <SidebarLink to="/" label="Home" icon={<Home />} />
//           <SidebarLink to="/pitch-deck" label="Pitch Deck" icon={<Rocket />} />
//           <SidebarLink to="/investor-deck" label="Investor Deck" icon={<Briefcase />} />
//           <SidebarLink to="/profile" label="Profile" icon={<User />} />
//           <SidebarLink to="/messages" label="Messages" icon={<MessageCircle />} />
//           <SidebarLink to="/settings" label="Settings" icon={<Settings />} />
//           <SidebarLink to="/faq" label="FAQ / Help" icon={<HelpCircle />} />
//           <SidebarLink to="/contact" label="Contact" icon={<Phone />} />
//           <SidebarLink to="/logout" label="Logout" icon={<LogOut />} />
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="ml-60 p-8 w-full bg-[#f5f6fa] min-h-screen overflow-y-auto">
//         <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
//         <p className="text-gray-600 mb-1">📧 {user.email}</p>
//         <p className="mb-6">
//           🧑‍💼 Role: <span className="font-semibold capitalize">{user.role}</span>
//         </p>

//         <div className="bg-white rounded-xl shadow p-6 space-y-4">
//           <h2 className="text-2xl font-semibold">What would you like to do today?</h2>
//           <ul className="list-disc list-inside space-y-1">
//             <li>
//               Upload or update your <strong>Pitch Deck</strong>
//             </li>
//             <li>
//               Explore potential <strong>Investors</strong>
//             </li>
//             <li>
//               Check your <strong>Messages</strong> and respond
//             </li>
//             <li>
//               Review and update your <strong>Profile</strong>
//             </li>
//             <li>
//               Adjust your <strong>Settings</strong>
//             </li>
//           </ul>
//           <p className="mt-4 text-gray-700">
//             Use the navigation menu on the left to begin. Let’s build something great
//             together! 🚀
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// const SidebarLink = ({ to, label, icon }) => (
//   <Link
//     to={to}
//     className="flex items-center text-[#e0e0ff] hover:bg-[#4749cc] hover:text-white transition px-3 py-2 rounded-md space-x-3 font-medium"
//   >
//     <span>{icon}</span>
//     <span>{label}</span>
//   </Link>
// );

// export default Dashboard;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Home,
//   Rocket,
//   Users,
//   Briefcase,
//   FileText,
//   Bell,
//   Star,
//   MessageCircle,
//   User,
//   Settings,
//   HelpCircle,
//   Phone,
//   LogOut,
// } from "lucide-react";
// import { API_BASE_URL } from "../config";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const res = await fetch(`${API_BASE_URL}/api/dashboard`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error("Dashboard fetch failed");
//         const userData = JSON.parse(localStorage.getItem("user"));
//         setUser(userData);
//       } catch (err) {
//         console.error("Dashboard Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   if (loading) return <div className="pt-24 text-center">Loading...</div>;
//   if (!user)
//     return (
//       <div className="pt-24 text-center text-red-600">
//         Failed to load user. Please log in again.
//       </div>
//     );

//   const isInvestor = user.role === "investor";

//   return (
//     <div className="flex min-h-screen bg-[#f4f6f9]">
//       {/* Sidebar */}
//       <aside className="fixed top-0 left-0 h-full w-60 bg-[#7070f3] text-white p-6 z-50">
//         <div className="text-2xl font-bold text-center mb-8">PitchBridge</div>
//         <nav className="flex flex-col space-y-3">
//           <SidebarLink to="/" label="Home" icon={<Home />} />
//           {isInvestor ? (
//             <>
//               <SidebarLink to="/startups" label="View Startups" icon={<Users />} />
//               <SidebarLink to="/investor-deck" label="Investor Deck" icon={<FileText />} />
//               <SidebarLink to="/rate-startups" label="Rate Startups" icon={<Star />} />
//             </>
//           ) : (
//             <>
//               <SidebarLink to="/submit-pitch" label="Submit Pitch" icon={<Rocket />} />
//               <SidebarLink to="/investors" label="View Investors" icon={<Briefcase />} />
//             </>
//           )}
//           <SidebarLink to="/notifications" label="Notifications" icon={<Bell />} />
//           <SidebarLink to="/messages" label="Messages" icon={<MessageCircle />} />
//           <SidebarLink to="/profile" label="Profile" icon={<User />} />
//           <SidebarLink to="/settings" label="Settings" icon={<Settings />} />
//           <SidebarLink to="/faq" label="FAQ / Help" icon={<HelpCircle />} />
//           <SidebarLink to="/contact" label="Contact" icon={<Phone />} />
//           <SidebarLink to="/logout" label="Log Out" icon={<LogOut />} />
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="ml-60 p-8 w-full bg-[#f5f6fa] min-h-screen overflow-y-auto">
//         <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
//         <p className="text-gray-600 mb-1">📧 {user.email}</p>
//         <p className="mb-6">
//           🧑‍💼 Role: <span className="font-semibold capitalize">{user.role}</span>
//         </p>

//         <div className="bg-white rounded-xl shadow p-6 space-y-4">
//           <h2 className="text-2xl font-semibold">What would you like to do today?</h2>
//           <ul className="list-disc list-inside space-y-1">
//             {isInvestor ? (
//               <>
//                 <li>Explore <strong>Startups</strong> to invest in</li>
//                 <li>Submit <strong>preferences</strong> or upload a brief PDF</li>
//                 <li>Give <strong>ratings</strong> to startups</li>
//               </>
//             ) : (
//               <>
//                 <li>Submit your <strong>Pitch</strong></li>
//                 <li>Explore potential <strong>Investors</strong></li>
//               </>
//             )}
//             <li>Check your <strong>Messages</strong> and <strong>Notifications</strong></li>
//             <li>Review and update your <strong>Profile</strong></li>
//             <li>Adjust your <strong>Settings</strong></li>
//           </ul>
//           <p className="mt-4 text-gray-700">
//             Use the navigation menu on the left to begin. Let’s build something great
//             together! 🚀
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// const SidebarLink = ({ to, label, icon }) => (
//   <Link
//     to={to}
//     className="flex items-center text-[#e0e0ff] hover:bg-[#4749cc] hover:text-white transition px-3 py-2 rounded-md space-x-3 font-medium"
//   >
//     <span>{icon}</span>
//     <span>{label}</span>
//   </Link>
// );

// export default Dashboard;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Rocket,
  Users,
  Briefcase,
  FileText,
  Bell,
  Star,
  MessageCircle,
  User,
  Settings,
  HelpCircle,
  Phone,
  LogOut,
  PlusCircle,
} from "lucide-react";
import { API_BASE_URL } from "../config";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`${API_BASE_URL}/api/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Dashboard fetch failed");
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData);
      } catch (err) {
        console.error("Dashboard Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return <div className="pt-24 text-center">Loading...</div>;
  if (!user)
    return (
      <div className="pt-24 text-center text-red-600">
        Failed to load user. Please log in again.
      </div>
    );

  const isInvestor = user.role === "investor";

  return (
    <div className="flex min-h-screen bg-[#f4f6f9]">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-60 bg-[#7070f3] text-white p-6 z-50">
        <div className="text-2xl font-bold text-center mb-8">PitchBridge</div>
        <nav className="flex flex-col space-y-3">
          <SidebarLink to="/" label="Home" icon={<Home />} />
          {isInvestor ? (
            <>
              <SidebarLink to="/startups" label="View Startups" icon={<Users />} />
              <SidebarLink to="/investor-deck" label="Investor Deck" icon={<FileText />} />
              <SidebarLink to="/rate-startups" label="Rate Startups" icon={<Star />} />
            </>
          ) : (
            <>
              <SidebarLink to="/submit-pitch" label="Submit Pitch" icon={<Rocket />} />
              <SidebarLink to="/create-startup" label="Create Startup" icon={<PlusCircle />} />
              <SidebarLink to="/investors" label="View Investors" icon={<Briefcase />} />
            </>
          )}
          <SidebarLink to="/notifications" label="Notifications" icon={<Bell />} />
          <SidebarLink to="/messages" label="Messages" icon={<MessageCircle />} />
          <SidebarLink to="/profile" label="Profile" icon={<User />} />
          <SidebarLink to="/settings" label="Settings" icon={<Settings />} />
          <SidebarLink to="/faq" label="FAQ / Help" icon={<HelpCircle />} />
          <SidebarLink to="/contact" label="Contact" icon={<Phone />} />
          <SidebarLink to="/logout" label="Log Out" icon={<LogOut />} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-60 p-8 w-full bg-[#f5f6fa] min-h-screen overflow-y-auto">
        <h1 className="text-3xl font-bold mb-2">Welcome, {user.name} 👋</h1>
        <p className="text-gray-600 mb-1">📧 {user.email}</p>
        <p className="mb-6">
          🧑‍💼 Role: <span className="font-semibold capitalize">{user.role}</span>
        </p>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold">What would you like to do today?</h2>
          <ul className="list-disc list-inside space-y-1">
            {isInvestor ? (
              <>
                <li>Explore <strong>Startups</strong> to invest in</li>
                <li>Submit <strong>preferences</strong> or upload a brief PDF</li>
                <li>Give <strong>ratings</strong> to startups</li>
              </>
            ) : (
              <>
                <li>Submit your <strong>Pitch</strong></li>
                <li>Create your <strong>Startup Profile</strong></li>
                <li>Explore potential <strong>Investors</strong></li>
              </>
            )}
            <li>Check your <strong>Messages</strong> and <strong>Notifications</strong></li>
            <li>Review and update your <strong>Profile</strong></li>
            <li>Adjust your <strong>Settings</strong></li>
          </ul>
          <p className="mt-4 text-gray-700">
            Use the navigation menu on the left to begin. Let’s build something great
            together! 🚀
          </p>
        </div>
      </main>
    </div>
  );
};

const SidebarLink = ({ to, label, icon }) => (
  <Link
    to={to}
    className="flex items-center text-[#e0e0ff] hover:bg-[#4749cc] hover:text-white transition px-3 py-2 rounded-md space-x-3 font-medium"
  >
    <span>{icon}</span>
    <span>{label}</span>
  </Link>
);

export default Dashboard;


