import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import History from "./components/History";
import ReportUpload from "./components/ReportUpload";
import Login from "./components/Login";
import Register from "./components/Register"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/report-upload" element={<ReportUpload />} />
      </Routes>
    </Router>
  );
}

export default App;