import { Link } from "react-router-dom";
import { appsData } from "../data/apps";
import AppCard from "./AppCard";

const TrendingApps = () => {
  // Get first 8 apps for the trending section as per requirements
  const trendingApps = appsData.slice(0, 8);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Trending Apps
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="text-center">
          <Link
            to="/apps"
            className="inline-block bg-violet-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200"
          >
            Show All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
