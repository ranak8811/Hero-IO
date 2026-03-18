import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Router";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      {/* Footer will go here */}
    </div>
  );
}

export default App;
