import React from 'react';
import SkillBar from './progress/skill-bar';
import LoadingSkeleton from './loading-skeleton';
import styled from 'styled-components';

interface ISkillListProps {
  list: any;
  sectionRef: any;
  loading: boolean;
}

const SkillList = ({list, sectionRef, loading}: ISkillListProps) => {
  return (
    <ListStyle>
      {loading ? (
        <LoadingSkeleton count={9} />
      ) : (
        list.map((item: any) => <SkillBar key={item.uid} item={item} sectionRef={sectionRef} />)
      )}
    </ListStyle>
  );
};

export default SkillList;

const ListStyle = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
