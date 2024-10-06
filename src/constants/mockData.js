import travelImage from '../assets/Geojetongyeong.jpg';
import travelImagee2 from '../assets/Busan.jpg';
import travelImage3 from '../assets/Gapyeong.jpg';
import travelImage4 from '../assets/Damyang.jpg';
import travelImage5 from '../assets/Gyeongju.jpg';
import travelImage6 from '../assets/Incheon.jpg';
import travelImage7 from '../assets/Jeju.jpg';
import travelImage8 from '../assets/Jeonju.jpg';
import travelImage9 from '../assets/Namwon.jpg';
import travelImage10 from '../assets/Ulleung.jpg';
import travelImage11 from '../assets/Seoul.jpg';
import travelImage12 from '../assets/Gangneung.jpg';
import { RiStarFill, RiStarLine, RiStarHalfLine } from 'react-icons/ri';

{
  /* <RiStarHalfLine />
  <RiStarFill />
  <RiStarLine /> */
}

const AboutcityData = [
  {
    id: 1,
    English_name: 'Tongyeong',
    Korean_name: '통영',
    city_description:
      ' 예술과 음식의 맛에 혼을 빼앗기는 통영. 보물 같은 섬 욕지도와 바다를 품은 장사도 해상공원 등 수려한 자연경관이 가득한 곳으로 많이 알려져 있지만, 시인 백석이 지나간 자리와 통영이 고향인 소설가 박경리의 발자취가 깃들어 있는 곳이기도 하다. 통영의 명물이 되었다는 충무김밥이나 대표 간식 꿀빵은 통영 여행에 빠지지 않는 주전부리 목록이다.',
    Image: travelImage,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarLine />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
  },
  {
    id: 2,
    English_name: 'Busan',
    Korean_name: '부산',
    city_description:
      ' 우리나라 제2의 수도 부산광역시. 부산 대표 관광지로 손꼽히는 해운대는 밤에는 마린시티의 야경이 더해져 더욱 화려한 해변이 된다. 감천문화마을은 사진 찍기에 좋으며, 매해 가을마다 개최되는 아시아 최대 규모의 영화제인 부산국제영화제와 함께 부산의 구석구석을 즐겨보는 것도 좋다. 전통시장 투어가 있을 만큼 먹거리가 가득한 부산의 맛기행은 필수!',
    Image: travelImagee2,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
  },
  {
    id: 3,
    English_name: 'Gapyeong',
    Korean_name: '가평',
    city_description:
      ' 자연의 정취에 젖어들게 만드는 가평 아침고요수목원. 어디를 둘러봐도 풍경이 가득해 지루할 틈이 없다. 그중에도 가평하면 빼놓을 수 없는 쁘띠프랑스는 프랑스를 떠올리게 하는 이국적인 풍경으로 빨간 지붕이 매력적이다. 또한 매년 가을에 열리는 자라섬 국제재즈페스티벌은 석양과 음악이 어우러질 때까지 재즈의 매력에 흠뻑 취해볼 수 있다.',
    Image: travelImage3,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarLine />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarHalfLine />
        <RiStarLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
  },
  {
    id: 4,
    English_name: 'Damyang',
    Korean_name: '담양',
    city_description:
      ' 담양은 전라남도에 위치한 아름다운 도시로, 대나무 숲이 유명한 죽녹원이 있습니다. 전통 한옥과 역사적인 문화재가 많아 관광지로 인기가 높습니다. 대나무를 활용한 요리가 특색 있으며, 다양한 축제가 열려 많은 방문객을 끌어들입니다. 자연과 전통이 조화를 이루는 매력적인 장소입니다.',
    Image: travelImage4,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarLine />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarHalfLine />
        <RiStarLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarHalfLine />
        <RiStarLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
  },
  {
    id: 5,
    English_name: 'Gyeongju',
    Korean_name: '경주',
    city_description:
      ' 지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든 문화 유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를 비롯해 허허벌판에 자리를 굳건히 지키고 있는 첨성대. 뛰어난 건축미를 자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다. 경주 여행의 기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도 좋다. 16곳의 명소를 탐방할 때마다 찍히는 도장 모으는 재미가 쏠쏠하다. 모바일 앱으로도 스탬프 투어 참여가 가능하다.',
    Image: travelImage5,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
  },
  {
    id: 6,
    English_name: 'Incheon',
    Korean_name: '인천',
    city_description:
      ' 살짝 비릿한 바다향이 매력적인 인천광역시. 지리적 특징을 잘 이용하여 내륙과 해안 지역의 관광이 두루 발달한 곳이다. 대표적인 해양관광지로는 을왕리 해수욕장을 비롯해 문화의 거리가 갖춰진 월미도 등이 있으며, 한국 속 작은 중국이라 불리는 차이나타운도 인천 여행지로 손꼽힌다. 이 외에도 인천 각처에 오랜 역사 유물들이 산재해 있어 역사를 테마로 여행 코스를 잡아보는 것도 좋다.',
    Image: travelImage6,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
  },
  {
    id: 7,
    English_name: 'Jeju',
    Korean_name: '제주',
    city_description:
      ' 섬 전체가 하나의 거대한 관광자원인 제주도. 에메랄드빛 물빛이 인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는 주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수 있는 천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다.',
    Image: travelImage7,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarHalfLine />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
  },
  {
    id: 8,
    English_name: 'Jeonju',
    Korean_name: '전주',
    city_description:
      ' 한국의 멋이 살아있는 전주. 도심 한복판에 자리한 한옥마을에 들어서면 시대를 거슬러가는 기분이다. 경사스러운 터에 지어진 궁궐이란 의미의 경기전에 들어서면 대나무가 서로 부대끼며 내는 소리에 귀 기울이게 된다. 전주 야경투어 명소의 대표인 전동성당과 한옥마을을 한눈에 내려다볼 수 있는 오목대 역시 빼놓을 수 없는 곳. 마을 전체가 미술관인 자만 벽화마을은 전주의 대표 포토 존이다.',
    Image: travelImage8,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
  },
  {
    id: 9,
    English_name: 'Namwon',
    Korean_name: '남원',
    city_description:
      ' 춘향의 사랑이 남겨진 남원. 남원의 대표 광한루는 춘향과 몽룡의 사랑이 시작된 곳으로 연못 위에 세워진 오작교가 운치를 더한다. 5가지의 테마로 꾸며진 춘향 테마파크와 작가 최명희의 대하소설의 무대가 되었던 <혼불> 문학관도 가볼 만하다.지리산 바래봉은 철쭉제가 열리는 봄에 여행하기 좋다.',
    Image: travelImage9,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarLine />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarLine />
        <RiStarLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
  },
  {
    id: 10,
    English_name: 'Ulleung',
    Korean_name: '울릉도',
    city_description:
      ' 수백만 년 전 자연의 모습을 고스란히 간직한 울릉군. 겨울철 설경이 뛰어난 나리분지와 울릉도의 숨은 비경인 관음도는 약 14m 높이의 관음쌍굴을 보기 위해 많은 이들이 발걸음 한다. 생김새에 따른 이색 암석 형상들도 눈에 띄는데, 새끼를 등에 업은 거북바위부터 바닷물을 들이키는 코끼리바위, 영지버섯 모양의 버섯바위까지 다양해 바위 기행은 이곳에서만 즐길 수 있는 특별한 여행 테마이다. 자원의 보물 창고인 독도도 꼭 한번 다녀와야 할 여행지!',
    Image: travelImage10,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarLine />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarHalfLine />
        <RiStarLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
  },
  {
    id: 11,
    English_name: 'Seoul',
    Korean_name: '서울',
    city_description:
      ' 과거와 현재가 공존하며 하루가 다르게 변하는 서울을 여행하는 일은 매일이 새롭다. 도시 한복판에서 600년의 역사를 그대로 안고 있는 아름다운 고궁들과 더불어 대한민국의 트렌드를 이끌어나가는 예술과 문화의 크고 작은 동네들을 둘러볼 수 있는 서울은 도시 여행에 최적화된 장소다.',
    Image: travelImage11,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
  },
  {
    id: 12,
    English_name: 'Gangneung',
    Korean_name: '강릉',
    city_description:
      ' 은은한 커피향이 남다른 강원도 강릉시. 그중에도 카페거리로 유명한 안목해변은 발이 닿는 어디든 향긋한 커피 한 잔에 지평선 끝까지 펼쳐지는 바다 풍경은 덤으로 얻을 수 있다. 일출 명소로 유명한 정동진과 야경이 아름다운 경포대는 대표 여행 코스! 구름도 머물다 간다는 해발 1,100m에 위치한 강릉 안반데기 마을은 전망대에 올라 드넓게 펼쳐진 배추밭이 붉게 물드는 일출 전경이 일품이다.',
    Image: travelImage12,
    Nature_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    City_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Culture_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </span>
    ),
    Activity_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
      </span>
    ),
    Food_rating: (
      <span className="flex m-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarHalfLine />
      </span>
    ),
  },
];

export { AboutcityData };
