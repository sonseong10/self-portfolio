import React from 'react';
import {resetButton} from '../../assets/styles/components/reset-button';
import media from '../../assets/styles/constants/media';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import styled, {css} from 'styled-components';

interface IBaseButtonProps {
  title: string;
  handleEvent: () => void;
  color?: string;
}

const BaseButton = ({title, handleEvent, color}: IBaseButtonProps) => {
  return (
    <PrimaryBtn type="button" onClick={handleEvent} color={color}>
      {title}
    </PrimaryBtn>
  );
};

export default BaseButton;

interface ILinkProps {
  title: string;
  URL: string;
  color?: string;
}

const Link = ({title, URL, color}: ILinkProps) => {
  return (
    <PrimaryLink href={URL} target="_blank" color={color}>
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
  transition: opacity 200ms ease-in-out;

  &:active {
    opacity: 0.6;
  }

  ${media.tablet} {
    width: 180px;
  }

  ${media.desktop} {
    width: 240px;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const PrimaryBtn = styled.button`
  width: 140px;
  ${baseStyle}
`;

const PrimaryLink = styled.a<{color?: string}>`
  ${baseStyle}
  width: 50%;

  ${props => {
    if (props.color === 'primary') {
      return css`
        border-color: #0066ff;
        background-color: #0066ff;
        color: #fff;
      `;
    } else {
      return css``;
    }
  }}

  ${media.tablet} {
    width: 125px;
  }
`;
