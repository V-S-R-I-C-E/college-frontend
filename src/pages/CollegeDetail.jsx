import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API_BASE from "./config";
export default function CollegeDetail() {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/college/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch college details");
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setCollege(null);
        } else {
          setCollege(data);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Could not load college details.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!college) return <p>No college data found.</p>;

  return (
    <div className="max-w-2xl">
      {/* Image (only show if exists) */}
      {college.image && (
        <img
          src={`http://localhost:5000/static/${college.image}`}
          alt={college.name}
          className="rounded-lg mb-4 w-full h-60 object-cover"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{college.name}</h1>
      {college.location && (
        <p className="text-gray-600 mb-4">{college.location}</p>
      )}
      {college.description && <p className="mb-4">{college.description}</p>}

      {/* Courses */}
      {Array.isArray(college.courses) && college.courses.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-2">Courses Offered:</h2>
          <ul className="list-disc list-inside">
            {college.courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
