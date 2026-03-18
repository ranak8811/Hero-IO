import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001427] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="HERO.IO" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Crafting innovative digital experiences that simplify lives and
              empower productivity. Join millions of users worldwide who trust
              HERO.IO for their daily tasks.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 transition-all text-gray-300 hover:text-white"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 transition-all text-gray-300 hover:text-white"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 transition-all text-gray-300 hover:text-white"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-600 transition-all text-gray-300 hover:text-white"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links - Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Our Apps
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links - Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-violet-400 text-sm transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8 w-full"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© Copyright 2026 HERO.IO - All right reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
