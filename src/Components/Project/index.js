import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Favorite from '../Favorite';
import Projectbar from '../ProjectBar';

const TravelProject = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex p-4">
        <Projectbar />
        <Favorite />
      </div>
      <Footer />
    </div>
  );
};

export default TravelProject;
