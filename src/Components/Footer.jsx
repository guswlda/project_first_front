import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { PiAirplaneTiltLight } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className="footer bg-slate-100 border-2 px-3 py-4 leading-[1.75rem] flex justify-between items-center">
      <div className="flex flex-col justify-center">
        <div className="footer-logo flex mb-5 items-center">
          <PiAirplaneTiltLight
            className="from-gray-700 to-gray-900 mr-1"
            size="20"
            style={{ fontSize: '1rem' }}
          />
          <div className="text-base font-semibold font-montserrat">
            My Travel Planner
          </div>
        </div>
        <div
          className="text text-center w-full flex mb-5 "
          style={{ marginRight: '0%' }}
        >
          <div className="Corporation text-xs ">
            주식회사 마이 트레블 플레너
          </div>
          <div className="Corporation text-xs">
            사업자 등록번호 123-45-67891
          </div>
          <div className="Corporation text-xs">
            서울시 금천구 가산디지털로2로 144 20F
          </div>
          <div className="Corporation text-xs">
            Copyright My Planner Travel. All Rights Reserved.
          </div>
        </div>
        <div className="flex font-montserrat cursor-pointer ">
          <div className="Corporation text-xs hover:underline">이용약관</div>
          <div className="Corporation text-xs hover:underline">
            개인정보처리방침
          </div>
          <div className="Corporation text-xs hover:underline">고객지원</div>
          <div className="Corporation text-xs hover:underline">1:1 문의</div>
        </div>
      </div>
      <div className="icons_wrapper p-2 ml-2 flex-shrink-0">
        <div className="icons_container p-2 flex gap-3">
          <MdOutlineMailOutline className="w-5 h-5" />
          <FaFacebookSquare className="w-5 h-5" />
          <FaInstagram className="w-5 h-5" />
          <IoLogoYoutube className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
