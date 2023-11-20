import React from 'react';
import {resetButton} from '../../assets/styles/components/reset-button';
import media from '../../assets/styles/constants/media';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import styled, {css} from 'styled-components';

interface IBaseButtonProps {
  title: string;
  handleEvent: () => void;
}

const BaseButton = ({title, handleEvent}: IBaseButtonProps) => {
  return (
    <PrimaryBtn type="button" onClick={handleEvent}>
      {title}
    </PrimaryBtn>
  );
};

export default BaseButton;

interface ILinkProps {
  title: string;
  URL: string;
}

const Link = ({title, URL}: ILinkProps) => {
  return (
    <PrimaryLink href={URL} target="_blank">
      {title}
    </PrimaryLink>
  );
};

BaseButton.Link = Link;

const baseStyle = css`
  ${resetButton}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: ${palette.white};
  ${typography.base};
  font-weight: 700;
  color: ${palette.gray[200]};
  text-decoration: none;
  border: 1px solid ${palette.gray[500]};
  border-radius: 4px;
  transition: background-color 300ms ease-in-out;

  &:active {
    background-color: ${palette.gray[600]};
  }

  ${media.tablet} {
    width: 180px;
  }

  ${media.desktop} {
    width: 240px;
    &:hover {
      background-color: ${palette.gray[600]};
    }
  }
`;

const PrimaryBtn = styled.button`
  width: 140px;
  ${baseStyle}
`;

const PrimaryLink = styled.a`
  ${baseStyle}
  width: 46%;

  ${media.tablet} {
    width: 46%;
  }
`;
