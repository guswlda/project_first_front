import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !values.name ||
      !values.email ||
      !values.password ||
      values.password !== values.confirmPassword
    ) {
      alert('모든 필드를 올바르게 입력해 주세요.');
      return;
    }

    try {
      const { status } = await axios.post(
        'https://plannerback.guswldaiccproject.com/register',
        values
      );

      if (status === 201) {
        navigate('/login');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (error) {
      alert('예상치 못한 오류가 발생했습니다.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        {/* Header Text */}
        <h1
          onClick={() => navigate('/')}
          className="text-5xl font-bold from-gray-700 to-gray-900 cursor-pointer mb-12 mt-12"
        >
          My Travel Planner
        </h1>

        {/* Register Form */}
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                placeholder="이름을 입력해주세요."
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="비밀번호를 한 번 더 입력해주세요."
                name="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                value={values.confirmPassword}
                onChange={(e) =>
                  setValues({ ...values, confirmPassword: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 from-gray-700 to-gray-900 bg-gradient-to-r  text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-1 focus:ring-blue-300"
            >
              회원가입
            </button>
            <p className="text-center mt-4 text-sm">
              이미 계정이 있으신가요?{' '}
              <Link to="/login" className="text-blue-700 hover:underline">
                로그인
              </Link>
            </p>
          </form>
        </div>
      </div>
      <footer className="text-gray-600 py-4 text-center mt-auto">
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

export default Register;
