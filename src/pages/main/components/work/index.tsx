import GlobalSection from 'components/common/global-section';
import SectionBody from 'components/common/section-body';
import SectionHeader from 'components/common/section-header';
import CompanyLogo from 'assets/images/fastview_card.svg';
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';
import {Container} from 'components/common/layout';
import media from 'assets/styles/constants/media';
import {NextArrow} from 'assets/styles/constants/svgIcon';

const BusinessCard = styled(Link)`
  width: 255px;
  height: 144px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  text-decoration: none;
  border: 1px solid ${palette.gray[500]};
  transition: box-shadow 0.2s ease-in-out;

  img {
    display: block;
  }
  dl {
    margin: 0;
    > div {
      display: flex;
      justify-content: flex-end;
      ${typography.tiny}

      dt {
        color: ${palette.gray[400]};
        margin-right: 2px;
      }
      dd {
        margin: 0 4px;
        color: ${palette.gray[200]};

        strong {
          font-weight: 400;
        }
      }
    }
  }

  &:hover {
    opacity: 0.6;
  }
`;

const BusinessList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;

  list-style: none;

  > li {
    > div {
      display: none;
    }
  }

  ${media.desktop} {
    justify-content: flex-start;
    width: 100%;

    > li {
      width: 100%;
      display: flex;
      padding: 3rem 0;
      border-bottom: 1px solid ${palette.gray[500]};

      > div {
        display: block;
      }

      dl {
        margin: 0;

        dd {
          margin-left: 0;
          color: ${palette.gray[200]};
        }
      }

      h3 {
        margin-top: 0;

        a {
          color: ${palette.gray[100]};
          text-decoration: none;

          display: flex;
          align-items: center;
          margin-right: 24px;
          padding-right: 20px;

          &::after {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url(${NextArrow('#1d1d1d')}) no-repeat center center;
            content: '';
          }
        }
      }

      h4 {
        font-weight: 500;
      }

      > a {
        margin-right: 24px;
      }

      ul:not(:last-child) {
        list-style: initial;
        padding-left: 16px;
      }
    }
  }
`;

const CommentsList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    span {
      color: ${palette.gray[300]};
      margin-left: 6px;
    }
  }
`;

interface IHistoryProps {
  sectionRef: React.MutableRefObject<HTMLElement[]>;
}

const History = ({sectionRef}: IHistoryProps) => {
  return (
    <Container>
      <GlobalSection
        ref={el => {
          if (el && sectionRef.current) sectionRef.current[0] = el;
        }}
      >
        <SectionHeader title="Work Experience" description="명함을 눌러 자세한 실무경험을 확인하세요." />

        <SectionBody style={{alignItems: 'center'}}>
          <BusinessList>
            <li>
              <BusinessCard to={'/history/fastview'} className="card">
                <div>
                  <img src={CompanyLogo} alt="회사로고" />
                </div>
                <dl>
                  <div>
                    <dt>회사명</dt>
                    <dd>
                      <strong>Fastview</strong>
                    </dd>
                  </div>
                  <div>
                    <dt>직책</dt>
                    <dd>손 성열 매니저</dd>
                  </div>
                  <div>
                    <dt>소속</dt>
                    <dd>제품개발그룹</dd>
                  </div>
                </dl>
              </BusinessCard>

              <div>
                <h3>
                  <a href="https://www.fastviewkorea.com/2022/main/main.html" target="_blank" rel="noreferrer">
                    Fastview
                  </a>
                </h3>

                <dl>
                  <dt className="sr-only">근무기간</dt>
                  <dd>
                    <time dateTime="2022-1">2022.1</time>
                    <span>-</span>
                    <time dateTime="2022-1">2023.11</time>
                  </dd>
                </dl>

                <dl>
                  <dt className="sr-only">직책</dt>
                  <dd>Web Frontend Developer</dd>
                </dl>

                <h4 className="sr-only">Description</h4>
                <p>
                  Vue2와 React18 그리고 Next13.js를 사용해서 제품(이커머스, 광고, CMS)의 백오피스와 사용자 화면작업을
                  했습니다.
                </p>
                <h4>Details</h4>
                <ul>
                  <li>Vue에서 React로 리펙토링</li>
                  <li>이커머스, 광고, CMS 등 다양한 도메인 지식</li>
                  <li>스토리북을 활용하여 신규입사자 온보딩 문서제작</li>
                  <li>백오피스 어드민에서 컴포넌트 재사용을 위한 Gitsubmobule제작</li>
                </ul>
                <h4>Tech Stacks</h4>
                <p>React, Next.js, Redux-toolkit, TypeScript, SCSS, Styled-componenet, Kotlin, MySQL, Github</p>

                <h4>Comments</h4>
                <CommentsList>
                  <li>
                    <q>
                      팀에서는 막내. 하지만 각종 어드민 천재라고 함. 광고 붙이는 작업 많이 수행함, CMS에서 사용할
                      에디터를 만들었음.
                    </q>
                    <span>이** 그룹장</span>
                  </li>
                  <li>
                    <q>연차대비 데이터 가공하는걸 좋아하고 잘하는거 같다</q>
                    <span>윤** 매니저</span>
                  </li>
                </CommentsList>
              </div>
            </li>
          </BusinessList>
        </SectionBody>
      </GlobalSection>
    </Container>
  );
};

export default History;
