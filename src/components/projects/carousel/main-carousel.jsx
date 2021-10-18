import React from "react";
import { css } from "@emotion/react";
import palette from "../../../assets/styles/constants/palette";
import media from "../../../assets/styles/constants/media";
import { mainSettings } from "../../../utils/slick-carousel";
import Carousel from "../../common/carousel";

const MainCarousel = ({ projects, mainSlickRef, infoSlick }) => {
  return (
    <div css={slideBox}>
      <Carousel setting={mainSettings} ref={mainSlickRef} navFor={infoSlick}>
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
  margin: 0 -10px;

  .slide {
    width: 100%;

    img {
      width: 100%;
      height: 400px;
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

  ${media.tablet} {
    margin: 0;
  }
`;
