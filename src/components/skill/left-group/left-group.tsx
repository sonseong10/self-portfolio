import React from 'react';
import SkillList from './skill-list';
import styled from 'styled-components';

interface ILeftGroupProps {
  skills: any;
  sectionRef: any;
  loading: boolean;
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
