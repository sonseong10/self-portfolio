import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import SectionHeader from "../section-header/section-header";
import Carousel from "../common/carousel";
import { artDotsSettings, artworkSettings } from "../../utils/slick-carousel";
import { resetButton } from "../../assets/styles/components/reset-button";
import palette from "../../assets/styles/constants/palette";
import media from "../../assets/styles/constants/media";
import typography from "../../assets/styles/constants/typograpy";

const Artwork = ({ artwork }) => {
  const gallerySlickRef = useRef(null);
  const linkSlickRef = useRef(null);

  const [gallerySlick, setGallerySlick] = useState(null);
  const [linkSlick, setLinkSlick] = useState(null);

  useEffect(() => {
    setGallerySlick(gallerySlickRef.current);
    setLinkSlick(linkSlickRef.current);
  }, []);

  return (
    <section css={section}>
      <SectionHeader title="Artworks" />

      <div css={carouselWrap}>
        <Carousel
          setting={artworkSettings}
          navFor={linkSlick}
          ref={gallerySlickRef}
        >
          {artwork.map((item) => (
            <div key={item.uid} className="slide">
              <img src={item.thumbnailURL} alt="projects01" />
            </div>
          ))}
        </Carousel>

        <Carousel
          setting={artDotsSettings}
          navFor={gallerySlick}
          ref={linkSlickRef}
        >
          {artwork.map((item) => (
            <div key={item.uid} css={btnWrap}>
              <button type="button">More</button>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Artwork;

const section = css`
  margin-bottom: 60px;
`;

const carouselWrap = css`
  margin: 0 -10px;

  .slide {
    cursor: pointer;
    margin-bottom: 24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slick-dots {
    bottom: 36px;

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

const btnWrap = css`
  display: flex !important;
  justify-content: center;
  align-items: center;

  button {
    ${resetButton}
    width: 240px;
    height: 48px;
    ${typography.base}
    background-color: ${palette.gray[600]};
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

    &:active {
      background-color: ${palette.brandTheme};
      color: ${palette.white};
    }

    ${media.desktop} {
      width: 240px;
      &:hover {
        background-color: ${palette.brandTheme};
        color: ${palette.white};
      }
    }
  }
`;
