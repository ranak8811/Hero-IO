import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { appsData } from "../data/apps";
import AppNotFound from "../components/AppNotFound";
import Loader from "../components/Loader";
import { FaDownload, FaStar, FaCommentDots } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const foundApp = appsData.find((a) => a.id === parseInt(id));

    // Check if app is already installed in localStorage
    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]",
    );
    const exists = installedApps.some((a) => a.id === parseInt(id));

    const timer = setTimeout(() => {
      setApp(foundApp);
      setIsInstalled(exists);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleInstall = () => {
    if (isInstalled) return;

    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]",
    );
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));

    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  const formatNumber = (num) => {
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return num;
  };

  if (loading) return <Loader />;
  if (!app) return <AppNotFound />;

  const sortedRatings = [...app.ratings].reverse();

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: App Info */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="w-full md:w-80 flex-shrink-0">
            <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-[#001427] mb-2">
              {app.title}
            </h1>
            <p className="text-violet-600 font-medium mb-8">
              Developed by{" "}
              <span className="hover:underline cursor-pointer">
                {app.companyName.toLowerCase().replace(/\s/g, ".")}
              </span>
            </p>
            <div className="flex flex-wrap gap-8 mb-10 border-t border-b border-gray-100 py-8">
              <div className="flex flex-col items-center">
                <FaDownload className="text-green-500 text-xl mb-3" />
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Downloads
                </span>
                <span className="text-2xl font-bold text-[#001427]">
                  {formatNumber(app.downloads)}
                </span>
              </div>
              <div className="border-r border-gray-100"></div>
              <div className="flex flex-col items-center">
                <FaStar className="text-orange-500 text-xl mb-3" />
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Average Ratings
                </span>
                <span className="text-2xl font-bold text-[#001427]">
                  {app.ratingAvg}
                </span>
              </div>
              <div className="border-r border-gray-100"></div>
              <div className="flex flex-col items-center">
                <FaCommentDots className="text-violet-500 text-xl mb-3" />
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Total Reviews
                </span>
                <span className="text-2xl font-bold text-[#001427]">
                  {formatNumber(app.reviews)}
                </span>
              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                isInstalled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                  : "bg-[#00cba9] text-white hover:bg-[#00b395] shadow-[#00cba9]/20"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#001427] mb-8">Ratings</h2>
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={sortedRatings}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 14 }}
                  width={60}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                  {sortedRatings.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#ff8a00" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold text-[#001427] mb-8">
            Description
          </h2>
          <div className="prose prose-violet max-w-none text-gray-500 leading-relaxed space-y-6">
            <p>{app.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
