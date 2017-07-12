import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'seoul',
    district: 0,
    districts: {
      'seoul': ['전체', '강남구 갑', '강남구 을', '강남구 병', '강동구 갑', '강동구 을', '강북구 갑', '강북구 을', '강서구 갑', '강서구 을', '강서구 병', '관악구 갑', '관악구 을', '광진구 갑', '광진구 을', '구로구 갑', '구로구 을', '금천구', '노원구 갑', '노원구 을', '노원구 병', '도봉구 갑', '도봉구 을', '동대문구 갑', '동대문구 을', '동작구 갑', '동작구 을', '마포구 갑', '마포구 을', '서대문구 갑', '서대문구 을', '서초구 갑', '서초구 을', '성북구 갑', '성북구 을', '송파구 갑', '송파구 을', '송파구 병', '양천구 갑', '양천구 을', '영등포구 갑', '영등포구 을', '용산구', '은평구 갑', '은평구 을', '종로구', '중구·성동구 갑', '중구·성동구 을', '중랑구 갑', '중랑구 을'],
      'daejeon': ['대덕구', '동구', '서구 갑', '서구 을', '유성구 갑', '유성구 을', '중구'],
      'jeju': ['제주시'],
      'gyeonggi': ['평택시'],
      'busan': ['해운대구']
    },
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
      {
        name: '진영',
        title: '국회의원 (서울 용산구)',
        job: '국회의원',
        type: 'congressPerson',
        city: 'seoul',
        district: 40,
        img: '/static/seoul-yongsan.jpg',
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
    ],
    promises: [
  {
    "district": 1,
    "name": "강남구갑(이종구)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "부동산 규제 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "상속․증여세제 합리화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "혁신산업분야 규제개혁",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "영동대로 지하에 GTX 등 6개 광역․도시철도 환승시설 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "핀테크 등 혁신산업 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "청년 스타트업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "국제업무와 MICE 인프라를 강화하여 강남의 국제경쟁력 견인",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "답보상태에 있는 한류․의료관광을 MICE 산업과 연계하여 발전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "의료관광 관련 규제 개혁",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "한류관광의 내실있는 발전을 위한 콘텐츠 개발 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "가로수길, 로데오거리 등 골목상권의 젠트리피케이션 문제 해결을 위한 대책 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "재건축사업은 주민의견을 수렴하여 추진될 수 있도록 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "논현동, 역삼동 등 주거지역 종상향 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "도시미관과 안전문제 해결을 위한 전선 지중화 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "역삼동 KTV 이전터에 스타트업 지원시설을 건립하고 미국 ‘테크샵’을 유치하여 어린이부터 장년층까지 혁신산업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "신사동 국세청관사 자리에 청소년을 위한 문화공간을 건립하여 청소년들의 건전한 문화활동과 창작활동을 지원",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 3,
    "name": "강남구병(이은재)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "8~10년 소요되는 재건축 기간 단축시켜 주거 환경을 개선시키겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "영동도로 통합개발 완수하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "5개 광역·도시 철도를 영동대로 지하공간에 통합개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "세계 최고의 교통·자동차산업·컨벤션·쇼핑·문화·관광 허브 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "창조교육·문화특구를 조성하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "전자칠판, 앱 등을 통한 스마트 교실 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "근거리 통학 위한 교실 증설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "원어민 교사 증원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "학생 체위에 맞도록 노후 책·걸상 교체",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "영동대로 GBC와 COEX를 연결하는 문화특구 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "빼앗긴 재산세 찾아오겠습니다",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 2,
    "name": "강남구을(전현희)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "자곡로와 헌릉로 지하철역을 유치하겠습니다!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "세곡을 강남 교육신도시로 만들겠습니다!-늘어나는 학생 수를 고려해 중학교를 신설하고 세곡의 학교를 명문으로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "10년 공공임대주택 불합리한 분양전환가격, 임대주택법을 개정하겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "토지임대부 아파트 입주자들의 토지에 관한 권리를 보호하겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "도서관, 수영장, 문화센터 건립을 추진하겠습니다!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "세곡천 종합생태공원을 조성하겠습니다!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "심각한 생활소음대책을 마련하겠습니다!-성남공항, 용인서울고속도로 등이 야기하는 심각한 생활소음 해결하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "방음터널 설치 등 해결 방안을 모색하여 쾌적한 주거환경 대책을 마련하겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "시립병원 유치하겠습니다!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "재건축·리모델링! 주민이 원하는 대로!-각종 규제에 묶인 강남 재건축사업 적극적으로 지원·추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "강남(을) 지하철역 유치하겠습니다!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "수서역 KTX 역세권 청년일자리 SOHO 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "생활체육 시설확보 및 동호회 지원확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "저소득층·장애인·어르신들 복지혜택 확대-저소득층 무료급식소 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "아이 키우기 좋은 맘(MOM)편한 강남 -방과 후 학습프로그램 내실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "사교육비의 절반이상을 차지하는 내신 사교육비의 획기적 절감 방안 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "어린이집, 유치원 등 유아교육기관 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "아동보행권이 지켜지고 교통사고로부터 보호 받을 수 있도록 안전한 스쿨존 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "아동들이 직접 참여하고 디자인하여 뛰어 놀 수 있는 아동 친화적 놀이공간 마련",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 4,
    "name": "강동구갑(진선미)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "야간경기 가능한 축구장 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "고덕동 리틀야구장 조기 완공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "샘터근린공원·명일근린공원 배드민턴장 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "강동 종합체육관 강일동에 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "독립예술전용상영관 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "국립 한국전통문화대학교 서울캠퍼스 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "선사유적지 유네스코 등재 및 관련 콘텐츠 개발 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "역사·생태·쇼핑 연계 강동 지역 관광코스 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "길고양이 급식 사업·유기동물 임시 보호소 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "명일근린공원 시설 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "암사역사생태공원 조기 마무리",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "명일근린공원 내 어린이 놀이숲 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "선사유적지와 한강공원을 연결하는 암사초록길 완공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "강동둘레길(가칭) 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "재건축 단지 CCTV확충으로 주민 불안 해소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "암사역 하수관거 정비로 침수피해 예방",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "CPTED(범죄 예방 환경 설계)로 안전마을 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "천호동 423번지 텍사스촌 완전 철거",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "강일지구 소방지구대 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "성범죄 제로 강동 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "‘우리동네 한바퀴’ 매년 실시로 상시 학교안전 점검",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "학교 화장실 등 학교시설 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "강일동 신설 초·중학교 조기 개교로 과밀학급 해소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "시간제 보육시설 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "공공산후조리원 2개소 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "강동구 보육시설 정원 3천 명 증원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "고덕역 앞 제2강동 어린이회관 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "전통시장 공동브랜드 · 문화 육성 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "고덕시장, 명일시장 정비 및 통합 배달시스템 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "길동복조리시장, 암사시장 주차장 신설 및 현대화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "강동우체국 물류센터 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "길동, 암사, 고덕 공영주차장 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "암사 복합커뮤니티센터 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "재건축 주민 이익 극대화·재정착률 제고",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "주요 요지 광역버스 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "9호선 4단계 연장 강일동까지 연장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "신설 5호선 강일역 출구 연장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "지하철 5.8.9호선 연장 조직착공 및 완공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "기숙형 청년 창업지원센터 ‘도전숙’(도전하는 사람들의 기숙사)      유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "서울시 장애여성인력지원센터 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "어르신 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "고덕상업업무복합단지, 강일첨단업무단지, 강일엔지어링복합단지 입주업체 강동구민 우선 고용 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "대기업 및 우수 중소기업 30개 유치, 친환경벤처기업 200개 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "SunUp City 내 우수 기업 25개 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "한강변 ‘제2의 워커힐 호텔’유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "2017년까지 만 평 규모 IKEA, 만 평 규모 백화점아울렛 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "아동보호전문기관 100개소로 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "월 통상임금 100%(상한150만원, 하한 70만원)로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "주52시간 이상 근무 금지, 특례업종 축소 및 4인 이하 사업장에도 적용",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "최저임금10,000원, 목표생활임금 12,462원으로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "실제 소득창출 효과 없는 재산에도 보험료를 부과, 1가구1주택 소유에 대한 보험료 배제 등 단계적 소득 중심",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "재산을 증여 받은 자녀가 부모를 확대하거나 부당하게 대할 경우 부모가 증여한 재산 환수",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "소득하위 70% 어르신에게 기초연금 30만원 차등 없이 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "청년일자리 70만 개 창출-공공부문35만, 민간부분 37만 고용창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "국정원의 역대 정치개입 진상규명 국정조사 재실시 및 국정원 민주성 확대를 위한 법안 발의",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "현행 테러방지법의 인권침해 독소 조항 폐지",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 5,
    "name": "강동구을(심재권 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "산사태 예방사업 지원 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "둔촌로 하수암거 신설 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "성내배수분구 하수관거 종합정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "강동구 자살예방센터 설치 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "취약계층 ‘응급·긴급출동 안전벨’ 운영 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "안심귀가 마을버스 활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "범죄피해예방용·학교 주변 CCTV 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "범죄예방 환경디자인사업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "어린이 놀이시설 안전관리",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "노후하수관 정비 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "공공부문 공유사업 활성화 등 공유도시 강동 추진 지원 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "선사유적지 리노베이션 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "일자산 테마파크 조성 지원, 생활권 공원녹지 확충, 올림픽대로 가로수길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "반려동물 문화 조성·유기동물 보호 등 동물복지 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "강동아트센터, 강도예술인페스티벌 활성화 등 지역예술인 활동 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "강동선사문화축제의 국제화(유네스코 세계문화유산 등재) 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "서울시 시민청(시민을 위한 공간) 유치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "성내유수지 체육공원 조성 등 생활체육 시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "여성·청소년 등 복합문화센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "강동문화체육센터(실내체육관) 건립 등 생활체육활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "9호선 보훈병원역 4번 출구(일자산 잔디광장 입구) 신설 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "둔촌동 97-7~101-1간(보훈병원 남측도로), 105~105-3간(둔촌마을) 도로개설 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "천호대로 확장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "전 지하철역 에스컬레이터 설치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "하니공원 노외주차장 설치 등 공영주차장 확충 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "구천면길 확장, 진황도로 개설 및 확장 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "암사초록길(선사마루) 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "천호 현대백화점 앞 지하차도 매립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "로데오거리~성내구길 연결",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "9호선 강동구 관류, 5호선 연장, 8호선 연장 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "관내 학교 에코스쿨 조성 지원 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "함께 만드는 우리 동네 창의놀이터 조성 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "청소년 문화 공간 확충 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "명문고 육성 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "좋은 중학교 만들기 사업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "서울형 혁신교육지구 사업 추진 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "자기주도학습·평생학습·진로직업체험센터 운영 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "공공도서관·작은도서관 확충 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "영어도서관·영어체험센터 운영 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "학교 강당 신축 및 노후시설 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "장애인 복지시설 확충, 일자리 사업 지원 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "출산과 양육하기 좋은 환경조성 사업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "자살예방센터 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "지역아동센터, 나홀로 방임 아동·청소년 등 취약계층 복지 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "한부모 가족 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "다문화가족지원센터 운영 및 사회통합 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "건강가정지원센터 운영 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "보훈회관 리모델링 등 보훈단체 및 국가유공자 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "찾아가는 동 주민센터 확대, 동 복지네트워크 운영 활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "노인복지 시설 확충, 어르신사랑방 활성화, 어르신 일자리 창출 등 노인복지 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "공구거리·문구거리·성내 악세사리 상업 활성화 지원 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "중앙보훈병원 의과대학 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "자원순환센터 건립 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "마을공동체 사업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "사회적경제 활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "일자리종합지원센터 활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 56,
        "title": "천호뉴타운, 성내·천호구역 재정비 촉진지구, 천호1·3동 정비구역 등의 차질 없는 이행",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 57,
        "title": "전통시장 현대화·공영주차장 건설, 카드 수수료 인하 등 소상공인·중소기업인 보호",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 58,
        "title": "엔지니어링복합단지·첨단업무단지·고덕상업업무복합단지 조성 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 59,
        "title": "둔촌주공아파트 사업 순조로운 진행 지원",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 6,
    "name": "강북구갑(정양석)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "방치된 더 파인트리 콘도의 조속한 공사 재개의 운영 정상화 필요",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "우이 경전철 개통을 계기로 국내외 관광객 유치를 위한 숙박업소 개선과 쇼핑타운 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "관광객이 찾아오는 성북구",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "노후불량주거지에 가로주택정비사업 등 주거 여건 개선방안 적극 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "재산권을 침해하고 지역간 형평성에 어긋나는 3중 중복 규제지역의 용적률/건폐율 완화를 위한 법/조례 개정 추",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "내 집 고치기 쉬운 강북",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "노후장애 어르신을 위한 재가 요양보호사 지원 대상/금액 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "공공근로, 어르신 일자리 등 경제활동 여건 확대로 생활안정과 자립기반 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "노인 어르신의 교육/문화/체육활동을 위한 시립 복지관 및 5단지 복지관 시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "노인 어르신이 살기 편한 강북구",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "방과후학교, 관내 도서관/문화센터 입시 교육 프로그램 확충으로 사교육비 부담 감소, 사설학원에 대한 수요를",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "남는 학교시설의 통합과 재조정으로 교육의 질 제고와 고교 증설효과",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "자녀 키우기 좋은 강북구",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 7,
    "name": "강북구을(박용진)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "장애인이 편하고 차별받지 않은 사회",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "고령사회 대응 강화, 건강하고 존경받는 100세 시대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "여성 경제활동참여 활성화와 일·가정 양립환경 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "청년에게 희망의 다리 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "더 많은 민주주의와 역사바로세우기",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "양극화 해소와 좋은 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "위험 시설물 개보수 지원추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "통학로 안전 확보를 위한 시설물, 인력지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "번3동 오현적환장 지하화동 환경개선사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "미아사거리역 6번 출구 이동편의시설 검토 및 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "미아역 6번 출구 에스컬레이터 조기착공 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "악취 저감장치 설치(호나경부 지원 유치)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "노후 하수고나거 정비사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "삼각산동 청사 임기내 준공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "삼각산동 8구역 부지 수영장 갖춘 체육복합 시설로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "(사)학북마을학교, 지역교육문화센터 확장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "동네 도서관, 동네 문화프로그램 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "교육 혁신지구 사업 계속 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "＇예외 없는 식품완전표시제＇ 추진 등 먹거리 안전 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "학교 교육여건 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "어린이안전교육 강화 및 체험학습 내실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "방과 후 아동돌봄 사각지대 해소 및 내실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "아동학대 예방 부모교육 의무화, 아동보호 인프라 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "보육교사 처우개선, 100% 국가책임보육(누리과정) 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "서민층 주거권 보호 공공임대주택 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "재개발, 재건축 갈등 해소 및 원활한 사업추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "최고고도지구 합리적 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "소상공인 영세자영업자 배려와 지원강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "생활임금제 확산, 최저 임금 상향 조정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "지하경전철 역세권 개발 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "미아역세권 개발추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "동북선 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "우이-신설선 기간대 준공",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 8,
    "name": "강서구갑(금태섭)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "차 세우기 편한 마을-나눔 주차장 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "강서 안심마을 프로젝트-CCTV, 옐로우카펫",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "놀면서 공부하는 <상상도서관>",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "가족이 함께 쉬는<강서 가족의 숲>",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "마더센터",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "다양한 시간대별 보육시설-브릿지카페, 공공육아나눔터",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "강서형 칸 아카데미 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "강서 청소년 멘토 드림팀",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "사법부와의 관계에서 국민들의 권인 향상 및 보호",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "검찰조직 개혁을 위한 입법활동",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 10,
    "name": "강서구병(한정애)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "데이케어센터를 동마다 1개씩 단계적으로 확충하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "가로등(보안등)추가 설치로 안전한 밤거리를 조성하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "방범용 CCTV를 확대설치하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "반려동물 놀이터 설치를 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "임대주택의 생활환경을 개선하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "어르신 인생이모작 및 사회활동을 지원하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "어르신복지관 건립을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "국공립어린이집 및 직장어린이집을 확충하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "등촌삼거리 교차로 교통체계 불편을 해소하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "환경성질환센터 설치를 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "누구나 가고 싶은 봉제산 공원을 조성하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "마을공동체 사업 지원을 확대하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "어울림플라자 건립을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "문화예술창작소를 건립하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "LG아트센터의 강서구 조속 이전을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "강서문화예술회관 건립을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "워킹스쿨버스 사업을 단계적으로 확충하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "강서 청소년 문화의 집(가칭 ‘꿈창작소’)설립을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "마곡지구 보타닉공원 내 ‘유럽식 숲속 도서관 설치’를 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "교육환경을 대폭 업그레이드하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "일반고등학교 역량강화 및 고교균형발전 적극 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "자연경관지구 합리적 완화를 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "월드컵 대교 건설 조기 완공을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "준공업지역 해제하고 문화·컨텐츠사업 등 강서구 특화산업을 육성하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "국회대로 지하화(BTO사업) 및 상부 명품거리 조성을 추진하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "공항 고도제한 완화 조속히 실현하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "지하철 9호선을 증차하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "초등학교부터 고등학교까지 실질적인 무상교육 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "관계 부처들과 관련 토론회 실시 및 전문가 간담회로 KDI의 예비타당성 조사 통과 근거 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "2016년 상반기 내 「제3차 국가철도망 구축계획」에 서부광역철도 사업 반영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "법정공휴일, 대체공휴일 모든 국민이 휴일로 적용받도록 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "소득공제 존속 유지 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "지역사회 아동보호시스템 강화 등 아동학대 근절 대책 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "청년일자리 70만개 창출 및 청년수당 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "소득하위 70% 어르신에게 기초연금 월 30만원씩 균등지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "누리과정 100% 국가책임제 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "(금수저·흙수저 불평등의 대물림 중단)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "기회균등촉진법 제정",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 9,
    "name": "강서구을(김성태 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "5호선 마곡역, 9호선 마곡나루역 출입구 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "구암공원산책로-궁산둘레길 연결 구름다리 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "중고자동차 매매센터 외관 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "방신재래시장 주차장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "강서구청 마곡이전 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "강서의 구석구석, 주민의 불편사항을 해소하겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "청소년 공부방 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "어린이 영어도서관 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "어린이 천문대 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "마곡 공공도서관 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "공항고 마곡지구 신설 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "R&D;인재양성 교육국제화특구 지정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "미래의 꿈을 키우는 명문 교육도시 강서를 만들어 가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "강서다목적체육센터 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "김포공항 27홀 퍼블릭 골프장 및 주민체육시설 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "남북통합문화센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "국립한방의료원 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "국립항공박물관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "삶의 질 1등 도시 강서를 만들어 가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "임대아파트 주거환경 개선사업 계속 진행",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "장애인헬스케어센터 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "소외된 이웃, 그늘과 차별이 없는 따뜻한 강서를 만들어가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "공항철도 마곡역 조기 개통",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "9호선 마곡나루역을 급행역으로 조기 전환",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "공항동 군부대 2018년 조기이전 확정으로 방화대로 전구간 개통예정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "방화터널~방화대교~강변북로(자유로) 직접연결",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "주민동의 없는 광명~서울 민자고속도로 철회",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "지하철 9호선 전동차 증차",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "서부광역철도 건설 (부천~가양~상암~홍대입구)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "서부고속버스터미널 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "편리하고 안전한 교통인프라, 사통팔달 강서를 만들어 가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "서남하수처리장 지하화 및 지상공원화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "대한민국 최고 도시생태공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "쾌적하고 살기좋은 녹색도시 강서를 만들어 가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "가양․등촌동 일대 준공업지역 해제 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "개화동 종상향 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "마곡 기업투자 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "무산된 마곡 워터프론트 개발 재추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "고도제한 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "강서에 새로운 성장동력을 달아줄 미래가치를 만들어 가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "교통․항공 산업육성 및 안전체계확립 통한 교통강국 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "보편적 주거복지 통한 서민주거안정 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "국토균형발전으로 국가 경제활력 제고",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 11,
    "name": "관악구갑(김성식)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "주차난 해소, 생활체육 육성 등 생활여건 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "경전철 공사 정상적 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "제2서울사대부고 재추진, 맞춤형 평생시민교육 체계 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "도심의 노후 주택 정비로 청년층 기수사형 주택, 작은 도서관 등 주거ㆍ문화ㆍ편의시설 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "대학등로금 산정근거 공시 및 심의위원회 기능 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "국민연금 재원으로 ‘청년희망임대주택’ 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "중소기업ㆍ소상공인 경영단계별 협동조합 지원으로 비용절감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "마이스터고 기능 강화 및 취업성공패키지와의 연계 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "공공구매제도 확대로 중소기업 제품 판로 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "복지서비스 매뉴얼 배포 및 온라인 관리시스템 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "보육, 교육 등 영유아, 아동, 청소년 복지제도의 중앙ㆍ지자체의 권한 및 책임 재검토",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "복지정책의 컨트롤 타워인 사회보장위원회 기능 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "조세지출 개념신설, 세출예산과의 비교분석 기능 강화, 추정책과 실적액 비교 평가 등 비과세ㆍ감면의 정부 관리",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "편안한 노후생활 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "질 좋은 보육시설 및 보육서비스 제공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "임금체불 원천 봉쇄",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "저소득 근로자의 사회보험료 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "사내하도급 차별시정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "계층별 임금격차 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "창업교육, 창의형 장학금 등 다양한 진로체험 기회 제공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "민간 중심의 체계적 창업생태계 여건 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "아이디어, 기술 등의 적정한 가치평가체계 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "등기임원제도 강화 등 책임경영체계 확립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "기술 및 아이디어 탈취ㆍ편취 방지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "일감몰아주기 규제강화, 실효성 제고",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 12,
    "name": "관악구을(오신환)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "어르신 경로당 신설 및 문화복지시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "지역산업, 대학, 고용서비스기관 연계 청년일자리 매칭 및 멘토링",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "맞춤형 노인복지센터인 ‘시니어 행복센터’ 관악 유치 및 서비스 차별화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "어린이집 보육교사 처우개선 및 민간어린이집 국공립 수준 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "우수교원 초빙 및 초중고 교육환경개선사업 강화(국비 교육특별교부금 대폭 확대)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "금천경찰서 이전 부지 ‘관악문화예술복합센터’ 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "관악산입구 신림선 경전철 사업 연계, 복합문화시설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "경전철 역세권 주변 개발구역 종상향 추진 등 상업용지 확대 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "신안산선 구로디지털단지역 조원동 방향 출입구 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "신대방-난곡-석수간 버스노선 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "난곡동 도지재생활성화 사업 적극 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "난향동 버스차고지 내 지하주차장 건설 및 관내 공영주차장 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "신봉터널 진출입로 주민의견 반영 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "강남도시순환고속도로 개통(5月 예정)으로 남부순환로 정체해소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "난곡선 사업자 선정 및 조기 착공 & 신림선 차질 없는 공사 진행",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "서울대학교 시흥캠퍼스 이전 저지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "‘친환경 산악관광 활성화’와 연계한 관악산 관광벨트 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "관악청년창업밸리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "경력단절 여성을 위한 경력개발형 새일센터 확대 및 창업지원 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "특성화고, 이공계 대학 벤처장학금제도 신설. 벤처기업 인력 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "휠체어 탑승 저상버스 및 장애인 콜택시 보급 확대로 장애인 이동권 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "혼자 사시는 어르신 돌봄 서비스 강화 및 공공실버주택 지속 공급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "노인친화기업 인증제 도입 및 재능나눔일자리 기간 연장으로 노인일자리 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "65세 이상 어르신 의료비 부담금액 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "저소득층 자녀 영재 발굴 확대 및 중소기업근로자 국비유학 기회 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "초등학교 돌봄교실과 대학생 지식나눔 프로그램 강화로 사교육비 경감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "서민가계 금융지원을 위한 인터넷 전문은행 10%대 중금리 대출상품 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "경력단절 전업주부 국민연금 추후납부 허용",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "건강보험료 부과체계 단계적 개편으로 저소득층의 건강보험료 부담 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "성실 사업자 소득세 감면 및 재창업 사업자 징수·체납처분 유예기준 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "소상공인 고용보험료 지원사업 신설로 영세 소상공인의 보험료 부담 경감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "소상공인시장진흥기금 확대 및 전통시장 주차비용 보조",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "함께 사는 경제를 위해 대기업과 협력기업이 과실을 나누는 다자간성과공유제 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "가맹점주 울리는 프랜차이즈 본사에 징벌적손해배상제 도입",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 13,
    "name": "광진구갑(전혜숙)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "유치원과 국공립어린이집 추가설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "구의정수장 부지에 고등학교 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "중곡동 중학교 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "중량천, 산책길과 자전거도로를 정비, 안전한 어린이 물놀이시설 설치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "홍련봉공원, 놀이시설과 체육시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "어린이대공원에 도서관, 문화공연장, 체험 놀이시설, 캠핑장 등 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "한전부지에 청소년문화센터 설치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "곳곳에 다목적체육시설, 쉼터, 친환경 체육공원 설치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "제일시장, 관광문화시장으로 재도약",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "어린이대공원 주변 고도 제한 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "천호대로 맛집거리 홍보로 소상공인 소득증대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "광나루역 광진구민체육센터 방향 출구설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "군자역 1번출구, 중곡역 종합의료복합단지 방향에 에스컬레이터 추가설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "종합의료복합단지 등 주변상권 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "여성 안심거리 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "곳곳에 긴급 출동벨 설치로 아동, 장애인, 여성 보호 확산",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "CCTV 교체 및 안전한 골목길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "불효자 방지법",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "소득하위 70% 기초연금 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "교육비 부담 절감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "100% 국가 책임 보육(누리과정) 실천",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "경력단절 여성 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "육아휴직 급여 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "쉬운해고 제한 및 정리해고요건강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "구직 촉진 급여지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "청년 일자리 창출",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 14,
    "name": "광진구을(추미애 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "자양유수지에 도서관 및 체육관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "5060 일자리 종합지원센터 ‘50+캠퍼스’ 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "광진 맘 센터(Mom Center) 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "지하철 2호선 지하화 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "동서울터미널 현대화 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "구의역 일대 재개발 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "기초연금인상 : 2018년까지 단계적으로 70% 어르신에게 기초연금 30만원 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "고등학교 의무교육 단계적 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "국공립 어린이집 50%까지 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "누리과정 보육예산 100% 국가담당",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "저소득층은 대학등록금 200만원까지 세액공제, 기회균형선발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "대기업의 사내유보금으로 좋은 일자리를 창출하고, 기업에게는 세금감면 인센티브 지급(사회적 책임준비금제도)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "비정규직 차별금지, 동일임금 보장, 청년알바들의 권리보장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "상가임대차 계약갱신요구권 보장을 현행 5년에서 10년으로 연장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "재벌 대기업만 잘 사는 것이 아니라 중소기업의 직원, 소상공인, 자영업자 등이 모두 고르게 잘 살게 만들겠음",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "동반성장의 전도사 정운찬 전 국무총리도 경제민주화를 이끌 최적임자는 추미애라고 했습니다.",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 15,
    "name": "구로구갑(이인영 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "구로 여성새로일하기 센터 추가 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "청년활력소 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "수궁동 어린이 도서관 조속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "항동생활체육관 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "항동푸른수목원 확대및 더불어숲",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "천왕동 서남권 복합문화센터추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "천왕고등학교 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "천이초(가칭 연지초) 신설 차질없이 진행",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "천왕파출소 신설 차질없이 진행",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "오류2동 주거환경개선사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "오류1동 행복주택내 공공시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "개봉 3동 공용주차장 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "구로구민체육센터 전면 리모델링",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "남부순환도로 평탄화 2단계 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "고척2동 세곡초 주변 주차장 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "고척1동 고척쇼핑센터 뒤편도로 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "유아숲체험관 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "종교시설활용하여 노인복지 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "개봉역 주변 노후하수관거및 악취개선사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "개웅산둘레길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "무료와이파이 구로전역 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "항공기소음피해대책수립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "한일시멘트 공장 이전 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "영등포 교정시설 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "남북대화재개 (남북국회 회담",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "최저임금 1만원시대 단계적 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "생명,안전 업무에 종사하는 노동자들부터 비정규직 의무화",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 16,
    "name": "구로구을(박영선 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "G밸리 전기차 친환경 특화단지 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "소프트웨어 산업 생태계 국내중심지역 육성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "구로 G밸리 산업 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "주택가 공영 주차장 신설 정수장 부지 복합문화공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "남구로시장 특화사업 (문화관광형 시장 특화)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "구로시장 현대화 특화사업 (골목형 시장 특화)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "남구로역 1,6번 출구 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "오페라하우스 활성화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "유네스코 거리~엘지자이 아파트 방음벽 공사 완료 후 에코거리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "오페라하우스~유네스코 아태교육원 일대 국제 문화예술 창작타운 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "청소 차고지 이전 → 생활체육•문화시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "신도림선상역사에 주민을 위한 커뮤니티 공간 설치 (예술공작소, 주민참여 문화센터, 아트 플리마켓)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "신도림 복합도서관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "영일초 국제학교",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "가리봉 고가 철거",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "가리봉시장 현대화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "측백나무 공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "가리봉 가족센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "도시재생사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "항공기 소음 대책 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "유수부지 체육시설 및 도서관 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "차량기지 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "구립 어린이집 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "구일역 하향 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "구로역 내부 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "주택가 공영주차장 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "구로시장 현대화 사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "주민 안전 확실히 보장! - CCTV, 골목길 가로등 증설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "서울형 혁신교육지구 사업으로 학력 신장-학급당 학생수 25명 이하로 완료 후, 가고 싶은 학교 만들기, 진로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "전국 최초 구로 전역 무료와이파이(WiFi)존 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "휴일포함 주52시간 이내 근로 의무화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "직업훈련지원확대 및 구직급여지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "정리해고 사유 제한, 재고용우선의무",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "고교무상교육, 초등학교 준비물",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "정부가 보육예산(누리과정)100%부담",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "현 월 통상임금 40%(50~100만원)에서 100%(70~150만원)로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "소득하위 70% 노인 전체 월20만원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "공공부문일자리 34만8천개",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "균형있는 국민경제의 성장 및 안정과 적정한 소득 분배 유지,",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "재벌편법상속 방지, 지배구조개선",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 17,
    "name": "금천구(이훈)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "주민센터를 복지·일자리 등 복합공간으로 확대 개편",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "금천구 열린 지역위원회 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "독산2동 시흥5동 주민센터 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "서울시민청 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "맞벌이 부부를 위한 육아공동체 지속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "저소득 산모 산후조리원 이용비 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "서서울미술관·다목적 종합체육관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "1인 가구 생활지원서비스시스템 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "장애인 작업센터 건립추진 및 고용확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "대학종합병원 유치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "범죄없는 마을 가꾸기·학부모 안전관리단 확대 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "주차난 해소를 위한 동네주차장 확대 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "독산분소 금하마을 주거환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "재개발·재건축 해제지역 주거환경개선 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "노후 경로당을 금천희망타운으로 전환",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "마을버스노선 개선 주민불편 해소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "금천 소방서 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "유통상가 현대화 사업추진 및 G밸리 연계",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "독산·시흥동 1종 일반주거지역 종변경 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "가산패션단지 관광특구 지정 기반 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "준공업 지역 환경 정비 산업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "경부선 지하화 지속 추지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "우시장 도축장 부지 개발 및 현대화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "석수역·시흥4거리역·독산역 역세권 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "공군부대 신속한 이전 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "금천구청~기아대교간·동서간 연계 도로개설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "디지털 3단2~두산길간 지하차도 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "경전철 난곡선 연장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "신안산선 조속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "금천 한울 문화예술정보학교 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "고교생 대학진로 및 진로교육 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "사회공헌 아카데미 교육 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "더불어사는 모두의 학교(평생학습관) 설립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "자기주도 학습을 위한 학습클리닉센터 설립 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "중소기업·소상공인 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "금천구 사회적 경제 2배 성장 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "지역맞춤형 일자리창출 지원사업 지속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "서남부(금천)창업센터 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "여성 일자리 교육 및 시간제 일자리 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "유통상가 현대화 사업추진 및 G밸리 연계",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "어르신 일자리 참여수당 20만원에서 월40만원으로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "0~5세 100% 국가 책임 보육·교육",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "서남부(금천)창업센터 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "초등부터 고교까지 실질적 무상의무 교육 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "더 좋은 청년 일자리 70만개 창출(공공부문 포함)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "어르신에게 기초연금 30만원(소득하위 70%)",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 18,
    "name": "노원구갑(고용진)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "상권활성화 주민 참여 프로그램 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "국공립어린이집 확충 예산 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "가계부채상담센터 유치로 금융복지 제공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "GTX연계 KTX 강북권 연장사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "나노․IT․에너지․바이오․메디컬 밸리 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "공릉동 행복주택건립계획 폐지 또는 변경 후 공원화 달성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "광운대역사 민자개발방식 전환",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "월계역에 동북선 경전철 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "기초연금 30만원으로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "일자리 70만개 창출 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "건강보험료 상한선 폐지 등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "소득 양극화 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "국회의원의 품격 있는 언어사용",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 20,
    "name": "노원구병(안철수 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "상계주공8단지 종상향을 통한 재건축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "청소년 문화의 집 (리더십센터) 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "동부간선도로 방음벽 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "외곽순환도로 북부구간 불공정 통행료 정상화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "창동차량기지 및 도봉면허시험장 부지를 서울의 새 중심지로 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "번듯한 상계동, 따뜻한 상계동을 만들어가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "더 품격 있는 교육·문화 그리고 건강을 선물하겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "교통 불편 해소, 뚜벅뚜벅 나아가겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "창동·상계를 경제문화의 중심지로 조성.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "당대표로서 국정공약은 국민의당 정책공약을 추진",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 19,
    "name": "노원구을(우원식 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "서울영어과학교육센터를천문우주과학관으로  전면리모델링(가칭서울우주학교",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "노원청소년직업체험센터",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "불암문화정보도서관",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "서울과학관",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "수학체험관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "5대 교육특구 사업 완성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "불암산성 복원 역사문화생태벨트 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "노원 구민회관 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "노원 센트럴파크 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "외곽순환고속도로 통행료 인하 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "KTX-GTX 의정부 연장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "중단없는 지하철 동북선 추진, 중전철 가능성 검토",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "지하철 동북선 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "창동차량기지 이전 부지 ‘지식형 R&D; 산업 및 복합상업‧업무 거점 단지’ 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "수도권 동북부 경제중심지 노원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "장애인 지원정책",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "고교무상교육",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "방과 후 돌봄 서비스 체계 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "중앙정부가 책임지는 보육(누리과정)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "육아휴직급여 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "실업급여 지급 기간 확대, 요건 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "취약 근로계층에 구직급여 지급 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "취업활동비 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "청년일자리 70만개 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "기초연금 30만원 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "건설근로자 적정임금제",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "지자체 생활임금제 확산",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "최저임금 10,000원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "카드수수료율 1% 인하",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "비정규직 정규직 전환 지원금 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "비정규직 사용 부담금",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "대중소기업 성과공유제",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "중소기업 적합업종 법제화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "‘징벌적 손해배상제’ 확대",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 21,
    "name": "도봉구갑(인재근 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "장애인복지관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "우이·신설 경전철 조기 준공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "쌍문동 주거환경개선을 위한 도시재생사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "쌍문역 둘리테마역사 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "쌍문역 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "쌍문역~우이제1교 전신주 지중화사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "쌍문근린공원 숲 체험장 조성 및 버스도서관 개관",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "쌍문근린공원 대공포이전부지 공원화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "쌍문3동 샛별어린이공원 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "쌍문3동 둘리테마거리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "쌍문1동 구립 쌍우경로당 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "쌍문1동 우이천 상류 산책로 연장 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "노인복지회관 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "중랑천 녹색브랜드화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "구립 도봉실버카페 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "신창시장 활성화 및 창동골목시장 고객지원센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "창5동 공원조성(창동초교 부근)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "창3동·창4동 주민센터 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "창2동 구립 경로당 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "창2동 청소년이용시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "우이3교 성능강화 및 재설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "초안산 둘레길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "창동역 KTX 노선연장 추진(수서~창동~의정부)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "창동역사 엘리베이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "50+캠퍼스 조성(인생이모작 센터)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "창업지원센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "사진박물관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "로봇박물관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "아레나공연장(2만석 규모) 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "동부간선도로 도봉구간 전면 지하화 완공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "창동상계 신경제중심지 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "창동역 민자역사 사업정상화 유도",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "국민연금기금의 채권투자 분 일부를 공공임대주택, 보육시설에 투자",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "6세미만 아동 독감예방접종비 국가지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "‘서비스산업발전기본법’, ‘의료법’을 통한 영리화 저지. 의료법 재개정 추진.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "노인학대방지와 처벌 및 지원에 관한 법안 제정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "최저임금을 1만원 수준으로 올림",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "건강보험부과체계를 소득 기준으로 개편",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "65세 이상 어르신들에게도 고용보험을 적용해 실업급여 혜택 부여",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "2020년까지 노인일자리 수를 현재 2배인 65만개로 늘리고 일자리 참여서당을 20만원에서 40만원으로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "재산 증여받은 자식의 부모 방치 또는 학대할 경우 증여 해제",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "2018년까지 단계적으로 소득하위70%어르신께 기초연금30만원으로 인상 균등지급",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 22,
    "name": "도봉구을(김선동)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "장애인복지관 차질없는 건립지원 및 접근성 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "어르신 일자리 창출 프로젝트 가동(도봉산 프로젝트 서비스 직종, 노인택배 지원사업 등)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "동아에코빌 APT 앞 주차장에 통행로 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "도깨비시장 동편 주차장 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "방학2동 1종, 2종지역 용적율 상향 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "한신A·중흥S클래스 쪽 철도 옆길 ＇인도＇ 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "도봉역~도봉산역 구간 ＇반터널식 방음벽＇으로 교체",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "도봉역·도봉산역에 ＇스크린도어＇ 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "도봉역·방학역에 에스컬레이터 및 엘리베이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "출퇴근길 불편해소를 위한 1호선 ＇도봉산역 종점＇ 연장 운행:현재의 광운대역, 창동역 종점을 도봉산역으로 연",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "도봉구민의 생활환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "교육1등자치구 재추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "한국청소년활동진흥원(KYMA) 도봉구 유치:도봉산 유스호스텔과 연계, 국제 청소년 교류의 메카로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "청소년·교육의 질적 향상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "우이·방학 경전철 사업→서울시 재정사업화로 해결:힘 있는 여당국회의원이어야 해결 가능",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "최고고도지구 규제 완화 강력 추진 →정책 대안 제시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "해묵은 지역현안 매듭",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "재래시장 활성화 및 소상공인 지원(소상공인시장진흥공단 진흥사업 적극 유치)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "상업지역 확대-방학동 로터리~농협(도봉점) 사거리, 도봉2동, 도봉역 일대, 쌍문2동 619번지 일대 검토",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "도봉서원 중건(예절교육관 추가 건립)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "성대야구장 부지 프로젝트(일명 김선동 프로젝트) 매듭",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "도봉산 프로젝트 역점 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "도봉경제 활성화·일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "도봉산 자락길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "도봉 아울렛 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "도봉산 레저타운 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "도봉산 ＇특급 유스호스텔＇ 유치",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 23,
    "name": "동대문구갑(안규백 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "청량리동 주민센터 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "주민친화공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "마을 공영주차장 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "주민체육시설 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "천장산 둘레길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "안전한 골목길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "마을 공원조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "회기로 문화의 거리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "용두문화복지센터 조속 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "혁신교육지구 선정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "전통시장 현대화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "동대문 관광벨트 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "분당선 청량리역 연결",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "동대문 복합문화체육센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "병사 월급 30만원으로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "청년취업지원금 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "청년일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "어르신 기초연금 30만원 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "100% 국가책임보육 실시",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 24,
    "name": "동대문구을(민병두 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "범죄예방 CCTV개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "답십리 복지장안LPG 충전소 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "구민회관, 구민체육센터 현대화사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "신세계 이마트 물류터미널 부지 주민 선호시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "배봉산 해·구름 테마생태공원 완공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "경전철 면목선, 새로운 민자방식으로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "GTX B, C노선 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "중앙선 2복선화사업으로 분당선 ‘왕십리역",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "고미술시장 및 촬영소거리 명소화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "황물시장 현대화사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "장한평 중고차시장 및 부품상가 일대 현대화사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "전농7구역 문화부지 내 시립 청소년 미디어센터 이전, 문화복합센터 조기 착공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "명문사학 인문계고교 전농7구역 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "아르바이트 체불 임금을 더 쉽게, 더 당당하게 찾을 수 있도록 관련법 개정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "학교폭력을 뿌리 뽑고 마음 편히 학교에 보낼 수 있는 환경 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "오랫동안 일 한 기간제 비정규직 노동자가 정규직이 될 수 있도록 기간제 갱신보장법 입법",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "대기업의 불공정한 행위 근절과 정의로운 시장경제 확립을 위해 징벌적 손해배상제도 및 집단소송제 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "상가임차원의 임차권 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "상가권리금 보호의 실효성 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "재산만 증여받고 부양의무 불이행 시 증여재산 회수",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 25,
    "name": "동작구갑(김병기)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "동작구민체육센터 시설개선 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "보라매 관악구클린센터 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "신대방 숲속도서관 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "‘스페이스 살림’ 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "도시재생사업과 연계한 마을공원 조성 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "신상도 지하차도 확장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "상도3동 공영주차장 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "빙수골, 성대골 주거환경관리사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "장승배기 종합행정타운 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "신노량진시장 재난위험시설(E급) 해소 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "노량진 글로벌 인재양성특구 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "한강 노들섬 ‘음악의 섬’ 성공적 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "복합문화센터 ‘스페이스 살림’ 설립 성공적 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "보라매 관악구클린센터 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "신림선·서부선·난곡선·신안산선의 차질 없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "장승배기 종합행정타운 강력 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "중소상공부(가칭)를 신설하여 동반성장 기반 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "단말기 완전자급제 도입 등 실질적 통신비 인하",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "육아휴직급여 월 통상임금의 40%에서 100%로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "모든 병원 간병서비스 제공 의무화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "100% 국가책임 0~5세 보육교육 실천",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "청년일자리 70만개와 최저임금 1만원 달성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "생활이 힘든 어르신께(소득하위 70%) 기초연금 30만원 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "국민연금 총 100조원을 공공장기임대주택 및 보육시설 확충에 투자",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "국가 CSR(기업의 사회적 책임) 전략 수립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "공권력의 무분별한 사찰과 개인정보수집 근절",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "국가정보원의 정상화",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 26,
    "name": "동작구을(나경원)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "국공립학교 체육장 개방을 통한 생활체육 활성화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "테마가 있는 둘레길",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "권역별 작은도서관 신설 적극 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "동작 문화예술관 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "거리예술 특화단지 조성으로 쓰레기 없는 골목환경 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "인성교육지원센터 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "흑석동 명문고 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "근거리 우선배정 원칙을 최우선으로 하는 학군 조정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "흑석 수변문화공간 조성, 흑석역 상권 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "숭실대입구역 강남상가 및 대학교 일대를 청년 창업취업거점으로 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "남성역 상권 활성화 방안 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "한국전력공사 남부지사 부지 개발 통한 사당동 랜드마크 건립, 상당역 상권활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "교육급여 수급자 확대 및 고교 무상교육 단계적 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "1인 기초생활수급가구당 1명의 법률홈닥터 배치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "임금체불 사업주 제재 강화 및 공공기관 인사청탁 근절 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "공공임대주택 기능 향상 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "평가소득 폐지, 최저보험료 도입 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "오픈프라이머리 도입, 석패율제 도입, 여성할당제 권고조항에서 의무조항으로 변경",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "정치혁신, 공천개혁",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 27,
    "name": "마포구갑(노웅래 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "도화동 유휴부지 공영주차장 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "용산성당 옆 도화소공원 리모델링, 재활용센터 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "염리공영주차장 이면도로·용강복합센터 보행로 전면 재단장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "용강시범아파트 체육공원 에코길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "태영아파트 지역난방 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "신수동 시내버스 노선신설 및 마을버스 노선 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "광흥창역 3,4번출구 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "광성고 운동장 활용 공영주차장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "공덕 봉제디자인센터, 공덕 1~2공영주차장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "환일고 주위 공영주차장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "동도중 옆 백범로 전면확장 및 보행로 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "한서 공영주차장부지 생명숲, 어린이집 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "염리동 주민복합편익센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "노고산동 고산길 언덕 원격 제설장비 설치추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "큰우물로, 독막로의 보행로·가로등 LED등으로 전면 교체",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "대흥역 1번,신촌역 6번 출구 에스컬레이터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "아현역~아현초 일대 포장마차 정비 후 문화디자인거리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "아현역 역사 전면 리모델링",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "공공시설에 엄마가 행복한 시간제 임시탁아시설 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "아현초 병설유치원 설립, 마포초·공덕초 병설유치원 학급 증설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "아동안전 위한 CCTV 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "유엔아동인권친화도시 지정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "아현초 급식실 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "에코스쿨 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "지역대학과 함께하는 글로벌캠프",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "움직이는 실험학교 공급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "미래형 교실 인프라 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "스쿨존 등하교시간 통행제한",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "자동인식형 스마트 스쿨존 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "명품주거 인프라 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "대흥역·만리재역·강변북로 진출입 램프 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "복합문화공연장 및 국제컨벤션센터 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "공덕 교육·문화·복지 복합타운 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "계층간 교육격차 완화 위한 대학등록금 세액공제 확대 및 ‘소득연계형 등록금제’ 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "학교폭력 예방 위한 심리상담 강화, 예방교육 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "고등학교까지 무상교육 의무화, 중·고교에 진로상담 전문교사 배치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "임신, 출산의 기본의료비 전액지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "연령별 국가필수예방접종 항목 확대 및 무상지원 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "어린이집 차액보험료 무상지원, 인구비례 국공립 보육시설 의무화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "아이키우기 좋은 나라, 국가의 무상보육 실현 위한 보육 및 유아교육 국가완전 책임제 (누리과정 대란 종결)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "전월세가격 안정위한 전월세 상한제 도입, 전월세지원센터 설치 및 지원근거 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "560만 자영업자 지원 강화를 위한 세제개편",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "생활임금제, 최저임금 1만원 및 비정규직 정규직 전환 대상과 지원금 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "청년수당 법제화와 5060 뉴스타트프로그램 재취업 및 세대융합형 창업지원 법",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "법인세 현실화와 대기업 사내유보금 과세 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "정당민주주의 강화 위한 정당법 개정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "정당법 개정으로 정당의 think tank 기능의 강화 및 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "부처공무원 산하기관 취업 시 심의 강화 (공직자 윤리법)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "공공기관의 전문성 심의 위한 인사추천위원회 권한 강화 통한 정권의 입김 최소화 (공공기관의 운영에 관한 법률",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "국무위원 겸직시 상임위 활동 제한 등 입법화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "국회활동 정지기간 2개월을 넘지 않도록 의무화",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 28,
    "name": "마포구을(손혜원)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "마포브랜드지원센터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "예술과 문화중심 마포, 일상문화마을 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "문화 한류중심 마포",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "관내 초·중·고등학교 첨단 스마트 교실화 사업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "지역 대학과 연계한 글로벌 영어캠프 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "각 동별 작은도서관 건립 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "어린이 안전교육 체험장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "도종환 시인 등 유명 저자들이 참여하는 문화강좌프로그램 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "마포중앙도서관 및 청소년교육센터 건립 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "관내 13개 초등학교 주변 보행환경 개선사업 차질없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "교육부 및 서울시교육청 특별교부금을 통한 관내 교육환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "상암중 교사증축 및 급식시설 개선 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "성서초, 성사중 체육관 건립 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "성원초, 중암중 체육관 건립 차질없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "주민들의 의사들 반영한 합정균형발전촉진지구 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "양화진 성지 관광명소 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "합정2구역 공공용지 시니어플라자 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "구 합정동청사에 노인복지시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "합정동 군부대 이전을 통한 문화예술공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "서강동 해모로아파트 후문 구립어린이집 건립지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "와우산 군부대 이전을 통한 예술공원 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "당인리발전소 내 구민체육센터 건립 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "서강대교 강변북로 진입로 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "어울마당로 확장 및 공영주차장 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "구 서교동청사에 예술문화센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "경의선 홍대입구역 책의 거리 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "홍대입구역 복합역사 건립 지원(지역상권",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "사천고가 경의선공원 연결구간 보행친화형 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "연남동 도시가스 단절구간 연결 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "연남동 주택가 공영주차장 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "망원동 일대 저렴한 지역난방 인프라 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "망원2동 홍제천 연결 보행통행로 개설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "망원2동 쌈지 노인복지회관 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "망원유수지~망원동펌프장 도로확장 및 주차장 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "망원1동 강변도로 주변 현대화된 체육타운 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "성미산 생태공원 조성사업 조속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "성산유수지 공원화사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "마포장애인종합복지관 확장 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "성산시영아파트 앞 공지 주민편의시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "성산시영아파트 지역난방 공급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "성산시영아파트 재건축 추진 적극 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "박영석 산악문화체험센터 건립 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "상암구시가지 상업지구 변경 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "향동천~노을공원 생태연결로 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "상암2지구 주민편의시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "주민 안전을 위한 CCTV 확대 설치 및 가로등·보안등 LED교체 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "지역주민과 시장상인회의 의견을 반영한 상암동 롯데쇼핑몰 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "당인리발전소 문화창작발전소 건립 및 공원화사업 차질없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "매봉산 석유비축기지 공원화사업 차질없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "노을공원 축구잔디구장 건립 차질없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "경의선 철도부지 공원화사업 차질없는 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "상암동 항공대 수색비행장 소음문제 영구 해결",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "서부지역 광역철도 조기착공 및 성산동역, 상암동역 설치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "장애인 소득보장, 주거지원, 건강지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "「중소기업 적합업종 보호 특별법」제정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "자영업자를 위한 상가건물 임대차 보호 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 56,
        "title": "전통시장과 골목상권에 대한 체계적인 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 57,
        "title": "\"청년안전망\"을 도입하여, 청년들의 생애 첫 일자리 구직활동 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 58,
        "title": "쉬운 해고를 제한하고 정리해고 요건 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 59,
        "title": "실노동 시간을 단축하여 일자리 11만8천개 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 60,
        "title": "국민연금 성년 가입지원 및 취업장려 가입제도 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 61,
        "title": "소액 장기연체 채권을 소각, 서민부담 경감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 62,
        "title": "공공임대 공급확대 및 임대시장선진화 등으로 주거안정 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 63,
        "title": "소득기준으로 ‘공평한 건강보험료 부과기준’마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 64,
        "title": "초등부터 고교까지 실질적 무상의무교육 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 65,
        "title": "국공립 어린이집을 전체의 30%까지 단계적으로 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 66,
        "title": "불효방지법으로 부모를 봉양하는 풍토 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 67,
        "title": "소득하위 70% 어르신에게 기초연금 30만원 차등없이 지급",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 29,
    "name": "서대문구갑(우상호 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "북아현동 다목적 문화복합센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "작은 도서관 확대, 청소년 문화의집 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "학교 체육시설 이용료 합리화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "경로당, 어르신 쉼터, 소규모 노인복지센터 등 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "여가와 사귐, 정보교류가 있는 주민자치센터:홍제1동, 홍제2동, 천연동, 신촌동 등 자치회관 신설 및 리모델",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "서울형 혁신 교육지원 혜택 지속",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "국공립어린이집 확대, 민간어린이집 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "화장실, 급식시설 등 낙후된 교육환경개선: 2016년 특별교부금 29억원 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "우리아이 통학로 안전 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "홍제천 보행환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "안산 자락길, 인왕산 산책로 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "사러가 쇼핑 인근 교통난 해소와 궁동산 환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "안산과 인왕산 등산로 연결로 늘어나는 서대문구 도심 숲길",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "북아현뉴타운 사업 재조정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "골목상권 활성화, 영천시장 시설개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "웨딩· 아현가구거리 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "연희동 특화거리 조성·지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "문화와 관광으로 살아나는 신촌, 상권 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "신촌역, 아현역, 서대문역, 홍제역 역세권 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "신촌 청년창작일터 설립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "일이 있어 행복한 노년, 노인 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "인생 후반전 준비를 위한 50, 60대 은퇴 지원센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "사회적기업, 사회적일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "전월세 주거비부담 완화 정책 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "반값등록금 현실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "이동통신 기본료 폐지",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 30,
    "name": "서대문구을(김영호 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "홍제천을 생태공원으로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "청년들의 스타트업 창업지원을 하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "서대문 지역에 신홍합밸리의 스타트업 회사들을 유치하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "서대문 지역에 청년 \"해외취업 알선을 위한 교육기관\"설립, 해외 취업의 창구 역할을 하여 청년 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "서대문 지하철 8km",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "<가좌역>을 세계적인 관광고 물류의 중심으로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "서대문 지역에 청년 \"해외취업 알선을 위한 교육기관\"을 설립, 해외 취업의 창구 역할을 하여 청년 일자리 창",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "보건소가 멀어 이용하기 힘든 저소득층 노인이 \"동녀병원을 무료로 이용\"할 수 있는 의료바우처 사업",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "경로당을 활용한 택배업체와의 협력, 노인 애견관리사 양성 등을 통해 \"생계형 노인 일자리\" 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "동네 경로당을 \"복지관 수준으로 만들어\" 어르신들의 건전하고 다양한 분화공간으로 개선·발전될 수 있도록 시설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "<초등학교 시설 현대화>를 위한 예산을 지속적으로 확대해 나가겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "서대문 관내의 초등학교들을 <혁신학교로 확대>해 가겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "홍은·홍제 권역에 <아동청소년 지원센터>를 설립하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "기존의 어린이 놀이터들을 안전 최우선의 <무장애 놀이터>로 리모델링 하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "각 동 단위로 엄마와 아이들이 함께 이용할 수 있는 <서대문 이동도서관>을 운영하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "남기좌1동에 설립될 <서대문 육아종합지원센터>에 부모교육, 육아품앗이, 시간제보육서비스 등 다양한 부모 커뮤",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "가재울 뉴타운 인근에 <서대문 어린이회관>을 짓겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "서대문을 어린이 친화도시로 만들겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "시민단체의 독립적 운영을 위한 소득세법 개정안",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 31,
    "name": "서초구갑(이혜훈)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "반포, 잠원에 노인종합복지관",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "전선 지중화, 이혜훈이 해내겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "정보사 부지, 녹지와 문화·컨벤션 시설 등으로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "K-Square 조성해 세계적 랜드마크로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "국공립어린이집 증설, 잠원동 고등학교 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "재건축, 구민이 원하는 대로 빠르게",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 32,
    "name": "서초구을(박성중)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "양재천은 자연생태하천으로, 주변거리를 걷고 싶은 카페거리로 조성하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "청계산을 친환경 허브공원으로 만들겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "우면 보금자리 지구내 사회·문화 복지시설을 확충하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "화물터미널(파이시티) 현대화 사업에 박차를 가하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "서초구민회관을 현대화 빌딩으로 신축하고 인큐베이터 오피스로 운영하여 청년창업을 적극 지원하고 뮤지컬 전용극장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "양재천 위에 복합대형 문화·스포츠 센터를 건립하는 공원을 만들겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "서초3동 주민센터를 최고의 문화·복지 복합센터로 짓겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "남부터미널 현대화 작업 및 복합 개발하고, 롯데칠성부지에 랜드마크 국제 비즈니스호텔을 세우겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "강남역 일대 대수로를 점검하여 침수지역을 완전 해소하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "인큐베이터 빌딩을 운영하여 청년창업을 적극 지원하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "우면산을 더욱 안전하게 주민 친환경 허브공원으로 만들겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "정보사부지의 박물관, 미술관을 유치하는 복합문화센터를 건립하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "예술의 전당 일대에 한류문화와 예술이 살아 숨쉬는 공연거리를 조성하여 세계적인 예술인의 관광특구를 만들겠습니",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "경부고속도로 지상공원에 문화광장을 조성하여 서초를 세계적인 명품 도시의 메카로 발전시키겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "백석대학과 연계한 인큐베이터 빌딩을 운영하여 청년창업을 적극 지원하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "방배근린공원과 우면산을 잇는 에코브릿지형 제2의 누에다리를 건설하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "성뒤마을의 신개념 맞춤형 글로벌 타운을 조성하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "방배3동 전북장학숙 앞 구유지를 종합행정타운으로 갭라하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "재건축, 재개발의 기간단축과 용적률 향상 및 층수완화로 주민의 이익을 극대화하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "방배 복개천을 자연생태하천으로 복원하고 수변공원 및 문화의 거리를 조성하여 지역 상권을 살리고 일대를 문화의",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 33,
    "name": "성북구갑(유승희 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "배드민턴 전용구장 설치 (20억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "한양도성 주변 환경 개선 및 유네스토 등재 정릉 세계문화유산길 조성 및 성북구민 정릉입장료 무료화 (2억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "한성대입구역 문화복합연극센터 건립 (300억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "길음동 시청자미디어센터, 문화복합미디어센터(수영장 등) 건립 완공 (200억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "신혼부부용 임대 주택 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "청년 창업 지원을 위한 도전숙 확대 (29억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "청소년, 청년 알바 피해신고센터 활성화 (3억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "청년 주거 안전을 위한 공공주택 지원 및 신혼부부용 임대 주택 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "성북동 복자교 철거 및 재복원 (5억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "장애인 안전한 보행권 확보 (5억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "보행환경개선 (정릉천,성북천 산책로정비) (5억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "지하철 4호선 전면 안전점검 및 노후차량 교체내부순환로 소음저감 대책마련 (200억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "관내 대학과 연계한 혁신 교육지구 정착성북구 장애인 평생교육센터 설립 (5억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "마을도서관 확충(1동 1도서관 사업) (15억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "중고등학교 통학 편의 제공안전한 통학로 조성 (22억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "어르신 쉼터, 경로당 설치 (2억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "성북구의 기초연금 수급 어르신을 현 55%에서 70%로 확대장애",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "어르신을 위한 교통 편의시설(엘리베이터, 에스컬레이터)확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "경로당 도우미 기간 연장 (1억 8천)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "어르신을 위한 주민 목욕탕(반값 목욕탕 운영 등) (50억원)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "전통시장 활성화를 통한 지역경제 발전과 전통시장 길 정비 (20억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "보문동 영세 봉제업자 작업환경 개선 (20억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "경전철 개통과 연계한 역세권 활성화대학가 캠퍼스타운 조성 (40억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "성북지역 노인, 청년 일자리 창출위원회 설립 (6억)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "사학의 투명성 공공성 확보 위한 사학법 개정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "대학생 국가장학금 제도의 형평성증대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "역사교과서 국정화 철회",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "학교마다 상담교사 단계적 배치 (연간 10억원)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "고등학교 국가 의무교육 (1.5조)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "대학등록금 세액공제 및 환급 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "국공립어린이집 단계적 30% 확대 (0.25조)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "국가책임 보육 (4조원)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "아르바이트 피해 신고센터 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "차상위계층 근로 복지 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "가족간호 휴직 및 휴식제도 신설 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "중증장애인 활동 돌봄시간 지원 확대 (0.3조)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "4대 중증진료비 국가부담 및 의료보험 혜택 확대 (연간 1조)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "어르신보청기 국가지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "소득하위 70% 기초연금 30만원으로 인상 (5.8조)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "육아휴직 급여 대폭 인상 (1.6조)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "행정독재 권한남발 견제 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "명예훼손 비형사범죄화 및 친고죄화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "방송통신심의위원회의 방송 및 통신심의의 공정성 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "의회민주주의와 삼권분립 수호",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "영장없는 감청, 통신자료, 인터넷이용자료 제공 금지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "테러방지법 독소조항 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "노동자간 임금격차 축소재벌대기업 조세감면 개선으로 국가재정 확충재벌대기업 계열 비상장기업 평가기준 강화원주민",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "대기업과 중소기업간 임금격차 축소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "기업소득 증대 비례 가계소득도 증대",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 34,
    "name": "성북구을(기동민)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "청소년 휴카페 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "월곡 폐기물처리시설 지하화 및 지상부 복합건물 건설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "전통시장 지원 및 지역특화거리 조성을 통한 지역상권 활성화 모색",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "지식산업클러스터 조성 및 지역성장기반 구축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "월계로 개선을 통한 동서간 교통체계 개선 모색",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "동북선 신규 역세권 중심기능 제고",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "제3기 서울도시철도 동북선 조기 착공 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "석계역 박스파크 조성 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "동부간선도로 지하화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "홍릉 바이오·의료R&D; 거점 조성 및 확산",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "도시철도 동북선 조기착공 추진",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 35,
    "name": "송파구갑(박인숙 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "방이습지 보존 및 운동장 부지 공원화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "신천유수지 내 도서관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "올림픽 하부도로 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "삼표레미콘 조기 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "항공소음 피해 최소화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "방범용 CCTV 설치 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "지하철 9호선 조기개통 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "학교시설환경 지속 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "몽촌토성 탐방로 재포장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "풍납토성 보상가 현실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "치안과 국민안전을 도모하는 직업군에 대한 복지,근무조건 등 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "사회적 비용이 막대한 음주운전을 근절하기 위한 법제도 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "ICT를 기반으로 과학기술 혁신의 중심에 보건의료와 생명공학을 둠",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "건전한 청소년 문화를 선도하기 위해 각종 교육프로그램 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "보육과 가사 등의 부담으로 경력이 단절된 여성이 유능한 자원이 될 수 있도록 재교육, 취업지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "저출산 극복과 안정적 보육의 질 강화를 위해 국공립 어린이집 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "의료수가 적정화 및 의료인력 양성체계에 대한 제도개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "면세점 특허기간을 10년으로 재연장하는 관세법 개정안을 통과시켜 일자리를 보장하고 지역상권 연계발전 도모",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 37,
    "name": "송파구병(남인순)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "위례신도시 공원 유아놀이시설 설치지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "거여고등학교 신설 차질 없이 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "서울 동남권~과천 동서철도 계획 관철",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "위례신도시 문화시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "특전사 진입로 활용 임시도로 개설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "위례동 파출소 및 우체국 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "분당~수서 고속도로 연결 IC 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "남한산성 등산로 및 편의시설 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "군부대 이전 및 위례서로 조기개통 촉진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "마천역 1번 출구 엘리베이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "송파파크데일(아) 초등학교 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "주거 취약계층 주거복지 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "뉴타운 해제지역 ‘공동체만들기’지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "뉴타운 재개발 주민 뜻대로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "장지동 장지천 산책로 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "문정동 136번지 단독주택 재건축 촉진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "문정동 보호수 주변 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "문정동 로데오상점가 활성화 및 관광명소화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "송파파인타운 유휴지에 체육문화복합시설 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "장지역 건영아파트방향 출입구 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "오금동 143번지 단독주택 재건축 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "오금역 역세권 경제활성화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "상가밀집지역 전선 지중화사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "개롱공원 생태놀이터 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "성동구치소 이적지 복합문화센터 및 시민공유공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "오금공원 재조성사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "중앙전파관리소 이전위한 법개정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "반려동물 놀이터 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "복지관, 곰두리체육관, 청소년수련관, 체육문화회관 등 시설환경개선 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "공유사회기반 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "서울공항 비행기소음 저감대책 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "서울외곽순환 고속도로 방음대책 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "생활체육 시설 확충 및 다목적 기능 보강",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "교육혁신지구 송파 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "장애인활동지원 서비스 24시간 이용 보장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "여성장애인 출산편의 증진 및 모성권 보호",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "발달장애인 생애주기별 맞춤형 서비스 제공, 지원센터 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "장애인연금 인상 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "장애인 등급제 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "장애인 주치의 제도 도입 및 내실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "경로당 운영지원 및 노인대학 지원 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "송파어르신 공동작업장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "노인일자리 확충 및 수당 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "간호간병 통합서비스 대상 병원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "어르신 기초연금 30만원으로 인상 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "활력 있는 노화 촉진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "국회 100세시대 특별위원회 구성 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "송파돌봄종사자 지원센터 설치운영 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "스토킹.데이트폭력 처벌 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "몰래카메라 범죄 처벌 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "여성경력단절 예방 및 재취업 지원 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "아이돌봄 서비스 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "배우자 출산휴가 기간 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "육아휴직급여 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "청년 주거지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "생애최초 국민연금보험료 정부 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 56,
        "title": "교육비 부담 경감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 57,
        "title": "청년 사회안전망 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 58,
        "title": "청년 취업 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 59,
        "title": "식품완전표시제 등 먹거리 안전 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 60,
        "title": "학교 교육여건 개선, 교육혁신지구 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 61,
        "title": "어린이안전교육 강화 및 체험학습 내실화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 62,
        "title": "방과후 아동돌봄 사각지대 해소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 63,
        "title": "아동학대 예방 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 64,
        "title": "100% 국가책임보육 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 65,
        "title": "보육교사 처우개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 66,
        "title": "일본군위안부 명예회복 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 67,
        "title": "테러방지법 개정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 68,
        "title": "항일독립유공자 유족 처우제도 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 69,
        "title": "역사교과서국정화 바로잡기",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 70,
        "title": "민주시민교육법 제정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 71,
        "title": "국민연금 공공투자 확대로 복지인프라(임대주택, 보육시설 등) 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 72,
        "title": "불평등한 건강보험료 부과체계 소득중심으로 개편",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 73,
        "title": "소상공인과 영세자영업자 배려와 지원 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 74,
        "title": "동네 병의원 등 1차 의료 살리기 및 서민의료비 절감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 75,
        "title": "부동산중개업, 약국, 미용업 등 대기업법인 진출 금지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 76,
        "title": "사회경제적 기업 육성 및 판로 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 77,
        "title": "비정규직 정규직 전환 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 78,
        "title": "최저임금 상향 조정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 79,
        "title": "생활임금제 확산",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 80,
        "title": "청년.여성.노인.장애인 좋은 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 81,
        "title": "대통령직속 불평등해소위원회 설치추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 82,
        "title": "위례동 복합청사 조기 건립",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 36,
    "name": "송파구을(최명길)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "송파 명품 올레길 조성으로 관광 명소화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "잠실5단지 재건축사업 적극 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "지하철 9호선 3단계 구간 조기 개통",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "노후 신천역사 리모델링 및 신천동 먹자골목 특화거리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "올림픽훼미리아파트 동남로 지하화 및 지상공원화, 항공소음 저감 대책 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "잠실운동장 공원에 K-팝 상설공연장 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "잠실운동장 일대 국제교류복합지구 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "탄천을 송파구민의 품으로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "100% 국가책임 무상보육(누리과정) 실천",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "청년일자리 70만개 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "육아휴직 급여 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "차등 없는 기초연금 30만원 지급",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 38,
    "name": "양천구갑(황희)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "행정이 바뀌어야 성장도 가능 - 정부행정조직 개편이 필요",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "고부가가치 중심 산업으로 새로운 성장동력의 재구성 추진-토목.건축 시공 중심에서 도시재생과 엔지니어링 중심으",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "중산층이 강한 나라 - 새로운 중산층 개념으로 재구성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "목2,3,4동 명품주택단지 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "‘목동 신재생타운법’ 입법추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "당장 시급한 주차난 해소-아파트단지 주변 공원 등 공공부지에 지하공용주차장 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "양천구청역 GTX(수도권 광역 급행 철도) 유치 추진 - 서울역까지 8분!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "트램(노면전차) 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "청년부채 해소를 위한 ‘취업후 장기상환제도’ 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "제대 군인의 사회 연착륙을 위한 ‘사병 제대퇴직금 1000만원 지급’ 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "주거문제, 공공할인요금, 등록금, 취업준비 등을 위한 ‘청년 바우처제도’ 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "독서방, 북카페 확대설치, 지역 멘토링 기능을 위한 ‘취업준비생 센터’ 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "목동 도시형 공장부지(홈플러스옆 구유지)에 IT 벤처타워를 설립해 지역경제 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "복지사각지대 해소 위해 민간과 공공이 연계한 복지시스템 구축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "목동운동장과 목동유수지를 활용한 서남권 문화복합스포츠타운 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "어르신 일자리 공공부문 5% 고용의무화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "어르신 취업상담과 교육, 문화체육시설 및 휴식공간을 겸비한 복합실버복지센터 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "양천도서관 증축, 목동청소년수련관 확충 및 리모델링",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "1동 1작은도서관 설립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "아이와 여성이 안전한 안심 밤길 구축-CCTV, LED시설, 방범망 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "지역 거점별 교육허브센터 설치-자기주도학습, 학부모지원, 멘토링, 도서관 기능을 결합",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "학교 환경 개선-노후교실 석면닥트 제거, LED조명 . 냉난방 지원 확대, 화장실 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "우수한 강사진 유치를 통한 방과후 학교 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "초등학생 돌봄 기능 확대를 위한 야간 돌봄 교실 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "마을 공동 아이돌보미 센터(마더센터) 거점별 설치",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 39,
    "name": "양천구을(김용태 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "군 장병들 1인 1자격증 취득 지원 법률 만들겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "국산차보다 외제차에 유리한 보험료 뜯어 고치겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "우리 자식들 착취하는 ‘열정페이’ 를 근절하겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "서부트럭터미널 부지에 도시첨단물류단지 유치, 서울시와 끝장 보겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "학교 시설 개선, 현대식 변기로 전면 교체해 내겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "광역철도 원종-신월-홍대 노선 돌파해 내겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "신정역 에스컬레이터 추가 설치 마무리 짓겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "신정네거리역 2번 에스컬레이터 마무리 짓겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "주민지원사업 확대 마무리 짓겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "생태공원·상업지구개발 마무리 짓겠습니다",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "신정동 로데오거리를 외국인 특화 쇼핑·문화단지로 탈바꿈 시키겠습니다.",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 40,
    "name": "영등포구갑(김영주 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "영등포동 시니어복지센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "영등포시장-영등포시장역 지하연결로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "영등포 뉴타운과 연계, 서남권 전통상권 회복",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "영등포동 5가 녹지공원 2곳 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "양평 6가 안양천 접근로 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "제물포길 지하터널 공사와 연계, 선유고가 철거",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "선유로(삼익, 현대2차, 현대6차, 거성아파트, 선유중, 선유고)노선 시내버스 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "양평로 5-6가 양평가로공원(1500m2) 리모델링을 통한 지역 명소화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "경찰청 직장어린이집 지역주민 이용 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "기존 양평 2동 주민센터 복지문화전용공간으로 활용 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "선유도역 부근 역세권 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "양평역 캐노피 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "준공업지역 단계별 해제 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "양평유수지 생태체육공원(천연 잔디구장) 조기 착공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "나쁜 카페 골목 서울시 공공지원으로 재생 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "당산문화복지센터 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "구민회관 주차장 주변 정비를 통한 보행환경개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "영중로 보행친화구역으로 지정, 보행환경 개선 및 지역상권 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "제물포길에 안양천-한강을 연결하는 친환경 가로공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "영등포구청역 부근 먹자골목 특화거리로 육성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "상아, 현대아파트 기부채납지에 국공립어린이집 및   글로벌 청소년센터 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "지하철 2호선 지상구간 및 당산역 지중화 마스터플랜 수립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "한강 샛강공원 연결다리 완공 및 여의도 국회의사당 연장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "당산역 부근(당산동 6가) 역세권 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "공항버스 노선 연장(도림사거리, 문래동 경유)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "영일시장 현대화 조기 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "문래역 6번 출구 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "공공용지 서남권 복합문화센터 건립추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "신도림역 철도 소음 저감 대책 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "공항버스 노선 연장(도림사거리, 문래동 경유)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "상상어린이공원 부지 지하 공공주차장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "도림 유수지 배드민턴 전용체육관 조기 착공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "동주민센터 이전 및 신축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "신안산선 건설과 연계 지하 문화공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "구립 신길 특성화 도서관 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "신안산선 영등포역 푸르지오 후문 출입구 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "영등포역 노숙자 문제 해결 방안 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "주민복지문화전용공간 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "노후공장, 쪽방촌, 집창촌 등 재생 장애요인 재생 활성화 유도",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "63빌딩 면세점, 영등포 전통시장, 양화 지구를 잇는 관광벨트 조성으로 관광객 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "영등포 중앙시장, 양남시장 등 시설물 현대화 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "학교별 실내공기질 측정, 미세먼지 등을 막을 수 있는 시스템 구축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "절감된 운영비로 여름에는 시원하고 겨울에는 따뜻한 학교 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "학교별 조도(Lux) 조사 통해 우선 학교 선정 등 LED교체 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "학교내 1급 발암물질 PVC 물품 친환경 소재로 교체 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "여학생 교실 우선 교체 후 점진적으로 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "75세 이상 어르신부터 우선 실시, 점진적으로 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "권역별 1개소 이상 확대 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "아파트 열린 녹지 조성(담장 허물기, 자투리땅 공원 조성)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "임기 내 영등포 악취·소음 제로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "제물포길, 서부간선도로 지하화 조기 준공, 신안산선 조기 착공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "타 지역과 용도 교환 통해 미래형 복합문화도시로 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "남성 배우자 출산 유급휴가 기간 확대 및 육아휴직 급여 인상 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "몰래카메라, 스토킹, 데이트 폭력 등 처벌 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "보육예산 전액 국고 부담 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "전국적으로 매년 국공립 어린이집 약 560개 확충 추진(국공립 이용 아동 수용률 30%로 증가 목표)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 56,
        "title": "의무고용율 상향, 표준사업장 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 57,
        "title": "취업활동 지원금으로 청년 구직활동 지원 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 58,
        "title": "질 낮은 일자리 비정규직 양산하는 노동법 개악 저지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 59,
        "title": "실노동시간 단축, 대기업 청년 고용할당제 도입 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 60,
        "title": "공공부문 청년의무고용할당제 도입 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 61,
        "title": "소득 하위 어르신 70%에게 월 30만 원씩 차등 없이 지급 추진",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 41,
    "name": "영등포구을(신경민 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "영등포 제2육아종합지원센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "영등포 홈케어 센터 구축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "중소기업청 ‘전통시장(문화관광형",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "대림동 상생을 위한 장기발전계획 수립과 ‘서남권 민관협의체’ 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "대림동 치안파수꾼 영등포경찰서 다목적 기동순찰대 운영예산 추가 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "2호선 지하화 연구용역 타당성 확보시 지하화 조기 추진 촉구",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "대림동 거주 안전을 위한 도시관리계획 재정비와 BYC부지 포함한 구로디지털단지 역세권 개발사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "대림동 고등학교 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "방송통신대 대림학습관에 평생교육프로그램, 주민편익시설 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "서울교육청 창의인성교육센터 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "대림3유수지에 문화체육센터 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "대림동 남부도로사업소 부지에 광역 랜드마크 건설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "신길동 지역 도서관 조기 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "신길동 중학교 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "신길7동 우주마루 앞에서 대방지하차도 방향 좌회전 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "병무청 부지 호국공원 조성 및 지하주차장 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "신길동 뉴타운 해제 지역의 용도지역 재정비 및 대안 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "신길동 경유 신안산선, 신림선, 1호선 출구 조정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "신길동 밤동산 지역 노들길, 올림픽대로 덮개 설치 및 상부 공간 활용 연구 용역 실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "신길동 역세권 유기적 개발 사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "여의동로 교차로 비보호 겸용 좌회전 허용 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "봄꽃, 불꽃 축제 주민 안심 귀가길 지정 및 비상, 응급차량 통행로 추가 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "지하철 9호선 증차로 여의도 경유역사 출퇴근길 혼잡도 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "아파트 관리비 절감위한 영등포 아파트 관리지원센터 설립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "도심공항터미널 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "여의도 증권거래소 부산이전법(자본시장법 개정안) 대안 발의",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "여의도 금융중심지 활성화법 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "여의도 한강관광자원화사업 조기완료 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "여의도 단지별 Master Plan 수립해 여의도 재정비 민관 협의체 구성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "여의도 특별건축구역 지정으로 재건축·리모델링 관련 규제 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "배우자 출산 휴가기간 확대, 육아휴직 급여 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "초등학교 완전의무교육 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "국가책임보육 실현으로 보육대란 해결",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "청년안전망 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "구직자 권익 신장 위한 채용절차 공정화법 개정안 발의",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "경로당 지원확대 및 실버문화체육시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "불효자 방지법 제정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "어르신 기초연금 30만원 지급",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 42,
    "name": "용산구(진영 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "오산고 학교 환경개선 및  학생식당․도서실 신증축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "장문로 간판 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "뉴타운 조속 추진 및 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "신동아아파트 구조안전진단",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "서빙고 고가 옆 인도 확장",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "국립 민속박물관 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "뉴타운지역 공가․치안․도로 문제 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "회나무로 21길 노후 도로정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "이태원로 27라길, 이태원로 15길 주변 하수관로 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "이태원 어린이공원을 창의 어린이공원으로 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "이태원로 179~녹사평대로 132 하수관로 개량",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "베트남 퀴논거리 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "동주민센터 내 이동진료소 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "이촌고가차도 시설물 보수․보강",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "태양광 가로등 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "중산아파트 우측 한강공원 연결 보행육교 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "한강변 자연녹지 조성 (이촌1․2동 공통)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "이촌역 4번 출구 에스컬레이터 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "중대병원 부지 종합병원 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "한강로 재해예방사업 완료",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "용문 전통시장 활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "새창로 126~원효로 48길 하수로 보수 보강",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "백범로 260번지 일대 보행자 안전을 위한 도로펜스 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "임정로 13, 효창원로 79 CCTV 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "효창공원 재정비 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "효창원로 151~157 하수관로 개량",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "새창고개 및 효창역 경의선 숲길 공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "3012번 버스 산호아파트 경유",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "산천동 마을마당 보수정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "재개발․재건축 더딘 지역 도시재생사업 추진(원효로 1․2동 공통)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "남정초 앞 보행환경개선사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "새창로 126길~원효로 48길 하수로 보수 보강",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "서계․청파동 도시개발 조속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "수도여고 부지 서울시 교육청 이전 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "숙대입구역 1․2번 출구 에스컬레이터 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "한강로~청파로 굴다리 확장사업 추진(남영․청파동 공통)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "남영역 문배동 방향 출입구 신설(남영·원효로1동 공통)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "용산중․고 학교 환경개선 및 에코스쿨 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "신흥로 89~152 도로환경개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "신흥시장 전통시장 지정 및 환경개선사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "해방촌 도시재생사업 추진 및 가로등 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "남산 고도제한구역 내 도시재생사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "후암 전통시장 골목형 시장 육성사업 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "후암 특별계획구역 재개발·재건축 조속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "보광 변전소 및 철탑 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "대사관로 전선 지중화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "해방촌․전자상가․원효로․후암동․ 서울역 일대 도시재생사업 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "국제업무지구 사업 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "이태원․한남동 주변 주차난 해소를 위한 대형 공영주차장 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "범죄 없는 안전한 마을 조성을 위한 각 동 CCTV 및 기초소방시설 보강",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "문화융합 복합공간 (국립극단 부지) 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "강변북로 지하화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "신안산선 만리재역 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "신분당선 이촌역 경유 확정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "용산공원 접근성 향상을 위한 도로 기반시설 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "남산․용산공원․한강으로 이어지는 생태환경 보전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 56,
        "title": "용산공원을 세계적 생태공원으로 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 57,
        "title": "사회적기업 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 58,
        "title": "전자상가 스타트업 기업 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 59,
        "title": "앤틱가구거리 상권 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 60,
        "title": "이태원관광특구 상권 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 61,
        "title": "관내 초중고 학교 유휴 공간 내 구민 평생교육을 위한 커뮤니티 공간 확보",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 62,
        "title": "전통문화체험관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 63,
        "title": "작은 도서관․북카페 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 64,
        "title": "어린이 청소년 종합타운 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 65,
        "title": "청년일자리 창출을 위한 숙명여대 공공데이터 청년일자리 지원센터 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 66,
        "title": "주민 복지시설 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 67,
        "title": "복지 사각지대 해소를 위한 드림스타트센터 설립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 68,
        "title": "어르신․장애인 편의시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 69,
        "title": "국공립 어린이집 추가 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 70,
        "title": "공공 산후조리원 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 71,
        "title": "(가칭)‘미래 100년을 위한 서울중심 만들기 시민 포럼’ 구성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 72,
        "title": "학생식당․도서실 신증축",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 43,
    "name": "은평구갑(박주민)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "주민참여형 주거환경정비사업 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "경로당 확대, 국립보육시설 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "초,중,고 급식시설, 화장실, 체육시설 환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "수색공영차고지,재활용센터 개발 및 ＇종합체육문화시설＇ 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "수색변전소 지중화와 상업-주거-종합문화체육공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "부천~DMC역~홍대입구 복선전철 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "신분당선 연장(용산~은평~삼송), 광역급행철도(GTX-A, 일산킨텍스~은평~강남)신설 및 2개 노선 선로 공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "서부선 경전철(새절~서울대입구) 조기 착공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "은평세무서 신설 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "어린이복합문화공간(서울혁신파크 내) 건립 완료",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "은평등기소 부지에 \"(가칭)은평구민회관\"유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "신사공공도서관 건립 완료",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "응암-신사 지구단위계획 정비, 상업구역 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "\"서울혁신파크\"에 호텔-아케이드 조기 착공,서울기록원 건립 완료",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "수색역세권을 디지털미디어산업.교통.문화 중심지로 육성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "\"공공갈등관리기본법\" 제정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "\"공직선거법\"개정으로 독일식 정당명부제 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "더 넓은 집회·시위의 자유의 보장하는 \"집회및시위에관한법률\" 개정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "\"정보공개투명화법 (Sunshine Act)\" 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "\"조약체결절차법\"",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "자치경찰제 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "고위공직자의 비리행위에 대해 수사·기소를 전담하는 \"고위공직자 비리수사처법\"발의로 경찰·검찰 권력을 축소등",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "\"국정감사 및 조사에 관한 법률\" 개정",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 44,
    "name": "은평구을(강병원)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "북한산 큰 숲 문학파크 내 신분당선역(신도중) 유치 및 역세권 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "신분당선, GTX 노선공유 및 조기 착공 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "자영업자에게 혜택과 활력을 줄 수 있는 의제매입세액 한도 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "구파발역 신상권 지역주민 우선고용제 확대실시",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "은평 5대 경제권역 전략 수립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "마을공동체 활성화 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "북한산 숲체험관 및 휴양림 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "주택난 해소로 청년을 은평으로! 더불어 사는 협동조합주택 지원방안 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "마을도서관을 넘어, 도시재생사업과 함께 \"골목도서관\" 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "청소년 문화센터 건립(박석고개)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "은평 교육의 새로운 바람을 일으킬 혁신학교 확대 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "아이들의 창의성을 높일 수 있는 에듀테인먼트 공간 \"키자니아\" 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "초등학교 학급과밀화 해소를 위한 학교증설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "은평뉴타운 실개천 산책로를 창릉천까지 연결하고, 항상 맑은 물이 흐르도록",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "\"은평 어르신 건강 순찰대\"를 통해 노인일자리와 안전을 동시에 달성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "불광역에 장난감 공유`대여센터 \"장난감나라\" 설치 및 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "친환경 구립어린이집 설치 및 친환경 무상급식 지속 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "\"공공 산후조리원, 공공 보육시설\" 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "\"칼퇴근법\" 도입을 통해 휴일 포함 1주 53시간 이내 근로 법정화, 근로시간 특례업종 축소 및 4인 이하",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "경력단절여성 지원 확대 및 중년여성 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "소득하위 70% 기초연금 30만원 차등없이 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "사병 월급 30만원까지 인상 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "청년일자리 70만개와 청년안전망 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "쉬운 해고 제한 강화, 부당한 해고 방지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "동일노동-동일임금 실현을 위한 차별금지법",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 45,
    "name": "종로구(정세균 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "숭인2동 구립어린이집 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "창신2동 청소년문화의집, 도서관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "창신숭인 거주자우선 공영주차장 확충, 창신역 엘리베이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "창신2동 진입로 좌회전 신호 부활",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "오토바이 전용주차공간 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "종로5가역 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "율곡로 지하차도 조기 완공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "돈의동 쪽방촌 생활환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "견지동 역사문화관광지구 조성사업 조기 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "혜화역 에스컬레이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "낙산공원 이화마을 가로수길 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "서울연극센터 리모델링 등 공연예술의 메카 대학로 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "명륜동 공영주차장 및 도서관 건립, 도시경관 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "교남파출소 신축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "독립문역 엘리베이터 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "인왕산~안산 연결 생태통로 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "교남․행촌 성곽마을 공동체 활성화 및 도시농업 선도지역 육성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "세종대왕 생가터 복원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "누하동․옥인동․체부동 공영주차장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "수성동계곡 공영화장실 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "서부지역 복지관 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "원서공원 내 게이트볼 전용구장 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "미대사관 숙소부지 관광버스 전용주차장 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "삼청테니스장 지하 주차장 신설 등 주민 주차공간 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "세검육교 앞 좌회전 신호체계 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "국민은행 평창지점 앞 하천 친환경 복개, 거주자우선 주차공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "신영저류조 부지 어린이·체육공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "홍제천을 생태하천으로 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "부암어린이집 신축 이전",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "비과세 재산비중 50%이상 자치단체(종로구) 정부지원 법제화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "안전하고 편리한 보행환경 및 교통체계 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "전선 지중화 및 거주자우선 주차공간 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "불합리한 지구단위계획 피해 대책 마련",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "문화재 ‘발굴 공영제’ 시행",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "도시재생 및 마을공동체사업 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "세검정․부암․평창․구기 지역 지하철 시대 개막",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "종로구 문화지구 및 문화축제 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "전통 예술문화 체험공간 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "동네마다 ‘작은 박물관’ 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "종로구 역사문화 유산 발굴, 복원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "문화가 꽃피는 Art City 종로 구현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "동네마다 ‘작은 도서관’ 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "아이들이 꿈을 키우는 종로",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "편안한 통학길 만들기",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "건강하고 안전한 학교 만들기",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "다문화가족 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "장애인 자립기반 지원 강화 및 사회참여 보장 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "종로구민 건강지수 쑥쑥! 보건 및 생활체육 시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "엄마와 아이 모두가 행복한 보육환경 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "효행문화 중심지 종로, 어르신 문화공동체 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 50,
        "title": "어르신 일자리, 복지기반 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 51,
        "title": "종로구 사회적 경제 활성화로 ‘종로 4만불’ 시대 구현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 52,
        "title": "신바람 나는 골목상권 만들기",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 53,
        "title": "전통시장 특성화, 현대화를 통한 문화관광형 상권 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 54,
        "title": "종로 귀금속 보석산업 육성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 55,
        "title": "창신숭인 ‘밀라노 프로젝트’ 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 56,
        "title": "공공 돌봄 서비스 일자리 확대 및 보육교사 처우 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 57,
        "title": "경로당 식료품 및 유류비 지원 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 58,
        "title": "세계유산 보존 및 주변지역 정비 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 59,
        "title": "청년의 희망을 디자인하는 대한민국",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 60,
        "title": "마이너스에서 마이더스로, 자영업자 경쟁력 제고",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 61,
        "title": "중소 상공인 보호를 위한 생계형 서비스 적합업종 지정 법제화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 62,
        "title": "어르신 기초연금 30만원으로 인상 (소득하위 70%)",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 46,
    "name": "중구/성동구갑(홍익표)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "글로벌 패션멀티쇼룸 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "소월아트홀 신축 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "마장동 (마장축산물시장)의 도시재생 활성화 지역 지정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "왕십리 뉴타운 지역내 중학교 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "삼표레미콘 부지 복합문화 공간 신축 및 서울숲 인근지역 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "날짜 상징성이 덜한 어린이날, 혀눙일, 한글날 등을 월요일로 지정하여 3일 연휴 보장하는 법률 제정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "일본 제국주의의 식민통치 및 침략전쟁등을 부정하는 개인 또는 단체의 처벌등에 관한 법률 제정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "대기업의 이미용업 진출 방지, 상가임차인권리 보장 강화, 복합쇼핑몰 진출기준 강화를 위한 관련법 개정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "어르신들의 보청기 구입 비용 일부 지원을 위해 국민건강보호법 개정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "구도심이 번성해 사람들이 몰리면서 임대료가 오르고, 원주민이 내몰리는 현상을 방지 하기 위한 상가임대차차보호",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 47,
    "name": "중구/성동구을(지상욱)",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "금남시장을 활기찬 시장으로 만들기",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "옥수지역에 복합문화시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "한강변에 스포츠파크 조성 등 문화체육공간을 확충하겠습니다.",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "옥수역을 문화 및 상업시설을 갖춘 복합역사로 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "다기능 생활체육시설 등 복합체육시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "장충리틀야구장 이전, 주민 필요시설 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "전선지중화 및 정비사업 추진으로 도시경관 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "어르신들의 병원 진료비 부담 경감",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "권역별 시니어복합문화센터 건립",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "어르신들을 위한 맞춤형 일자리 창출",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "스토리가 있는 관광자원 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "맨하탄보다 매력있는 명품도시, 전통과 현대가 공존하는 도시 재생을 통해 달성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "중구에 한류공연의 메카, “Seoul 브로드웨이” 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "미래형 인재를 양성하는 인성교육지원센터 설립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "「구도심지역 교육선진화법(가칭)」 제정",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "세금감면 등 소상공인, 자영업자 지원 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "서울역 북부역세권 개발 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "역세권 등 지역특성을 반영하여 지구단위계획의 각종 규제 완화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "뉴스테이사업, 소규모 정비사업 활성화 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "남산 고도제한 완화를 추진하기 위해 헌법소원 등 검토",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "고령자 고용촉진장려금 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "의료비 부담 감소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "소상공인, 자영업자 지원 강화",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 48,
    "name": "중랑구갑(서영교 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "주민안전 위한 CCTV, 가로등 등 국비확보 지속 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "상봉터미널 재건축으로 지역상생 경제 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "화상 경륜.경정장 폐점(재정비촉진계획 변경 승인으로 상봉터미널 재건축)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "면목2동, 5동에 중학교 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "초.중.고등학교 환경시설개선 국비.시비 확보 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "겸재교 개통, 중랑천 물놀이장 개장, 장미꽃터널 조성에 이은 중랑천 생태환경공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "중랑천둔치를 시민의 품으로! (서울시장 확답!)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "9000억대 경전철 사업자 선정중, 지하철로 추진, 지하철과 동일요금 적용",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "동부간선 지하화로 빠르게!",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "중랑구민회관 일대 행정복합타운 조성 (용역비 확보!)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "면목초등학교에 지하주차장 건설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "사가정역, 면목역일대 [젊음의 거리] 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "면목유수지 (홈플러스)에 복합체육문화시설 등 주민친화공간 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "50번 종점에 봉제아파트형공장(중랑패션벨리) 설립, 면목패션특정개발진흥지구 조기 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "제주올레길 같은 중랑둘레길 지속 추진으로 중랑 경제활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "고교무상교육 실현, ＇서울시립대 반값등록금＇처럼 최대 200만원 세액공제환급 등 반값등록금 실현",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "청년 취업활동비 월 60만원씩 6개월 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "경력단절 여성도 당당하게 일할 수 있게-개별특성에 맞는 맞춤형 재취업교육 확대 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "육아휴직 급여(1년간) 40%에서 100%로 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "어르신 기초연금(소득하위 70%) 현 20만원에서 차등없이 30만원으로 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "＇불효자방지법＇처럼 재산 받은 자녀가 부모 홀대시 증여재산 환수",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "청년용 임대주택 5만호, 신혼부부용 소형주택 5만호 공급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "비정규직의 정규직 전환시 최대 1인당 1,200만원 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "구직급여(실업급여) 최장 1년까지 확대(6개월=>1년)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "＇태완이 법＇ 살인죄 공소시효 폐지처럼 아동학대, 흉악범죄 등 처벌강화",
        "purpose": [],
        "progresses": []
      }
    ]
  },
  {
    "district": 49,
    "name": "중랑구을(박홍근 )",
    "city": "seoul",
    "promises": [
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 0,
        "title": "장애인체육회 설립 지원 및 장애인다목적센터 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 1,
        "title": "주민의 자발적 참여로 육성하는 사회적경제",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 2,
        "title": "망우복합역사 개발 및 문화예술회관 건립 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 3,
        "title": "舊 중랑경찰서 부지 주민복합문화시설 개발 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 4,
        "title": "서울자유시민대학 및 평생교육단과대학 유치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 5,
        "title": "새솔초 대체 운동장 조성(주민개방형 시설로 활용)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 6,
        "title": "중화2동 초등학교 유치 추진 및 통학버스 도입 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 7,
        "title": "공립유치원 설립 및 24시간어린이집 운영",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 8,
        "title": "명문대생 멘토링 연계 및 수학 창의융합선도학교 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 9,
        "title": "혁신학교벨트 조성 및 혁신교육지구 지정 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 10,
        "title": "신내2지구 학교용지 실용예술특성화고 유치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 11,
        "title": "서울의료원의 대학 부속병원화(서울시립대 의과대학 신설 추진)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 12,
        "title": "봉제패션산업 육성 및 영세 봉제업체 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 13,
        "title": "중랑세무서 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 14,
        "title": "전통시장 활성화와 소규모 골목시장 맞춤형 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 15,
        "title": "관내 기업 및 공공기관의 중랑구민 고용우대 활성화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 16,
        "title": "청년일자리 복합지원센터 유치 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 17,
        "title": "면목선 경전철 조기 착공",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 18,
        "title": "신내차량기지 이전 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 19,
        "title": "6호선 신내역 조기 개통 및 구리시 연장 추진",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 20,
        "title": "건영2차아파트 앞 망우역 북측도로 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 21,
        "title": "중앙선・경춘선・망우선 방음시설 구축 및 보강",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 22,
        "title": "중화・먹골역 등 지하철역 에스컬레이터 추가 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 23,
        "title": "동부간선도로 지하화 추진(천변 기존도로부지 공원화)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 24,
        "title": "뉴타운 해제지역 등 맞춤형 주거환경 개선",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 25,
        "title": "서울장미문화축제 연계한 중랑천변 장미마을 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 26,
        "title": "체육시설과 녹지공원이 어우러진 중랑천 개발",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 27,
        "title": "용마랜드 부지 재단장 및 망우산 둘레길 정비",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 28,
        "title": "주민 누구나 이용하기 편안한 봉화산 근린공원 조성",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 29,
        "title": "망우리 공동묘지의 역사문화공원화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 30,
        "title": "국민연금 사회투자 확대로 공공임대주택․보육시설 확충",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 31,
        "title": "공평한 건강보험료 부과체계 개편",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 32,
        "title": "서민금융을 위한 10%대 우체국 신용대출 신설",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 33,
        "title": "자영업 활성화로 살아나는 골목경제",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 34,
        "title": "비정규직 차별철폐(차별과 불안 없는 직장 만들기)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 35,
        "title": "쉬운 해고 제한 및 정리해고 요건 강화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 36,
        "title": "최저임금 인상ㆍ생활임금 확대, 적정임금제 도입",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 37,
        "title": "교육비 부담 절감 및 100% 국가책임 의무교육 실천",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 38,
        "title": "아동보호시스템 대폭 강화로 아동학대 방지",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 39,
        "title": "소득하위 70% 어르신에게 기초연금 30만원 인상",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 40,
        "title": "여성이 행복한 대한민국",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 41,
        "title": "중ㆍ장년 실직자에게 직업훈련 구직촉진급여 지급",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 42,
        "title": "청년일자리 창출 및 안전망 구축",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 43,
        "title": "저소득ㆍ저신용 서민을 위한 가계부채 해소",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 44,
        "title": "양극화 해소를 위한 777플랜(쓰리세븐플랜)",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 45,
        "title": "낙오자 없는 학교를 위한 학습부진아 지원",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 46,
        "title": "유휴교실 활용한 병설유치원의 설립 의무화",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 47,
        "title": "국가백년대계를 위한 국가교육위원회 설치",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 48,
        "title": "영세상공인을 위한 간이과세 과표구간 확대",
        "purpose": [],
        "progresses": []
      },
      {
        "plan": [],
        "popularGroup": [],
        "comments": [],
        "category": "",
        "key": 49,
        "title": "어르신 지하철",
        "purpose": [],
        "progresses": []
      }
    ]
  },
      {
        city: 'korea',
        district: 0, 
        promises: [
          {
            title: '일자리를 책임지는 대한민국',
            purpose: ['삶의 질을 향상시키는 공공·사회 서비스 일자리 창출', '혁신적 4차 산업 경제 생태계 구축으로 좋은 일자리 창출', '스타트업·벤처 창업하기 좋은 기업 생태 환경 조성', '노동시간 단축으로 일·삶·가정 양립 및 일자리 창출'],
            plan: ['공공부문 중심으로 일자리 81만개 창출',
              '대통령 직속 4차 산업혁명위원회 설치',
              '창업국가 조성',
              '노동시간 단축을 통한 일자리 나누기',
              '비정규직 격차 해소로 질 나쁜 일자리를 좋은 일자리로 전환',
              '2020년까지 최저임금 1만원 인상'
            ],
            popularGroup: ['20대', '30대'],
            category: '일자리',
            key: 0,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '우와! 참 좋은 공약이에요'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '지금까지 일자리 공약 많이 나왔었는데 다른게 무엇인지 잘 모르겠어요.'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '최저 임금 1만원 인상이 가능한가요? 돈 받는 사람도 그렇지만 주는 사람도 생각해야...'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '노동 시간 단축 찬성합니다. 야근을 너무 물먹듯이 하네요.'
              }
            ],
            progresses: [{
              key: 1,
              title: '추경안 심사 개시',
              content: '자유한국당을 제외한 나머지 네 당이 함께 추경안 심사를 시작했습니다.',
              date: new Date(2017, 6, 6),
              likes: 21,
              dislikes: 9
            },
            {
              key: 0,
              title: '일자리 추경안 발의',
              content: '공공부문 새 일자리 71,000개를 포함한 추가 경정 예산안을 발의했습니다.',
              reference: {
                title: '일자리 추경안 11조2천억 발표…공공부문 7만1천개 늘린다',
                link: 'http://www.hani.co.kr/arti/economy/economy_general/797512.html'
              },
              date: new Date(2017, 5, 11),
              likes: 34,
              dislikes: 12
            }]
          },
          {
            title: '국민이 주인인 대한민국',
            purpose: ['이명박·박근혜 정권 9년 적폐 청산',
              '권력기관의 권력분립·견제·균형 재조정을 통한 실질적 민주주의 구현',
              '권력 핵심인 대통령 권력을 국민에게 이양'],
            plan: ['대통령의 특권을 국민께 반납',
              '고위공직자비리수사처 신설 및 검경 수사권 조정 등 검찰 개혁',
              '경찰에 대한 민주적 통제 강화 및 지방 분권에 따른 광역단위 자치경찰제',
              '국가정보원을 해외안보정보원으로 전면 개편',
              '감사원 독립성 강화'
            ],
            popularGroup: ['20대', '30대', '40대'],
            category: '정치행정',
            key: 1,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '더 이상 최순실 사태와 비슷한 일이 생겨선 안됩니다.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '좋은 말은 다 써져 있는데 실제로 실현 가능 한것인가요 ?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '대통령 권력이 국민에게 이양이 됩니까?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '감사원 독립성 강화 해야합니다. 찬성합니다.'
              }
            ],
            progresses: []
          },
          {
            title: '공정하고 정의로운 대한민국',
            purpose: ['특권과 특혜 철폐로 공정하고 정의로운 정치·사회 환경 조성',
              '재벌 자본주의 사회를 혁파하여 포용적 자본주의 사회로 이행',
              '부패 청산을 통해 OECD 선진국 수준으로 국가 경쟁력 제고'],
            plan: ['박근혜·최순실 국정농단 청산을 위한 \'적폐청산 특별조사위원회\' 설치와 부정 축재 재산 몰수 추진',
              '재벌의 불법경영승계, 황제경영, 부당특혜 근절 등 재벌개혁 추진',
              '문어발 재벌의 경제력 집중 방지',
              '반부패 개혁으로 병역면탈, 부동산 투기, 세금 탈루, 위장 전입, 논문 표절 등 5대 비리 관련자 고위공직에서 원천 배제',
              '입시·학사비리 연루된 대학 지원 배제·중단으로 투명한 대학 입시 환경 마련',
              '\'국가청렴위원회\' 설치 등 반부패 개혁 위한 제도적 장치 보완'
            ],
            popularGroup: ['20대', '30대', '40대'],
            category: '정치행정',
            key: 2,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '공정한 대한민국 찬성합니다.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '고위공직자 원천 배제가 가능합니까?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '반부패 단체 지금도 많은데 더 설치한다구요?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '부정 축재 재산 몰수 추진 찬성합니다.'
              }
            ],
            progresses: []
          },
          {
            title: '강하고 평화로운 대한민국',
            purpose: ['유능한 안보, 강한 대한민국',
              '비핵화와 더불어 평화로운 한반도',
              '당당한 협력 외교로 국익 증진',
              '책임, 협력, 평화, 민주의 4대 원칙 견지'],
            plan: ['북핵 대응 자주 국방력 조기 구축과 장병 복무여건 개선',
              '한반도 비핵화 및 평화체제 구축',
              '안전한 대한민국, 국가 위기 및 안전관리체계 재정립',
              '한반도 주변 4강 협력 외교와 동북아플러스책임공동체 형성',
              '남북관계 재정립과 북한 변화'
            ],
            popularGroup: ['50대', '30대', '40대'],
            category: '외교안보',
            key: 3,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '북한에 제대로 대응해야 합니다.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '지금 전세계적으로 긴장 상태인데, 평화로운 한반도를 만드는 것이 적절할까요?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '협력 외교... 어떻게 실현합니까 ?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '한반도 비핵화 찬성합니다. 핵은 절대 안됩니다.'
              }
            ],
            progresses: []
          },
          {
            title: '청년의 꿈을 지켜주는 대한민국',
            purpose: ['\'청년에게 힘이 되는 나라, 청년으로 다시 서는 나라\' 건설',
              '청년들에게 사회참여 기회 제공을 통한 사회 불평등 개선',
              '청년 일자리 확대를 위한 취업환경 개선',
              '청년에게 힘이 되는 주거비용 부담 완화'
            ],
            plan: ['청년고용할당제 확대',
              '청년구직촉진수당 도입',
              '청년·신혼부부 집 걱정·임대료 걱정 해결',
              '청년이 존중받는 일자리',
            ],
            popularGroup: ['20대', '30대', '학생'],
            category: '경제',
            key: 4,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '청년 일자리 문제를 꼭 해결해주세요.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '청년만 중요합니까? '
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '구체적으로 어떻게 청년들의 일자리를 늘리겠다는 것인지요?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '요즘 결혼도 많이 안한다는데, 꼭 필요한 것 같습니다.'
              }
            ],
            progresses: []
          },
          {
            title: '성 평등한 대한민국',
            purpose: ['\'여성이 행복한 대한민국\' 건설',
              '여성의 대표성 확대를 위한 성평등 환경 조성',
              '일·생활 양립이 가능한 성차별적 사회관습 철폐',
              '폭력 없는 사회, 모두가 안전한 대한민국'
            ],
            plan: ['여성 정책 기구 권한 강화',
              '비정규직 여성 차별 금지, 여성 고용 우수기업에 포상·조세감면, 블라인드 채용제 도입 등 인센티브 제공으로 여성 일자리 차별 해소',
              '공기업과 준정부기관의 여성 관리자 비율 확대',
              '젠더폭력 근절',
            ],
            popularGroup: ['20대', '30대', '학생', '여성'],
            category: '인권',
            key: 5,
            comments: [

              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '성 평등 너무 중요합니다.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '여성 정책 기구 권한 강화한다는데, 구체적으로 어떻게 하실 것인지요 ?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '여성 관리자 비율 확대가 근본적인 해결책이 될 수 있습니까?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '여성에 대한 차별을 꼭 막아야 합니다.'
              }
            ],
            progresses: []
          },
          {
            title: '어르신이 행복한 대한민국',
            purpose: ['대한민국을 만들기 위해 노력하신 어르신 예우',
              '베이비부머 세대의 안정적 노후 생활 안착',
              '일자리 확대를 통한 노년기 소외 문제를 해결',
              '고령화 사회 이행에 따른 노년의 여가·건강·복지 확대'
            ],
            plan: ['차등 없는 기초연금 30만원 지급',
              '노인 일자리 2배 확충 및 수당 2배 인상',
              '국민연금·퇴직연금을 통한 노후 소득 보장 강화',
              '노년 건강 증진 사업 확대',
            ],
            popularGroup: ['50대', '60대'],
            category: '보건복지',
            key: 6,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '노인 복지 꼭 실현해주세요.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '노인 수당 2배 인상을 어떻게 실현합니까?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '노년 건강 증진 사업을 하기 위해서 자금은 어떻게 마련하는지요 ?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '노인 복지가 너무 빈약한 것 같습니다. 꼭 실현되었으면 좋겠습니다.'
              }
            ],
            progresses: []
          },
          {
            title: '아이 키우기 좋은 대한민국',
            purpose: ['인구감소 방지를 통한 사회의 활력 제고',
              '아이 키우기 좋은 사회·직장 환경 조성',
              '부모의 육아 비용 부담 경감',
              '국가가 교육을 완전히 책임지는 시대'
            ],
            plan: ['유아에서 대학교까지 공교육 비용 국가 책임 부담',
              '0세부터 초등학교 6학년생 자녀의 돌봄 부담 해소',
              '교실혁명을 통한 사교육 경감',
              '육아휴직 확대',
              '유연근무 도입',
              '아동수당 도입',
              '가족과 함께 생활하는 환경 조성'
            ],
            popularGroup: ['30대', '40대'],
            category: '교육',
            key: 7,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '육아가 너무 힘듭니다. 도와주세요.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '육아휴직 확대가 가능합니까? 회사 입장은 생각 안하나요?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '현실성이 떨어짐.'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '교실 혁명 좋습니다. '
              }
            ],
            progresses: []
          },
          {
            title: '농어민·자영업자·소상공인의 소득이 늘어나는 활기찬 대한민국',
            purpose: ['중소기업 활력 제고를 위한 종합 정부 기구 수립',
              '자영업자와 소상공인이 마음 편하게 장사할 수 있는 경제적 사회 환경 조성',
              '대·중소 유통기업 상생협력 발전',
              '새로운 농어업 정책 패러다임 전환, 농산어민 소득 증대 및 삶의 질 향상'
            ],
            plan: ['중소기업청을 중소벤처기업부로 확대 신설하여 중소기업과 소상공인의 권익 보호 추진',
              '영세 가맹점의 범위 확대 및 우대수수료율 인하',
              '임차인 보호를 위한 임대차보호법 개정',
              '대기업이 운영하는 복합 쇼핑몰 규제를 통해 자영업자와 소상공인의 영업 보장',
              '소규모 영세자영업 지원 강화',
              '농어업 정책 획기적 전환',
              '가족과 함께 생활하는 환경 조성'
            ],
            popularGroup: ['40대', '50대', '자영업자'],
            category: '농축수산',
            key: 8,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '중소기업이 살아나야 합니다. 대기업에 집중 투자는 안됩니다.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '어떻게 지원하는지요 ?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '그 돈 있으면 대기업에 좀 더 투자하지...'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '중소기업과 소상공인의 권익을 꼭 보호해주세요.'
              }
            ],
            progresses: []
          },
          {
            title: '안전하고 건강한 대한민국',
            purpose: ['깨끗하고 안전한 사회의 건설',
              '자연재해화 사회적 재난으로부터 국민을 보호',
              '미세먼지 배출량 감축을 통한 국민 호흡권 보장',
              '탈원전 등 친환경 에너지 패러다임으로 국가 정책 전환'
            ],
            plan: ['청와대 중심의 재난대응 컨트롤 타워 구축',
              '노후 원전 폐쇄 및 신규 중단 등 원전사고 걱정 해소',
              '임기 내 국내 미세먼지 배출량 30% 감축',
              '감염·질병 관리 체계 획기적 강화',
              '재난사건 대응 채계 강화'
            ],
            popularGroup: ['20대', '30대', '40대', '50대', '자영업자'],
            category: '안전/환경',
            key: 9,
            comments: [
              {
                key: 0,
                author: '유지애',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '안전한 사회 굉장히 중요합니다.'
              },
              {
                key: 1,
                author: '김아무개',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '미세먼지 배출량을 감축한다고 하면 감축이 됩니까?'
              },
              {
                key: 2,
                author: '김태우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '노후 원전을 폐쇄하면 에너지는 어디서 끌어오나요?'
              },
              {
                key: 3,
                author: '김현우',
                date: new Date(2017, 6, 2, 9, 0, 15).toLocaleString('ko-KR'),
                text: '자연재해로부터 보호해야 합니다.'
              }
            ],
            progresses: []
          },
        ],
      },
      {
        city: 'seoul',
        district: 0,
        promises: [
          {
            title: '천개의 숲, 만개의 산책길',
            purpose: ['서울시 내 초미세먼지 4년간 20% 이상 감축', '초미세먼지 노출 예방 시스템 구축'],
            plan: ['저감장치 확대 등 경유차 저공해 사업 지속 추진', '그린카 추가 보급 및 충전인프라 구축 지속 확대', '초미세먼지 예보시스템 구축 및 취약계층 미세먼지(황사) 마스크 지원'],
            popularGroup: ['20대', '30대'],
            category: '안전/환경',
            key: 0,
            comments: [],
            progresses: [
              {
                key: 1,
                content: '천개의 숲 사업 예산안입니다. 2017년 새로 조성하는 숲 200개와 지금까지 조성된 숲 500개의 유지 관리비를 포함해 총 50억 예산이 배정되어 있습니다.',
                date: new Date(2017, 5, 31),
                likes: 5,
                dislikes: 3,
                title: '2017년 천개의 숲 사업 관련 예산안',
                reference: { 'title': '2017년 서울시 예산안', 'link': 'http://www.seoul.go.kr' }
              },
              {
                key: 0,
                content: '이대목동병원(병원장 유권)이 서울시가 식목일을 앞둔 지난 3월 28일 병원 근처 안양천 둔치에서 개최한 제70회 식목일 행사에 참여해 천 개의 숲과 정원 조성 프로젝트에 힘을 보탰다.',
                date: new Date(2015, 2, 31),
                likes: 21,
                dislikes: 9,
                title: '이대목동병원, 서울시 천 개의 숲과 정원 조성 프로젝트 동참',
                reference: { 'title': '이대목동병원, 서울시 천 개의 숲과 정원 조성 프로젝트 동참', 'link': 'http://www.bosa.co.kr/umap/pnp_view.asp?pk=124702' }
              }
            ]
          },
          {
            title: '찾아가는 복지플래너, 사회복지인력 2배 확충',
            purpose: ['찾아가는 복지플래너(사회복지사+방문간호사)', '복지사각지대 해소'],
            plan: ['신생아 출생시, 어르신 70세 도달시 사회복지사 방문', '주민센터 사회복지인력 두배 확대', '동주민센터를 복지+보건+마을(주민)자치 기능을 강화한 민·관 협력 복지허브기구 로 재구조화'],
            popularGroup: ['30대', '50대'],
            category: '보건복지',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '새로운 안심주택 8만호 공급 및 2~3인용 소형주택 20 만호 공급지원',
            purpose: ['새로운 안심주택 8만호 공급(\'2018)과 재고비율 10%(\'2020) 추진', '민간임대주택 지원을 위한 국민주택기금 및 이자지원 확대', '저렴 소형주택 집중 공급을 위한 주차장 등 도시계획 지원강화'],
            plan: ['소형주택 공급지원을 위한 조례 및 제도개선', '20~30년간 매매대금 분할납부가 가능한 분납임대주택 도입', ' 관리형 주택협동조합 및 공공토지임대형 주택협동조합 육성'],
            popularGroup: ['30대', '40대'],
            category: '보건복지',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '5대 창조경제거점 및 3대 아시아지식기반허브 구축',
            purpose: ['5대 거점을 중심으로 거점별 \'맞춤형 중장기 전략\' 추진', '마곡단지 2단계 전략 추진 및 동북권 일대(창동 상계·홍릉) 스마트시티(SMART CITY) 전략 추진'],
            plan: ['가산·금천 G밸리, 상암 DMC, 동대문창조경제클러스터 육성, 신촌-홍대-합정 (신·홍·합) 일대, 개포동 모바일 융합 클러스터 조성', '도심산업 동반성장을 위한 동대문창조경제클러스터 육성', '개포 모바일 융합클러스터 조성 사업 추진', '홍릉일대 스마트에이징기술 기반 실버산업 클러스터 조성', '창동 상계 대규모 창업단지 조성으로 아시아 지식허브 육성'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '도시안전예산 2조원 추가 확보 및 지하철 노후차량· 노후시설 전면 교체',
            purpose: ['34개 침수피해 위험지역을 2020년까지 완전 해소', '장기사용 노후 전동차 호선별로 2022년까지 전면 교체', '이중·삼중의 안전관리 시스템 구축 및 외부 협력회사 지도·감독 강화'],
            plan: ['4년간 도시안전 예산 2조원을 추가 확보 (매년 5천억원)', '시장 직속의 <재난컨트롤타워> 설치 및 \'골든타임 목표제\' 실행', '투명한 합동점검 및 모니터링 상시화 및 전 직원 철도안전교육 강화'],
            popularGroup: ['30대', '40대'],
            category: '안전/환경',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'daejeon',
        district: 0,
        promises: [
          {
            title: '재난·범죄 추방, 안전한 대전',
            purpose: ['각종재난 발생(인명, 재산피해 등) 10% 감축', ' 범죄발생 10% 감축', ' 여성·아동폭력, 성폭력, 학교폭력 10% 감축', ' 유해환경 30% 감축'],
            plan: ['맞춤형 재난예방 교육', '안전관리부서 시장직속 설치 및 관리 : 안전관리정책관실', '범죄예방디자인설계 추진 : 범죄 저지르기 어려운 상황 만들기', '방사성 위험으로부터 시민안전 보호'],
            popularGroup: ['20대', '40대'],
            category: '안전/환경',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '사람을 생각하는 안전한 교통체계(하나로)',
            purpose: ['도시철도 소외지역 완화 및 교통약자 배려', '버스이용객 11%증가 (현 일일 약 40만명 ? 45만명)', '시민 안전을 위한 정류장, 환승 및 보행 환경 개선', '시내버스 배차시간 현재 평균 15분에서 12분으로 단축'],
            plan: ['도시철도 2호선 노선 확대 및 건설 방식 : 트램이 복지다', '편리한 환승환경(통합교통구역) 만들기', '시내버스 증차, 2층버스 및 캐릭터버스 도입 등'],
            popularGroup: ['20대', '30대'],
            category: '교통/건설',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '원도심 활성화(떠나는 도심에서 돌아오는 도심 도시재생)',
            purpose: ['원도심 인구 감소 예방 및 유입', '과학 문화 예술의 복합단지 및 테마예술 특화 거리 조성', '대전의 역사성과 정체성 회복 : 근대문화 유산 보전'],
            plan: ['한국예술종합학교 중부 캠퍼스 유치', '창작문화예술단지 조성', '테마 문화예술 특화 거리 조성'],
            popularGroup: ['30대', '40대'],
            category: '문화체육',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '강소기업 육성을 통한 일자리 창출',
            purpose: ['강소(벤처)기업 육성', '고용률 57% ? 70%이상 달성', '좋은 일자리 10만개 창출'],
            plan: ['대전의 특성에 맞는 제조업, 서비스업 등 유치, 매년 130개이상 유치', '청년희망프로젝트, 맘편한 여성일자리, 지속가능한 노인일자리, 맞춤형 장애인일자리, 사회적서비스 일자리 등 10만개', '대덕특구 연구기관의 자원을 활용한 체험프로그램 운영'],
            popularGroup: ['30대', '50대'],
            category: '보건복지',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '대전시립병원 설립',
            purpose: ['동구 천명당 평균병상수 6.7병상에서 10.6병상으로 상향 조절', '대전 구도심 동쪽과 신도심 서쪽의 건강불평등 해소', '노인과 저소측이 많은 지역 공공의료복지 제공'],
            plan: ['대전시립병원 설립추진위원회 구성', '시립병원 설립 실무 T/F팀 설치 운영', '대전시민사회복지기준선 연구 수행 : 의료부문 별도'],
            popularGroup: ['50대', '40대'],
            category: '보건복지',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'busan',
        district: 0,
        promises: [
          {
            title: '임기 중 20만개의 좋은 일자리 창출',
            purpose: ['임기 중 4조원을 R&D와 인재양성에 투자하여 좋은 일자리 20만개를 창출함'],
            plan: ['금융·지식정보산업‧관광‧마이스산업 분야 등에 집중 투자로 일자리 창출과 더불어 전문화 시켜 부산의 대표산업으로 육성', '지역인재 육성 프로젝트의 일환으로 지역기업들이 필요로 하는 분야의 지식과 기술을 청년층과 퇴직자들을 대상으로 교육기회 부여'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '선진국 수준의 비상대책관리시스템 수립',
            purpose: ['∙ 현재 풍수해 재난 관리위주의 대책에서 자연재해 뿐 아니라 항만·공항·철도 등의 교통 시설, 기간산업체 노동자의 파업에서 빚어지는 국가물류체계의 비상관리, 대테러 대책, 혹서, 혹한, 조류독감, 미세먼지와 같은 시민건강에 심각한 위험을 주는 기후 및 환경변화 에 따른 대처 등, 선진국 수준의 비상관리시스템을 수립', '예방·대응·복구가 통합적으로 체계화 될 수 있도록 재난통합시스템 구축'],
            plan: ['기조직인 재난안전대책본부를 도시안전본부로 개편하고, 소방-시-경찰과 사안에 따라 국가재난안전처를 포함하는 비상관리전담조직 구성', '동단위의 비상대응팀을 구성하여 대시민 안전교육의 일상화', '고리원자력 1호기의 조기 폐로 및 폐로기술종합연구소의 부산설립 추진'],
            popularGroup: ['20대', '30대'],
            category: '안전/환경',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '가덕도 신공항 유치',
            purpose: ['24시간 사람과 기술이 넘나드는 공항, 세계의 물류가 집중되는 도시로 성장할 수 있는 토대 마련'],
            plan: ['가덕도 신공항 건설을 위해 영남지역 항공수요 조사 실시', '∙ 부산신항을 국가적 허브항만으로 육성하고, 항만과 배후산업의 동반 성장을 위해 강서지역 을 국제산업물류 거점지구로 지정', '국가적 차원에서 유라시아이니셔티브 출발지로 부산이 육성될 수 있도록 유라시아 철도 건설을 위한 연구‧개발을 지원하고 관련 금융기관과 추진 기구를 유치'],
            popularGroup: ['30대', '40대'],
            category: '교통/건설',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '도시재생을 통한 부산 재창조',
            purpose: ['사업진행이 되지 않는 재건축·재개발사업지구인 도시정비구역에 주거복지 차원에 서 도시재생 기반시설을 조성하여 마을의 주거환경 개선 및 마을공동체를 활성화', '정체되어 있는 도시재개발사업과 국비확보가 가능한 도시재생사업을 부산재생관점에서 통합할 수 있는 시스템을 구축'],
            plan: ['국토교통부의 도시재생사업 중 근린재생형 사업비를 확보하여 노후 주거지를 중심으로 사회기반시설을 정비'],
            popularGroup: ['40대', '50대'],
            category: '교통/건설',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '사상 스마트시티 조성',
            purpose: ['사상공단 일원에 기계·조선기자재·자동차 관련산업의 ICT 융합 클러스터로 조성하여 도시첨단산업단지로 탈바꿈'],
            plan: ['대통령의 공약사업인 스마트밸리 사업과 경제혁신3개년 사업의 일환으로 사상공단을 노후 산업단지재생사업으로 연내에 지정되도록 추진'],
            popularGroup: ['30대', '50대'],
            category: '보건복지',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'jeju',
        district: 0,
        promises: [
          {
            title: '도민과 협의하는 협치시대를 열어가겠습니다',
            purpose: ['분야별 전문가와 도민의 목소리가 도정에 반영될 수 있도록 도민이 함께 참여하는 \'수평적 협치\'체제 마련', '행정시장에게 인사·예산권을 부여하여 권한을 강화함으로써 도지사에게 집중된 권력을 분산'],
            plan: ['민간전문가·현장 중심의 의사·정책결정 \'위원회\' 구성 운영', '실질적인 인사·조직·재정자율권 부여, 행정사무 처리권과 자치법규 발의 요 청권 확대, 각종 위원회 설치 운영권 부여'],
            popularGroup: ['40대', '50대'],
            category: '정치행정',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '실질적인 도민소득으로 이어지는 관광산업을 일구겠습니다',
            purpose: ['단순방문형 관광산업에서 체류·휴양형 관광산업으로 관광의 질적 성장 도모', '제주의료관광 인지도를 확산시켜 향후 의료관광객 고객 창출을 도모하여 체류형 관광산 업 저변 확대'],
            plan: ['휴양형 관광단지 조성사업의 조기 검토, 힐링산업, 문화산업 등 제주의 자원가 치를 극대화 할 수 있는 지역산업 육성', '헬스케어타운의 조기 완공 및 계획시설 조기 유치, 의료서비스와 관광자원 (문화, 음식, 유적지, 휴양지 등)과 결합한 의료관광 클러스터 조성'],
            popularGroup: ['40대', '50대'],
            category: '경제',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '1차산업 고부가가치화와 유통시스템 개선으로 소득을 확실히 올려드리겠습니다',
            purpose: ['한중FTA를 대비하여 제주의 생명산업이자 지역경제의 17.4%를 차지하는 1차 산업의 피 해 대책 마련과 추진', '원물 중심의 1차산업을 고부가가치 가공산업으로 육성'],
            plan: ['감귤 등 제주지역 특화 11개 품목을 양허제외 요구, 국가계획에 반영된 FTA 대비 농수축산업 종합대책을 선제적으로 실행요구(5개분야 384개 사업), 동식물검역제도(SPS)는 현행대로 지역단위 제한이 아닌 국가단위 제한제도 유지', '거점별 농수축산물 가공산업 육성, 식품가공·연구센터 예산 확대, 반가공센터의 제주 유치 추진'],
            popularGroup: ['40대', '50대'],
            category: '경제',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '미래세대를 위한 새로운 성장산업을 착실히 만들어 가겠습니다',
            purpose: ['근거리 무선망(와이파이)을 도내 전역에 순차적으로 구축하여 신속한 맞춤형 정보 제공과 관광 및 생활 편의 제공 ', '풍력 산업을 육성하여 에너지자립을 위한 신재생에너지를 확보하고 도민의 새로운 부가 가치 창출'],
            plan: ['무료와이파이망 구축계획 수립, 지역 및 시설 검토·보급 ', '주민참여형 풍력산업 모델 구축, 풍력자원의 공공성 강화를 위한 제도개선 (특별법 개정), 풍력산업 관련 연관산업 육성(풍력엔지니어링, 풍력발전설비 유지보수, 부품/소재 조립산업)'],
            popularGroup: ['40대', '50대'],
            category: '경제',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '도민과 직접 만나는 현장복지∙맞춤형 복지를 이루겠습니다',
            purpose: ['복지사각지대를 촘촘히 발굴하고, 찾아오지 않는 도민에게도 찾아가 도움을 드리는 \'찾아 가는 복지상담 방문서비스\' 및 \'포괄적 복지 서비스 지원\' 시행 ', '광역 치매센터 설립·운영과 어르신 공경조례 제정'],
            plan: ['복지사각지대 예상 대상자 사전 모니터링, 복지지원 시스템 개편, 복지코디네 이터 제도 시행 ', '광역 치매센터 설립·운영, 어르신 학대 및 방임 방지를 위한 공경조례 제정'],
            popularGroup: ['40대', '60대'],
            category: '보건복지',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'gyeonggi',
        district: 0,
        promises: [
          {
            title: '현장 중심형 생명안전망 구축',
            purpose: ['재난을 예방, 통제, 관리하고 재난 발생 시 효과적인 사후대책을 통해 피해 최소화'],
            plan: ['도지사 주재 컨트롤 타워 실설 및 정례화', '재난 발생 연락 시 5분 이내 재난전문가 현장 출동', '재난 안전센터 설립', '재난예방 및 관리를 위한 빅데이터 재난안전센터 설치'],
            popularGroup: ['30대', '20대'],
            category: '안전/환경',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '따뜻하고 복된 공동체, 따복마을 6000개 조성',
            purpose: ['주민들의 필요에 따라 만들어지는 만남과 소통의 공간인 우리 동네 사랑방을 만들어 공동체 소통 공간을 통한 공동체 회복'],
            plan: ['4년 동안 단계적으로 최소 6000개 조성', '따복마을 지원을 위한 사회봉사 일자리 18000개 창출'],
            popularGroup: ['50대', '60대'],
            category: '보건복지',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '바로타고 앉아가는 굿모닝버스',
            purpose: ['출퇴근길을 안전하게 앉아서 기다리지 않고 빨리 다니는 광역버스체계 구축 및 친절하고 쾌적한 버스 서비스 제공'],
            plan: ['신개념 멀티환승터미널 설치', '임기 내 179대의 굿모닝버스를 신규 투입', '경기도 버스 준공영제 도입'],
            popularGroup: ['30대', '40대'],
            category: '교통/건설',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '빅파이(BigFi) 프로젝트 추진',
            purpose: ['신성장동력산업으로 빅데이터 기반 산업의 발전과 일자리 창출'],
            plan: ['권역별 4대 데이터 벨트 구축', '빅데이터 무료 제공으로 빅데이터 기반 신규 일자리 7만개 창출', '공공데이터 공개로 도정운영을 투명화, 효율화하고 도정 신뢰도 향상'],
            popularGroup: ['30대', '20대'],
            category: '과학기술',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '경기북부 10개년 발전 계획',
            purpose: ['중장기적 관점에서 발전 전략을 수립하고 이를 충실하게 추진하여 경기도내 지역격차 완화 필요'],
            plan: ['지역발전을 위한 교통인프라 확충 및 경기북부경찰청 설립', '지역개발사업으로 경제 활성화', '주민 재산권 보호와 지역발전을 위한 규제합리화'],
            popularGroup: ['40대', '50대'],
            category: '교통/건설',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'jeju',
        district: 1,
        promises: [
          {
            title: '가축질병공제제도 도입 및 시범사업',
            purpose: ['폐사축의 유통근절을 통한 안전한 축산물 유통', '가축질병 저하에 따른 생산성 향상'],
            plan: ['가축에 대한 사전 질병관리활동과 질병으로 인한 손실 보상', '제주에서 시범 사업 실시'],
            popularGroup: ['50대', '40대'],
            category: '농축수산',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '사회적경제 기본법 제정',
            purpose: ['지역공동체 재생과 지역순환경제의 선순환'],
            plan: ['다양한 형태의 사회적 경제 조직을 포괄하는 공통의 법적 토대와 정책 추진'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '농어업재해 등의 단계적 제도 개선',
            purpose: ['재해에 따른 농어업 종사자의 경제적 타격 최소화'],
            plan: ['월동채소와 감귤 등의 피해에 대한 실질적인 보상 지급', '재난 복구사업을 위한 지원 항목에 시장격리비 항목 추가', '재해보험을 국가 주도로 재편'],
            popularGroup: ['50대', '40대'],
            category: '농축수산',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '전기차 생산지원',
            purpose: ['전기차 생산지원 클러스터 조성'],
            plan: ['전기차 테스트베드 유치', '선도적 전기차 및 충전인프라 구축'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 3,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'busan',
        district: 1,
        promises: [
          {
            title: '신바람나는 해운대 교통',
            purpose: ['해운대 교통체증 해소'],
            plan: ['해운대 우회도로 건설 추진', '마린시티 앞 차로 확대', '요트경기장 앞 차로 확대'],
            popularGroup: ['30대', '40대'],
            category: '교통/건설',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: 'KTX급 고속열차 해운대 운행 추진',
            purpose: ['해운대~서울 직통열차시대 개막'],
            plan: ['동해남부선 복선전철화 사업 마무리', '해운대-태화강-신경주-서울 노선의 고속열차 운행 추진'],
            popularGroup: ['40대', '50대'],
            category: '교통/건설',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '천만외국인관광객 유치로 경제 도약',
            purpose: ['외국인 관광객 유치를 통한 상업 활성화'],
            plan: ['센텀시티 메디컬 의로관광지구 조성', '종합해양 관광지구 조성을 통해 요트, 수중관광, 해양레포츠 활성화', '해운대 바다 철인 3종대회 개최'],
            popularGroup: ['30대', '40대'],
            category: '경제',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '국제기구와 국제대회 유치',
            purpose: ['국제기구 및 국제대회 유치를 통한 관광/상업 활성화', '부산 및 해운대의 브랜드 가치 제고'],
            plan: ['한-아세안 센터 해운대 유치', '2018 부산세계미술올림픽 성공개최', '2017 세계오픈서핑대회 유치'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '청년이 행복한 해운대',
            purpose: ['청년 일자리 제공 및 연수 지원'],
            plan: ['해운대 청년 해외취업을 위한 글로벌일자리센터 신설, 민간청년지원펀드 매칭사업 추진'],
            popularGroup: ['20대', '30대'],
            category: '일자리',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'seoul',
        district: 40,
        promises: [
          {
            title: '이태원 관광특구 및 앤틱가구거리 상권 활성화',
            purpose: ['이태원 관광 특구 재정비', '앤택가구거리 조성을 통한 관광 활성화'],
            plan: ['이태원 뒷골목 상권 업종 다양화', '외국인 관광객 유치 전략 도출', '앤틱가구거리 조성을 통해 지역 상권 활성화'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '해방촌, 전자상가, 원효로, 후암동, 서울역 일대 도시재생사업 추진',
            purpose: ['낙후된 지역의 환경 개선을 통해 지역간 생활 격차 해소'],
            plan: ['낙후 지역 내 평생교육 프로그램 운영', '해방촌 군인아파트 활용을 위한 연구 진행', '노후 저층주거지 및 신흥시장 환경 개선'],
            popularGroup: ['40대', '50대'],
            category: '안전/환경',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '용산공원 접근성 향상을 위한 도로 기반시설 신설',
            purpose: ['용산의 역사성, 자연성, 접근성 강화'],
            plan: ['용산 공원을 남산과 연결', '용산 공원을 한강시민공원과 연결'],
            popularGroup: ['20대', '30대'],
            category: '교통/건설',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '이태원, 한남동 주변 주차난 해소를 위한 대형 공영주차장 신설',
            purpose: ['늘어나는 관광 수요에 걸맞은 주차 공간 제공'],
            plan: ['한남동 공영주차장 입체화 사업 진행을 통해 주차 공간 증설'],
            popularGroup: ['20대', '30대'],
            category: '교통/건설',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '숙명여대 공공데이터 청년일자리 지원센터 지원',
            purpose: ['청년일자리 창출'],
            plan: ['공공데이터 활용지원센터 오픈스퀘어 D 설립', '예비 사업자 발굴 및 창업 지원', '전문 기업과 민관 협업 관계 구축 지원'],
            popularGroup: ['20대', '30대'],
            category: '일자리',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      },
      {
        city: 'daejeon',
        district: 5,
        promises: [
          {
            title: '유성온천의 브랜드 가치 제고',
            purpose: ['유성온천 연계 관광/방문 코스 조성하여 지역 활성화'],
            plan: ['유성온천 건강특화거리 조성', '유성온천과 국제검진센터, 재활, 요양시설 등을 이용한 연계코스 조성', '유성온천 관광팸투어'],
            popularGroup: ['20대', '30대'],
            category: '경제',
            key: 0,
            comments: [],
            progresses: []
          },
          {
            title: '노은 농수산물 도매시장 활성화를 위한 축산부류 신설',
            purpose: ['축산부류를 신설하여 상품의 다양성 확보, 노은 농수산물 도매시장 경쟁력 제고'],
            plan: ['축산부류 설치 및 홍보'],
            popularGroup: ['40대', '50대'],
            category: '경제',
            key: 1,
            comments: [],
            progresses: []
          },
          {
            title: '유성대대부지 유성종합스포츠센터 건립',
            purpose: ['생활체육 욕구에 부응하는 체육시설을 확충하여 구민 건강 증진', '체육시설 접근성 향상으로 상시 생활체육활동을 할 수 있는 계기 마련'],
            plan: ['2016년 내 완공'],
            popularGroup: ['20대', '30대'],
            category: '교통/건설',
            key: 2,
            comments: [],
            progresses: []
          },
          {
            title: '도안도서관 건립 및 정부지원 확보',
            purpose: ['도안신도시 거주민을 위한 복합문화센터 설립'],
            plan: ['도서관 건립을 위한 교부금 확보', '도안도서관 건립 설계 공모 진행'],
            popularGroup: ['20대', '30대'],
            category: '교육',
            key: 3,
            comments: [],
            progresses: []
          },
          {
            title: '유성 5일장 명소화',
            purpose: ['유성 5일장 경쟁력 확보 및 홍보'],
            plan: ['유성온천과 연계한 관광 코스 조성', '시장 정비를 통한 경쟁력 확보'],
            popularGroup: ['30대', '40대'],
            category: '경제',
            key: 4,
            comments: [],
            progresses: []
          }
        ]
      }
    ]
  },
  getters: {
    president: state => {
      return state.reprs.find(function(repr){
        if (repr.city === 'korea') {
          return repr
        }
      })
    },
    presidentPromises: state => {
      return state.promises.find(function (pp) {
        if (pp.city === 'korea') {
          return pp
        }
      })
    },
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
    mayorPromises: state => {
      return state.promises.find(function (mp) {
        if (mp.city === state.city && mp.district == 0) {
          return mp
        }
      })
    },
    congressPersonPromises: state => {
      return state.promises.find(function (cpp) {
        if (cpp.city === state.city && cpp.district == state.district) {
          return cpp
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
    }
  }
})
