import media from 'assets/styles/constants/media';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';
import {Container} from 'components/common/layout';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <HomeLeft>
        <h1>
          빠른적응 능력을 가진
          <br /> 손성열 입니다.
        </h1>

        <span>빠른적응 능력</span>
        <ol>
          <li>최신기술을 팔로우 하며 적용하기</li>
          <li>배움에 있어 범주를 가리지않고 도전하기</li>
          <li>넉살스러운 웃음과 스며드는 매력에 커뮤니케이션</li>
        </ol>
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
            <dt>Name</dt>
            <dd>손 성열(seongyeol Son)</dd>
          </div>

          <div>
            <dt>Birthday</dt>
            <dd>
              <time dateTime="1997-04-08">1997-04-08</time>
            </dd>
          </div>
        </dl>
      </HomeRight>
    </Container>
  );
};
export default React.memo(Home);

// const HomeWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: calc(100vh - 60px);

//   ${media.desktop} {
//     justify-content: space-between;
//     flex-direction: row;
//   }
// `;

const HomeLeft = styled.div`
  margin-bottom: 80px;

  h1,
  p {
    font-style: normal;
    /* text-align: left; */
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

const HomeRight = styled.div`
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
