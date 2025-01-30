import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IconBrandGoogle } from "@tabler/icons-react";

const GoogleAuthButton = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full bg-white text-gray-700 border border-gray-300 p-3 rounded-md hover:bg-gray-50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center"
    >
      <IconBrandGoogle className="mr-2" size={20} />
      Continue with Google
    </button>
  );
};

export default GoogleAuthButton;
