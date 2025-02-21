import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { googleSignIn, logOut, user } = useAuth();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#CAE4F7] shadow-lg p-4 flex flex-col justify-between">
      {/* Logo or App Name */}
      <h1 className="text-2xl font-bold mb-6">Task Management</h1>

      {/* Navigation Links */}
      <nav className="space-y-2">
        <Link to="/" className="block text-lg hover:text-blue-500">
          Home
        </Link>
        <Link to="/projects" className="block text-lg hover:text-blue-500">
          Task List
        </Link>
        <Link to="/tickets" className="block text-lg hover:text-blue-500">
          Add Task
        </Link>
      </nav>

      {/* Sign In / Sign Out Buttons */}
      <div className="mt-auto">
        {!user ? (
          <button 
            onClick={googleSignIn} 
            className="w-full cursor-pointer bg-green-500 text-white py-2 rounded mb-2"
          >
            Sign In
          </button>
        ) : (
          <button 
            onClick={logOut} 
            className="w-full cursor-pointer bg-red-500 text-white py-2 rounded"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
