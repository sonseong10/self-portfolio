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
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 60px);

  i {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HomeLeft = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${palette.gray[100]};
  }

  ${media.tablet} {
    h1 {
      font-size: 82px;
    }
  }

  ${media.desktop} {
    h1 {
      margin-bottom: 3rem;
      font-size: 6rem;
    }
  }
`;

const HomeRight = styled.div`
  dl {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 3rem;

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

function Main(): JSX.Element {
  return (
    <Container>
      <HomeWrapper>
        <HomeLeft>
          <h1>
            안녕하세요
            <br /> 손성열 입니다.
          </h1>
        </HomeLeft>

        <HomeRight>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:sonseong10@gmail.com">sonseong10@gmail.com</a>
              </dd>
            </div>

            <div>
              <dt>Position</dt>
              <dd>Front Developer</dd>
            </div>

            <div>
              <dt>Birthday</dt>
              <dd>
                <time dateTime="1997-04-08">1997.04.08</time>
              </dd>
            </div>
          </dl>
        </HomeRight>

        <i>Down Arrow</i>
      </HomeWrapper>
    </Container>
  );
}
export default React.memo(Main);
