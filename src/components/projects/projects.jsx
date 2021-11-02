import React from "react";
import { css } from "@emotion/react";
import GlobalSection from "../common/global-section";
import SectionHeader from "../section-header/section-header";
import SectionBody from "../common/section-body";
import palette from "../../assets/styles/constants/palette";
import DrawerItem from "./drawer/drawer-item";

const Projects = ({ projects, sectionRef }) => {
  return (
    <GlobalSection ref={(el) => (sectionRef.current[1] = el)}>
      <SectionHeader title={"Projects"} />

      <SectionBody>
        <ul css={projectList}>
          {projects.map((project, index) => (
            <DrawerItem key={index} project={project} index={index} />
          ))}
        </ul>
      </SectionBody>
    </GlobalSection>
  );
};

export default Projects;

const projectList = css`
  margin: 0;
  padding-left: 0;
  width: 100%;
  list-style: none;
  border-top: 1px solid ${palette.gray[300]};
  border-bottom: 1px solid ${palette.gray[300]};
`;
