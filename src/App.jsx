import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import CollegeDetail from "./pages/CollegeDetail";

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar stays fixed on the left */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/college/:id" element={<CollegeDetail />} />
        </Routes>
      </div>
    </div>
  );
}
