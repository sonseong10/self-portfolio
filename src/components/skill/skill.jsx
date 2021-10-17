import React from "react";
import SectionHeader from "../section-header/section-header";
import LeftGroup from "./left-group/left-group";
import RightGroup from "./right-group/right-group";
import GlobalSection from "../common/global-section";
import SectionBody from "../common/section-body";

const Skill = ({ skills, sectionRef }) => {
  const leftRatio = 2;

  return (
    <GlobalSection ref={(el) => (sectionRef.current[0] = el)}>
      <SectionHeader title={"Skills"} />

      <SectionBody>
        <SectionBody.Inner ratio={leftRatio}>
          <LeftGroup skills={skills} />
        </SectionBody.Inner>

        <SectionBody.Inner>
          <RightGroup />
        </SectionBody.Inner>
      </SectionBody>
    </GlobalSection>
  );
};

export default Skill;
