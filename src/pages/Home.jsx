import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE from "./config";
export default function Home() {
  const [colleges, setColleges] = useState([]);  // must be an array
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}//colleges?q=${query}&page=${page}&per_page=5`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch colleges");
        return res.json();
      })
      .then((data) => {
        setColleges(Array.isArray(data.results) ? data.results : []);
        setTotal(data.total || 0);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Could not load colleges. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Colleges</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search colleges..."
        className="border p-2 rounded mb-4 w-full"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1); // reset to page 1 when searching
        }}
      />

      {/* Error / Loading states */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* College list */}
      <ul className="space-y-2">
        {colleges.map((college) => (
          <li
            key={college.id}
            className="border rounded p-3 hover:bg-gray-50 transition"
          >
            <Link to={`${API_BASE}/college/${college.id}`} className="text-blue-600">
              {college.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* No results */}
      {!loading && colleges.length === 0 && !error && (
        <p className="text-gray-500">No colleges found.</p>
      )}

      {/* Pagination */}
      <div className="flex gap-2 mt-4 items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} of {Math.max(1, Math.ceil(total / 5))}
        </span>
        <button
          disabled={page >= Math.ceil(total / 5)}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
