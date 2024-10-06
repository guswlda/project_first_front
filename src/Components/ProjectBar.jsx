import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
// import logo192 from '/logo192.png'

const TravelProjectList = () => {
  const [getTravelData, setGetTravelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [toggle, setToggle] = useState(false);
  const authData = useSelector((state) => state.auth.authData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://plannerback.guswldaiccproject.com/get_project_data/${authData.user_idx}`
        );
        // console.log('API Response:', response);
        setGetTravelData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('데이터를 가져오는 데 문제가 발생했습니다.');
        setLoading(false);
      }
    };

    if (authData && authData.user_idx) {
      fetchData();
    }
  }, [authData]);

  const toggleList = () => {
    setToggle(!toggle);
  };

  // Determine the number of projects to show based on the toggle state
  const displayedProjects = toggle ? getTravelData : getTravelData.slice(0, 5);

  return (
    <div className="w-1/3 p-4 border-r h-full border-gray-300">
      <div className="sidebar-wrapper h-full flex flex-col">
        <div className="project_side_bar_box bg-white p-4 rounded-lg shadow-custom h-full">
          <h2 className=" text-xl w-full font-bold flex justify-between items-center mb-4">
            <div className="pl-1 text-2xl">{authData.name}님 여행</div>
          </h2>
          <div className="inner-sidebar-wrapper flex flex-col h-full">
            <div
              className={`Project_side_bar_wrapper bg-gray-100 p-3 rounded-lg shadow-md ${
                isExpanded ? 'h-auto' : 'h-auto'
              }`}
            >
              <div className="Project_side_bar_container mb-2 flex-1">
                {loading ? (
                  <div>로딩 중...</div>
                ) : error ? (
                  <div>{error}</div>
                ) : displayedProjects.length > 0 ? (
                  displayedProjects.map((project, index) => (
                    <Link
                      key={index}
                      to={`/planner/${project.project_idx}`}
                      className="Project_Link"
                    >
                      <div className="Project_sub_wrapper gap-4 flex flex-col m-3">
                        <div className="bg-gradient-to-r from-gray-600 to-gray-800 shadow-md p-2 rounded hover:opacity-90 hover:scale-105 transform transition duration-300">
                          <h3 className="text-lg font-semibold m-1 text-center text-white ">
                            {project.project_title || '여행 제목 없음'}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div>여행 제목 없음</div>
                )}
              </div>
              <div className="bg-slate-200 p-1 m-2 rounded flex flex-col items-center shadow-md">
                {toggle ? (
                  <FaCaretUp
                    className="cursor-pointer transition-transform ease-in-out transform hover:scale-125 duration-200"
                    onClick={toggleList}
                  />
                ) : (
                  <FaCaretDown
                    className="cursor-pointer transition-transform ease-in-out transform hover:scale-125 duration-200"
                    onClick={toggleList}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelProjectList;
