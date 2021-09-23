import { css } from "@emotion/react";
import React from "react";
import media from "../../../assets/styles/constants/media";
import palette from "../../../assets/styles/constants/palette";
import typography from "../../../assets/styles/constants/typograpy";

const RightGroup = () => {
  return (
    <div css={rightGroup}>
      <div css={groupBox}>
        <h3>Description</h3>
        <p>
          10 ~ 29: 작성된 코드를 보고 기능 추측을 할 수 있습니다. <br />
          30 ~ 69: 코드 작성을 해본 경험이 있으며 학습해 나아갈 예정입니다.
          <br />
          70 ~ 100: 언어 사용의 이해도가 높으며 사용 경험이 많은 언어입니다.
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
const rightGroup = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const groupBox = css`
  margin-bottom: 26px;

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

  ${media.tablet} {
    margin-bottom: 14px;
  }

  ${media.desktop} {
    margin-bottom: 40px;
  }
`;
export default RightGroup;
