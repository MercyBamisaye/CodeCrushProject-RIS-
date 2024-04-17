import React from 'react';
import Logo from '../assets/RISLogo.png'
import DashboardIcon from '../assets/Home.png'
import NotificationIcon from '../assets/Notification.png'
import ChatIcon from '../assets/Chat.png'
import AnalyticsIcon from '../assets/BarChat.png'
import FileIcon from '../assets/Document.png'
import SettingsIcon from '../assets/Setting.png'
import LogoutIcon from '../assets/Logout.png'
import HeroImage from '../assets/Manager.png'
import Image1 from '../assets/Rectangle1.png'
import Image2 from '../assets/Rectangle2.png'
import Image3 from '../assets/Rectangle3.png'
import Image4 from '../assets/Rectangle4.png'

const RISDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-gray-700 text-white flex flex-col items-center justify-between space-y-8 h-screen overflow-y-auto">
        {/* Company Logo */}
        <img src={Logo} alt="Company Logo" className="mt-4" />

        {/* Sidebar Items */}
        <div className="space-y-2">
          <div className="sidebar-item">
            <div className="sidebar-item-wrapper bg-black flex items-center" style={{ borderRadius: '30px', width: '150px', height: '45px', marginBottom: '25px'}}>
              <img src={DashboardIcon} alt="Dashboard" className="w-6 h-6" />
              <span className="ml-2">Dashboard</span>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-wrapper bg-black flex items-center" style={{ borderRadius: '30px', width: '150px', height: '45px', marginBottom: '25px'}}>
              <img src={NotificationIcon} alt="Notification" className="w-6 h-6" />
              <span className="ml-2">Notification</span>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-wrapper bg-black flex items-center" style={{ borderRadius: '30px', width: '150px', height: '45px', marginBottom: '25px'}}>
              <img src={ChatIcon} alt="Chat" className="w-6 h-6" />
              <span className="ml-2">Chats</span>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-wrapper bg-black flex items-center" style={{ borderRadius: '30px', width: '150px', height: '45px', marginBottom: '25px'}}>
              <img src={AnalyticsIcon} alt="Analytics" className="w-6 h-6" />
              <span className="ml-2">Analytics</span>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-wrapper bg-black flex items-center" style={{ borderRadius: '30px', width: '150px', height: '45px', marginBottom: '25px'}}>
              <img src={FileIcon} alt="Files" className="w-6 h-6" />
              <span className="ml-2">Files</span>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-wrapper bg-black flex items-center" style={{ borderRadius: '30px', width: '150px', height: '45px', marginBottom: '25px'}}>
              <img src={SettingsIcon} alt="Settings" className="w-6 h-6" />
              <span className="ml-2">Settings</span>
            </div>
          </div>
        </div>

        {/* Logged in User */}
        <div className="flex items-center">
          <img src="/path/to/user_avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
          <span>David</span>
        </div>

        {/* Logout Button */}
        <div className="w-full bg-gray-600 flex items-center justify-center rounded-tl-3xl">
          <img src={LogoutIcon} alt="Logout" className="w-6 h-6" />
          <span className="ml-2">Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-gray-200 p-8 overflow-y-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4">Welcome Back David!</h1>

        {/* Hero Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold">What do you have planned today?</h2>
            <p>Let’s take a look, shall we.</p>
          </div>
          <div className="w-32 h-32 bg-green-700 rounded-full"></div> {/* Placeholder for small div */}
          <img src={HeroImage} alt="Image" className="w-20 h-20 rounded-full" />
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src={Image1} alt="Image 1" className="w-30 h-25 mb-2" />
            <p>Title 1</p>
          </div>
          <div>
            <img src={Image2} alt="Image 2" className="w-30 h-25 mb-2" />
            <p>Title 2</p>
          </div>
          <div>
            <img src={Image3} alt="Image 3" className="w-30 h-25 mb-2" />
            <p>Title 3</p>
          </div>
          <div>
            <img src={Image4} alt="Image 4" className="w-30 h-25 mb-2" />
            <p>Title 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RISDashboard;
