import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/slices/modalSlice';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ handleSave }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const { modalType, task } = useSelector((state) => state.modal);
  const { project_idx } = useParams();
  const navigate = useNavigate();

  const [planner_data, setPlanner_data] = useState({
    project_idx: task?.project_idx || project_idx,
    planner_date: task?.planner_date || new Date().toISOString().slice(0, 16),
    planner_title: task?.planner_title || '',
    planner_description: task?.planner_description || '',
    planner_img: task?.planner_img || '',
  });

  const [imagePreview, setImagePreview] = useState(
    task?.planner_img ? `${task.planner_img}` : null
  );

  useEffect(() => {
    if (modalType === 'update' && task) {
      setPlanner_data({
        project_idx: task.project_idx || project_idx,
        planner_date:
          task.planner_date || new Date().toISOString().slice(0, 16),
        planner_title: task.planner_title || '',
        planner_description: task.planner_description || '',
        planner_img: task.planner_img || '',
      });
      setImagePreview(task.planner_img ? `${task.planner_img}` : null);
    } else {
      setPlanner_data({
        project_idx: project_idx,
        planner_date: new Date().toISOString().slice(0, 16),
        planner_title: '',
        planner_description: '',
        planner_img: '',
      });
      setImagePreview(null);
    }
  }, [modalType, task, project_idx]);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handlePlanner_dateChange = (event) => {
    setPlanner_data({
      ...planner_data,
      planner_date: event.target.value,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlanner_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPlanner_data({
        ...planner_data,
        planner_img: file,
      });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 제목이 비어있을 때
    if (!planner_data.planner_title) {
      toast.error('프로젝트 제목을 입력해주세요!', {
        position: 'top-center',
        autoClose: 3000, // 3초 후 자동 닫힘
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // 제목이 없으면 함수 종료
    }

    // 제목이 작성된 후 날짜가 비어있을 때
    if (!planner_data.planner_date) {
      toast.error('프로젝트 날짜를 선택해주세요!', {
        position: 'top-center',
        autoClose: 3000, // 3초 후 자동 닫힘
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // 날짜가 없으면 함수 종료
    }

    // 제목과 날짜가 모두 있는 경우에 실행되는 코드
    // 여기서 데이터를 서버로 제출하거나 다른 작업을 수행

    try {
      const formData = new FormData();
      formData.append('project_idx', planner_data.project_idx);
      formData.append('planner_date', planner_data.planner_date);
      formData.append('planner_title', planner_data.planner_title);
      formData.append('planner_description', planner_data.planner_description);
      formData.append('planner_img', planner_data.planner_img);

      const response = await axios.patch(
        `https://plannerback.guswldaiccproject.com/patch_travel_data/${project_idx}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const savedData = {
          ...planner_data,
          planner_img: response.data.planner_img, // 서버에서 반환된 이미지 URL로 업데이트
        };
        handleSave(savedData); // PlannerBar로 데이터 전달
        handleCloseModal(); // 모달 닫기
      } else {
        console.error('데이터 저장 오류:', response.status);
      }
    } catch (error) {
      console.error('데이터 저장 오류:', error);
    }
  };

  if (!isOpen) return null;

  const handleMain = () => {
    handleCloseModal();
  };

  return (
    <>
      {/* 모달이 열리면 화면에 배경이 어두워지며, 모달창이 중앙에 고정 */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-100 z-40 flex items-center justify-center">
          {/* 모달 창 */}
          <div className="Modal_page fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-opacity-0 z-50">
            <div className="Modal_wrapper w-[55%] h-[67%] bg-gray-100 rounded-md shadow-lg border border-gray-700 flex flex-col">
              <div className="Modal_container w-full flex flex-col p-3">
                {/* 상단 타이틀 및 닫기 버튼 */}
                <div className="top w-full text-center p-4 font-bold text-4xl flex justify-between">
                  <div className="flex items-center rounded-md">
                    <TfiWrite className="mr-2" />
                    <p>My Travel Planner</p>
                  </div>
                  <button onClick={handleMain} type="button">
                    <MdClose className="Logo_image_svg hover:bg-slate-300 rounded-md" />
                  </button>
                </div>

                {/* 입력 필드 */}
                <div className="location border rounded-md border-gray-400 bg-white mb-2 p-2 w-full flex justify-center items-center mt-4">
                  <div className="input-control w-full h-full">
                    <label htmlFor="planner_title" className="w-full h-full">
                      <input
                        type="text"
                        id="planner_title"
                        name="planner_title"
                        placeholder="프로젝트 제목을 입력해주세요."
                        className="w-full h-full rounded bg-white p-2 text-xl font-thin"
                        value={planner_data.planner_title}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>

                {/* 사진 업로드 및 설명 */}
                <div className="content mb-2 flex gap-2">
                  <div className="photo_wrapper border rounded-md border-gray-400 bg-white w-1/2 h-80 flex items-center justify-center relative overflow-hidden">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-gray-500 text-2xl font-thin">
                        사진 넣기
                      </span>
                    )}
                    <input
                      type="file"
                      id="planner_img"
                      name="planner_img"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>

                  {/* 설명 텍스트 */}
                  <div className="text border rounded-md border-gray-400 w-1/2 h-80 flex justify-center items-center">
                    <div className="input-control w-full h-full">
                      <label
                        htmlFor="planner_description"
                        className="w-full h-full"
                      >
                        <textarea
                          type="text"
                          id="planner_description"
                          name="planner_description"
                          placeholder="내용을 입력해주세요."
                          className="w-full h-full bg-white rounded px-2 resize-none text-xl font-thin"
                          value={planner_data.planner_description}
                          onChange={handleChange}
                          maxLength="400"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* 날짜 선택 */}
                <div className="date border rounded-md border-gray-400 w-full h-12 flex justify-center items-center">
                  <div className="input-control w-full h-full flex items-center justify-center">
                    <input
                      type="date"
                      id="planner_date"
                      name="planner_date"
                      className="w-full h-full bg-white rounded-md p-2 text-xl font-thin"
                      value={planner_data.planner_date}
                      onChange={handlePlanner_dateChange}
                    />
                  </div>
                </div>
              </div>

              {/* 저장 버튼 */}
              <div className="Save_button_container flex items-end justify-end p-2">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="Sign_up rounded-md shadow-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:opacity-90 text-xl py-2 px-4 mr-1"
                >
                  {modalType === 'update' ? '수정완료' : '할일 추가하기'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        className="text-sm" // 전체 컨테이너에 작은 텍스트 적용
        bodyClassName="text-sm" // 본문 텍스트 크기 조정
      />
    </>
  );
};

export default Modal;
