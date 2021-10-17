import React, { forwardRef } from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";

const GlobalSection = forwardRef(({ children }, ref) => {
  return (
    <section css={section} ref={ref}>
      {children}
    </section>
  );
});

export default GlobalSection;

const section = css`
  margin-bottom: 60px;

  ${media.desktop} {
    margin-bottom: 100px;
  }
`;
