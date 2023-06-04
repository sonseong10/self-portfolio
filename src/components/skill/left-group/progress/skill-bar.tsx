import React, {useEffect, useState} from 'react';
import media from '../../../../assets/styles/constants/media';
import palette from '../../../../assets/styles/constants/palette';
import typography from '../../../../assets/styles/constants/typograpy';
import Observer from '../../../../utils/observer';
import styled from 'styled-components';
import type {ISkillsData} from 'types/type';

interface ISkillBarProps {
  item: ISkillsData;
  sectionRef: React.MutableRefObject<HTMLElement[]>;
}

const SkillBar = ({item, sectionRef}: ISkillBarProps) => {
  const [isActive, setIsActive] = useState<boolean | Element>(false);

  useEffect(() => {
    const observer = Observer(setIsActive);

    observer.observe(sectionRef.current[0]);

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <ListItem aria-label="skill level">
      <strong>{item.name}</strong>
      <Progress aria-hidden>{isActive && <Score score={item.score + (item.alpa ? item.alpa : 0)} />}</Progress>
      <strong>{item.score + (item.alpa ? item.alpa : 0)}%</strong>
    </ListItem>
  );
};

export default SkillBar;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;

  strong {
    ${typography.small}
    font-weight: 400;
    color: ${palette.gray[100]};

    &:first-of-type {
      flex: 1;
    }
  }

  ${media.tablet} {
    strong {
      &:first-of-type {
        text-align: right;
      }
    }
  }
`;

const Progress = styled.div`
  flex: 3;
  height: 8px;
  margin: 0 10px;
  background-color: ${palette.gray[500]};
  border-radius: 4px;
  overflow-x: hidden;

  div {
    height: 100%;
    background-color: ${palette.brandTheme};
    transform: translate3d(-100%, 0, 0);
    border-radius: 4px;
    transition: transform 600ms ease-in-out;
  }

  ${media.desktop} {
    flex: 5;
    height: 10px;
  }
`;

const Score = styled.div<{score: number}>`
  max-width: ${props => props.score}%;
  transform: none !important;
`;
