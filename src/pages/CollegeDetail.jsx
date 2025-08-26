import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../config";


export default function CollegeDetail() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/college/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.error("Error fetching college:", err));
  }, [id]);

  if (!college) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img
        src={`${API_BASE_URL}${college.image}`}
        alt={college.name}
        className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{college.name}</h2>
      <p className="text-gray-600 mb-2">{college.location}</p>
      <p className="mb-4">{college.description}</p>
      <h3 className="text-xl font-semibold mb-2">Courses Offered:</h3>
      <ul className="list-disc pl-6">
        {college.courses.map((course, i) => (
          <li key={i}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
