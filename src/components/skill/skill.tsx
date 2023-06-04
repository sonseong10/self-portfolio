import React from 'react';
import SectionHeader from '../section-header/section-header';
import LeftGroup from './left-group/left-group';
import RightGroup from './right-group/right-group';
import GlobalSection from '../common/global-section';
import SectionBody from '../common/section-body';
import styled from 'styled-components';

const SectionBodyStyle = styled(SectionBody)`
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: center;
  }
`;

interface ISkillProps {
  skills: any;
  sectionRef: any;
  loading: any;
}

const Skill = ({skills, sectionRef, loading}: ISkillProps) => {
  // const skillRef = (el?: any) => (sectionRef.current[0] = el);

  return (
    <GlobalSection ref={(el?: any) => (sectionRef.current[0] = el)}>
      <SectionHeader title={'Skills'} />

      <SectionBodyStyle>
        <SectionBody.Inner ratio={2}>
          <LeftGroup skills={skills} sectionRef={sectionRef} loading={loading} />
        </SectionBody.Inner>

        <SectionBody.Inner>
          <RightGroup />
        </SectionBody.Inner>
      </SectionBodyStyle>
    </GlobalSection>
  );
};

export default Skill;
