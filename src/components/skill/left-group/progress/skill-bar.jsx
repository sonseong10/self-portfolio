import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import media from "../../../../assets/styles/constants/media";
import palette from "../../../../assets/styles/constants/palette";
import typography from "../../../../assets/styles/constants/typograpy";
import Observer from "../../../../utils/observer";

const SkillBar = ({ item, sectionRef }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = Observer(setIsActive);

    observer.observe(sectionRef.current[0]);

    return () => observer.disconnect();
  }, [sectionRef]);

  return (
    <li css={listItem} aria-label="skill level">
      <strong>{item.name}</strong>
      <div css={progress} aria-hidden>
        <div css={isActive && charge(item.score)}></div>
      </div>
      <strong>{item.score}%</strong>
    </li>
  );
};

export default SkillBar;

const listItem = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;

  strong {
    ${typography.small}
    font-weight: 400;
    color: ${palette.gray[100]};

    &:first-of-type {
      flex: 1;
    }
  }

  ${media.tablet} {
    strong {
      &:first-of-type {
        text-align: right;
      }
    }
  }
`;

const progress = css`
  flex: 3;
  height: 8px;
  margin: 0 10px;
  background-color: ${palette.gray[500]};
  overflow-x: hidden;

  div {
    height: 100%;
    background-color: ${palette.brandTheme};
    transform: translate3d(-100%, 0, 0);
    transition: transform 600ms ease-in-out;
  }

  ${media.desktop} {
    flex: 5;
    height: 10px;
  }
`;

const charge = (score) => css`
  max-width: ${score}%;
  transform: none !important;
`;
