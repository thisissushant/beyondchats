import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import VerifyEmail from "./components/Auth/VerifyEmail";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/LoginPage";
import SetupOrganisation from "./pages/SetupOrganisation";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Header from "./pages/Header";

const PrivateLayout = () => {
  return (
    <PrivateRoute>
      <>
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/setup-organisation" element={<SetupOrganisation />} />
            <Route
              path="/chatbot-intigration"
              element={<ChatbotIntegration />}
            />
          </Routes>
        </div>
      </>
    </PrivateRoute>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateLayout />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
