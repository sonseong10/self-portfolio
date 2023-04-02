import React from "react";
import GlobalSection from "../common/global-section";
import SectionHeader from "../section-header/section-header";
import SectionBody from "../common/section-body";
import palette from "../../assets/styles/constants/palette";
import DrawerItem from "./drawer/drawer-item";
import styled from "styled-components";

const Projects = ({ projects, sectionRef }) => {
  return (
    <GlobalSection ref={(el) => (sectionRef.current[1] = el)}>
      <SectionHeader title={"Projects"} />

      <SectionBody>
        <ProjectList>
          {projects.map((project, index) => (
            <DrawerItem key={index} project={project} index={index} />
          ))}
        </ProjectList>
      </SectionBody>
    </GlobalSection>
  );
};

export default Projects;

const ProjectList = styled.ul`
  margin: 0;
  padding-left: 0;
  width: 100%;
  list-style: none;
  border-top: 1px solid ${palette.gray[300]};
  border-bottom: 1px solid ${palette.gray[300]};
`;
