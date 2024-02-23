import media from 'assets/styles/constants/media';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';
import {Container} from 'components/common/layout';
import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: calc(100vh - 60px);

  i {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
  }

  > div {
    width: 18rem;
  }

  ${media.tablet} {
    > div {
      width: 36em;
    }
  }

  ${media.desktop} {
    > div {
      width: 100%;
    }
  }
`;

const Intro = styled.div`
  h1 {
    position: relative;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${palette.gray[100]};
  }

  p {
    word-break: break-all;
  }

  ${media.tablet} {
    h1 {
      font-size: 82px;
    }

    p {
      font-size: 1.2rem;
    }
  }

  ${media.desktop} {
    h1 {
      margin-bottom: 3rem;
      font-size: 6rem;

      span::after {
        position: absolute;
        bottom: 16px;
        left: 2px;
        width: 240px;
        height: 12px;
        display: block;
        background-color: ${palette.brandTheme};
        content: '';
        z-index: -1;
      }
    }
  }
`;

const Info = styled.div`
  dl {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 3rem;

    div {
      text-align: center;

      dt {
        margin-bottom: 8px;
        color: ${palette.gray[100]};
        font-weight: 500;
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

function Main(): JSX.Element {
  return (
    <Container>
      <HomeWrapper>
        <Intro>
          <h1>
            안녕하세요
            <br /> <span>손성열</span> 입니다.
          </h1>

          <p>
            현재 초년차 개발자로 웹 프론트엔드 개발자로 데이터 가공을 좋아해 백엔드 업무도 도맡아 프로젝트를 진행했으며,
            <br />
            다양한 프로젝트 경험 커리어를 쌓고싶습니다.
          </p>

          <p>문서화하는 작업을 좋아하며 비개발자분들과 소통하는 시간또한 중요하다고 생각합니다.</p>
        </Intro>

        <Info>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:sonseong10@gmail.com">sonseong10@gmail.com</a>
              </dd>
            </div>

            <div>
              <dt>Position</dt>
              <dd>Web Frontend Developer</dd>
            </div>

            <div>
              <dt>Birthday</dt>
              <dd>
                <time dateTime="1997-04-08">1997.04.08</time>
              </dd>
            </div>
          </dl>
        </Info>
      </HomeWrapper>
    </Container>
  );
}
export default React.memo(Main);
