import { Link } from "react-router-dom";
import errorImage from "../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Error Illustration */}
        <div className="max-w-2xl mx-auto mb-12">
          <img 
            src={errorImage} 
            alt="404 Not Found" 
            className="w-full h-auto drop-shadow-xl animate-fade-in-up"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-5xl font-extrabold text-[#001427] mb-4">
          Oops, page not found!
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          The page you are looking for is not available.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-block bg-violet-600 text-white px-10 py-3.5 rounded-xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
