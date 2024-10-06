import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaMountainSun } from 'react-icons/fa6';
import { PiCityFill } from 'react-icons/pi';
import { LiaLandmarkSolid } from 'react-icons/lia';
import { MdOutlineKitesurfing, MdFastfood } from 'react-icons/md';
import { RiStarFill, RiStarLine } from 'react-icons/ri';
import { closeaboutcity } from '../redux/slices/aboutcitySlice';
import { AboutcityData } from '../constants/mockData';

const Aboutcity = ({ cityId }) => {
  const dispatch = useDispatch();
  const city = AboutcityData.find((c) => c.id === cityId);

  const handleClose = () => {
    dispatch(closeaboutcity());
  };

  return (
    <>
      {city && (
        <div className="Aboutcity_page fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50">
          <div className="Aboutcity_wrapper w-[65%] h-[75%] bg-white rounded-lg shadow-lg border border-gray-700">
            <div className="Aboutcity_container flex flex-col items-end p-4 b-2">
              <button onClick={handleClose} type="button">
                <MdClose className="Logo_image_svg cursor-pointer" />
              </button>
            </div>
            <div className="flex px-10 py-7 w-full h-[80%] justify-center gap-5 border-2 border-white">
              {/* 데스크탑 모니터 mt-32 / 노트북 모니터 mt-10 */}
              <div className="text_box w-1/2 flex flex-col h-full border-2 border-white gap-2">
                <div className="text_title_eng text-xl text-gray-500 font-Montserrat">
                  {city.English_name}
                </div>
                <div className="text_title_kor text-4xl font-bold leading-none">
                  {city.Korean_name}
                </div>
                <div className="text_description pt-4 mt-4 text-xl text-justify line-clamp-7 border-2 border-white leading-relaxed">
                  {city.city_description}
                </div>
                <div className="icon_box flex mt-10 w-full justify-evenly p-1">
                  <div className="flex flex-col items-center justify-center w-1/5">
                    <p className="flex gap-1">
                      <FaMountainSun className="w-5 h-5" />
                      <h3 className="font-semibold">자연/경관</h3>
                    </p>
                    {city.Nature_rating}
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/5">
                    <p className="flex gap-1">
                      <PiCityFill className="w-5 h-5" />
                      <h3 className="font-semibold">도시/야경</h3>
                    </p>
                    {city.City_rating}
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/5">
                    <p className="flex gap-1">
                      <LiaLandmarkSolid className="w-5 h-5" />
                      <h3 className="font-semibold">문화</h3>
                    </p>
                    {city.Culture_rating}
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/5">
                    <p className="flex gap-1">
                      <MdOutlineKitesurfing className="w-5 h-5" />
                      <h3 className="font-semibold">액티비티</h3>
                    </p>
                    {city.Activity_rating}
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/5">
                    <p className="flex gap-1">
                      <MdFastfood className="w-5 h-5" />
                      <h3>음식</h3>
                    </p>
                    {city.Food_rating}
                  </div>
                </div>
                <Link
                  to="/calendarpage"
                  className="sublink_planner w-1/3 mx-4 mt-8 py-4 font-semibold bg-black rounded-md text-white text-2xl text-center cursor-pointer border-2 border-white flex justify-center"
                  onClick={handleClose}
                >
                  일정만들기
                </Link>
              </div>
              <div className="image_box w-1/2 h-full">
                <div className="relative h-[30rem] w-full shadow-lg rounded-lg">
                  <img
                    src={city.Image}
                    alt={city.English_name}
                    className="object-center rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Aboutcity;
