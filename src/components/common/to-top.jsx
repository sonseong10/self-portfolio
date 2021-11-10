import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../assets/styles/components/reset-button";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";
import media from "../../assets/styles/constants/media";

const ToTop = () => {
  const [scrollFlag, setScrollFlag] = useState(false);

  const throttle = (callback, delay) => {
    let time = null;

    return () => {
      if (time) return;
      time = setTimeout(() => {
        callback();
        time = null;
      }, delay);
    };
  };

  const updateScroll = () => {
    const { scrollY } = window;
    scrollY > 10 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const movoToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div css={topBtn} className={scrollFlag && "isActive"}>
      <button type="button" onClick={movoToTop}>
        Top
      </button>
    </div>
  );
};

export default ToTop;

const topBtn = css`
  display: none;

  ${media.desktop} {
    position: fixed;
    top: 50%;
    right: 8px;
    display: block;
    border-radius: 4px;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    pointer-events: none;

    &.isActive {
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }

    button {
      ${resetButton};
      width: 46px;
      height: 46px;
      ${typography.base}
      color: ${palette.gray[200]};
      font-weight: 700;
      transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

      &:hover {
        background-color: ${palette.brandTheme};
        color: ${palette.white};
      }
    }
  }
`;
