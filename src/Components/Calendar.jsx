import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import axios from 'axios'; // axios를 불러와서 사용
import 'react-date-range/dist/styles.css'; // DateRangePicker의 기본 스타일 파일
import 'react-date-range/dist/theme/default.css'; // DateRangePicker의 테마 CSS 파일
import { useNavigate, useParams } from 'react-router-dom'; // 페이지 이동 및 URL 파라미터 사용을 위한 훅
import ko from 'date-fns/locale/ko'; // 한국어 로케일 가져오기
import { useSelector } from 'react-redux'; // Redux에서 상태를 가져오기 위한 훅

const Calendar = () => {
  const navigate = useNavigate(); // 페이지 이동을 도와주는 훅
  const { user_idx } = useParams(); // URL에서 `user_idx` 값을 가져옴
  const authData = useSelector((state) => state.auth.authData); // Redux에서 사용자 인증 정보를 가져옴

  // 선택된 날짜 범위를 저장하는 상태값
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(), // 기본 시작 날짜는 오늘로 설정
    endDate: new Date(), // 기본 종료 날짜도 오늘로 설정
    key: 'selection', // DateRangePicker에서 사용할 키값
  });

  const [loading, setLoading] = useState(false); // 데이터 로딩 상태를 관리하는 변수

  useEffect(() => {
    // 페이지가 로드될 때 오늘 날짜로 기본 설정
    const today = new Date();
    setSelectionRange({
      startDate: today,
      endDate: today,
      key: 'selection',
    });

    // 기존의 데이터를 가져오는 함수를 주석 처리함
    // fetchCalendarData(); // 기존에 데이터를 가져오는 로직을 사용하지 않음
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 날짜 선택 시 호출되는 함수
  const handleSelect = (ranges) => {
    const { selection } = ranges;
    setSelectionRange(selection); // 선택된 날짜 범위를 업데이트
  };

  // 날짜를 'YYYY-MM-DD' 형식으로 변환하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear(); // 연도 가져오기
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 가져오기, 1월이 0이므로 +1, 두 자리 수로 맞춤
    const day = String(date.getDate()).padStart(2, '0'); // 일 가져오기, 두 자리 수로 맞춤
    return `${year}-${month}-${day}`; // 'YYYY-MM-DD' 형식으로 반환
  };

  // 선택한 날짜 범위를 서버에 저장하는 함수
  const handleSaveDates = () => {
    // 선택한 시작 날짜와 종료 날짜를 포맷팅
    const formattedStartDate = formatDate(selectionRange.startDate);
    const formattedEndDate = formatDate(selectionRange.endDate);

    // 서버에 보낼 데이터를 객체 형태로 준비
    const dataToSend = {
      user_idx: authData.user_idx, // 사용자의 고유 식별자
      startDate: formattedStartDate, // 포맷된 시작 날짜
      endDate: formattedEndDate, // 포맷된 종료 날짜
    };

    // 여기서부터 `axios`를 사용한 서버 통신 부분입니다.
    // axios를 이용해 POST 요청을 보냄.
    // POST는 데이터를 서버에 전송하는 방식입니다.
    axios
      .post(
        'https://plannerback.guswldaiccproject.com/post_calendar', // 서버 주소
        dataToSend, // 서버로 보낼 데이터
        {
          headers: { 'Content-Type': `application/json` }, // 서버에 보낼 데이터가 JSON 형식임을 명시
        }
      )
      .then((response) => {
        // 서버에서 성공적으로 응답을 받으면 실행되는 부분
        console.log('서버로부터 받은 응답:', response.data); // 서버의 응답 데이터를 콘솔에 출력
        navigate('/createplanner'); // 응답 후 페이지 이동
      })
      .catch((error) => {
        // 요청이 실패했을 때 실행되는 부분
        console.error('날짜 저장 중 에러 발생:', error); // 에러 내용을 콘솔에 출력
      });
  };

  return (
    <div className="w-3/5 flex flex-col justify-center items-center">
      <div className="w-2/3 h-full rounded-base border border-slate-200 p-3 rounded-xl">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-serif text-center mb-2">
            <p className="bg-slate-100 px-2 rounded-md">
              여행 계획 날짜를 선택해주세요.
            </p>
          </div>
          <div className="w-[80%] flex flex-col ">
            <DateRangePicker
              ranges={[selectionRange]} // 선택된 날짜 범위
              onChange={handleSelect} // 날짜 선택 시 호출되는 함수
              className="w-full custom-calendar"
              staticRanges={[]} // 프리셋 범위 비활성화
              inputRanges={[]} // 입력 범위 비활성화
              // locale={ko} // 한국어 로케일 설정
            />
            <button
              onClick={handleSaveDates}
              className="bg-gray-700 text-white py-2 px-1 rounded-md hover:bg-gray-900"
            >
              날짜 선택
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
