import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

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
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;
