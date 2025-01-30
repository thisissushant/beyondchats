import { useState } from "react";
import {
  IconRobot,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconCode,
  IconMail,
  IconTestPipe,
  IconCheck,
  IconCopy,
} from "@tabler/icons-react";

const ChatbotIntegration = () => {
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleTestIntegration = () => {
    setIntegrationSuccess(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      '<script src="https://beyondchats.com/chatbot.js"></script>'
    );
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-4 sm:p-6 md:p-8 mt-4 sm:mt-8">
        <div className="flex items-center mb-8 border-b pb-4">
          <IconRobot size={32} className="text-purple-600 mr-3" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Chatbot Integration & Testing
          </h2>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 mb-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <IconCode size={24} className="text-purple-600 mr-2" />
            Integrate on Your Website
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Copy the following code into your{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-purple-600 font-mono">
              &lt;head&gt;
            </code>{" "}
            tag:
          </p>
          <div className="relative">
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm mb-4 overflow-x-auto font-mono">
              &lt;script
              src=&quot;https://beyondchats.com/chatbot.js&quot;&gt;&lt;/script&gt;
            </pre>
            <button
              onClick={handleCopyCode}
              className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300"
              title="Copy to clipboard"
            >
              {copySuccess ? (
                <IconCheck size={20} className="text-green-400" />
              ) : (
                <IconCopy size={20} className="text-gray-300" />
              )}
            </button>
          </div>
          <button className="text-purple-600 hover:text-purple-700 transition-colors duration-300 flex items-center text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-3 py-2">
            <IconMail size={20} className="mr-2" />
            Mail Instructions to Developer
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
            <IconRobot size={20} className="mr-2" />
            Test Chatbot
          </button>

          <button
            onClick={handleTestIntegration}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <IconCode size={20} className="mr-2" />
            Test Integration
          </button>
        </div>
        <div className="mb-6 border border-purple-200 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
          <p className="text-base sm:text-lg font-medium flex items-center flex-wrap">
            <IconTestPipe size={24} className="text-purple-600 mr-2" />
            Chatbot not working as intended?{" "}
            <button className="text-purple-600 underline cursor-pointer ml-2 hover:text-purple-700 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded">
              Share Feedback
            </button>
          </p>
        </div>
        {integrationSuccess && (
          <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 rounded-full p-3 shadow-lg">
                <IconCheck size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Integration Successful! 🎉
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                Explore Admin Panel
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                Start Talking to Your Chatbot
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700">
                Share on Social Media:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="bg-[#1877f2] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center shadow-md hover:shadow-lg">
                  <IconBrandFacebook size={20} className="mr-2" />
                  Facebook
                </button>
                <button className="bg-[#1da1f2] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300 flex items-center shadow-md hover:shadow-lg">
                  <IconBrandTwitter size={20} className="mr-2" />
                  Twitter
                </button>
                <button className="bg-[#0a66c2] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 flex items-center shadow-md hover:shadow-lg">
                  <IconBrandLinkedin size={20} className="mr-2" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotIntegration;
