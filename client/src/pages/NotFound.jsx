import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-6 py-16">
      <h1 className="text-6xl font-bold text-green-600 mb-4 mt-14">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="text-white bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
