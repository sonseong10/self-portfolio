import React from 'react';
import SkillBar from './progress/skill-bar';
import styled from 'styled-components';
import type {ISkillsData} from 'types/type';
import Spinner from 'components/spinner/spinner';

interface ISkillListProps {
  list: ISkillsData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  loading: boolean | undefined;
}

const SkillList = ({list, sectionRef, loading}: ISkillListProps) => {
  return (
    <ListStyle>
      {loading ? <Spinner /> : list.map(item => <SkillBar key={item.uid} item={item} sectionRef={sectionRef} />)}
    </ListStyle>
  );
};

export default SkillList;

const ListStyle = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
