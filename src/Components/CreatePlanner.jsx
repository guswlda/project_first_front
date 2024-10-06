import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios를 사용하여 서버와 통신
import { Link, useNavigate, useParams } from 'react-router-dom'; // 페이지 이동과 URL에서 파라미터를 가져오기 위한 훅들
import { useSelector } from 'react-redux'; // Redux 상태를 가져오는 훅
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { TfiWrite } from 'react-icons/tfi'; // 아이콘 사용
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify'; // Toast 알림을 위한 라이브러리
import 'react-toastify/dist/ReactToastify.css'; // Toast 알림의 스타일

const Createplanner = () => {
  const navigate = useNavigate(); // 페이지 이동을 도와주는 함수
  const authData = useSelector((state) => state.auth.authData); // Redux에서 사용자 인증 정보를 가져옴

  // 입력 폼에서 사용할 상태 값들
  const [projectTitle, setProjectTitle] = useState(''); // 여행 계획의 제목
  const [startDate, setStartDate] = useState(''); // 시작 날짜
  const [endDate, setEndDate] = useState(''); // 종료 날짜
  const [projectIdx, setProjectIdx] = useState(''); // 프로젝트 ID
  const { project_idx } = useParams(); // URL 파라미터에서 프로젝트 ID 가져옴

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 서버에서 데이터를 가져옴
    const fetchCalendarData = async () => {
      try {
        // 서버에 GET 요청을 보내서 데이터를 받아옴
        const response = await axios.get(
          `https://plannerback.guswldaiccproject.com/get_calendar_date/${authData.user_idx}`
        );

        // 서버에서 응답받은 데이터가 있을 때 처리
        if (response.data && response.data.length > 0) {
          // 서버에서 받아온 첫 번째 데이터에서 필요한 값들을 가져옴
          const { project_idx, start_date, end_date } = response.data[0];

          // 받아온 프로젝트 ID와 날짜를 상태 값에 설정
          setProjectIdx(project_idx);
          setStartDate(subtractOneDay(start_date) || ''); // 시작 날짜를 하루 빼서 설정
          setEndDate(subtractOneDay(end_date) || ''); // 종료 날짜도 하루 빼서 설정
        }
      } catch (error) {
        // 데이터를 가져오는 중에 오류가 발생하면 콘솔에 출력
        console.error('캘린더 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    // 함수 호출 (서버에서 데이터 가져옴)
    fetchCalendarData();
  }, [authData.user_idx]); // 사용자 ID가 변경될 때마다 데이터를 다시 가져옴

  // 날짜에서 하루를 빼는 함수 (서버에서 받아온 날짜가 UTC 기준일 수 있기 때문에 하루를 빼줌)
  const subtractOneDay = (dateStr) => {
    if (!dateStr) return ''; // 만약 날짜가 없으면 빈 문자열 반환
    const date = new Date(dateStr); // 문자열을 Date 객체로 변환
    date.setDate(date.getDate()); // 하루를 빼지 않고 그대로 사용
    return date.toISOString().split('T')[0]; // 날짜를 'YYYY-MM-DD' 형식으로 변환
  };

  // '저장' 버튼을 눌렀을 때 실행되는 함수
  const handleSave = async () => {
    if (!projectTitle) {
      // 제목을 입력하지 않았을 경우, 사용자에게 알림 표시
      toast.error('제목을 입력해주세요!', {
        position: 'top-center', // 화면 상단 중앙에 알림 표시
        autoClose: 3000, // 3초 후에 자동으로 닫힘
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // 제목이 없으면 함수 실행을 중단
    }

    if (!projectIdx) {
      console.error('프로젝트가 생성되지 않았습니다'); // 프로젝트 ID가 없으면 콘솔에 오류 출력
      return;
    }

    try {
      // 서버에 PATCH 요청을 보내서 제목과 날짜 정보를 업데이트
      await axios.patch(
        'https://plannerback.guswldaiccproject.com/update_planner_title',
        {
          project_idx: projectIdx, // 프로젝트 ID
          project_title: projectTitle, // 입력한 제목
          start_date: startDate, // 입력한 시작 날짜
          end_date: endDate, // 입력한 종료 날짜
        }
      );

      // 프로젝트가 성공적으로 저장되면 해당 프로젝트 페이지로 이동
      navigate(`/planner/${projectIdx}`);
    } catch (error) {
      // 저장 중에 오류가 발생하면 콘솔에 출력
      console.error('프로젝트 업데이트 중 오류 발생:', error);
    }
  };

  // 제목 입력 시 상태 값을 업데이트하는 함수
  const handleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  // 날짜 입력 시 상태 값을 업데이트하는 함수
  const handleDateChange = (e) => {
    const { name, value } = e.target; // 입력된 값의 이름과 값을 가져옴
    if (name === 'startDate') {
      setStartDate(value); // 시작 날짜 업데이트
    } else if (name === 'endDate') {
      setEndDate(value); // 종료 날짜 업데이트
    }
  };

  // '삭제' 버튼을 눌렀을 때 실행되는 함수
  const handleMain = async (e) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침)을 막음

    // 삭제 여부를 사용자에게 묻는 메시지
    const userConfirmed = window.confirm('여행 계획 내용이 삭제됩니다. 삭제하시겠습니까?');

    // 사용자가 확인 버튼을 눌렀을 때만 실행
    if (userConfirmed) {
      try {
        // 서버에 DELETE 요청을 보내서 데이터를 삭제
        await axios.delete(
          `https://plannerback.guswldaiccproject.com/delete_travel_data/${authData.user_idx}/${projectIdx}`
        );

        // 삭제가 완료되면 홈으로 이동
        navigate('/');
      } catch (error) {
        // 삭제 중에 오류가 발생하면 콘솔에 출력
        console.error('데이터 삭제 중 오류 발생:', error);
      }
    }
  };

  return (
    <div className="Page_Wrapper flex flex-col h-screen bg-gray-900">
      <div className="Page_container flex flex-col h-full relative">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="fixed inset-0 bg-white bg-opacity-100 z-999"></div>
          <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50">
            <div className="w-[45%] h-[60%] bg-white rounded-3xl shadow-lg border border-gray-700">
              <div className="input-wrapper bg-gray-100 shadow-lg rounded-3xl flex flex-col w-full h-full items-center gap-1 ">
                <div className="flex w-[90%]">
                  <div className="top w-full p-2 font-bold text-4xl flex justify-between mt-6 ">
                    <div className="flex items-center rounded-md">
                      <TfiWrite className="mr-2" />
                      <p>My Travel Planner</p>
                    </div>
                    <button onClick={handleMain} type="button">
                      <MdClose className="Logo_image_svg hover:bg-slate-200 rounded-md" />
                    </button>
                  </div>
                </div>

                <div className="middle h-5/6 flex w-full justify-center items-center">
                  <div className="w-full flex gap-7 items-center justify-center">
                    <div className="flex flex-col items-start space-y-11 ">
                      <div className=" w-[100%] rounded-md text-2xl font-bold text-right p-3">
                        제목
                      </div>
                      <div className=" w-[100%] rounded-md text-2xl font-bold text-right p-3">
                        시작 날짜
                      </div>
                      <div className=" w-[100%] rounded-md text-2xl font-bold text-right p-3">
                        마지막 날짜
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[65%] space-y-10">
                      <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        placeholder="제목을 입력해주세요."
                        value={projectTitle}
                        onChange={handleChange}
                        className="Logo_text bg-white w-full rounded-md text-gray-600 input-placeholder p-3 border border-slate-300"
                      />
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={startDate}
                        onChange={handleDateChange}
                        className="Logo_text bg-white w-full rounded-md p-3 border border-slate-300"
                      />
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={endDate}
                        onChange={handleDateChange}
                        className="Logo_text bg-white w-full rounded-md p-3 border border-slate-300"
                      />
                    </div>
                  </div>
                </div>
                <form className="w-full h-1/6 Logo_text flex flex-col justify-between">
                  <div className="sub-btn h-full flex justify-end pt-4 p-6 mr-6">
                    <button
                      onClick={handleSave}
                      type="button"
                      className="flex justify-end Sign_up rounded-md shadow-md bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:opacity-90"
                    >
                      여행 플래너 생성
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer />
      <ToastContainer />
    </div>
  );
};

export default Createplanner;
