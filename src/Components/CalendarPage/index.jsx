import React from 'react';
import Calendar from '../Calendar';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';

const index = () => {
  return (
    <div className="Page_Wrapper flex flex-col bg-white">
      <Navbar />
      <div className="Page_container h-full flex flex-col">
        <div className="flex items-start justify-center mt-20">
          <div className="w-full flex">
            <Sidebar />
            <Calendar />
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full fixed">
        <Footer />
      </div>
    </div>
  );
};

export default index;
