import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/apps"
        element={<div className="pt-32 text-center text-2xl">Apps Page (Coming Soon)</div>}
      />
      <Route
        path="/installation"
        element={<div className="pt-32 text-center text-2xl">Installation Page (Coming Soon)</div>}
      />
      <Route
        path="*"
        element={<div className="pt-32 text-center text-2xl text-red-500">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default AppRoutes;
