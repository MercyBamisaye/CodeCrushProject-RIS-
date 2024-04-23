import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Resources from "./Resources";
import HRLoginScreen from "./HrSystemLogin";
import RISDashboard from "./RISDashboard";
import LandingPage from "./LandingPage";




function AllRoutes() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/hr-login" element={<HRLoginScreen />} />
          <Route path="/ris-dashboard" element={<RISDashboard />} />
        
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default AllRoutes;
