import React, { memo } from "react";
import { resetButton } from "../../assets/styles/components/reset-button";
import typography from "../../assets/styles/constants/typograpy";
import styled from "styled-components";

const ThemeButton = memo(({ toggleTheme, theme }) => {
  return (
    <ThemeBtn
      onClick={toggleTheme}
      type="button"
      aria-label={`${theme} 모드 변경`}
    >
      {theme === "dark" ? "🌚" : "🌝"}
    </ThemeBtn>
  );
});

export default ThemeButton;

const ThemeBtn = styled.button`
  ${resetButton}
  width: 46px;
  height: 46px;
  ${typography.midium}
`;
