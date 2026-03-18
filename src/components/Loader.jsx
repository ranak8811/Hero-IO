import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-24 h-24 rounded-full border-4 border-violet-100 border-t-violet-600 animate-spin"></div>
        
        {/* Inner spinning logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={logo} 
            alt="Loading..." 
            className="w-12 h-12 object-contain animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
