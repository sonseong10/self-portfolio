import React from "react";
import { css } from "@emotion/react";
import { dotSettings } from "../../../utils/slick-carousel";
import media from "../../../assets/styles/constants/media";
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
  height: 112px;
  margin: 0 auto;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.desktop} {
    height: 174px;
  }
`;
