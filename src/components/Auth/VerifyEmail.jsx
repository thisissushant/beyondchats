import { useState } from "react";
import { auth } from "../../firebase/config";
import { sendEmailVerification } from "firebase/auth";
import {
  IconMailForward,
  IconAlertCircle,
  IconCheck,
} from "@tabler/icons-react";

const VerifyEmail = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResendEmail = async () => {
    if (auth.currentUser) {
      setIsLoading(true);
      try {
        await sendEmailVerification(auth.currentUser);
        setMessage("Verification email resent! Please check your inbox.");
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setMessage("Error sending verification email. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex flex-col items-center">
          <IconAlertCircle size={64} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Email Not Verified
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Please verify your email before accessing your account.
          </p>
          <button
            onClick={handleResendEmail}
            disabled={isLoading}
            className="w-full bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <IconMailForward size={20} className="animate-spin mr-2" />
            ) : (
              <IconMailForward size={20} className="mr-2" />
            )}
            {isLoading ? "Sending..." : "Resend Verification Email"}
          </button>
          {message && (
            <div
              className={`mt-4 p-3 rounded-md ${
                message.includes("Error")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              } flex items-center`}
            >
              {message.includes("Error") ? (
                <IconAlertCircle size={20} className="mr-2" />
              ) : (
                <IconCheck size={20} className="mr-2" />
              )}
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
