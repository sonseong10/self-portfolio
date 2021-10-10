import React from "react";
import { css } from "@emotion/react";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";

const Badge = ({ name, color }) => {
  return <li css={badge(color)}>{name}</li>;
};

export default Badge;

const badge = (color) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  ${colorPick(color)};
  ${typography.tiny};
  border-radius: 4px;
`;

const colorPick = (color) => {
  switch (color) {
    case "gray":
      return `background-color: ${palette.gray[500]}; color: ${palette.gray[200]}; `;

    case "blue":
      return `background-color: ${palette.brandTheme}; color: ${palette.white}; `;
    default:
      break;
  }
};
