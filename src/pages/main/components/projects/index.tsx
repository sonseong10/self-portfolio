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

  > li:nth-child(even) > div {
    flex-direction: row-reverse;
  }
`;

interface IProjectsProps {
  projects: IProjectData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  loading: boolean | undefined;
}

const Projects = ({loading, projects, sectionRef}: IProjectsProps) => {
  return (
    <Container>
      <GlobalSection
        ref={el => {
          if (el && sectionRef.current) sectionRef.current[1] = el;
        }}
      >
        <SectionHeader title="Side Projects" description="실무경험 외 개인 학습 프로젝트와 오픈소스 참여내역입니다." />
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
