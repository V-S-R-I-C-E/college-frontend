import { Link } from "react-router-dom";
import API_BASE_URL from "../config";
export default function CollegeCard({ college }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 bg-white">
      <img
        src={`${API_BASE_URL}${college.image}`}
        alt={college.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-bold">{college.name}</h3>
      <p className="text-gray-600">{college.location}</p>
      <Link
        to={`/college/${college.id}`}
        className="inline-block mt-2 text-blue-500 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
