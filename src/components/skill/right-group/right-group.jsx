import React from "react";
import { css } from "@emotion/react";
import media from "../../../assets/styles/constants/media";
import palette from "../../../assets/styles/constants/palette";
import typography from "../../../assets/styles/constants/typograpy";

const RightGroup = () => {
  return (
    <div css={rightGroup}>
      <div css={groupBox}>
        <h3>Description</h3>
        <p>
          10 ~ 29%: 작성된 코드의 동작을 예상 할 수 있습니다. <br />
          30 ~ 69%: 사용 경험이 있으며 지속적 학습 예정입니다. <br />
          70 ~ 100%: 사용법을 이해하며 경험이 많은 언어입니다.
        </p>
      </div>

      <div css={groupBox}>
        <h3>Develop tool</h3>
        <p>Git, Webpack, NPM, Yarn, Firebase, Netify, VSCode, Storybook</p>
      </div>

      <div css={groupBox}>
        <h3>Etc</h3>
        <p>Figma, Slack, Notion</p>
      </div>
    </div>
  );
};

export default RightGroup;

const rightGroup = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  ${media.tablet} {
    padding-left: 20px;
  }

  @media (orientation: landscape) {
    padding-left: 20px;
  }
`;

const groupBox = css`
  margin-bottom: 28px;

  h3,
  p {
    margin: 0;
  }

  h3 {
    margin-bottom: 8px;
    ${typography.base}
    color: ${palette.gray[100]};
  }

  p {
    ${typography.small}
    color: ${palette.gray[200]};
  }

  ${media.desktop} {
    margin-bottom: 26px;
  }
`;
