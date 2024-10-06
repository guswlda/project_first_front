import React from 'react';
import travelImage from '../assets/travel55.webp';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Itempanel = () => {
  return (
    <div className="Itempannel_container w-3/5 p-1">
      <div className="Itempannel_wrapper h-full flex flex-col items-center">
        <div
          className="p-1 m-1 shadow-xl"
          style={{
            width: '80%',
            height: '90%',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img
            src={travelImage}
            alt="Travel"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* <div
          className="Itempannel_text px-10 h-[10%] font-semibold font-gothicA1 flex gap-2 justify-end"
          style={{ width: '80%' }}
        >
          <Link to="/howtouse" className="flex items-center gap-1">
            <span className="flex items-center text-xl hover:text-gray-400">
              How To Use <FaLongArrowAltRight className="w-5 h-5 ml-1" />
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Itempanel;
