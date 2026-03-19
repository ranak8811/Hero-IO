import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  // Helper to format downloads
  const formatDownloads = (num) => {
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return num;
  };

  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
    >
      {/* Image Placeholder/Image */}
      <div className="aspect-square w-full bg-gray-100 rounded-xl mb-4 overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* App Title */}
      <h3 className="text-sm font-bold text-gray-900 mb-4 line-clamp-1 group-hover:text-violet-600 transition-colors">
        {app.title}
      </h3>

      {/* Stats Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
          <FaDownload className="text-[10px] text-green-600" />
          <span className="text-[11px] font-bold text-green-600">
            {formatDownloads(app.downloads)}
          </span>
        </div>
        <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
          <span className="text-[11px] font-bold text-orange-600">
            {app.ratingAvg}
          </span>
          <FaStar className="text-[10px] text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default AppCard;
