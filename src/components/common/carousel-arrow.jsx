import React from "react";
import { css } from "@emotion/react";
import palette from "../../assets/styles/constants/palette";
import MyIcon from "../icons/my-icon";

const CarouselArrow = ({ children }) => {
  return <button type="button">{children}</button>;
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} prevBtn`}
      style={{ ...style }}
      css={toolBtn}
      onClick={onClick}
      type="button"
      aria-label="prev button"
    >
      <MyIcon name="chevron" />
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} nextBtn`}
      style={{ ...style }}
      css={toolBtn}
      onClick={onClick}
      type="button"
      aria-label="next button"
    >
      <MyIcon name="chevron" />
    </button>
  );
};

CarouselArrow.PrevArrow = PrevArrow;
CarouselArrow.NextArrow = NextArrow;

export default CarouselArrow;

const toolBtn = css`
  &.nextBtn,
  &.prevBtn {
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${palette.white};
    z-index: 1;
    transition: background-color 300ms ease-in-out;

    svg {
      width: 28px;
      height: 28px;
      path {
        fill: ${palette.gray[200]};
      }
    }

    &:hover {
      background-color: ${palette.brandTheme};
      path {
        fill: ${palette.white};
      }
    }
  }

  &.nextBtn {
    right: 0;

    svg {
      transform: rotate(-90deg);
    }
  }

  &.prevBtn {
    left: 0;

    svg {
      transform: rotate(90deg);
    }
  }

  &::before {
    content: "";
  }
`;
