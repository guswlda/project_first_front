import React from 'react';

const AdSection = () => {
  const ads = [
    {
      src: require('../assets/AdImg1.jpg'),
      text: 'planner 회원 특별 할인 이벤트',
    },
    { src: require('../assets/AdImg2.jpg'), text: '항공권 예약' },
    { src: require('../assets/AdImg3.jpg'), text: '호텔 예약' },
  ];

  const longAd = {
    src: require('../assets/AdImg5.jpg'),
    text: '당신만의 완벽한 여행 플랜',
    subText: 'My Travel Planner',
  };

  const imageWidth = 450; // 넓어진 이미지 너비
  const imageHeight = 270; // 이미지 높이
  const longImageWidth = 1450; // 긴 이미지 너비 (3개의 이미지 너비를 더한 값에서 마진을 뺀 값)
  const longImageHeight = 400; // 긴 이미지 높이

  return (
    <div className="AdSection_container flex flex-col justify-center items-center mt-10 bg-white p-4">
      <div className="flex justify-center items-center">
        {ads.map((ad, index) => (
          <div
            key={index}
            className="p-1 relative"
            style={{
              marginRight: index === 0 ? '40px' : '0',
              marginLeft: index === 2 ? '40px' : '0',
            }}
          >
            <img
              src={ad.src}
              alt={`Ad ${index + 1}`}
              className="rounded-md shadow-lg transition-all duration-300"
              style={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '14px',
                margin: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '3px',
                padding: '10px 20px',
                cursor: 'pointer',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              }}
              className="hover:bg-opacity-75 transition-opacity"
            >
              {ad.text}
            </div>
          </div>
        ))}
      </div>

      {/* 긴 이미지 추가 */}
      <div className="mt-10 p-1 relative">
        <img
          src={longAd.src}
          alt="Long Ad"
          className="rounded-md shadow-lg"
          style={{
            width: `${longImageWidth}px`,
            height: `${longImageHeight}px`,
            objectFit: 'cover',
            objectPosition: 'center 90%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30px', // 왼쪽 상단으로 위치 조정
            left: '10px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '30px',
            margin: '10px',
            borderRadius: '3px',
            padding: '10px 20px',
            cursor: 'pointer',
            textAlign: 'left', // 왼쪽 정렬
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
          className="hover:bg-opacity-75 transition-opacity"
        >
          {longAd.text}
          <div
            style={{
              fontSize: '16px',
              marginTop: '5px',
              textAlign: 'left', // 왼쪽 정렬 유지
              color: 'white', // 글씨 색상
              marginLeft: '3px',
            }}
          >
            {longAd.subText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSection;
