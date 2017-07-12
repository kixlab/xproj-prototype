import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: 'seoul',
    district: 0,
    districts: {
      'seoul': ['전체', '강남구 갑', '강남구 을', '강남구 병', '강동구 갑', '강동구 을', '강서구 갑', '강서구 을', '강서구 병', '관악구 갑', '관악구 을',
        '광진구 갑', '광진구 을', '구로구 갑', '구로구 을', '금천구', '노원구 갑', '노원구 을', '노원구 병', '도봉구 갑', '도봉구 을', '동대문구 갑',
        '동대문구 을', '동작구 갑', '동작구 을', '마포구 갑', '마포구 을', '서대문구 갑', '서대문구 을', '서초구 갑', '서초구 을', '성북구 갑', '성북구 을',
        '송파구 갑', '송파구 을', '송파구 병', '양천구 갑', '양천구 을', '영등포구 갑', '영등포구 을', '용산구', '은평구 갑', '은평구 을', '종로구', '중구·성동구 갑', '중구·성동구 을'],
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
        district: 3,
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
        district: 20,
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
        district: 0,
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
        district: 0,
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
    ],
    promises: [
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
        district: 0,
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
        district: '0',
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
        district: 20,
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
        district: 3,
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
