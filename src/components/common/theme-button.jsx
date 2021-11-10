import React, { memo } from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../assets/styles/components/reset-button";
import typography from "../../assets/styles/constants/typograpy";

const ThemeButton = memo(({ toggleTheme, theme }) => {
  return (
    <button css={themeBtn} onClick={toggleTheme} type="button">
      {theme === "dark" ? "🌚" : "🌝"}
    </button>
  );
});

export default ThemeButton;

const themeBtn = css`
  ${resetButton}
  width: 46px;
  height: 46px;
  ${typography.midium}
`;
