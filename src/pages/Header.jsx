import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  IconBrandReact,
  IconLogout,
  IconUser,
  IconBell,
  IconMenu2,
} from "@tabler/icons-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg py-3 px-4 sm:px-6 flex justify-between items-center z-50">
      <Link
        to="/dashboard"
        className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
      >
        <div className="bg-purple-100 p-2 rounded-lg">
          <IconBrandReact size={28} />
        </div>
        <span className="text-xl font-bold hidden sm:inline">Beyond Chats</span>
      </Link>

      {user ? (
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IconBell size={20} className="text-gray-600" />
          </button>

          <div className="hidden sm:flex items-center bg-purple-50 px-3 py-1.5 rounded-full">
            <IconUser size={20} className="text-purple-600 mr-2" />
            <span className="text-gray-700 text-sm">{user.email}</span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <IconLogout size={20} />
            <span className="hidden sm:inline">Logout</span>
          </button>

          <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <IconMenu2 size={24} className="text-gray-600" />
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg"
        >
          <IconUser size={20} />
          <span className="hidden sm:inline">Sign In</span>
        </Link>
      )}
    </header>
  );
};

export default Header;
