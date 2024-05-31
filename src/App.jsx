import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx"; // Import the new Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add route for Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
