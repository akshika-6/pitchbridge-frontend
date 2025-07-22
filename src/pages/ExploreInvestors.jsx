// import React from 'react';

// const ExploreInvestors = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4 text-blue-600">Explore Investors</h1>
//       <p className="text-gray-700 dark:text-gray-300">
//         Here you’ll find a curated list of investors that match your startup vision.
//       </p>
//       {/* You can add a search bar, filters, and investor cards here later */}
//     </div>
//   );
// };

// export default ExploreInvestors;


// import React, { useEffect, useState } from 'react';

// const ExploreInvestors = () => {
//   const [investors, setInvestors] = useState([]);

//   useEffect(() => {
//     const fetchInvestors = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch(`${API_BASE_URL}/api/investors`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         setInvestors(data.investors);
//       } catch (error) {
//         console.error('Error fetching investors:', error);
//       }
//     };

//     fetchInvestors();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Explore Investors</h2>
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {investors.map((inv) => (
//           <div
//             key={inv._id}
//             className="border rounded-xl p-4 shadow-lg bg-white dark:bg-gray-900 dark:text-white"
//           >
//             <h3 className="text-lg font-semibold">{inv.name}</h3>
//             <p>{inv.email}</p>
//             <p className="mt-2">Region: {inv.location || 'N/A'}</p>
//             <p>Role: {inv.role}</p>
//             <div className="mt-4 space-x-2">
//               <button className="px-3 py-1 bg-blue-500 text-white rounded">View Profile</button>
//               <button className="px-3 py-1 bg-green-500 text-white rounded">Message</button>
//               <button className="px-3 py-1 bg-purple-500 text-white rounded">Pitch Idea</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreInvestors;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "../config";

const ExploreInvestors = () => {
  const [investors, setInvestors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in.');
          return;
        }

        const response = await axios.get(
          `${API_BASE_URL}/api/investors`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('API response:', response.data); // ✅ Debug if needed

        // ✅ Adjust based on your actual backend structure
        if (response.data && Array.isArray(response.data.data)) {
          setInvestors(response.data.data);
        } else if (Array.isArray(response.data)) {
          setInvestors(response.data);
        } else {
          console.error('Invalid investor data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };

    fetchInvestors();
  }, []);

  const filteredInvestors = investors.filter((inv) =>
    inv.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Explore Investors</h1>
      <p className="text-gray-600 mb-4">
        Here you’ll find a curated list of investors that match your startup vision.
      </p>

      <input
        type="text"
        placeholder="Search investors..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInvestors.length > 0 ? (
          filteredInvestors.map((investor) => (
            <div
              key={investor._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{investor.name}</h2>
                <p className="text-sm text-gray-500">{investor.email}</p>
                <p className="mt-2"><strong>Region:</strong> {investor.location || 'N/A'}</p>
                <p><strong>Role:</strong> {investor.role}</p>
              </div>
              <div className="flex mt-4 space-x-2">
                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                  View Profile
                </button>
                <button className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600">
                  Message
                </button>
                <button className="border border-blue-500 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">
                  Pitch Idea
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No investors found.</p>
        )}
      </div>
    </div>
  );
};

export default ExploreInvestors;
