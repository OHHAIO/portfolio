import React from "react";
import "./styles.scss";
import CareerIcon from "../../assets/images/bag.png";
import CareerInfo, { ICareerInfo } from "../../common/class/CareerInfo";
import { convertDateFormat } from "../../common/method/common";

const Career = () => {
  const careerData: Array<ICareerInfo> = [
    new CareerInfo(
      "엘지 히다찌",
      "국내외 시스템 통합(SI), IT 인프라 제품 판매・유지보수, 솔루션 수출 사업을 진행하고 있습니다.",
      new Date(2022, 4, 2),
      new Date(2022, 9, 31),
      [
        {
          title: "일본 철도 운항 시스템 개발",
          description: [
            "메인 프론트엔드 개발",
            "공통 컴포넌트 개발 및 가이드 문서 작성",
            "전체적인 프로젝트 구조 설게",
            "글로벌 서비스를 위한 다국어 처리",
            "예약 발권 시스템 개발",
          ],
        },
      ],
    ),
    new CareerInfo(
      "슈프리마",
      "지문인식 기술과 얼굴인식 기술을 기반으로 출입통제, 근태관리, 모바일 인증 등 솔류션을 사업을 진행하고 있습니다.",
      new Date(2020, 10, 23),
      new Date(2022, 3, 21),
      [
        {
          title: "카메라 장치 및 출입 인증 장치를 연동한 관제 시스템 신규 개발",
          description: [
            "비디오 관제 SW 신규 MVP 개발 담당",
            "공통 컴포넌트 개발",
            "카메라 장치 데이터를 통한 모니터링 개발",
            "E2E 자동화 테스트 개발",
            "글로벌 서비스를 위한 다국어 처리",
          ],
        },
        {
          title: "장치 동기화 자동화 코드 개발",
          description: [
            "QA 와 협업을 통한 API 자동화 테스트 개발",
            "시나리오 별로 Red Case, Green Case 로 나누어 개발",
          ],
        },
        {
          title: "성능 테스트 자동화 테스트 코드 개발",
          description: [
            "QA 와 협업을 통한 API 자동화 테스트 개발",
            "Jenkins 의 환경 변수를 이용하여 사전 조건(장치 수, 사용자 수) 세팅 후, 테스트 가능 하도록 구현",
          ],
        },
        {
          title: "출입 장치 인증 기반 재실 제한 신규 기능 개발",
          description: [
            "구역 설정 페이지 개발(인원수 제한 및 인증 장치 연동)",
            "대시 보드 페이지 개발",
            "실시간 사용자 수 모니터링 페이지 개발",
          ],
        },
      ],
    ),
    new CareerInfo(
      "갈라랩",
      "갈라 그룹의 온라인 게임 포탈인 지포테이토에서 서비스되고 있는 게임의 개발을 담당하고 있는 회사입니다.",
      new Date(2020, 5, 17),
      new Date(2020, 10, 1),
      [
        {
          title: "게임 관리자 툴 개발",
          description: [
            "게임 운영을 위한 관리자 툴 개발",
            "관리자 툴 로그인 시 구글 계정 로그인 기능 개발",
            "공통 API 관리 및 개발",
          ],
        },
      ],
    ),
    new CareerInfo(
      "포그리트",
      "UX 빅데이터 분석 솔루션 개발 회사입니다.",
      new Date(2020, 0, 13),
      new Date(2020, 5, 1),
      [
        {
          title: "솔루션 운영 관리자 시스템 개발",
          description: ["솔루션 운영 관리자 시스템 개발 담당", "기술 문의 대응"],
        },
      ],
    ),
    new CareerInfo(
      "아이티지이",
      "국세청 신규개발 및 유지보수를 담당하고 있는 회사입니다.",
      new Date(2019, 1, 1),
      new Date(2019, 11, 11),
      [
        {
          title: "국세청 홈택스 UI/UX 메인 개편(메뉴 검색 기능 개발)",
          description: ["홈택스 메뉴 검색 기능 개발", "권한 별 메뉴 조회 기능 개발", "UI//UX 개선"],
        },
        {
          title: "국세청 홈택스 사내 시스템 배너 등록 페이지 개발",
          description: ["홈택스 포탈 메인의 배너를 등록하여 쉽게 사용 할 수 있도록 개발"],
        },
        {
          title: "국세청 사내 시스템 세무서 직원 인증 PC 등록 기능 개발",
          description: ["세무서 직원 인증 PC를 쉽게 등록하기 위한 국세청 사내 시스템 개발", "보안적 취약점 개선"],
        },
        {
          title: "국세청 홈택스 자주 찾는 메뉴 등록 기능 개선",
          description: ["국세청 홈택스 자주 찾는 메뉴 등록 기능 개선"],
        },
        {
          title: "etc",
          description: [
            "국세청 홈택스 화면 확대 및 축소 기능 추가",
            "국세청 홈택스 '신규 사업자를 위한 안내' 페이지 마크 업",
          ],
        },
      ],
    ),
  ];

  return (
    <section className="sectionContainer career">
      <div className="inner">
        <div className="inner__subTitle black">
          <div className="inner__subTitle__container">
            <img src={CareerIcon} alt="경력" />
            <h2>경력</h2>
          </div>
        </div>
        <div className="mainContainer career__container">
          <ul>
            {careerData.map((data, index) => (
              <li key={index}>
                <div className="careerContentsContainer">
                  <h3>{data.companyName}</h3>
                  <span className="careerContentsContainer__period">
                    {convertDateFormat(data.startDate)} ~ {convertDateFormat(data.endDate)}
                  </span>
                  <p className="careerContentsContainer__aboutCompany">{data.companyInfo}</p>
                  <hr />

                  {data.workInfo &&
                    data.workInfo.length > 0 &&
                    data.workInfo.map((info) => (
                      <div className="careerContentsContainer__workListContainer" key={info.title}>
                        <h4>{info.title}</h4>
                        <ul>
                          {info.description &&
                            info.description.map((description, index) => <li key={index}>{description}</li>)}
                        </ul>
                      </div>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Career;
