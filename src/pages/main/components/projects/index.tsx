import React from 'react';
import GlobalSection from 'components/common/global-section';
import SectionHeader from 'components/common/section-header';
import SectionBody from 'components/common/section-body';
import styled from 'styled-components';
import type {IProjectData} from 'types/type';
import Spinner from 'components/spinner/spinner';
import {Container} from 'components/common/layout';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';
import {NextArrow} from 'assets/styles/constants/svgIcon';
import ListItem from './list/ListItem';

const ProjectList = styled.ul`
  margin: 0;
  padding-left: 0;
  width: 100%;
  list-style: none;

  > li:nth-child(even) > div {
    flex-direction: row-reverse;
  }
`;

const OpenSourceList = styled.ul`
  li {
    margin-bottom: 8px;
    a {
      display: flex;
      align-items: center;
      ${typography.midium}
      color: ${palette.gray[100]};
      text-decoration: none;

      &::after {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url(${NextArrow('#1d1d1d')}) no-repeat center center;
        content: '';
      }
    }

    span {
      ${typography.small}
      color: ${palette.gray[200]};
    }
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
        <SectionHeader title="Side Projects" description="실무경험 외 개인 학습 프로젝트를 소개합니다." />
        <SectionBody>
          {loading ? (
            <Spinner />
          ) : (
            <ProjectList>
              {projects.map((project, index: number) => (
                <ListItem key={index} project={project} index={index} />
              ))}
            </ProjectList>
          )}
        </SectionBody>
      </GlobalSection>
      <GlobalSection>
        <SectionHeader title="OpenSource" description="오픈소스 참여내역입니다." />
        <SectionBody>
          <OpenSourceList>
            <li>
              <a href="https://github.com/sonseong10/typescript-book" target="_blank" rel="noreferrer">
                Deep Dive TypeScript
              </a>
              <span>한국어번역 참여</span>
            </li>
            <li>
              <a href="https://github.com/mskims/redux-saga-in-korean/pull/46" target="_blank" rel="noreferrer">
                Redux-Saga in-korean
              </a>
              <span>한국어번역과 오타수정</span>
            </li>
            <li>
              <a href="https://github.com/wh-iterabb-it/meowfacts/pull/305" target="_blank" rel="noreferrer">
                MeowFacts
              </a>
              <span>한국어 기능추가</span>
            </li>
          </OpenSourceList>
        </SectionBody>
      </GlobalSection>
    </Container>
  );
};

export default Projects;
