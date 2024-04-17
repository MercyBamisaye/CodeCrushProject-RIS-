import React, { useState } from 'react';
import Image from '../assets/unsplash.png';
import Logo from '../assets/RISLogo.png';

const HRLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailClick = () => {
    setShowEmailInput(true);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side */}
        <div className="flex justify-center items-center w-1/2 bg-left">
          <img src={Image} alt="Background Image" className="mt-6" style={{ width: "800px", height: "750px", marginTop: "10px" }} />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between items-center w-1/2 bg-white" style={{ marginTop: "4px" }}>
          <div className="relative" style={{ marginTop: '3px' }}> {/* Adjusted margin-top */}
            <h1 className="text-black font-serif text-3xl font-semibold mt-13" style={{ textAlign: "center", marginBottom: '3px' }}>WELCOME BACK!</h1> {/* Adjusted margin-top */}
            <div className="bg-blue-800 mt-7 rounded-tl-2xl flex flex-col items-center" style={{ width: "600px", height: "550px" }}>
              <img src={Logo} alt="Company Logo" className="mt-0" style={{ width: "200px" }} />
              <h2 className="text-white font-serif text-2xl font-semibold mt-6">Please Fill in your details below.</h2>
              <div className="relative mt-10" style={{ width: "400px", height: "50px", padding: "10px 0px 0px 0px", gap: "10px", borderRadius: "20px 0px 0px 0px", opacity: "0px" }}>
                <input
                  type="text"
                  className="w-full h-full px-4 rounded-tl-xl rounded-bl-xl bg-white"
                  placeholder="Employee’s Email"
                  onClick={handleEmailClick}
                  value={email}
                  onChange={handleEmailChange}
                />
                {showEmailInput && (
                  <input
                    type="text"
                    className="absolute top-0 left-0 w-full h-full px-4 rounded-tl-xl rounded-bl-xl bg-white"
                    placeholder="Employee’s Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                )}
              </div>
              <p className="text-white cursor-pointer mt-4" style={{ marginTop: '80px', fontFamily: 'Roboto Serif', fontSize: '20px', fontWeight: '400', lineHeight: '43.42px', textAlign: 'center' }}>Forgot Details?</p>
              <button className="w-117 h-61 px-4 rounded-tl-xl rounded-bl-xl bg-white mt-6" style={{ marginTop: '80px', fontFamily: 'Roboto Serif', fontSize: '35px', fontWeight: '400', lineHeight: '40.99px', textAlign: 'center' }}>Login</button>
            </div>
          </div>
          <p className="text-black font-serif text-lg font-semibold mt-6 mb-6" style={{ textAlign: 'center', marginBottom: "60px" }}>HR Management System of the Future...</p>
        </div>
      </div>
    </div>
  );
};

export default HRLoginScreen;
