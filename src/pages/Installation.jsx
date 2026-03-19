import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import InstalledAppRow from "../components/InstalledAppRow";
import { toast } from "react-toastify";
import { FaChevronDown } from "react-icons/fa";
import Loader from "../components/Loader";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setInstalledApps(apps);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleUninstall = (appId, appTitle) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error(`${appTitle} has been uninstalled.`);
  };

  const sortedApps = useMemo(() => {
    let sorted = [...installedApps];
    if (sortBy === "high-low") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "low-high") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    return sorted;
  }, [installedApps, sortBy]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50/30">
      {isLoading && <Loader />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#001427] mb-4">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 text-lg">
            Manage all the applications you have installed from HERO.IO
          </p>
        </div>

        {/* Sort and Count Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-xl font-bold text-[#001427]">
            ({sortedApps.length}) Apps Found
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none w-56 pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all shadow-sm font-semibold"
            >
              <option value="default">Sort by Default</option>
              <option value="high-low">High-Low: Sort by Downloads</option>
              <option value="low-high">Low-High: Sort by Downloads</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FaChevronDown />
            </div>
          </div>
        </div>

        {/* Installed Apps List */}
        {!isLoading &&
          (sortedApps.length > 0 ? (
            <div className="space-y-4">
              {sortedApps.map((app) => (
                <InstalledAppRow
                  key={app.id}
                  app={app}
                  onUninstall={handleUninstall}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                No Apps Installed
              </h2>
              <p className="text-gray-500 mb-8">
                You haven't installed any apps yet. Go explore our collection!
              </p>
              <Link
                to="/apps"
                className="inline-block bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-all"
              >
                Explore Apps
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Installation;
