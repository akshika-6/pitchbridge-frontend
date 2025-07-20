import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Startups = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(`${API_BASE_URL}/api/startups`)
    .then(res => res.json())
    .then(data => {
      console.log("Startups fetched:", data);

      if (Array.isArray(data.data)) {
        setStartups(data.data);
      } else {
        console.error("Unexpected format. Expected data.data to be an array.");
        setStartups([]);
      }

      setLoading(false);
    })
    .catch(err => {
      console.error("Failed to load startups:", err);
      setLoading(false);
    });
}, []);


  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading startups...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Explore Startups
      </h1>

      {startups.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {startups.map((startup) => (
            <Link
              key={startup._id}
              to={`/startups/${startup._id}`}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {startup.startupName || "Unnamed Startup"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {startup.summary?.slice(0, 100) || "No summary available."}...
              </p>
              <div className="mt-4 text-sm text-blue-500 hover:underline">
                View Details →
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No startups found.
        </p>
      )}
    </div>
  );
};

export default Startups;
