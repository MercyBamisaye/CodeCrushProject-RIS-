import React from 'react';
import RISLogo from '../assets/RISLogo.png'; // Import your company logo

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8" style={{
      width: '1520px',
      height: '200px',
      top: '2209px',
    }}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <img src={RISLogo} alt="Company Logo" className="h-10 mr-4" />
        </div>
        {/* Social Icons */}
        <div className="flex items-center mt-4 sm:mt-0">
          {/* Instagram Icon */}
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          {/* Twitter Icon */}
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          {/* TikTok Icon */}
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <i className="fab fa-tiktok"></i>
          </a>
          {/* Facebook Icon */}
          <a href="#" className="text-white hover:text-gray-400 transition duration-300">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        {/* Columns with Texts */}
        <div className="flex justify-between mt-4 sm:mt-0">
          {/* First Column */}
          <div className="mr-8">
            <h2>Support</h2>
            <p>Articles</p>
            <p>Tutorials</p>
            <p>FAQs</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
          </div>
          {/* Second Column */}
          <div className="mr-8">
            <h2>Company</h2>
            <p>About us</p>
            <p>The Team</p>
            <p>Partnerships</p>
            <p>Awards</p>
            <p>Press</p>
          </div>
          {/* Third Column */}
          <div>
            <h2>More</h2>
            <p>Partner Program</p>
            <p>Customers story</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
