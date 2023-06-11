import React from 'react';
import CompanyLogo from 'assets/images/fastview_card.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import typography from 'assets/styles/constants/typograpy';
import media from 'assets/styles/constants/media';

const StoryBoard = styled.div`
  div.history-title {
    img {
      display: block;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
    }
    ${media.tablet} {
      h1 {
        text-align: left;
      }

      img {
        margin: initial;
      }
    }
  }
  padding: 30px 0;
  ::selection {
    color: #fff;
    background: #ff7979;
  }
  .wrapper {
    margin: 50px auto;
    position: relative;
  }
  .wrapper .center-line {
    position: absolute;
    height: 100%;
    width: 4px;
    background: #db1e36;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  }
  .wrapper .row {
    display: flex;
  }
  .wrapper > div:nth-child(even) {
    justify-content: flex-start;

    section::before {
      right: -7px;
    }

    section .icon {
      top: 15px;
      right: -60px;
    }
  }
  .wrapper > div:nth-child(odd) {
    justify-content: flex-end;

    section::before {
      left: -7px;
    }

    section .icon {
      top: 15px;
      left: -60px;
    }
  }
  .wrapper .row section {
    border-radius: 5px;
    width: calc(50% - 40px);
    padding: 20px;
    position: relative;
  }

  .row section .icon,
  .center-line .scroll-icon {
    position: absolute;
    background: #db1e36;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 17px;
    box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .row section .details,
  .row section .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    dl {
      width: 100%;
      > div {
        display: flex;
        margin: 6px 0;
        dt {
          width: 10%;
          flex-shrink: 0;
        }
        dd {
          margin: 0;
          ol,
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
  .row section .details .title {
    ${typography.lage};
    font-weight: 600;
  }
  .row section p {
    margin: 10px 0 17px 0;
  }
  @media (max-width: 790px) {
    .wrapper .center-line {
      left: 40px;
    }
    .wrapper .row {
      margin: 30px 0 3px 60px;
    }
    .wrapper .row section {
      width: 100%;
    }
    .row-1 section::before {
      left: -7px;
    }
    .row-1 section .icon {
      left: -60px;
    }
  }
  @media (max-width: 440px) {
    .wrapper .center-line,
    .row section::before,
    .row section .icon {
      display: none;
    }
    .wrapper .row {
      margin: 10px 0;
    }
  }
`;
function HistoryPage() {
  return (
    <StoryBoard>
      <div className="history-title">
        <img src={CompanyLogo} alt="company_logo" width={300} />
        <h1>이곳에서 이렇게 일했습니다.</h1>
      </div>
      <div className="wrapper">
        <div className="center-line"></div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="title">
                실무 공부 <br />
                어드민기능개발
              </span>
              <span>2022.01</span>
            </div>
            <p>실무에 처음 도전하는 개발자로서 경험</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>소통 방법을 익히고, 언어와 코딩 컨벤션을 숙지하여 원활한 소통을 지향</dd>
                </div>
                <div>
                  <dt>장점</dt>
                  <dd>개발자로서의 시작으로 직접 개발에 참여하고 경험을 쌓을 수 있었음</dd>
                </div>
                <div>
                  <dt>문제</dt>
                  <dd>
                    <ul>
                      <li>처음부터 완벽한 성과를 내기 어려워 이를 극복하기 위해 노력</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>도전적인 상황에서 성장할 수 있는 기회를 얻음</li>
                      <li>긍정적인 마음가짐으로 어려움을 극복해 나감</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title">
                Product 리뉴얼
                <br /> Vue → React
              </span>
              <span>2022.03</span>
            </div>
            <p>프로덕트 리뉴얼 시기</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>짧은 기간 내에 디자인과 기능을 추가 및 프로덕트 리뉴얼</dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ol>
                      <li>서비스: Vue.js에서 React.js로 코드 이관 및 개선 작업</li>
                      <li>어드민: 기능개선 (상품 관리, 주문 관리, 리뷰 및 문의 관리 등)</li>
                    </ol>
                  </dd>
                </div>
                <div>
                  <dt>장점</dt>
                  <dd>
                    <ol>
                      <li>작성한 코드로 회사 매출 발생</li>
                      <li>팀원들과 함께 노력하며 어려움을 극복해야 했음</li>
                    </ol>
                  </dd>
                </div>

                <div>
                  <dt>문제</dt>
                  <dd>
                    <ol>
                      <li>제한된 시간 내에 완전한 프로덕트 출시 필요로 인한 불안감과 압박</li>
                    </ol>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>Vue.js에서 React.js로의 이관 작업 성공</li>
                      <li>단기간 안에 새로운 도전을 하는 방법</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">프로젝트 라이브러리 버젼관리</span>
              <span>2022.03</span>
            </div>
            <p>React 18 | Typescript 5 | Webpack 5</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>라이브러리 버젼 업그레이드에 맞는 프로젝트 환경수정</dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ol>
                      <li>신규기능과 안정성 확인</li>
                      <li>버젼 업데이트에 따른 수정작업</li>
                      <li>팀원들과 업데이트 내용 공유</li>
                      <li>타사 라이브러리와 발생하는 문제수정 및 타헙</li>
                    </ol>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>ncu를 통한 버젼관리 방법</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-globe"></i>
            <div className="details">
              <span className="title">
                프론트팀 서브모듈 <br />
                스토리북 도입
              </span>
              <span>2022.06</span>
            </div>
            <p>프론트팀 서브모듈 개발 및 스토리북 도입 제안</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>
                    리덕스 데이터 개선을 위한 프론트팀 서브모듈 개발
                    <br /> 신규입사자 온보딩을 위한 스토리북 도입 제안
                  </dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ol>
                      <li>어드민 프로젝트를 위한 리덕스툴킷 사용법 개편</li>
                      <li>
                        문서화 도구를 위한
                        <Link to={'https://storybook.js.org/'} target="_blank" rel="noreferrer">
                          스토리북
                        </Link>
                        <i> | </i>
                        <Link to={'https://www.docz.site/'} target="_blank" rel="noreferrer">
                          Docz
                        </Link>
                        비교작업
                      </li>
                    </ol>
                  </dd>
                </div>
                <div>
                  <dt>장점</dt>
                  <dd>
                    <ol>
                      <li>서브모듈로 제작함으로써 신규프로젝트에 빠르게 도입 가능</li>
                      <li>컴포넌트 단위 변경 사항 스토리북을 통한 팀원 공유</li>
                    </ol>
                  </dd>
                </div>

                <div>
                  <dt>문제</dt>
                  <dd>
                    <ol>
                      <li>신규입사자 기준 추가로 학습해야 하는 내용 증가</li>
                      <li>기존업무량에 추가적으로 문서작성 시간 필요</li>
                    </ol>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>팀장님과 팀원을 설득하기 위한 라이브러리 비교 방법</li>
                      <li>스토리북 도입 및 Git서브모듈 사용 방법</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">Next.js 도입</span>
              <span>2023.03</span>
            </div>
            <p>회사 내 제품중 하나인 기사 관련 CMS서비스를 위한 SSR방식인 Next.js도입</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>프로젝트 스펙에 맞춰 Next.js학습 및 제품제작</dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ul>
                      <li>Next.js에서 프로젝트를 위한 사용법 학습</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>문제</dt>
                  <dd>
                    <ul>
                      <li>Next.js에서 에러 핸들링</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>Next.js + Typescript 사용법</li>
                      <li>Rendering 고도화 작업</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">AWS 기술스텍 학습</span>
              <span>2023.04</span>
            </div>
            <p>AWS(CI/CD)관련 지식 시니어개발자에게 인수</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>AWS에 접속해 배포관련 로그, 환경설정 학습</dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ul>
                      <li>애플리케이션 배포환경 추가</li>
                      <li>Next.js에서 발생하는 Memory leak현상 로그 관측</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>문제</dt>
                  <dd>
                    <ul>
                      <li>Memory leak현상 해결작업</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>
                        AWS 사용법
                        <br /> (Elasticbeanstalk, CloudFront, S3, Route 53)
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-map-marker-alt"></i>
            <div className="details">
              <span className="title">Google API</span>
              <span>2023.05</span>
            </div>
            <p>Analytics | ADManager | ADSense</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>Google에서 제공하는 광고, 데이터수집 작업</dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ul>
                      <li>Next.js환경에 GoogleAPI 삽입</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>Next.js환경에 CSR방식으로 Google광고 사용법</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">텍스트 에디터 개발</span>
              <span>2023.06</span>
            </div>
            <p>기존 워드프레스로 제작하던 컨탠츠관리를 React 환경으로 이관하기 위한 텍스트에디터 제작</p>
            <div className="bottom">
              <dl>
                <div>
                  <dt>목표</dt>
                  <dd>React환경에서 텍스트에디터 제작</dd>
                </div>
                <div>
                  <dt>업무</dt>
                  <dd>
                    <ul>
                      <li>React + DOM 데이터활용 이벤트 헨들링</li>
                      <li>에디터 서브모듈화 작업</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>문제</dt>
                  <dd>
                    <ul>
                      <li>다양한 기능을 제공해야 하는 에디터</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>성장</dt>
                  <dd>
                    <ul>
                      <li>React에서 에디터 기능개발</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </StoryBoard>
  );
}

export default HistoryPage;
