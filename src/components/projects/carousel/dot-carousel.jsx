import { css } from "@emotion/react";
import React from "react";
import media from "../../../assets/styles/constants/media";
import { dotSettings } from "../../../utils/slick-carousel";
import Carousel from "../../common/carousel.jsx";

const DotCarousel = ({ projects, pagingSlickRef, mainSlick }) => {
  return (
    <Carousel setting={dotSettings} ref={pagingSlickRef} navFor={mainSlick}>
      {projects.map((item) => (
        <div key={item.uid} css={dot}>
          <img src={item.thumbnailURL} alt="project" />
        </div>
      ))}
    </Carousel>
  );
};

export default DotCarousel;

const dot = css`
  width: 100px !important;
  height: 100px;
  margin: 0 auto;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.desktop} {
    width: 140px !important;
    height: 140px;
  }
`;
