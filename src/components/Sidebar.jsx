import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">College Directory</h1>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="block hover:text-gray-300">
          About
        </Link>
      </nav>
    </div>
  );
}
