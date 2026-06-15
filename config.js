/* ================================================================
   ✏️  CONFIG — 영덕 아라펜션
   ================================================================ */
const CONFIG = {

  /* 1. 기본 정보 */
  pension: {
    name_en:     'ARA Pension',
    name_ko:     '영덕 아라펜션',
    slogan:      '동해바다 · 오션뷰 펜션',
    hero_h1:     '푸른 동해바다와 별빛',
    hero_em:     '그림 같은 풍경 속 휴식',
    hero_sub:    '탁 트인 바다 전망과 인피니티풀<br>영덕 아라펜션에서 특별한 하룻밤을',
    intro_title: '동해의 푸른 바다,<br>아라펜션에서',
    intro_desc:  '경북 영덕 바닷가 언덕에 자리한 아라펜션은 탁 트인 동해 오션뷰를 자랑하는 펜션입니다. 모든 객실에서 푸른 바다를 감상할 수 있으며, 옥상 수영장과 글램핑 테라스 등 다양한 시설을 갖추고 있습니다.',
    cta_title:   '동해바다 앞에서<br>특별한 추억을',
    about_points: [
      { title: '오션뷰',     desc: '전 객실 동해 바다 전망' },
      { title: '옥상 수영장', desc: '바다를 바라보는 인피니티풀' },
      { title: '글램핑 테라스', desc: '옥상 캠핑 & 일출 명소' },
      { title: '복층 독채',   desc: '프라이빗 복층 구조' },
    ],
  },

  /* 2. 연락처 */
  contact: {
    tel:            '010-2105-0876',
    kakao_url:      '#',
    naver_url:      '#',
    address:        '경상북도 영덕군 영덕읍 해맞이길 123',
    address_detail: '영덕 아라펜션',
    bank:           '농협 351-0645-7470-43',
    bank_holder:    '예금주 : 김아라',
    checkin:        '15:00',
    checkout:       '11:00',
    directions:     '영덕 시내 약 15분 · 강구항 약 20분<br>영덕 IC에서 약 25분',
    nearby:         '영덕 해맞이공원 · 강구항<br>풍력발전단지 · 블루로드',
  },

  /* 3. 사업자 정보 */
  biz: {
    reg_no: '000-00-00000',
    ceo:    '000',
    year:   '2025',
  },

  /* 4. 색상 테마 (바다 컨셉 - 블루) */
  theme: {
    g:  '#1a5b8a',  // 메인 (진한 바다색)
    g2: '#2a7ab0',  // 보조
    gl: '#5aa8d8',  // 밝은 하늘색
    gp: '#e6f2fa',  // 연한 배경
    y:  '#f0c040',  // 포인트 (모래/노을)
    cr: '#f7f9fb',  // 크림 배경
  },

  /* 5. 이미지 경로 */
  images: {
    hero:      ['images/main/main_01.jpg','images/main/main_02.jpg','images/main/main_04.jpg','images/main/main_06.jpg'],
    hero_slides: [
      { img:'images/main/main_01.jpg', tag:'동해바다 · 오션뷰 펜션',  h1:'푸른 동해바다와 별빛',    em:'그림 같은 풍경 속 휴식', sub:'탁 트인 바다 전망과 인피니티풀<br>영덕 아라펜션에서 특별한 하룻밤을' },
      { img:'images/main/main_02.jpg', tag:'동해 일출 명소',          h1:'바다 위로 떠오르는',      em:'붉은 아침 햇살',       sub:'객실에서 맞이하는<br>영덕의 아름다운 일출' },
      { img:'images/main/main_04.jpg', tag:'옥상 인피니티풀',         h1:'바다와 하나 되는',        em:'프라이빗 수영장',      sub:'하늘과 바다가 맞닿은<br>옥상 수영장에서의 여유' },
      { img:'images/main/main_06.jpg', tag:'언덕 위 프라이빗 펜션',   h1:'영덕 바닷가 언덕',        em:'우리만의 공간',        sub:'탁 트인 전망과 프라이빗함을<br>모두 갖춘 독채 펜션' },
    ],
    about_main: 'images/main/main_01.jpg',
    about_sub:  'images/main/main_04.jpg',
    fac_main:   'images/main/main_04.jpg',
    fac_sub:    'images/main/main_01.jpg',
    fac_cards:  ['images/main/main_04.jpg','images/main/main_08.jpg','images/main/main_05.jpg','images/main/main_09.jpg'],
    rooms: [
      ['images/room101/101_01.jpg','images/room101/101_02.jpg','images/room101/101_03.jpg','images/room101/101_04.jpg','images/room101/101_05.jpg','images/room101/101_06.jpg','images/room101/101_07.jpg','images/room101/101_08.jpg','images/room101/101_09.jpg','images/room101/101_10.jpg','images/room101/101_11.jpg','images/room101/101_12.jpg'],
      ['images/room102/102_01.jpg','images/room102/102_02.jpg','images/room102/102_03.jpg','images/room102/102_04.jpg','images/room102/102_05.jpg','images/room102/102_06.jpg','images/room102/102_07.jpg','images/room102/102_08.jpg','images/room102/102_09.jpg','images/room102/102_10.jpg','images/room102/102_11.jpg','images/room102/102_12.jpg'],
      ['images/room103/103_01.jpg','images/room103/103_02.jpg','images/room103/103_03.jpg','images/room103/103_04.jpg','images/room103/103_05.jpg','images/room103/103_06.jpg','images/room103/103_07.jpg','images/room103/103_08.jpg','images/room103/103_09.jpg','images/room103/103_10.jpg','images/room103/103_11.jpg','images/room103/103_12.jpg'],
      ['images/room201/201_01.jpg','images/room201/201_02.jpg','images/room201/201_03.jpg','images/room201/201_04.jpg','images/room201/201_05.jpg','images/room201/201_06.jpg','images/room201/201_07.jpg','images/room201/201_08.jpg','images/room201/201_09.jpg','images/room201/201_10.jpg','images/room201/201_11.jpg','images/room201/201_12.jpg'],
    ],
    spots: ['images/spots/spot1_haemaji.jpg','images/spots/spot2_wind.jpg','images/spots/spot3_ganggu.jpg','images/spots/spot4_samsa.jpg'],
  },

  /* 6. 객실 정보 */
  rooms: [
    {
      no:'101', name:'아라 101호', tab:'101호',
      desc:'옥상 글램핑 테라스와 바다 전망을 갖춘 복층 객실입니다. 통나무 인테리어로 아늑하며, 옥상에서 동해 일출과 야경을 감상할 수 있습니다.',
      detail:'옥상 글램핑 테라스가 매력적인 복층 객실입니다. 따뜻한 원목 인테리어로 꾸며져 있으며, 넓은 창으로 푸른 동해 바다가 한눈에 들어옵니다. 옥상 테라스에서는 일출과 야경을 모두 즐기실 수 있어 커플과 가족 모두에게 인기입니다.',
      amenities:['복층','오션뷰','옥상 테라스','글램핑','주방','원목 인테리어'],
      std:'2인', max:'3인',
      price:[
        { season:'비성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'준성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'극성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
      ],
    },
    {
      no:'102', name:'아라 102호', tab:'102호',
      desc:'원목 감성의 복층 객실로, 바다 전망 테라스에서 노을을 감상할 수 있습니다.',
      detail:'따뜻한 원목으로 마감된 복층 객실입니다. 아늑한 실내와 야외 테라스에서 동해의 일몰을 감상할 수 있어 편안한 휴식을 선사합니다.',
      amenities:['복층','오션뷰','테라스','주방','원목 인테리어'],
      std:'2인', max:'3인',
      price:[
        { season:'비성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'준성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'극성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
      ],
    },
    {
      no:'103', name:'아라 103호', tab:'103호',
      desc:'탁 트인 거실과 일출 테라스가 돋보이는 복층 객실입니다.',
      detail:'개방감 있는 넓은 거실이 인상적인 복층 객실입니다. 큰 창으로 들어오는 햇살과 바다 전망이 일품이며, 테라스에서 맞이하는 일출이 특별한 추억을 선사합니다.',
      amenities:['복층','오션뷰','일출 테라스','거실','주방'],
      std:'2인', max:'3인',
      price:[
        { season:'비성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'준성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'극성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
      ],
    },
    {
      no:'201', name:'아라 201호', tab:'201호',
      desc:'옥상 글램핑과 노을 테라스를 갖춘 2층 복층 객실입니다. 가장 높은 곳에서 탁 트인 동해 전망을 만끽하세요.',
      detail:'펜션에서 가장 높은 곳에 위치한 복층 객실입니다. 옥상 글램핑 테라스에서 360도 탁 트인 바다 전망과 노을을 감상할 수 있습니다.',
      amenities:['복층','파노라마 오션뷰','옥상 글램핑','노을 테라스','주방'],
      std:'2인', max:'3인',
      price:[
        { season:'비성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'준성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
        { season:'극성수기',  weekday:'미정', friday:'미정', saturday:'미정' },
      ],
    },
  ],

  /* 7-1. 스페셜 — 영덕만의 특별한 경험 */
  special: [
    { img:'images/special/sunrise.jpg', name:'동해 일출 명소', tag:'SUNRISE',
      desc:'객실과 옥상 테라스에서 동해 수평선 위로 떠오르는 일출을 감상할 수 있습니다. 영덕 해맞이공원이 인근에 있어 새해 일출 명소로도 손꼽힙니다.' },
    { img:'images/special/crab.jpg', name:'영덕 대게', tag:'KING CRAB',
      desc:'전국적으로 유명한 영덕 대게의 본고장. 강구항에서 차로 20분 거리로, 제철(11~4월) 싱싱한 대게와 해산물을 맛보실 수 있습니다.' },
    { img:'images/special/wind.jpg', name:'영덕 풍력발전단지', tag:'WIND FARM',
      desc:'언덕 위로 늘어선 거대한 풍력발전기가 만들어내는 이국적인 풍경. 드라이브 코스이자 인생샷 명소로 인기 있는 영덕의 랜드마크입니다.' },
    { img:'images/special/bluroad.jpg', name:'영덕 블루로드', tag:'BLUE ROAD',
      desc:'영덕 해안을 따라 이어지는 도보 여행길. 푸른 동해를 끼고 걷는 아름다운 트레킹 코스로, 사계절 내내 멋진 바다 풍경을 즐길 수 있습니다.' },
  ],

  /* 7. 부대시설 */
  facilities: [
    { icon:'', name:'옥상 인피니티풀', sub:'바다 전망 수영장', detail:'하늘과 바다가 맞닿은 옥상 인피니티풀입니다. 동해 바다를 바라보며 프라이빗한 물놀이를 즐기실 수 있습니다. 여름 성수기 운영하며, 수영복은 개별 지참해 주세요.' },
    { icon:'', name:'옥상 글램핑 테라스', sub:'일출 & 야경 명소', detail:'옥상에 마련된 글램핑 테라스입니다. 동해 일출과 별빛 가득한 밤하늘을 감상할 수 있는 특별한 공간으로, 캠핑 의자와 테이블이 제공됩니다.' },
    { icon:'', name:'바다 전망 데크', sub:'오션뷰 휴식 공간', detail:'탁 트인 동해 바다를 바라볼 수 있는 야외 데크입니다. BBQ와 휴식을 함께 즐기실 수 있으며, 영덕의 아름다운 해안 풍경을 만끽할 수 있습니다.' },
    { icon:'', name:'BBQ 시설', sub:'야외 바비큐 공간', detail:'바다를 바라보며 즐기는 야외 BBQ 시설입니다. 그릴과 기본 집기가 제공되며, 식재료는 개별 준비하셔야 합니다. 가족·단체 모임에 안성맞춤입니다.' },
  ],
  fac_list: [
    { icon:'', text:'옥상 인피니티풀' },
    { icon:'', text:'옥상 글램핑 테라스' },
    { icon:'', text:'바다 전망 데크' },
    { icon:'', text:'BBQ 시설' },
    { icon:'', text:'전 객실 오션뷰' },
    { icon:'', text:'전용 주차장' },
  ],

  /* 8. 주변관광 */
  spots: [
    { icon:'', name:'영덕 해맞이공원', dist:'차량 15분', desc:'동해 일출 명소로 유명한 해맞이공원. 산책로를 따라 탁 트인 바다 전망과 등대를 감상할 수 있습니다.' },
    { icon:'', name:'영덕 풍력발전단지', dist:'차량 20분', desc:'언덕 위 풍력발전기가 만들어내는 이국적인 풍경. 드라이브 코스와 사진 촬영 명소로 인기입니다.' },
    { icon:'', name:'강구항',         dist:'차량 20분', desc:'영덕 대게로 유명한 항구. 신선한 해산물과 대게 요리를 맛볼 수 있는 영덕의 대표 명소입니다.' },
    { icon:'', name:'삼사해상공원',     dist:'차량 25분', desc:'바다 위로 설치된 해상 산책로가 인상적인 공원. 잔잔한 동해 바다와 아름다운 일출·석양을 감상할 수 있습니다.' },
  ],

  /* 9. 예약안내 요금표 (객실별 가격은 위 rooms의 price 사용. 여기선 시즌 기간 안내) */
  price_note: '※ 요금은 인원 및 시즌에 따라 변동될 수 있습니다. 정확한 요금은 예약 문의 시 확인해 주세요.',
  seasons: [
    { name:'비성수기', period:'성수기 외 기간' },
    { name:'준성수기', period:'7.17~7.23 / 8.3~8.16' },
    { name:'극성수기', period:'7.24~8.2' },
  ],

  /* 10. 예약/이용안내 */
  reservation: {
    checkin:  '오후 3시 (15:00)',
    checkout: '오전 11시 (11:00)',
    rules: [
      '반려동물 동반 입실은 불가합니다.',
      '취사는 지정된 공간(주방, BBQ 데크)에서만 가능합니다.',
      '23시 이후 소음에 주의해 주세요.',
      '쓰레기는 분리수거 후 지정 장소에 배출해 주세요.',
      '흡연은 지정된 흡연 구역에서만 가능합니다.',
      '옥상 수영장 및 글램핑 이용 시 안전에 유의해 주세요.',
    ],
    refund: [
      { when:'7일 전 취소', amount:'100% 환불' },
      { when:'5일 전 취소', amount:'80% 환불' },
      { when:'3일 전 취소', amount:'50% 환불' },
      { when:'1일 전 취소', amount:'환불 불가' },
      { when:'당일 취소',   amount:'환불 불가' },
    ],
  },
};
