import React from 'react';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import styled from 'styled-components';
import media from 'assets/styles/constants/media';

const SectionHeaderStyle = styled.div`
  margin-bottom: 26px;

  h2 {
    margin: 0;
    ${typography.lage}
    color: ${palette.gray[100]};
    text-align: center;
    font-weight: 500;

    &::after {
      margin-left: 0.1em;
      font-weight: 700;
      color: ${palette.gray[400]};
      content: ';';
    }
  }

  span {
    display: inline-block;
    width: 100%;
    ${typography.small}
    color: ${palette.gray[200]};
    text-align: center;
  }

  ${media.desktop} {
    h2,
    span {
      text-align: left;
    }
  }
`;

interface ISectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({title, description}: ISectionHeaderProps): JSX.Element => {
  return (
    <SectionHeaderStyle>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </SectionHeaderStyle>
  );
};

export default SectionHeader;
