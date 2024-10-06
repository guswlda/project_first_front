import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // 최신 Swiper CSS 경로
import 'swiper/css'; // Swiper 기본 CSS 파일

// 필요한 모듈을 Swiper 패키지에서 개별적으로 가져옴
import { Navigation, Autoplay } from 'swiper/modules';

const SlideSection = () => {
  const images = [
    {
      src: require('../assets/slideImg3.jpg'),
      description: (
        <>
          서울 북촌 한옥마을에서 한국 전통 건축의 아름다움과 고즈넉한 분위기를
          만끽하세요.
          <br />
          현대와 과거가 조화를 이루는 이곳에서 특별한 문화 체험을 즐겨보세요!
        </>
      ),
      title: '서울 북촌 한옥마을',
    },
    {
      src: require('../assets/slideImg2.jpg'),
      description: (
        <>
          한라산의 겨울은 눈 덮인 설경과 상고대가 어우러져 마치 동화 속 풍경을
          연상케 합니다.
          <br />
          순백의 자연 속에서 제주도의 특별한 겨울을 경험해보세요 !
        </>
      ),
      title: '한라산의 겨울',
    },
    {
      src: require('../assets/slideImg1.jpg'),
      description: (
        <>
          동궁과 월지는 고대 신라의 화려한 궁궐과 아름다운 연못이 어우러진 야경
          명소입니다.
          <br />
          밤하늘 아래 빛나는 환상적인 경관 속에서 신라의 역사를 느껴보세요 !
        </>
      ),
      title: '동궁과 월지의 야경',
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiper = document.querySelector('.swiper').swiper; // Swiper 인스턴스에 접근
    if (prevRef.current && nextRef.current && swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="SlideSection_container flex flex-col items-center mt-10 mb-10 relative">
      <Swiper
        loop={true} // 루프 설정
        speed={1500}
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: prevRef.current, // 이전 버튼 Ref
          nextEl: nextRef.current, // 다음 버튼 Ref
        }}
        modules={[Navigation, Autoplay]} // 모듈 추가
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="w-4/5 flex">
              <div className="w-[50%]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-md"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <div className="w-[50%] flex flex-col items-start justify-center p-4 ml-8">
                {image.title && (
                  <h2 className="text-2xl font-bold mb-8 text-left text-gray-800">
                    {image.title}
                  </h2>
                )}
                <p className="text-lg font-semibold text-gray-700 text-left">
                  {image.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 이전 버튼 */}
      <button
        ref={prevRef}
        className="absolute left-[40px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-90 w-12 h-12 flex items-center justify-center z-20"
      >
        &#10094;
      </button>

      {/* 커스텀 다음 버튼 */}
      <button
        ref={nextRef}
        className="absolute right-[40px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-90 w-12 h-12 flex items-center justify-center z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SlideSection;
