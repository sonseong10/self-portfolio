import React from 'react';
import GlobalSection from '../../../../components/common/global-section';
import SectionHeader from '../../../../components/common/section-header';
import SectionBody from '../../../../components/common/section-body';
import DrawerItem from './drawer/drawer-item';
import styled from 'styled-components';
import type {IProjectData} from 'types/type';
import Spinner from 'components/spinner/spinner';
import {Container} from 'components/common/layout';

const ProjectList = styled.ul`
  margin: 0;
  padding-left: 0;
  width: 100%;
  list-style: none;
`;

interface IProjectsProps {
  projects: IProjectData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  loading: boolean | undefined;
}

const Projects = ({projects, sectionRef, loading}: IProjectsProps) => {
  return (
    <Container>
      <GlobalSection
        ref={el => {
          if (el && sectionRef.current) sectionRef.current[2] = el;
        }}
      >
        <SectionHeader title={'Side Projects'} />

        <SectionBody>
          {loading ? (
            <Spinner />
          ) : (
            <ProjectList>
              {projects.map((project, index: number) => (
                <DrawerItem key={index} project={project} index={index} />
              ))}
            </ProjectList>
          )}
        </SectionBody>
      </GlobalSection>
    </Container>
  );
};

export default Projects;
