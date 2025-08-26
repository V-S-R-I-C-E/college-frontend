const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://college-backend.onrender.com"; // 👈 replace with your Render URL

export default API_BASE;
