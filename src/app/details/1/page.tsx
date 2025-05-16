import Link from "next/link";
import { layout, lnbWrapper } from "./work.css";

function HistoryPage() {
  return (
    <>
      <header>
        <h2 id="career-heading">경력 이야기</h2>
      </header>

      <div className={layout}>
        <aside aria-labelledby="career-heading" className={lnbWrapper}>
          <nav aria-label="경력 섹션 내비게이션">
            <ul>
              <li>
                <Link href="#intro-startup">스타트업 입사 계기</Link>
              </li>
              <li>
                <Link href="#about-fastview">(주)Fastview 소개</Link>
              </li>
              <li>
                <Link href="#job-experience">담당 직무 경험</Link>
                <ul>
                  <li>
                    <Link href="#ads-domain">광고(Ads) 도메인</Link>
                  </li>
                  <li>
                    <Link href="#submoduls-onboding">
                      서브모듈 기반 공통 컴포넌트 관리 및 온보딩 문서 제작
                    </Link>
                  </li>
                  <li>
                    <Link href="#commuse-domain">이커머스 도메인</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        <div>
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
            <p>
              콘텐츠 유통 플랫폼 <strong>뷰어스(ViewUs)</strong>를 운영하는
              콘텐츠 테크 스타트업으로, 콘텐츠 제작부터 유통, 수익화까지 전
              과정을 아우르는 솔루션을 제공합니다.
              <br />
              또한, 커머스몰 <strong>코하루</strong>와 B2B 이커머스 플랫폼
              <strong>셀러밀</strong>을 통해 커머스 분야에서도 활발히 활동하고
              있습니다.
              <br />
              Google Ad Manager 및 자사 광고 스크립트를 통해 수익 모델을
              운영하고 있습니다.
            </p>
          </section>

          <section id="job-experience" aria-labelledby="job-experience-heading">
            <h3 id="job-experience-heading">담당 직무 경험</h3>

            <ol>
              <li>
                <article>
                  <h4 id="ads-domain">광고(Ads) 도메인</h4>
                  <dl>
                    <div>
                      <dt>기간</dt>
                      <dd>
                        <time dateTime="2023-03">2023.03</time> ~
                        <time dateTime="2023-06">2023.06</time>
                      </dd>
                    </div>

                    <div>
                      <dt>참여 인원</dt>
                      <dd>시니어 1명 + 주니어(본인 포함 2명)</dd>
                    </div>

                    <div>
                      <dt>사용기술</dt>
                      <dd>
                        스크립트: Typescript, HTML5, CSS3/ 어드민:
                        React+Reduxtoolkit+Styled-components
                      </dd>
                    </div>

                    <div>
                      <dt>업무 내용</dt>
                      <dd>
                        시니어 개발자의 기존 텍스트형 스크립트 가이드를
                        바탕으로, 이미지형 광고 모듈의 상태 관리 로직과
                        애니메이션 처리를 전담하였습니다. TS 기반 스크립트 개발
                        작업 이후 어드민에서 관리자가 필요한 광고스크립트를 발행
                        할 수 있는 페이지를 제작했습니다.
                      </dd>
                    </div>
                  </dl>
                  <p>
                    <strong>성과:</strong> Google Analytics 지표 기준 PV 및 CTR
                    향상 (정량 수치는 대외비 텍스트형 대비 클릭률이 약간
                    상승하여 슬라이드형 광고 비중이 점진적으로 확대되었습니다.)
                    <br />
                    <strong>과제:</strong>
                    리뉴얼과 신규 기능이 동시에 진행되면서 속도 중심의 개발이
                    요구되었고, 그 결과 상품등록 개발에서 클라이언트에서 모든
                    예외 처리를 담당하게 되었습니다. 이로 인해 유지보수 난이도가
                    증가하고, 유사한 기능을 가진 컴포넌트가 중복 생성되거나,
                    일부는 재사용되지 않고 폐기되는 상황이 반복되었습니다.
                    장기적으로는 컴포넌트 공통화 전략 수립과, 기능 단위로 분리된
                    컴포넌트 라이브러리(서브 모듈) 구성이 필요하다고
                    판단했습니다.
                  </p>
                </article>
              </li>

              <li>
                <article>
                  <h4 id="submoduls-onboding">
                    서브모듈 기반 공통 컴포넌트 관리 및 온보딩 문서 제작
                  </h4>
                  <dl>
                    <div>
                      <dt>기간</dt>
                      <dd>
                        <time dateTime="2023-03">2023.03</time> ~
                        <time dateTime="2023-11">2023.11</time>
                      </dd>
                    </div>

                    <div>
                      <dt>참여 인원</dt>
                      <dd>시니어 1명, 주니어 1명(본인)</dd>
                    </div>

                    <div>
                      <dt>사용 기술</dt>
                      <dd>
                        React, Redux Toolkit, TypeScript, Styled-components,
                        Storybook
                      </dd>
                    </div>

                    <div>
                      <dt>업무 내용</dt>
                      <dd>
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
                  <p>
                    <strong>성과:</strong> 중복 컴포넌트 생성을 방지하고, 공통
                    UI 모듈의 재사용성을 향상시켜 전체 번들 크기를 줄였습니다.
                    <br />
                    <strong>과제:</strong> Submodule 특성상 변경 시 모든
                    프로젝트에 반영되어야 하며, Git 충돌 해결에 추가 공수가
                    필요했습니다.
                  </p>
                </article>
              </li>

              <li>
                <article>
                  <h4 id="commuse-domain">이커머스 도메인</h4>
                  <dl>
                    <div>
                      <dt>기간</dt>
                      <dd>
                        <time dateTime="2022-03">2022.03</time> ~
                        <time dateTime="2022-10">2022.10</time>
                      </dd>
                    </div>

                    <div>
                      <dt>참여 인원</dt>
                      <dd>
                        개발팀(백엔드: 6, 프론트: 5(본인포함))+ 기획팀(기획자:
                        3, 디자이너:1, QA: 1)
                      </dd>
                    </div>

                    <div>
                      <dt>사용기술</dt>
                      <dd>
                        back: spring boot2.7 Kotlin1.6(Gradle) | JAVA11 | MySQL
                        <br />
                        Front: Vue2+Jquery | React18(Typescript) + Redux-toolkit
                        | Styled-components <br />
                        tool: Figma | Jira
                      </dd>
                    </div>

                    <div>
                      <dt>업무 내용</dt>
                      <dd>
                        <p>
                          스토어 서비스 페이지 리뉴얼을 위한 기능 추가 및 기존
                          기술 부채를 개선하기 위하여 아래와 같은 기능 제작을
                          진행했습니다.
                        </p>
                        <ul>
                          <li>
                            렌더링 시점 컨트롤이 필요했으며 프론트팀 회의를
                            통해서 vue2 &gt; React로 프레임워크 마이그레이션
                            작업을 진행 했습니다.
                            <br />
                            저는 브라우저 sessionStorage를 이용한 7일간 조회한
                            상품목록 기능과 추가적으로 GA(Google Analytics)
                            수집을 위해 비회원/회원으로 구분하여 컴포넌트를
                            제작했으며
                            <br />
                            상품상세 페이지에서 윗젯 리스트(동일 카테고리 id
                            상품 목록)
                            <br />
                            텍스트+이미지 리뷰/문의 컴포넌트 기능을
                            제작했습니다.
                          </li>

                          <li>
                            어드민에서 상품등록시 공급사별 엑셀시트를 받아 DB에
                            바로 update를 하는 프로세스를 개선 했습니다.
                            <br />
                            개선이 필요한 부분
                            <br />
                            1. 유관부서에서 상품정보 업로드 시 데이터가 많은경우
                            업로드를 진행하는 동안 다른 업무를 진행불가
                            <br />
                            2. 받은 데이터에 오타및 형식 오류가 있는 경우 장시간
                            데이터를 조회해서 수정과정을 걸쳐야함 딜레이가
                            발생됌
                            <br />
                            기획자님, 유관부서, 백엔드개발자님과 회의를 진행하며
                            개편이후 상품데이터를 동일한 DB구조로 가져갈 수
                            있도록 보안한 신규상품등록과 상품수정 기능을 어드민
                            화면을 제작을 진행했습니다.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                  <p>
                    <strong>성과:</strong> 유관부서에 업무 딜레이 시간감축,
                    통합된 상품데이터로 안전성 확보, GA기반 사용자 맞춤형
                    추천상품이라는 신규 아젠다를 확보
                    <br />
                    <strong>과제:</strong>
                    리뉴얼과 신규 기능이 동시에 진행되면서 속도 중심의 개발이
                    요구되었고, 그 결과 상품등록 개발에서 클라이언트에서 모든
                    예외 처리를 담당하게 되었습니다. 이로 인해 유지보수 난이도가
                    증가하고, 유사한 기능을 가진 컴포넌트가 중복 생성되거나,
                    일부는 재사용되지 않고 폐기되는 상황이 반복되었습니다.
                    장기적으로는 컴포넌트 공통화 전략 수립과, 기능 단위로 분리된
                    컴포넌트 라이브러리(서브 모듈) 구성이 필요하다고
                    판단했습니다.
                  </p>
                </article>
              </li>
            </ol>
          </section>
        </div>
      </div>

      <footer>
        <div>
          <button>이전글</button>
          <button>메인으로</button>
          <button>다음글</button>
        </div>
      </footer>
    </>
  );
}

export default HistoryPage;
