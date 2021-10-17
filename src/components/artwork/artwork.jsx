import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { artDotsSettings, artworkSettings } from "../../utils/slick-carousel";
import { resetButton } from "../../assets/styles/components/reset-button";
import SectionHeader from "../section-header/section-header";
import GlobalSection from "../common/global-section";
import Carousel from "../common/carousel";
import palette from "../../assets/styles/constants/palette";
import media from "../../assets/styles/constants/media";
import typography from "../../assets/styles/constants/typograpy";
import { useHistory } from "react-router-dom";

const Artwork = ({ artwork, sectionRef }) => {
  const history = useHistory();
  const gallerySlickRef = useRef(null);
  const linkSlickRef = useRef(null);

  const [gallerySlick, setGallerySlick] = useState(null);
  const [linkSlick, setLinkSlick] = useState(null);

  useEffect(() => {
    setGallerySlick(gallerySlickRef.current);
    setLinkSlick(linkSlickRef.current);
  }, []);

  const goToGallery = (uid) => {
    history.push({
      pathname: "artwork",
      state: { uid },
    });
  };

  return (
    <GlobalSection ref={(el) => (sectionRef.current[2] = el)}>
      <SectionHeader title="Artworks" />

      <div css={carouselWrap}>
        <Carousel
          setting={artworkSettings}
          navFor={linkSlick}
          ref={gallerySlickRef}
        >
          {artwork.map((item) => (
            <div key={item.uid} css={card}>
              <div className="imgBox">
                <img src={item.thumbnailURL} alt="projects01" />
              </div>
              <div className="overlab">
                <strong className="title">{item.title}</strong>
              </div>
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
              <button
                type="button"
                onClick={() => {
                  goToGallery(item.uid);
                }}
              >
                More
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </GlobalSection>
  );
};

export default Artwork;

const carouselWrap = css`
  margin: 0 -10px;

  ${media.tablet} {
    margin: 0;
  }
`;

const card = css`
  position: relative;
  margin-bottom: 24px;

  .imgBox {
    cursor: pointer;

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

  .overlab {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    strong {
      ${typography.base};
      color: ${palette.white};
    }
  }

  &:active {
    .overlab {
      opacity: 1;
    }
  }

  ${media.desktop} {
    &:hover {
      .overlab {
        opacity: 1;
      }
    }
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
