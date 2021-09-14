import { css } from "@emotion/react";
import React from "react";
import { resetButton } from "../../assets/styles/components/reset-button";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";

const Gnb = () => {
  return (
    <nav css={gnb}>
      <h2 className="sr-only">global navgation</h2>

      <ul>
        <li>
          <button type="button">Skills</button>
        </li>
        <li>
          <button type="button">Projects</button>
        </li>
        <li>
          <button type="button">Artworks</button>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;

const gnb = css`
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding-left: 0;
    list-style: none;

    li {
      flex: 1;

      button {
        ${resetButton}
        padding: 0 8px;
        height: 46px;
        ${typography.small}
        font-weight: 400;
        color: ${palette.gray[300]};
        transition: color 300ms ease-in-out;

        :active {
          color: ${palette.gray[100]};
        }

        ${media.tablet} {
          ${typography.base}
          :hover {
            color: ${palette.gray[100]};
          }
        }
      }
    }
  }
`;
