import React from 'react';
import Navbar from './Navbar';
import Footer from '../../../hris/src/components/Footer';
<Navbar/>
function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute w-1440 h-375 top-60 left-1 bg-white opacity-0">
          <h1 className="font-noto-serif-bengali font-bold text-4xl text-left text-black w-517 h-62 top-72 left-102 opacity-0">
            Step Into The Future HR Management.
          </h1>
          <div className="flex items-center w-233 h-27 top-226 left-130 opacity-0">
            <input type="checkbox" className="w-6 h-6 bg-green-700 rounded-md mr-2" />
            <p className="font-noto-serif-bengali font-bold text-base text-black">
              Enjoy unified data
            </p>
          </div>
        </div>
        <div className="absolute w-440 h-265 top-59 left-892 opacity-0">
          {/* Image goes here */}
        </div>
      </section>

      {/* Second Section */}
      <section className="relative">
        <div className="absolute w-1440 h-334 top-431 left-1 bg-gray-600 opacity-0">
          <h2 className="font-noto-serif-bengali font-bold text-2xl text-center text-white w-198 h-24 top-2 left-612 opacity-0">
            Meet Our Team
          </h2>
          <div className="flex flex-col gap-10 items-center">
            {/* Team Members */}
            <div className="w-280 h-170 bg-white p-4 gap-10 rounded-l-lg opacity-0">
              <div className="w-60 h-60 rounded-full bg-gray-300 opacity-0">
                {/* Avatar image goes here */}
              </div>
              <p className="font-noto-serif-bengali font-bold text-sm text-center w-117 h-38 opacity-0">
                Adaeze Eze
                <br />
                Lead Web Developer
              </p>
            </div>
            {/* Repeat for other team members */}
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-white">
        <div className="border-t-2 border-gray-300">
          <h2 className="font-noto-serif-bengali font-bold text-2xl text-left text-black p-8">
            Why Choose RIS?
          </h2>
          <div className="grid grid-cols-3 gap-8 p-8">
            {/* First reason */}
            <div className="flex flex-col items-center">
              {/* Image goes here */}
              <p className="font-noto-serif-bengali font-bold text-lg text-center">Reason 1</p>
              <p className="text-gray-700 text-center">Write-up for reason 1</p>
            </div>
            {/* Second reason */}
            <div className="flex flex-col items-center">
              {/* Image goes here */}
              <p className="font-noto-serif-bengali font-bold text-lg text-center">Reason 2</p>
              <p className="text-gray-700 text-center">Write-up for reason 2</p>
            </div>
            {/* Third reason */}
            <div className="flex flex-col items-center">
              {/* Image goes here */}
              <p className="font-noto-serif-bengali font-bold text-lg text-center">Reason 3</p>
              <p className="text-gray-700 text-center">Write-up for reason 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="relative">
        <div className="absolute w-1440 h-400 top-765 left-1 bg-gray-600 opacity-0">
          <h2 className="font-noto-serif-bengali font-bold text-2xl text-center text-white w-198 h-24 top-2 left-612 opacity-0">
            Our Services
          </h2>
          {/* Services content goes here */}
        </div>
      </section>

      {/* Fifth Section */}
      <section className="relative">
        <div className="absolute w-1440 h-334 top-1200 left-1 bg-gray-600 opacity-0">
          <h2 className="font-noto-serif-bengali font-bold text-2xl text-center text-white w-198 h-24 top-2 left-612 opacity-0">
            Contact Us
          </h2>
          {/* Contact form or details */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
