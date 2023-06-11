import GlobalSection from 'components/common/global-section';
import SectionBody from 'components/common/section-body';
import SectionHeader from 'components/common/section-header';
import CompanyLogo from 'assets/images/fastview_card.svg';
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';

const BusinessCard = styled(Link)`
  width: 255px;
  height: 144px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  text-decoration: none;
  background-color: ${palette.white};
  box-shadow: 2px 2px 6px ${palette.gray[500]};
  transition: box-shadow 0.2s ease-in-out;

  img {
    display: block;
  }
  dl {
    margin: 0;
    > div {
      display: flex;
      justify-content: flex-end;
      ${typography.tiny}

      dt {
        color: ${palette.gray[400]};
      }
      dd {
        margin: 0 4px;
        color: ${palette.gray[200]};

        strong {
          font-weight: 400;
        }
      }
    }
  }

  &:hover {
    box-shadow: 4px 4px 10px ${palette.gray[500]};
  }
`;

interface IHistoryProps {
  sectionRef: React.MutableRefObject<HTMLElement[]>;
}

const History = ({sectionRef}: IHistoryProps) => {
  return (
    <GlobalSection
      ref={el => {
        if (el && sectionRef.current) sectionRef.current[1] = el;
      }}
    >
      <SectionHeader title={'Work'} />

      <SectionBody>
        <BusinessCard to={'/history/fastview'} className="shadow">
          <div>
            <img src={CompanyLogo} alt="회사로고" />
          </div>
          <dl>
            <div>
              <dt>회사명</dt>
              <dd>
                <strong>Fastview</strong>
              </dd>
            </div>
            <div>
              <dt>직책</dt>
              <dd>손 성열 매니저</dd>
            </div>
            <div>
              <dt>소속</dt>
              <dd>제품개발기획팀</dd>
            </div>
          </dl>
        </BusinessCard>
      </SectionBody>
    </GlobalSection>
  );
};

export default History;
