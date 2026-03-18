import { Link } from "react-router-dom";
import appErrorImage from "../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="py-20 flex items-center justify-center bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Error Illustration */}
        <div className="max-w-md mx-auto mb-8">
          <img 
            src={appErrorImage} 
            alt="App Not Found" 
            className="w-full h-auto animate-fade-in-up"
          />
        </div>

        {/* Text Content */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#001427] mb-4">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-gray-500 text-base mb-10 max-w-xl mx-auto">
          The App you are requesting is not found on our system. please try another apps
        </p>

        {/* Action Button */}
        <Link
          to="/apps"
          className="inline-block bg-violet-600 text-white px-10 py-3.5 rounded-xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
