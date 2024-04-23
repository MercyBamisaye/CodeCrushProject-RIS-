import React from 'react';
import Logo from '../assets/Logo2.png';
import Group from '../assets/Group.png'
import Navbar from '../Component/Navbar'
import Footer from '../../../hris/src/components/Footer';
function SignUp() {
  return (
    <div>
      <Navbar />
    <div className="flex flex-col justify-center items-center h-screen" style={{ 
      background: 'linear-gradient(135deg, #7C90E2, #9BEA70)',
    }}>
      {/* Company Logo */}
      <img src={Logo} alt="Company Logo" className="h-10 mb-8" style={{ width: '150.58px', height: '56.4px', marginRight: '1200px', marginTop: '25px' }} />
      {/* Sign Up Header */}
      <h2 className="text-black text-lg font-bold mb-1" style={{ 
        fontFamily: 'Noto Serif Bengali',
        fontSize: '35px',
        fontWeight: '800',
        lineHeight: '55.79px',
        textAlign: 'center',
        marginTop: '20px',
        marginRight: '900px',
      }}>SIGN UP</h2>
      {/* Inputs Section and Image Section */}
      <div className="flex justify-between items-center w-full ">
        {/* Inputs Section */}
        <div className="flex flex-col justify-center items-center p-8 bg-gray-100 rounded-lg" style={{ 
          width: '490px',
          height: '550px',
          borderRadius: '60px',
          marginLeft: '140px'
        }}>
          {/* First Name and Last Name */}
          <div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="firstName" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>First Name</label>
              <input type="text" id="firstName" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }} />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="lastName" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>Last Name</label>
              <input type="text" id="lastName" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'right' }} />
            </div>
          </div>
          {/* Company Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>Company Email</label>
            <input type="email" id="email" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'right' }} />
          </div>
          {/* Company Size */}
          <div className="mb-4">
            <label htmlFor="companySize" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>Company Size</label>
            <input type="text" id="companySize" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }} />
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>Phone Number</label>
            <input type="text" id="phoneNumber" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }} />
          </div>
          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>Country</label>
            <input type="text" id="country" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }} />
          </div>
          {/* Position */}
          <div className="mb-4">
            <label htmlFor="position" className="block text-black font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }}>Position</label>
            <input type="text" id="position" className="block w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', lineHeight: '17.07px', textAlign: 'left' }} />
          </div>
          </div>
          {/* Sign Up Button */}
          <button className="bg-white text-black py-2 px-4 rounded-md" style={{ width: '200px', borderRadius: '20px', height: '40px', border: '1px'}}>Sign Up</button>
        </div>
        {/* Image Section */}
        <div className="w-1/2 width" style={{ width: '500px', height: '502px', marginRight: '280px'}}>
          <img src={Group} alt="Image" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default SignUp;
