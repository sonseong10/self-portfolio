import React from "react";
import Carousel from "../../common/carousel";
import { mainSettings } from "../../../utils/slick-carousel";
import { css } from "@emotion/react";
import palette from "../../../assets/styles/constants/palette";
import media from "../../../assets/styles/constants/media";
import MyIcon from "../../icons/my-icon";

const MainCarousel = ({ projects, mainSlickRef, infoSlick }) => {
  const customSetting = {
    ...mainSettings,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SamplePrevArrow(props) {
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
  }

  function SampleNextArrow(props) {
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
  }

  return (
    <div css={slideBox}>
      <Carousel setting={customSetting} ref={mainSlickRef} navFor={infoSlick}>
        {projects.map((item) => (
          <div key={item.uid} className="slide">
            <img src={item.thumbnailURL} alt="projects01" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;

const slideBox = css`
  .slide {
    width: 100%;

    img {
      width: 100%;
      height: 320px;
      background-color: ${palette.gray[600]};
      object-fit: contain;

      ${media.desktop} {
        height: 500px;
      }
    }
  }

  .slick-dots {
    bottom: 4px;

    li {
      margin: 0;

      button::before {
        color: ${palette.gray[400]};
      }
    }
  }
`;

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
