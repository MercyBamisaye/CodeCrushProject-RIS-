import React from 'react';
import RISLogo from "../assets/RISLogo.png"
 
function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-900 h-20 px-4">
      <div className="flex items-center">
        <img src={RISLogo} alt="Company Logo" className="h-10 mr-4" style={{ width: '150.58px', height: '56.4px', top: '6px', left: '21px' }} />
        <a href="#" className="text-white mr-10">Home</a>
        <a href="#" className="text-white mr-10">About</a>
        <a href="/resources" className="text-white mr-10">Resources</a>
        <a href="#" className="text-white mr-10">Contact Us</a>
        <a href="#" className="text-white mr-10">Pricing</a>
      </div>
      <div className="flex items-center">
        <a href="/signup" className="text-white mr-8">Sign Up</a>
        <div className="bg-white text-black px-4 py-2 rounded-lg">
          <a href="#" className="text-black">Request for Free Trial</a>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;