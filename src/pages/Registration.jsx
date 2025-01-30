import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import GoogleAuthButton from "../components/Auth/GoogleAuthButton";
import {
  IconMail,
  IconLock,
  IconBrandReact,
  IconArrowRight,
  IconInfoCircle,
} from "@tabler/icons-react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await signup(email, password);
      setMessage("Verification email sent! Please check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white p-6 sm:p-8 shadow-2xl rounded-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <IconBrandReact size={48} className="text-purple-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Join Beyond Chats to get started
          </p>
        </div>

        {message && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
            <p className="text-green-700 text-sm flex items-center">
              <IconInfoCircle size={20} className="mr-2" />
              {message}
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
            <p className="text-red-700 text-sm flex items-center">
              <IconInfoCircle size={20} className="mr-2" />
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div className="relative group">
              <IconMail
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-purple-500 transition-colors"
                size={20}
              />
              <input
                type="email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative group">
              <IconLock
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-purple-500 transition-colors"
                size={20}
              />
              <input
                type="password"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
            type="submit"
          >
            <span>Create Account</span>
            <IconArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6">
            <GoogleAuthButton />
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold hover:text-purple-700 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
