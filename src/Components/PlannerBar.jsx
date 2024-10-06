import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Additem from './Additem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { openModal } from '../redux/slices/modalSlice';

const PlannerBar = () => {
  const [patchTravelData, setPatchTravelData] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const authData = useSelector((state) => state.auth.authData);
  const { project_idx } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 초기 데이터 가져오기
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://plannerback.guswldaiccproject.com/get_travel_data/${authData.user_idx}/${project_idx}`
      );
      setPatchTravelData(response.data);
      setVisibleItems(
        response.data.filter(
          (item) => item.project_idx === parseInt(project_idx)
        )
      );
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    if (authData && authData.user_idx) {
      fetchData();
    }
  }, [authData, project_idx]);

  const handleSave = useCallback(
    async (newData) => {
      try {
        console.log('Saving data to server:', newData);

        await axios.patch(
          `https://plannerback.guswldaiccproject.com/patch_travel_data/${project_idx}`,
          newData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        await fetchData(); // 최신 데이터를 다시 가져오기
      } catch (error) {
        console.error('데이터 저장 또는 가져오는 중 오류 발생:', error);
      }
    },
    [project_idx, patchTravelData]
  );

  // 기존 삭제 기능
  const handleDelete = async (item) => {
    if (!item.project_idx) {
      console.error('유효하지 않은 project_idx:', item.project_idx);
      return;
    }

    const confirmDelete = window.confirm('정말로 이 항목을 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://plannerback.guswldaiccproject.com/delete_travel_data/${authData.user_idx}/${item.project_idx}`
        );

        await fetchData(); // 최신 데이터를 다시 가져오기
        navigate('/');
      } catch (error) {
        console.error('데이터 삭제 중 오류 발생:', error);
      }
    }
  };

  // 기존 수정 기능
  const handleEdit = (item) => {
    dispatch(openModal({ modalType: 'update', task: item }));
  };

  // 수정된 수정 버튼 기능
  const handleNavigateToPlanner = () => {
    navigate(`/createplanner`);
  };

  const handleNavigateToProject = () => {
    navigate('/travelproject');
  };

  // 새로 만든 삭제 버튼 기능 (기존 삭제 기능과 동일하게 변경)
  const handleDeleteAll = async (item) => {
    if (!item.project_idx) {
      console.error('유효하지 않은 project_idx:', item.project_idx);
      return;
    }

    const confirmDelete = window.confirm('정말로 이 항목을 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://plannerback.guswldaiccproject.com/delete_travel_data/${authData.user_idx}/${item.project_idx}`
        );

        await fetchData(); // 최신 데이터를 다시 가져오기
        navigate('/');
      } catch (error) {
        console.error('데이터 삭제 중 오류 발생:', error);
      }
    }
  };

  const hasValidData = visibleItems.some(
    (item) =>
      item.planner_title ||
      item.planner_date ||
      item.planner_description ||
      item.planner_img
  );

  return (
    <div className="flex h-full p-4 z-0">
      <div className="w-1/3 p-4 border-gray-300">
        <div className="bg-white p-4 rounded-lg shadow-custom">
          <h2 className=" text-xl w-full font-bold flex justify-between items-center mb-4">
            <div className="pl-1 text-2xl">{authData.name}님 여행</div>
            <div>
              <button
                onClick={handleNavigateToProject}
                className="bg-gray-800 hover:bg-gray-400 text-white p-1 rounded mr-2"
              >
                목록
              </button>
              <button
                onClick={handleNavigateToPlanner}
                className="bg-gray-500 hover:bg-gray-400 text-white p-1 rounded"
              >
                수정
              </button>
              <button
                onClick={() => handleDeleteAll(visibleItems[0])}
                className="bg-red-500 hover:bg-red-400 text-white ml-2 p-1 rounded"
              >
                삭제
              </button>
            </div>
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="bg-[#e0f0ff] bg-gradient-to-r from-gray-700 to-gray-900 shadow-md p-2 rounded ">
                <h3 className="text-xl font-semibold m-1 text-center text-white">
                  {visibleItems.length > 0
                    ? visibleItems[0]?.project_title || '여행 제목 없음'
                    : '여행 제목 없음'}
                </h3>
              </div>
              <div className="space-y-2 mt-4">
                {visibleItems.length === 0 ? (
                  <p>날짜 데이터 없음</p>
                ) : (
                  visibleItems
                    .filter((item) => item.start_date && item.end_date)
                    .map((item, index) => {
                      const startDate = new Date(
                        item.start_date
                      ).toLocaleDateString('ko-KR');
                      const endDate = new Date(
                        item.end_date
                      ).toLocaleDateString('ko-KR');

                      return (
                        <button
                          key={index}
                          className="bg-slate-400 text-center rounded-lg w-full p-2 hover:bg-slate-300 font-bold"
                        >
                          <p>{`여행 기간: ${startDate} ~ ${endDate}`}</p>
                        </button>
                      );
                    })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 p-4 border-l h-full">
        <div className="bg-white rounded-lg shadow-custom h-full flex flex-col justify-start">
          <h2 className=" text-2xl tracking-wide mt-4 font-bold text-center items-center justify-center flex">
            <p className="shadow-md font-bold p-2 rounded-md bg-gradient-to-r from-gray-600 to-gray-800 w-1/4 text-white">
              <div className=" text-white">{authData.name}님 여행 정보</div>
            </p>
            {isOpen && <Modal handleSave={handleSave} />}
          </h2>

          {hasValidData ? (
            <div className="mt-4 flex flex-wrap justify-center items-center ">
              {visibleItems.map((item, index) =>
                item.planner_title ||
                item.planner_description ||
                item.planner_date ||
                item.planner_img ? (
                  <div
                    key={index}
                    className="bg-gray-100 p-4 rounded-lg shadow-lg w-[80%] h-[62vh] flex flex-col justify-around mx-[1.66%] relative border border-gray-400 "
                  >
                    <div className="bg-gray-400 shadow-xl rounded-xl overflow-hidden h-[95%] w-full mx-auto p-1">
                      <div className="bg-gray-100 text-gray-600 py-4 px-4 rounded-lg mb-1">
                        <h3 className="text-xl">
                          {item.planner_title ||
                            '프로젝트 제목을 입력해주세요...'}
                        </h3>
                      </div>
                      <div className="flex mb-1 space-x-1">
                        <div className="bg-gray-100 flex-1 flex justify-center items-center rounded-lg min-h-[390px] max-h-[390px]">
                          {item.planner_img ? (
                            <img
                              src={item.planner_img}
                              alt="Planner"
                              className="object-cover rounded-md h-full w-full"
                            />
                          ) : (
                            <span className="text-gray-600 text-2xl font-semibold">
                              사진 없음
                            </span>
                          )}
                        </div>
                        <div
                          className="bg-gray-100 flex-1 flex items-center rounded-lg p-1 min-h-[260px] max-w-[470px]  overflow-y-scroll"
                          style={{ height: 390 }}
                        >
                          <p
                            className="text-gray-600 text-xl text-left"
                            style={{
                              whiteSpace: 'pre-wrap',
                              wordBreak: 'break-word',
                              height: '364.3px',
                            }}
                          >
                            {item.planner_description ||
                              '내용을 입력해주세요...'}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-600 py-4 px-6 rounded-lg flex items-center justify-between">
                        <p className="text-xl">
                          📅&ensp;
                          {item.planner_date
                            ? new Date(item.planner_date).toLocaleDateString(
                                'ko-KR'
                              )
                            : '날짜 없음'}
                        </p>

                        {/* 기존 수정 및 삭제 버튼 */}
                        <div className="absolute right-8 flex space-x-4">
                          <button
                            className="bg-gray-500 hover:bg-gray-400 text-white p-2 rounded-md"
                            onClick={() => handleEdit(item)}
                          >
                            수정
                          </button>
                          {/* <button
                            className="bg-gray-800 hover:bg-gray-700 text-white p-1 rounded"
                            onClick={() => handleDelete(item)}
                          >
                            삭제 
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <div className="h-full flex justify-center items-center flex-col">
              <Additem handleSave={handleSave} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlannerBar;
