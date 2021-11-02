import React from "react";
import { css } from "@emotion/react";
import { artworkSettings } from "../../utils/slick-carousel";
import SectionHeader from "../section-header/section-header";
import GlobalSection from "../common/global-section";
import Carousel from "../common/carousel";
import palette from "../../assets/styles/constants/palette";
import media from "../../assets/styles/constants/media";
import typography from "../../assets/styles/constants/typograpy";
import { useHistory } from "react-router-dom";
import BaseButton from "../common/base-button";

const Artwork = ({ artwork, sectionRef }) => {
  const history = useHistory();

  const goToGallery = (index) => {
    history.push(`artwork/${index}`);
  };

  return (
    <GlobalSection ref={(el) => (sectionRef.current[2] = el)}>
      <SectionHeader title="Artworks" />

      <div css={carouselWrap}>
        <Carousel setting={artworkSettings}>
          {artwork.map((item, index) => (
            <div key={item.uid} css={card}>
              <div className="imgBox">
                <img src={item.thumbnailURL} alt="projects01" />
              </div>

              <strong>{item.title}</strong>

              <div css={btnWrap}>
                <BaseButton
                  title="More"
                  handleEvent={() => goToGallery(index)}
                />
              </div>
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

  .slick-dots {
    bottom: 122px;

    li {
      margin: 0;

      button::before {
        color: ${palette.gray[300]};
      }
    }
  }

  @media (orientation: landscape) {
    /* Landscape 모드일 때 적용할 CSS */
    width: 340px;
    margin: 0 auto;
  }

  ${media.tablet} {
    width: auto;
    margin: 0;

    .slick-slide {
      transform: scale(0.6);
      opacity: 0.8;
      transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;

      ${media.desktop} {
        &:hover {
          opacity: 1;
        }
      }
    }

    .slick-center {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const card = css`
  position: relative;
  margin-bottom: 24px;

  .imgBox {
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    ${media.tablet} {
      border-radius: 4px;
      overflow: hidden;
    }
  }

  strong {
    display: block;
    margin: 10px 0;
    text-align: center;
    ${typography.base}
    color: ${palette.gray[100]};

    ${media.tablet} {
      ${typography.midium}
    }
  }
`;

const btnWrap = css`
  display: flex !important;
  justify-content: center;
  align-items: center;
`;
