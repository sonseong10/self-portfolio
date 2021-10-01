import React from "react";
import ProjectCarousel from "./carousel/project-carousel";
import SectionHeader from "../section-header/section-header";
import { css } from "@emotion/react";

const Projects = ({ projects }) => {
  return (
    <section css={section}>
      <SectionHeader title={"Projects"} />

      <ProjectCarousel projects={projects} />
    </section>
  );
};

export default Projects;

const section = css`
  margin-bottom: 100px;
`;
