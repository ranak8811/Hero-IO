import { FaDownload, FaStar } from "react-icons/fa";

const InstalledAppRow = ({ app, onUninstall }) => {
  // Helper to format downloads
  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="flex items-center gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      {/* App Image */}
      <div className="w-20 h-20 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
      </div>

      {/* App Info */}
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{app.title}</h3>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <FaDownload className="text-green-500" />
            <span>{formatDownloads(app.downloads)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaStar className="text-orange-500" />
            <span>{app.ratingAvg}</span>
          </div>
          <span>{app.size} MB</span>
        </div>
      </div>

      {/* Uninstall Button */}
      <button
        onClick={() => onUninstall(app.id, app.title)}
        className="bg-[#dc2626] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-all"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppRow;
