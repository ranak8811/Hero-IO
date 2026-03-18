import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition-all hover:text-violet-600 h-10 flex items-center border-b-2 ${
      isActive
        ? "text-violet-600 border-violet-600"
        : "text-gray-600 border-transparent"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="HERO.IO" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/apps" className={navLinkClasses}>
              Apps
            </NavLink>
            <NavLink to="/installation" className={navLinkClasses}>
              Installation
            </NavLink>
          </div>

          {/* Contribution Button */}
          <div className="flex items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-700 transition-all flex items-center gap-2 shadow-lg shadow-violet-200"
            >
              <FaGithub className="text-lg" />
              Contribute
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
