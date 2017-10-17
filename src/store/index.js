import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'seoul',
    userName: '서지수',
    district: 0,
    districts: {
      'seoul': ['전체', '강남구 갑', '강남구 을', '강남구 병', '강동구 갑', '강동구 을', '강북구 갑', '강북구 을', '강서구 갑', '강서구 을', '강서구 병', '관악구 갑', '관악구 을', '광진구 갑', '광진구 을', '구로구 갑', '구로구 을', '금천구', '노원구 갑', '노원구 을', '노원구 병', '도봉구 갑', '도봉구 을', '동대문구 갑', '동대문구 을', '동작구 갑', '동작구 을', '마포구 갑', '마포구 을', '서대문구 갑', '서대문구 을', '서초구 갑', '서초구 을', '성북구 갑', '성북구 을', '송파구 갑', '송파구 을', '송파구 병', '양천구 갑', '양천구 을', '영등포구 갑', '영등포구 을', '용산구', '은평구 갑', '은평구 을', '종로구', '중구·성동구 갑', '중구·성동구 을', '중랑구 갑', '중랑구 을'],
      'daejeon': ['대덕구', '동구', '서구 갑', '서구 을', '유성구 갑', '유성구 을', '중구'],
      'jeju': ['제주시'],
      'gyeonggi': ['평택시'],
      'busan': ['해운대구']
    },
    favPromises: [],
    interests: [],
    categories: ['행정', '공공질서/안전', '교육', '문화/관광', '환경', '복지', '보건', '농축수산', '산업/중소기업', '교통/건설', '과학기술', '인권', '경제', '기타'],
    targets: ['유아', '어린이/청소년', '청년', '중장년', '노인', '저소득', '여성', '장애인', '다문화', '근로자', '소상공인', '기업인', '기타', '전체'],
    reprs: [
      {
        name: '문재인',
        title: '대한민국 대통령',
        job: '대통령',
        type: 'president',
        city: 'korea',
        district: 0,
        img: '/static/moonjaein.jpg',
        promise: '스펙 없는 이력서',
        ratings:
        {
          person: {
            my: 5,
            city: 4.2,
            nation: 4.5
          },
          promise: {
            my: 5,
            city: 4.4,
            nation: 4.8
          }
        }
      },
      {
        name: '권선택',
        title: '대전광역시장',
        job: '시장',
        type: 'mayor',
        city: 'daejeon',
        district: 0,
        img: '/static/daejeon.jpg',
        promise: '공기업 사장 인사청문 간담회 시행',
        ratings: {
          person: {
            my: 4,
            city: 3.8,
            nation: 3.9
          },
          promise: {
            my: 3,
            city: 3.5,
            nation: 4.1
          }
        }
      },
      {
        name: '박원순',
        title: '서울특별시장',
        job: '시장',
        type: 'mayor',
        city: 'seoul',
        district: 0,
        img: '/static/seoul.jpg',
        ratings: {
          person: {
            my: 4,
            city: 3.8,
            nation: 3.9
          },
          promise: {
            my: 3,
            city: 3.5,
            nation: 4.1
          }
        }
      },
      {
        name: '남경필',
        title: '경기도지사',
        job: '지사',
        type: 'mayor',
        city: 'gyeonggi',
        district: 0,
        img: '/static/gyeonggi.jpg',
        ratings: {
          person: {
            my: 4,
            city: 3.8,
            nation: 3.9
          },
          promise: {
            my: 3,
            city: 3.5,
            nation: 4.1
          }
        }
      },
      {
        name: '서병수',
        title: '부산광역시장',
        job: '시장',
        type: 'mayor',
        city: 'busan',
        district: 0,
        img: '/static/busan.jpg',
        ratings: {
          person: {
            my: 4,
            city: 3.8,
            nation: 3.9
          },
          promise: {
            my: 3,
            city: 3.5,
            nation: 4.1
          }
        }
      },
      {
        name: '원희룡',
        title: '제주특별자치도지사',
        job: '지사',
        type: 'mayor',
        city: 'jeju',
        district: 0,
        img: '/static/jeju.jpg',
        ratings: {
          person: {
            my: 4,
            city: 3.8,
            nation: 3.9
          },
          promise: {
            my: 3,
            city: 3.5,
            nation: 4.1
          }
        }
      },
      {
        name: '조승래',
        title: '국회의원 (대전 유성구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'daejeon',
        district: 5,
        img: '/static/daejeon-yuseong.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      // {
      //   name: '진영',
      //   title: '국회의원 (서울 용산구)',
      //   job: '국회의원',
      //   type: 'congressPerson',
      //   city: 'seoul',
      //   district: 40,
      //   img: '/static/seoul-yongsan.jpg',
      //   ratings: {
      //     person: {
      //       my: 4,
      //       city: 4.1,
      //       nation: 3.8
      //     },
      //     promise: {
      //       my: 4,
      //       city: 3.9,
      //       nation: 4.1
      //     }
      //   }
      // },
      {
        name: '하태경',
        title: '국회의원 (부산 해운대 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'busan',
        district: 1,
        img: '/static/busan-haeundae.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '오영훈',
        title: '국회의원 (제주 제주시 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'jeju',
        district: 1,
        img: '/static/jeju-jeju.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '강병원',
        title: '국회의원 (은평구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 44,
        img: '/static/100118713.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '고용진',
        title: '국회의원 (노원구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 18,
        img: '/static/100118724.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '금태섭',
        title: '국회의원 (강서구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 8,
        img: '/static/100119795.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '기동민',
        title: '국회의원 (성북구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 34,
        img: '/static/100119745.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김병기',
        title: '국회의원 (동작구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 25,
        img: '/static/100120583.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김선동',
        title: '국회의원 (도봉구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 22,
        img: '/static/100118558.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김성식',
        title: '국회의원 (관악구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 11,
        img: '/static/100120020.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김성태',
        title: '국회의원 (강서구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 9,
        img: '/static/100120253.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김영주',
        title: '국회의원 (영등포구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 40,
        img: '/static/100119854.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김영호',
        title: '국회의원 (서대문구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 30,
        img: '/static/100119023.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '김용태',
        title: '국회의원 (양천구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 39,
        img: '/static/100120403.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '나경원',
        title: '국회의원 (동작구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 26,
        img: '/static/100119754.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '남인순',
        title: '국회의원 (송파구 병)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 37,
        img: '/static/100119315.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '노웅래',
        title: '국회의원 (마포구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 27,
        img: '/static/100119669.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '민병두',
        title: '국회의원 (동대문구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 24,
        img: '/static/100119639.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '박성중',
        title: '국회의원 (서초구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 32,
        img: '/static/100118501.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '박영선',
        title: '국회의원 (구로구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 16,
        img: '/static/100120032.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '박용진',
        title: '국회의원 (강북구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 7,
        img: '/static/100118288.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '박인숙',
        title: '국회의원 (송파구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 35,
        img: '/static/100119623.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '박주민',
        title: '국회의원 (은평구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 43,
        img: '/static/100120523.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '박홍근',
        title: '국회의원 (중랑구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 49,
        img: '/static/100119564.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '서영교',
        title: '국회의원 (중랑구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 48,
        img: '/static/100119402.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '손혜원',
        title: '국회의원 (마포구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 28,
        img: '/static/100120473.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '신경민',
        title: '국회의원 (영등포구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 41,
        img: '/static/100120103.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '심재권',
        title: '국회의원 (강동구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 5,
        img: '/static/100119490.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '안규백',
        title: '국회의원 (동대문구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 23,
        img: '/static/100119918.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '안철수',
        title: '국회의원 (노원구 병)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 20,
        img: '/static/100120262.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '오신환',
        title: '국회의원 (관악구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 12,
        img: '/static/100119314.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '우상호',
        title: '국회의원 (서대문구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 29,
        img: '/static/100119514.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '우원식',
        title: '국회의원 (노원구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 19,
        img: '/static/100119634.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '유승희',
        title: '국회의원 (성북구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 33,
        img: '/static/100119929.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '이은재',
        title: '국회의원 (강남구 병)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 3,
        img: '/static/100118560.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '이인영',
        title: '국회의원 (구로구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 15,
        img: '/static/100119904.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '이종구',
        title: '국회의원 (강남구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 1,
        img: '/static/100118548.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '이혜훈',
        title: '국회의원 (서초구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 31,
        img: '/static/100118522.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '이훈',
        title: '국회의원 (금천구)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 17,
        img: '/static/100119649.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '인재근',
        title: '국회의원 (도봉구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 21,
        img: '/static/100119671.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '전현희',
        title: '국회의원 (강남구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 2,
        img: '/static/100118491.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '전혜숙',
        title: '국회의원 (광진구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 13,
        img: '/static/100118932.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '정세균',
        title: '국회의원 (종로구)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 45,
        img: '/static/100119321.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '정양석',
        title: '국회의원 (강북구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 6,
        img: '/static/100119090.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '지상욱',
        title: '국회의원 (중구·성동구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 47,
        img: '/static/100118412.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '진선미',
        title: '국회의원 (강동구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 4,
        img: '/static/100119515.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '진영',
        title: '국회의원 (용산구)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 42,
        img: '/static/100119890.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '최명길',
        title: '국회의원 (송파구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 36,
        img: '/static/100120498.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '추미애',
        title: '국회의원 (광진구 을)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 14,
        img: '/static/100119374.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '한정애',
        title: '국회의원 (강서구 병)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 10,
        img: '/static/100119674.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '홍익표',
        title: '국회의원 (중구·성동구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 46,
        img: '/static/100119325.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
      {
        name: '황희',
        title: '국회의원 (양천구 갑)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 38,
        img: '/static/100118733.jpg',
        ratings: {
          person: {
            my: 4,
            city: 4.1,
            nation: 3.8
          },
          promise: {
            my: 4,
            city: 3.9,
            nation: 4.1
          }
        }
      },
    ]
  },
  getters: {
    president: state => {
      return state.reprs.find(function (repr) {
        if (repr.city === 'korea') {
          return repr
        }
      })
    },
    // presidentPromises: state => {
    //   return state.promises.find(function (pp) {
    //     if (pp.city === 'korea') {
    //       return pp
    //     }
    //   })
    // },
    mayor: state => {
      return state.reprs.find(function (mayor) {
        if (mayor.city === state.city && mayor.district == 0) {
          return mayor
        }
      })
    },
    congressPerson: state => {
      return state.reprs.find(function (cp) {
        if (cp.city === state.city && cp.district == state.district) {
          return cp
        }
      })
    },
    // mayorPromises: state => {
    //   return state.promises.find(function (mp) {
    //     if (mp.city === state.city && mp.district == 0) {
    //       return mp
    //     }
    //   })
    // },
    // congressPersonPromises: state => {
    //   return state.promises.find(function (cpp) {
    //     if (cpp.city === state.city && cpp.district == state.district) {
    //       return cpp
    //     }
    //   })
    // },
    favoritePromises: state => {
      return state.favPromises.map(function (fp) {
        return {
          city: fp.city,
          district: fp.district,
          promise: state.promises.find(function (p) {
            return (p.city === fp.city && p.district == fp.district)
          }).promises[fp.key]
        }
      })
    }
  },
  mutations: {
    setCity(state, city) {
      state.city = city
    },
    setDistrict(state, district) {
      state.district = district
    },
    addComment(state, payload) {
      let key = parseInt(payload.key)
      console.log(payload)
      let promises = state.promises.find(function (p) {
        if (p.city === payload.city && p.district == payload.district) {
          return p
        }
      })
    },
    addFavPromises(state, payload) {
      state.favPromises.push(payload)
    },
    setInterest(state, payload) {
      state.interests = payload
    },
    setName(state, payload){
      state.userName = payload
    }
  }
})
