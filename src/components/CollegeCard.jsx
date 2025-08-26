import { Link } from "react-router-dom";

export default function CollegeCard({ college }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <img
        src={`http://localhost:5000${college.image}`}
        alt={college.name}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />
      <h2 className="text-xl font-semibold">{college.name}</h2>
      <p className="text-gray-600">{college.location}</p>
      <Link
        to={`/college/${college.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
