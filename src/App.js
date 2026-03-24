// src/App.js
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import UnderConstruction from "./pages/UnderConstruction";

// Buat komponen sederhana sementara untuk halaman lain agar tidak error
const GantryMonitoring = () => (
  <div className="p-4">Halaman Gantry Monitoring</div>
);
const EnvironmentMonitoring = () => (
  <div className="p-4">Halaman Environment Monitoring</div>
);
const DataReport = () => <div className="p-4">Halaman Data and Report</div>;
const Profile = () => <div className="p-4">Halaman Profile</div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout membungkus semua halaman yang butuh Sidebar & Header */}
        <Route path="/" element={<MainLayout />}>
          {/* Redirect dari / ke /dashboard */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          {/* Daftar Halaman */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="gantry" element={<UnderConstruction />} />
          <Route path="environment" element={<UnderConstruction />} />
          <Route path="report" element={<UnderConstruction />} />
          <Route path="profile" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
