import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MobileDashboard from "./pages/MobileDashboard"; // Import MobileDashboard component for mobile view

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device width is less than a certain threshold (e.g., 768px for typical tablets)
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the function initially to set the initial state
    checkScreenWidth();

    // Add event listener to window resize event to dynamically update the state
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <Router>
      <Routes> {/* Updated to use Routes instead of Switch */}
        {/* Conditionally render Dashboard or MobileDashboard based on isMobile state */}
        {isMobile ? (
          <Route path="/project/:projectName" element={<MobileDashboard />} />
        ) : (
          <Route path="/project/:projectName" element={<Dashboard />} />
        )}
        <Route path="/" element={<Landing />} />
        <Route path="/~" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Landing />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
