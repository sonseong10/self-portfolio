import React from 'react';
import SkillList from './skill-list';
import styled from 'styled-components';
import type {ISkillsData} from 'types/type';

interface ILeftGroupProps {
  skills: ISkillsData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  loading: boolean | undefined;
}

const LeftGroup = ({skills, sectionRef, loading}: ILeftGroupProps) => {
  return (
    <LeftGroupStyle>
      <SkillList list={skills} sectionRef={sectionRef} loading={loading} />
    </LeftGroupStyle>
  );
};

export default LeftGroup;

const LeftGroupStyle = styled.div`
  width: 100%;
`;
