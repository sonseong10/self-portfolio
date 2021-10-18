import React from "react";
import { css } from "@emotion/react";
import typography from "../../assets/styles/constants/typograpy";
import palette from "../../assets/styles/constants/palette";
import media from "../../assets/styles/constants/media";
import GlobalSection from "../common/global-section";

const Home = () => {
  return (
    <GlobalSection>
      <div css={home}>
        <div css={homeLeft}>
          <h1>Developer</h1>

          <p>
            성실하게 팀원과 협업 하며 변함없이 <br />
            열심히 나아가는 개발자입니다.
          </p>
        </div>

        <div css={homeRight}>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:sonseong10@gmail.com">sonseong10@gmail.com</a>
              </dd>
            </div>

            <div>
              <dt>Name</dt>
              <dd>Son seongyeol</dd>
            </div>

            <div>
              <dt>Date</dt>
              <dd>
                <time dateTime="1997-04-08">1997-04-08</time>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </GlobalSection>
  );
};

const home = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 60px);

  ${media.desktop} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const homeLeft = css`
  margin-bottom: 80px;

  h1,
  p {
    margin: 0;
  }

  h1 {
    margin-bottom: 8px;
    font-size: 62px;
    color: ${palette.gray[100]};
  }

  p {
    ${typography.small}
    color: ${palette.gray[200]};
    text-align: center;
  }

  ${media.tablet} {
    h1 {
      margin-bottom: 12px;
      font-size: 84px;
    }
  }

  ${media.desktop} {
    margin-bottom: 0;

    p {
      ${typography.base}
      text-align: left;
    }
  }
`;

const homeRight = css`
  dl {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0;

    div {
      text-align: center;

      dt {
        margin-bottom: 8px;
        color: ${palette.gray[100]};
        font-weight: 700;
      }

      dd,
      a {
        ${typography.base}
        color: ${palette.gray[200]};
      }

      dd {
        margin-left: 0;
      }

      a {
        text-decoration: none;

        :active {
          opacity: 0.4;
        }

        ${media.desktop} {
          :hover {
            opacity: 0.4;
          }
        }
      }
    }

    div:not(:last-child) {
      margin-bottom: 24px;
    }

    ${media.tablet} {
      flex-direction: row;

      div {
        text-align: left;
      }

      div:not(:last-child) {
        margin-right: 64px;
        margin-bottom: 0;
      }
    }
  }
`;
export default Home;
