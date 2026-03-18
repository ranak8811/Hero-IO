import { useState, useEffect } from "react";
import { appsData } from "../data/apps";
import AppCard from "../components/AppCard";
import AppNotFound from "../components/AppNotFound";
import Loader from "../components/Loader";
import { FiSearch } from "react-icons/fi";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Requirements: Implement live search with loading animation
    const filterApps = () => {
      setIsLoading(true);
      
      // Simulate a small delay for search operation to show loading animation (Challenge Part)
      const timeoutId = setTimeout(() => {
        const filtered = appsData.filter((app) =>
          app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApps(filtered);
        setIsLoading(false);
      }, 500);

      return timeoutId;
    };

    const timeoutId = filterApps();
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50/30">
      {/* Show Loader during search operation */}
      {isLoading && <Loader />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#001427] mb-4">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-lg">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search and Stats Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-xl font-bold text-[#001427]">
            ({filteredApps.length}) Apps Found
          </div>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              <FiSearch />
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <AppNotFound />
        )}
      </div>
    </div>
  );
};

export default AllApps;
