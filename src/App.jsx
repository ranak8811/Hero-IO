import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                {/* Other sections like States Section, Top Apps Section will go here */}
              </>
            }
          />
          <Route path="/apps" element={<div className="pt-32 text-center text-2xl">Apps Page (Coming Soon)</div>} />
          <Route path="/installation" element={<div className="pt-32 text-center text-2xl">Installation Page (Coming Soon)</div>} />
          <Route path="*" element={<div className="pt-32 text-center text-2xl text-red-500">404 - Page Not Found</div>} />
        </Routes>
      </main>
      {/* Footer will go here */}
    </div>
  );
}

export default App;
