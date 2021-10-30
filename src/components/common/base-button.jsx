import React from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../assets/styles/components/reset-button";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";

const BaseButton = ({ title, handleEvent }) => {
  return (
    <button css={primaryBtn} type="button" onClick={handleEvent}>
      {title}
    </button>
  );
};

export default BaseButton;

const Link = ({ title, URL }) => {
  return (
    <a href={URL} css={primaryLink}>
      {title}
    </a>
  );
};

BaseButton.Link = Link;

const baseStyle = css`
  ${resetButton}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: ${palette.gray[200]};
  ${typography.base};
  color: ${palette.white};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 200ms ease-in-out;

  &:active {
    background-color: ${palette.brandTheme};
  }

  ${media.tablet} {
    width: 180px;
  }

  ${media.desktop} {
    width: 240px;
    &:hover {
      background-color: ${palette.brandTheme};
    }
  }
`;

const primaryBtn = css`
  width: 140px;
  ${baseStyle}
`;

const primaryLink = css`
  ${baseStyle}
  width: 46%;

  ${media.tablet} {
    width: 46%;
  }
`;
