import heroImage from "../assets/hero.png";
import {
  FaGooglePlay,
  FaApple,
  FaCheck,
  FaPowerOff,
  FaRegClock,
  FaTrello,
} from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { LuSwords } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          We Build <br /> <span className="text-violet-600">Productive</span>{" "}
          Apps
        </h1>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-lg text-gray-500 mb-10 leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-white border-2 border-gray-100 rounded-xl hover:border-violet-600 transition-all group shadow-sm"
          >
            <FaGooglePlay className="text-2xl text-gray-800 group-hover:text-violet-600 transition-colors" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-violet-600 transition-colors leading-tight">
                Get it on
              </p>
              <p className="text-sm font-bold text-gray-800">Google Play</p>
            </div>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-white border-2 border-gray-100 rounded-xl hover:border-violet-600 transition-all group shadow-sm"
          >
            <FaApple className="text-2xl text-gray-800 group-hover:text-violet-600 transition-colors" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-violet-600 transition-colors leading-tight">
                Download on the
              </p>
              <p className="text-sm font-bold text-gray-800">App Store</p>
            </div>
          </a>
        </div>

        {/* Hero Image Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative z-10 animate-fade-in-up">
            <img
              src={heroImage}
              alt="App Showcase"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
