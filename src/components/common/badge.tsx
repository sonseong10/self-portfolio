import React from 'react';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import styled from 'styled-components';

interface IBadgeProps {
  name: string;
  color: 'gray' | 'blue';
}

const Badge = ({name, color}: IBadgeProps) => {
  return <BadgeStyle color={color}>{name}</BadgeStyle>;
};

export default React.memo(Badge);

const BadgeStyle = styled.div<{color: 'gray' | 'blue'}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  ${props => (props.color ? colorPick(props.color) : undefined)};
  ${typography.tiny};
  font-weight: 700;
  border-radius: 4px;
`;

const colorPick = (color: 'gray' | 'blue') => {
  switch (color) {
    case 'gray':
      return `background-color: ${palette.gray[500]}; color: ${palette.gray[200]}; `;

    case 'blue':
      return `background-color: ${palette.brandTheme}; color: ${palette.white}; `;
    default:
      break;
  }
};
