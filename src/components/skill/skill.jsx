import React from "react";
import SectionHeader from "../section-header/section-header";
import LeftGroup from "./left-group/left-group";
import RightGroup from "./right-group/right-group";
import GlobalSection from "../common/global-section";
import SectionBody from "../common/section-body";
import styled from "styled-components";

const Skill = ({ skills, sectionRef, loading }) => {
  const skillRef = (el) => (sectionRef.current[0] = el);

  return (
    <GlobalSection ref={skillRef}>
      <SectionHeader title={"Skills"} />

      <SectionBodyStyle>
        <SectionBody.Inner ratio={2}>
          <LeftGroup
            skills={skills}
            sectionRef={sectionRef}
            loading={loading}
          />
        </SectionBody.Inner>

        <SectionBody.Inner>
          <RightGroup />
        </SectionBody.Inner>
      </SectionBodyStyle>
    </GlobalSection>
  );
};

export default Skill;

const SectionBodyStyle = styled(SectionBody)`
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: center;
  }
`;
