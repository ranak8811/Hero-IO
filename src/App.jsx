import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}

export default App;
