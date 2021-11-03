import React from "react";
import SectionHeader from "../section-header/section-header";
import LeftGroup from "./left-group/left-group";
import RightGroup from "./right-group/right-group";
import GlobalSection from "../common/global-section";
import SectionBody from "../common/section-body";
import { css } from "@emotion/react";

const Skill = ({ skills, sectionRef }) => {
  const skillRef = (el) => (sectionRef.current[0] = el);

  return (
    <GlobalSection ref={skillRef}>
      <SectionHeader title={"Skills"} />

      <SectionBody style={moblieRow}>
        <SectionBody.Inner ratio={2}>
          <LeftGroup skills={skills} sectionRef={sectionRef} />
        </SectionBody.Inner>

        <SectionBody.Inner>
          <RightGroup />
        </SectionBody.Inner>
      </SectionBody>
    </GlobalSection>
  );
};

export default Skill;

const moblieRow = css`
  @media (orientation: landscape) {
    flex-direction: row;
    align-items: center;
  }
`;
