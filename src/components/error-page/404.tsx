import React from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import media from '../../assets/styles/constants/media';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import BaseButton from '../common/base-button';
import styled from 'styled-components';

const ErrorPage = () => {
  const history = useNavigate();

  const goToHome = () => {
    history('/main');
  };
  return (
    <PageWrap>
      <img src={Logo} alt="brand logo" />

      <h2>죄송합니다. 페이지를 찾을 수 없습니다.</h2>

      <p>
        페이지가 존재하지 않거나, 잘못된 요청입니다.
        <br />
        입력하신 주소가 정확한지 다시 확인해주세요
      </p>

      <BaseButton title="Back" handleEvent={goToHome} />
    </PageWrap>
  );
};

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  h2,
  p {
    margin: 0;
  }

  img {
    display: block;
    margin-bottom: 24px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h2 {
    margin-bottom: 6px;
    ${typography.base}
    color: ${palette.gray[100]};
  }

  p {
    margin-bottom: 10px;
    ${typography.small}
    color: ${palette.gray[200]};
  }

  ${media.tablet} {
    h2 {
      ${typography.midium}
    }
    p {
      ${typography.base}
    }
  }
`;
export default ErrorPage;
