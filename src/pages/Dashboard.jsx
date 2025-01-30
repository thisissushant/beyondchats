import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  IconBuildingCommunity,
  IconUser,
  IconSettings,
  IconBell,
  IconChartBar,
  IconMessage,
} from "@tabler/icons-react";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: <IconBuildingCommunity size={24} />,
      title: "Organization Setup",
      description: "Configure your company profile and settings",
      action: () => navigate("/setup-organisation"),
      color: "bg-purple-600",
    },
    {
      icon: <IconChartBar size={24} />,
      title: "Analytics",
      description: "View chatbot performance metrics",
      color: "bg-blue-600",
    },
    {
      icon: <IconMessage size={24} />,
      title: "Conversations",
      description: "Review chat history and interactions",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <IconUser size={32} className="text-purple-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Welcome back, {user?.email?.split("@")[0] || "User"}! 👋
                </h1>
                <p className="text-gray-600 mt-1">
                  Let&apos;s make your chatbot even better today
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <IconBell size={24} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <IconSettings size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Active Users", value: "1,234" },
            { label: "Chat Sessions", value: "5,678" },
            { label: "Response Rate", value: "98%" },
            { label: "Satisfaction", value: "4.8/5" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`${action.color} text-white rounded-full w-12 h-12 flex items-center justify-center mb-4`}
              >
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </button>
          ))}
        </div>
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="text-gray-800">New user interaction recorded</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
