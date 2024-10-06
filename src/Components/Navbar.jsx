import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlinePersonPin, MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { closeModal } from '../redux/slices/modalSlice';
import { PiAirplaneTiltLight } from 'react-icons/pi';
import { MdOutlineAirplaneTicket } from 'react-icons/md';

const Navbar = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.authData);
  const navigate = useNavigate();

  // 모달 창 닫기 처리 함수
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleLogOutPage = (e) => {
    if (authData) {
      e.preventDefault();
      const userConfirmed = window.confirm(
        '로그 아웃 됩니다. 로그아웃 하시겠습니까?'
      );
      if (userConfirmed) {
        dispatch(logout()); // 리덕스 상태 초기화
        navigate('/'); // 루트 페이지로 리디렉션
      } else {
        navigate('/'); // 루트 페이지로 리디렉션
      }
    }
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="Page_wrapper flex justify-between items-center p-4">
        <div className="Logo flex items-center">
          <Link to="/" className="flex items-center" onClick={handleCloseModal}>
            <PiAirplaneTiltLight
              className="Logo_image_svg from-gray-700 to-gray-900"
              style={{ fontSize: '1rem' }}
            />
            <div className="Logo_text ml-2 text-2xl font-bold font-montserrat">
              My Travel Planner
            </div>
          </Link>
        </div>
        <div>
          {authData ? (
            <div className="Sign_box_container flex items-center space-x-1">
              <div className="flex items-center bg-slate-200 rounded-xl p-2">
                <MdOutlineAirplaneTicket className="Logo_image_svg text-2xl" />
                <div className="ml-2 text-xl font-semibold">
                  {authData.name}님
                </div>
              </div>
              <div className="bg-slate-200 rounded-xl p-2">
                <button
                  onClick={handleLogOutPage}
                  className="from-gray-700 to-gray-900 font-bold"
                >
                  <MdLogout className="text-2xl font-bold" />
                </button>
              </div>
            </div>
          ) : (
            <div className="Sign_box_container flex items-center space-x-1">
              <Link
                to="/register"
                className="text-black hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white px-4 py-2 rounded"
              >
                회원가입
              </Link>
              <Link
                to="/login"
                className="text-black hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white px-4 py-2 rounded"
              >
                로그인
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
