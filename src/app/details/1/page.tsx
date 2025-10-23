"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  contents,
  layout,
  linkGroup,
  lnbWrapper,
  lnbList,
  navigationLink,
  outLink,
  careerList,
  careerContent,
  careerContentWrap,
  careerTitle,
  swapText,
} from "./work.css";

function HistoryPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header>
        <h2 id="career-heading" className="screen_out">
          경력 이야기
        </h2>
      </header>

      <div className={layout}>
        {/* LNB */}
        <aside aria-labelledby="career-heading" className={lnbWrapper}>
          <nav aria-label="경력 섹션 내비게이션">
            <ul className={lnbList}>
              {[
                { id: "intro-startup", label: "스타트업 입사 계기" },
                { id: "about-fastview", label: "(주)Fastview 소개" },
                {
                  id: "job-experience",
                  label: "담당 직무 경험",
                  children: [
                    { id: "ads-domain", label: "광고(Ads) 도메인" },
                    {
                      id: "submoduls-onboding",
                      label: "서브모듈 및 온보딩 문서 제작",
                    },
                    { id: "commuse-domain", label: "이커머스 도메인" },
                  ],
                },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={handleSmoothScroll}
                    aria-current={activeId === item.id ? "true" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="inner">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={`#${child.id}`}
                            onClick={handleSmoothScroll}
                            aria-current={
                              activeId === child.id ? "true" : undefined
                            }
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* 본문 */}
        <div className={contents}>
          <section id="intro-startup" aria-labelledby="intro-startup-heading">
            <h3 id="intro-startup-heading">스타트업 입사 계기</h3>
            <p>
              대학교 졸업을 한 달 정도 앞둔 시점에 구직 활동 중, 제 개발 활동을
              긍정적으로 평가해 주신 스타트업에 입사할 수 있었습니다. 이 글을
              읽는 분들께 스타트업 직무경험을 소개합니다.
            </p>
          </section>

          <section id="about-fastview" aria-labelledby="about-fastview-heading">
            <h3 id="about-fastview-heading">(주)Fastview 소개</h3>
            <strong>
              근무기간: 1년 11개월 (<time dateTime="2022-01">2022.01</time> ~
              <time dateTime="2023-11">2023.11</time>)
            </strong>
            <Link
              href="https://www.fastviewkorea.com/2022/main/main.html"
              aria-label="회사 소개사이트 이동"
              className={outLink}
              target="_blank"
            >
              공식 사이트
            </Link>
            <p>
              콘텐츠 유통 플랫폼 <strong>뷰어스(ViewUs)</strong>를 운영하는
              콘텐츠 테크 스타트업으로, 콘텐츠 제작부터 유통, 수익화까지 전
              과정을 아우르는 솔루션을 제공합니다. 또한 커머스몰
              <strong>코하루</strong>와 B2B 플랫폼 <strong>셀러밀</strong>을
              통해 커머스 분야에서도 활발히 활동 중입니다.
            </p>
          </section>

          {/* 직무 경험 */}
          <section id="job-experience" aria-labelledby="job-experience-heading">
            <h3 id="job-experience-heading">담당 직무 경험</h3>
            <ol className={careerList}>
              <li>
                <article>
                  <h4 id="ads-domain">광고(Ads) 도메인</h4>
                  <dl className={careerContent}>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>작업 기간</dt>
                      <dd>
                        <time dateTime="2023-03">2023.03</time>-
                        <time dateTime="2023-06">2023.06</time>
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>참여 인원</dt>
                      <dd>시니어 1명 + 주니어(본인 포함 2명)</dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>사용 기술</dt>
                      <dd>
                        스크립트: Typescript, HTML5, CSS3/ 어드민:
                        React+Reduxtoolkit+Styled-components
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>업무 내용</dt>
                      <dd className="long_text">
                        시니어 개발자의 기존 텍스트형 스크립트 가이드를
                        바탕으로, 이미지형 광고 모듈의 상태 관리 로직과
                        애니메이션 처리를 전담하였습니다. TS 기반 스크립트 개발
                        작업 이후 어드민에서 관리자가 필요한 광고스크립트를 발행
                        할 수 있는 페이지를 제작했습니다.
                      </dd>
                    </div>
                  </dl>
                  <ul>
                    <li>
                      <span className={swapText}>수행 성과</span>
                      <span>
                        Google Analytics 지표 기준 PV 및 CTR 향상 트래픽 일정량
                        상승
                      </span>
                    </li>
                    <li>
                      <span className={swapText}>고려 사항</span>
                      <span>
                        추가 광고타입이 늘어날수록 모듈이 무거워져 페이지 렌더링
                        속도를 저하 시킬 가능성이 있습니다.
                      </span>
                    </li>
                  </ul>
                </article>
              </li>
              <li>
                <article>
                  <h4 id="submoduls-onboding">
                    서브모듈 기반 공통 컴포넌트 관리 및 온보딩 문서 제작
                  </h4>
                  <dl className={careerContent}>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>작업 기간</dt>
                      <dd>
                        <time dateTime="2023-03">2023.03</time>~
                        <time dateTime="2023-11">2023.11</time>
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>참여 인원</dt>
                      <dd>시니어 1명 + 주니어(본인 포함 1명)</dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>사용 기술</dt>
                      <dd>
                        React, Redux Toolkit, TypeScript, Styled-components,
                        Storybook
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>업무 내용</dt>
                      <dd className="long_text">
                        여러 하위 이커머스 도메인에서 중복되는 UI 컴포넌트를
                        통합·관리하기 위해 Git Submodule을 활용한 공통 모듈
                        시스템을 도입했습니다.
                        <ul>
                          <li>
                            팀 리드가 초기 Submodule 구조를 설정하고, 저는 기존
                            프로젝트에서 공통 UI를 선별하여 이관 및 정리 작업을
                            수행했습니다.
                          </li>
                          <li>
                            중복되는 컴포넌트 통합, JSDoc 주석 작성, 유사
                            컴포넌트 병합 등을 통해 코드 일관성과 유지보수성을
                            높였습니다.
                          </li>
                          <li>
                            신규 입사자의 빠른 온보딩을 위해 Storybook 기반
                            문서화 작업을 주도적으로 진행하였습니다.
                          </li>
                          <li>
                            외부 노출을 피해야 한다는 조직 방침에 따라 npm
                            패키지보다는 Git Submodule 방식으로 관리하였습니다.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                  <ul>
                    <li>
                      <span className={swapText}>수행 성과</span>
                      <span>
                        중복 컴포넌트 생성을 방지하고, 공통 UI 모듈의 재사용성을
                        향상시켜 전체 번들 크기를 줄였습니다.
                      </span>
                    </li>
                    <li>
                      <span className={swapText}>고려 사항</span>
                      <span>
                        Submodule 특성상 변경 시 모든 프로젝트에 반영되어야
                        하며, Git 충돌 해결에 추가 공수가 필요했습니다.
                      </span>
                    </li>
                  </ul>
                </article>
              </li>

              <li>
                <article>
                  <h4 id="commuse-domain">이커머스 도메인</h4>
                  <dl className={careerContent}>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>작업 기간</dt>
                      <dd>
                        <time dateTime="2022-03">2022.03</time>-
                        <time dateTime="2022-10">2022.10</time>
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>참여 인원</dt>
                      <dd>
                        개발팀(백엔드 6명, 프론트엔드 5명(본인 포함)) +
                        기획팀(기획자 3명, 디자이너 1명, QA 1명)
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>사용 기술</dt>
                      <dd className="long_text">
                        Back: Spring Boot 2.7 (Kotlin 1.6, Java 11, MySQL)
                        <br />
                        Front: Vue2 + jQuery / React18(TypeScript) + Redux
                        Toolkit / Styled-components
                        <br />
                        Tool: Figma, Jira
                      </dd>
                    </div>
                    <div className={careerContentWrap}>
                      <dt className={careerTitle}>업무 내용</dt>
                      <dd className="long_text">
                        <ul>
                          <li>
                            렌더링 시점 제어가 필요하여 Vue2 → React로
                            프레임워크 마이그레이션을 진행했습니다. <br />
                            sessionStorage를 이용한 7일간 조회 상품 목록 기능과
                            비회원/회원별 GA(Google Analytics) 데이터 수집
                            로직을 구현했습니다. <br />
                            상품 상세 페이지에 동일 카테고리 추천 위젯,
                            텍스트/이미지 리뷰 및 문의 컴포넌트를 제작했습니다.
                          </li>
                          <li>
                            어드민 상품 등록 시 공급사별 엑셀 업로드 프로세스를
                            개선했습니다. <br />
                            커머스 부서 요청 시 백엔드 개발자의 수동 업로드
                            의존도를 제거하고, 오류 검증 및 수정 과정을
                            간소화하여 효율성을 높였습니다. <br />
                            기획자, 유관부서, 백엔드 개발자와 협의하여 신규 상품
                            등록 및 수정 화면을 제작했습니다.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                  <ul>
                    <li>
                      <span className={swapText}>수행 성과</span>
                      <span>
                        업무 프로새스를 감소시키고, 통합된 상품 데이터로
                        안정성을 확보했습니다. 또한 GA 기반 신규 아젠다를
                        확보했습니다.
                      </span>
                    </li>
                    <li>
                      <span className={swapText}>고려 사항</span>
                      <span>
                        리뉴얼과 새기능이 병행되면서 속도 중심의 개발이
                        요구되었고, 클라이언트 측에서 예외 처리를 담당하게 되어
                        유지보수 난이도가 증가했습니다.
                      </span>
                    </li>
                  </ul>
                </article>
              </li>
            </ol>
          </section>
        </div>
      </div>

      <footer>
        <div className={linkGroup}>
          <Link href={"/details/6"} className={navigationLink}>
            이전글
          </Link>
          <Link href={"/details/2"} className={navigationLink}>
            다음글
          </Link>
        </div>
      </footer>
    </>
  );
}

export default HistoryPage;
