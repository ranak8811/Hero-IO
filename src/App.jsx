import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Router";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
