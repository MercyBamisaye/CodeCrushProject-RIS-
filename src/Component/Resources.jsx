import React from "react";
import SmartPeople from "../assets/SmartPeople.png";
import Navbar from "./Navbar";

function Resources() {
  return (
    <div>
      <Navbar />
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        background: "linear-gradient(180deg, #7C90E2 0%, #9BEA70 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
      }}
    >
      {/* Our Resources Header */}
      <h2
        className="text-black text-lg font-bold mb-1"
        style={{
          fontFamily: "Noto Serif Bengali",
          fontSize: "35px",
          fontWeight: "800",
          lineHeight: "55.79px",
          textAlign: "center",
          marginTop: "55px",
          marginBottom: "0px",
        }}
      >
        Our Resources
      </h2>
      {/* Rectangular Div with Background Image */}
      <div
        className="relative"
        style={{
          width: "1100px",
          height: "800px",
          top: "100px",
          left: "10px",
          gap: "0px",
          borderRadius: "50px 50px 50px 50px",
          border: "15px solid #2E660F",
          opacity: "0.5",
          backgroundImage: `url(${SmartPeople})`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "190px",
        }}
      >
        {/* Top Row of Rectangles */}
        <div className="absolute top-0 left-0 w-full flex justify-between">
          <div
            className="w-1/5 h-20 flex items-center justify-center "
            style={{ width: "240px", height: "90px" }}
          >
            <button
              className="text-black font-bold"
              style={{
                fontFamily: "Noto Serif Bengali",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "44.63px",
                textAlign: "center",
                borderRadius: "25px",
                width: "200px",
                height: "60px",
                background: "#576C93",
                display: "flex", 
                alignItems: "center",
                justifyContent: "center",
                marginTop: "190px",
                marginLeft: "90px",
              }}
            >
              Article
            </button>
          </div>
          <div
            className="w-1/5 h-20 flex items-center justify-center text-white"
            style={{ width: "240px", height: "90px" }}
          >
            <button
              className="text-black font-bold"
              style={{
                fontFamily: "Noto Serif Bengali",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "44.63px",
                textAlign: "center",
                borderRadius: "25px",
                width: "200px",
                height: "60px",
                background: "#576C93",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                marginTop: "190px",
              }}
            >
              Tutorial
            </button>
          </div>
          <div
            className="w-1/5 h-20 flex items-center justify-center "
            style={{ width: "240px", height: "90px" }}
          >
            <button
              className="text-black font-bold"
              style={{
                fontFamily: "Noto Serif Bengali",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "44.63px",
                textAlign: "center",
                borderRadius: "25px",
                width: "200px",
                height: "60px",
                background: "#576C93",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                marginTop: "190px",
                marginRight: "40px",
              }}
            >
              Privacy Policy
            </button>
          </div>
        </div>
        {/* Bottom Row of Rectangles */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between">
          <div
            className="w-1/5 h-20 flex items-center justify-center  "
            style={{ width: "240px", height: "90px" }}
          >
            <button
              className="text-black font-bold"
              style={{
                fontFamily: "Noto Serif Bengali",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "44.63px",
                textAlign: "center",
                borderRadius: "25px",
                width: "200px",
                height: "90px",
                background: "#576C93",
                display: "flex", 
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                marginLeft: "250px",
              }}
            >
              Legal Information
            </button>
          </div>
          <div
            className="w-1/5 h-20 flex items-center justify-center "
            style={{ width: "240px", height: "90px" }}
          >
            <button
              className="text-black font-bold"
              style={{
                fontFamily: "Noto Serif Bengali",
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "44.63px",
                textAlign: "center",
                borderRadius: "25px",
                width: "200px",
                height: "90px",
                background: "#576C93",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                marginBottom: "10px",
                marginRight: "270px",
              }}
            >
              Software Information
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Resources;
