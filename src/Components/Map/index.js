import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GoogleMapComponent from '../MapAPI';

const index = () => {
  return (
    <div className="Page_Wrapper flex flex-col bg-white">
      <div className="Page_container flex flex-col h-full">
        <Navbar />
        <div className="flex items-start justify-center mt-20">
          <div className="w-full flex">
            <Sidebar />
            <GoogleMapComponent />
          </div>
        </div>
      </div>
      <div className="bottom-0 fixed w-full">
        <Footer />
      </div>
    </div>
  );
};

export default index;
