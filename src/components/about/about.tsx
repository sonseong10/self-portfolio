import React, {useState} from 'react';
import GlobalSection from '../common/global-section';
import SectionBody from '../common/section-body';
import SectionHeader from '../section-header/section-header';

import collegeLogo from '../../assets/images/college-logo.png';
import typography from '../../assets/styles/constants/typograpy';
import palette from '../../assets/styles/constants/palette';
import media from '../../assets/styles/constants/media';
import MyIcon from '../icons/my-icon';
import styled, {css} from 'styled-components';

const About = () => {
  const [show, setShow] = useState(false);

  const onToggle = () => {
    setShow(!show);
  };

  return (
    <GlobalSection>
      <SectionHeader title="About" />

      <SectionBody>
        <SectionBody.Inner innerStyle={leftInner}>
          <HistoryList>
            <li>
              <Card onClick={onToggle} type="button">
                <CardLeft>
                  <div className="imgWrap">
                    <img src={collegeLogo} alt="brand logo" />
                  </div>
                </CardLeft>

                <CardRight>
                  <InfoList>
                    <InfoItem className="name">
                      <dt className="sr-only">기관명</dt>
                      <dd>
                        <strong>인하공업전문대학교</strong>
                      </dd>
                    </InfoItem>

                    <InfoItem>
                      <dt className="sr-only">시작일</dt>
                      <dd className="startDate">
                        <time dateTime="2016-03">2016.03</time>
                      </dd>

                      <dt className="sr-only">종료일</dt>
                      <dd className="endDate">
                        <time dateTime="2022-02">2022.02</time>
                      </dd>
                    </InfoItem>
                  </InfoList>
                </CardRight>

                <IconBox className={show ? 'isActive' : undefined}>
                  <MyIcon name="chevron" />
                </IconBox>
              </Card>
              <Drawer className={show ? 'isActive' : undefined}>
                <li>컴퓨터시스템과 전공</li>
                <li>3-In프로젝트 수료</li>
              </Drawer>
            </li>
          </HistoryList>
        </SectionBody.Inner>

        <SectionBody.Inner innerStyle={rightInner}>
          <Desc>
            나만의 학습법으로 공부를 하며, 웹 개발 분야만큼은 수동적인 자세보단 능동적인 학습을 좋아합니다. 그리고 조별
            과제에선 조장 역할로 지도력도 중요하지만, 적재적소 한 배치 능력으로 조원 모두가 프로젝트에 참여할 수 있게
            했습니다.
          </Desc>
          <br />
          <Desc>팀원들과 함께하는 개발을 선호하며, 무지개처럼 다채로운 능력을 갖춘 개발자로 성장하고 싶습니다.</Desc>
        </SectionBody.Inner>
      </SectionBody>
    </GlobalSection>
  );
};

export default About;

const HistoryList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  overflow-y: hidden;
`;

const leftInner = css`
  height: 200px;
  overflow-y: auto;
`;

const rightInner = css`
  height: 200px;
`;

const Card = styled.button`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 10px;
  margin-bottom: 8px;
  width: 100%;
  background-color: ${palette.white};
  border: 1px solid ${palette.gray[500]};
  border-radius: 4px;
  cursor: pointer;
`;

const CardLeft = styled.div`
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

const IconBox = styled.span`
  position: absolute;
  top: 50%;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  align-items: 40px;
  transform: translateY(-50%);
  transition: transform 300ms ease-in-out;

  &.isActive {
    transform: rotate(180deg) translateY(50%);
  }

  svg {
    width: 24px;
    height: 24px;
    path {
      fill: ${palette.gray[200]};
    }
  }
`;

const Drawer = styled.ul`
  li {
    opacity: 0;
    visibility: hidden;
    max-height: 0;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #3f4150;
  }

  &.isActive {
    li {
      opacity: 1;
      visibility: visible;
      max-height: 100%;
    }
  }
`;

const CardRight = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InfoList = styled.dl`
  margin: 0;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  dd {
    margin-left: 0;

    &.startDate::after {
      margin: 0 4px;
      content: '~';
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

const Desc = styled.p`
  margin: 0;
  ${typography.small}
  color: ${palette.gray[200]};

  ${media.tablet} {
    padding: 0 20px;
  }
`;
