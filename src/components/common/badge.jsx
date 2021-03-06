import React, { memo } from "react";
import { css } from "@emotion/react";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";

const Badge = memo(({ name, color }) => {
  return <div css={badge(color)}>{name}</div>;
});

export default Badge;

const badge = (color) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  ${colorPick(color)};
  ${typography.tiny};
  font-weight: 700;
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
