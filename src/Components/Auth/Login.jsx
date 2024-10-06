import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import Navbar from '../Navbar';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      alert('입력값을 확인해주세요.');
      return;
    }

    try {
      const { data, status } = await axios.post(
        'https://plannerback.guswldaiccproject.com/login',
        values
      );

      if (status === 201) {
        const decoded = jwtDecode(data.token);
        dispatch(login({ authData: decoded }));
        navigate('/');
      } else {
        alert('로그인에 실패했습니다.');
      }
    } catch (error) {
      alert(
        error.response?.data?.message || '예상치 못한 오류가 발생했습니다.'
      );
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        {/* Header Text */}
        <h1
          onClick={handleHomeClick}
          className="text-5xl font-bold cursor-pointer from-gray-700 to-gray-900  mb-12"
        >
          My Travel Planner
        </h1>

        {/* Login Form */}
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력해주세요."
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-gray-700 to-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:opacity-90"
            >
              로그인
            </button>
            <p className="text-center mt-4 text-sm">
              아직 계정이 없으신가요?{' '}
              <Link to="/register" className="text-blue-700 hover:underline">
                계정 생성하기
              </Link>
            </p>
          </form>
        </div>
      </div>
      <footer className="text-gray-600 py-4 text-center">
        <p className="text-sm">
          © 2024 My Memory Planner. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
