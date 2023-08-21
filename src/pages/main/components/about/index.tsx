import React, {useState} from 'react';
import GlobalSection from 'components/common/global-section';
import SectionBody from 'components/common/section-body';
import SectionHeader from 'components/common/section-header';

import collegeLogo from 'assets/images/college-logo.png';
import typography from 'assets/styles/constants/typograpy';
import palette from 'assets/styles/constants/palette';
import MyIcon from 'assets/images/icons/my-icon';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from 'components/common/layout';

interface IListItemProps {
  data: {
    imgURL: string;
    name: string;
    startDate: string;
    endDate?: string;
    performance?: string[];
    link?: string;
  };
}

const ListItem = ({data}: IListItemProps) => {
  const [show, setShow] = useState<boolean>(false);

  const onToggle = () => {
    setShow(!show);
  };
  return (
    <li>
      <Card onClick={onToggle} type="button" className="shadow">
        <CardLeft>
          <div className="imgWrap">
            <img src={data.imgURL} alt="brand logo" />
          </div>
        </CardLeft>

        <CardRight>
          <InfoList>
            <InfoItem className="name">
              <dt className="sr-only">기관명</dt>
              <dd>
                <strong>{data.name}</strong>
              </dd>
            </InfoItem>

            <InfoItem>
              <dt className="sr-only">시작일</dt>
              <dd className="startDate">
                <time dateTime={data.startDate}>{data.startDate}</time>
              </dd>

              <dt className="sr-only">종료일</dt>
              <dd className="endDate">
                {data.endDate ? <time dateTime={data.endDate}>{data.endDate}</time> : <span>재직중</span>}
              </dd>
            </InfoItem>
          </InfoList>
        </CardRight>

        <IconBox className={show ? 'isActive' : undefined}>
          <MyIcon name="chevron" />
        </IconBox>
      </Card>
      <Drawer className={show ? 'isActive' : undefined}>
        {data.performance?.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
        {data.link ? (
          <li>
            <Link to={data.link} target="_blank" rel="noreferrer">
              공식사이트 이동
            </Link>
          </li>
        ) : null}
      </Drawer>
    </li>
  );
};
const About = () => {
  return (
    <Container>
      <GlobalSection>
        <SectionHeader title="Education" />
        <span>제가 수료한 교육과정을 소개합니다.</span>

        <SectionBody>
          <SectionBody.Inner>
            <HistoryList>
              <ListItem
                data={{
                  imgURL: collegeLogo,
                  name: '인하공업전문대학교',
                  startDate: '2016-03',
                  endDate: '2022-02',
                  performance: ['컴퓨터시스템과 전공', '3-In프로젝트 수료'],
                  link: 'https://cse.inhatc.ac.kr/cse/2199/subview.do',
                }}
              />
            </HistoryList>
          </SectionBody.Inner>
        </SectionBody>
      </GlobalSection>
    </Container>
  );
};

export default About;

const HistoryList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;

  & > li {
    margin-bottom: 14px;
  }
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
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 8px ${palette.gray[500]};
  }
`;

const CardLeft = styled.div`
  .imgWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 18px;

    img {
      display: block;
      width: 80%;
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
