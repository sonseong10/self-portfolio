import React from "react";
import GlobalSection from "../common/global-section";
import SectionBody from "../common/section-body";
import SectionHeader from "../section-header/section-header";

import collegeLogo from "../../assets/images/college-logo.png";
import { css } from "@emotion/react";
import typography from "../../assets/styles/constants/typograpy";
import palette from "../../assets/styles/constants/palette";
import media from "../../assets/styles/constants/media";

const About = () => {
  return (
    <GlobalSection>
      <SectionHeader title="About" />

      <SectionBody>
        <SectionBody.Inner innerStyle={leftInner}>
          <ul css={historyList}>
            <li>
              <div css={card}>
                <div css={cardLeft}>
                  <div className="imgWrap">
                    <img src={collegeLogo} alt="brand logo" />
                  </div>
                </div>

                <div css={cardRight}>
                  <dl css={infoList}>
                    <div css={infoItem} className="name">
                      <dt className="sr-only">기관명</dt>
                      <dd>
                        <strong>인하공업전문대학교</strong>
                      </dd>
                    </div>

                    <div css={infoItem}>
                      <dt className="sr-only">시작일</dt>
                      <dd className="startDate">
                        <time dateTime="2016-03">2016.03</time>
                      </dd>

                      <dt className="sr-only">종료일</dt>
                      <dd className="endDate">
                        <time dateTime="2022-02">2022.02</time>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </li>
          </ul>
        </SectionBody.Inner>

        <SectionBody.Inner innerStyle={rightInner}>
          <p css={desc}>
            나만의 학습법으로 공부를 하며, 웹 개발 분야만큼은 수동적인 자세보단
            능동적인 학습을 좋아합니다. 그리고 조별 과제에선 조장 역할로
            지도력도 중요하지만, 적재적소 한 배치 능력으로 조원 모두가
            프로젝트에 참여할 수 있게 했습니다.
          </p>
          <br />
          <p css={desc}>
            팀원들과 함께하는 개발을 선호하며, 무지개처럼 다채로운 능력을 갖춘
            개발자로 성장하고 싶습니다.
          </p>
        </SectionBody.Inner>
      </SectionBody>
    </GlobalSection>
  );
};

export default About;

const historyList = css`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const leftInner = css`
  height: 200px;
  overflow-y: auto;
`;

const rightInner = css`
  height: 200px;
`;

const card = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 10px;
  width: 100%;
  border: 1px solid ${palette.gray[500]};
  border-radius: 4px;
`;

const cardLeft = css`
  .imgWrap {
    width: 50px;
    height: 50px;
    margin-right: 18px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const cardRight = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const infoList = css`
  margin: 0;
`;

const infoItem = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  dd {
    margin-left: 0;

    &.startDate::after {
      margin: 0 4px;
      content: "~";
      color: ${palette.gray[300]};
    }

    > strong {
      display: block;
      margin-bottom: 4px;
      ${typography.base}
      font-weight: 400;
      color: ${palette.gray[100]};
    }

    > time {
      ${typography.small}
      color: ${palette.gray[300]}
    }
  }
`;

const desc = css`
  margin: 0;
  ${typography.small}
  color: ${palette.gray[200]};

  ${media.tablet} {
    padding: 0 20px;
  }
`;
