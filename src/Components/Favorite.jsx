import React from 'react';
import travelImage from '../assets/Geojetongyeong.jpg';
import travelImage2 from '../assets/Busan.jpg';
import travelImage3 from '../assets/Gapyeong.jpg';
import travelImage4 from '../assets/Damyang.jpg';
import travelImage5 from '../assets/Gyeongju.jpg';
import travelImage6 from '../assets/Incheon.jpg';
import travelImage7 from '../assets/Jeju.jpg';
import travelImage8 from '../assets/Jeonju.jpg';
import travelImage9 from '../assets/Namwon.jpg';
import travelImage10 from '../assets/Ulleung.jpg';
import travelImage11 from '../assets/Seoul.jpg';
import travelImage12 from '../assets/Gangneung.jpg';
import { openaboutcity, closeaboutcity } from '../redux/slices/aboutcitySlice';
import { useDispatch, useSelector } from 'react-redux';
import Aboutcity from './Aboutcity';
import { AboutcityData } from '../constants/mockData';

const imageMap = {
  1: travelImage, // Tongyeong
  2: travelImage2, // Busan
  3: travelImage3, // Gapyeong
  4: travelImage4, // Damyang
  5: travelImage5, // Gyeongju
  6: travelImage6, // Incheon
  7: travelImage7, // Jeju
  8: travelImage8, // Jeonju
  9: travelImage9, // Namwon
  10: travelImage10, // Ulleung
  11: travelImage11, // Seoul
  12: travelImage12, // Gangneung
};

const Favorite = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.aboutcity.isOpen);
  const selectedCityId = useSelector((state) => state.aboutcity.selectedCityId);

  const handleOpen = (id) => {
    dispatch(openaboutcity(id));
  };

  const handleClose = () => {
    dispatch(closeaboutcity());
  };

  return (
    <div className="Favorite_wrapper w-2/3 p-4 border-r h-full border-gray-300">
      {isOpen && <Aboutcity cityId={selectedCityId} />}
      <div className="sidebar-wrapper h-full flex flex-col">
        <div className="bg-white p-4 rounded-lg shadow-custom h-full">
          <div className="Favorite_title text-2xl text-center flex justify-center mt-2 border-t border-b p-1">
            <div className="border shadow-md font-bold p-2 rounded-md bg-gradient-to-r from-gray-600 to-gray-800 w-1/4 text-white">
              여행 명소 추천
            </div>
          </div>
          <div className="Favorite_wrapper_filter flex items-center justify-center w-full mt-1"></div>
          <div className="Favorite_container flex flex-wrap">
            {AboutcityData.map((city) => (
              <div
                key={city.id}
                className="p-0 xl:p-4 md:w-1/2 lg:w-1/4"
                onClick={() => handleOpen(city.id)}
              >
                <div className="w-full">
                  <div className="overflow-hidden rounded-lg hover:scale-105 duration-200 mr-2 md:m-4 cursor-pointer">
                    <div className="relative w-[120px] h-[80px] md:h-[14rem] xl:h-60 2xl:h-80 md:w-full shadow-md md:shadow-lg rounded-lg">
                      <img
                        src={imageMap[city.id] || travelImage} // Use default image if no match
                        alt={city.Korean_name}
                        decoding="async"
                        data-nimg="fill"
                        className="object-center rounded-lg absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover"
                      />
                    </div>
                    <div className="relative px-0.5 py-5 md:px-3 md:py-4 w-[130px] md:w-full mt-1">
                      <h2 className="text-sm font-medium truncate md:text-2xl font-Montserrat">
                        {city.English_name}
                      </h2>
                      <h2 className="mb-2 text-sm font-base truncate md:text-sm">
                        {city.Korean_name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
