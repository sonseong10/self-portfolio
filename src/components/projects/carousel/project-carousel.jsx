import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import palette from "../../../assets/styles/constants/palette";
import typography from "../../../assets/styles/constants/typograpy";
import media from "../../../assets/styles/constants/media";

const ProjectCarousel = ({ projects }) => {
  const mainSlickRef = useRef(null);
  const infoSlickRef = useRef(null);
  const pagingSlickRef = useRef(null);

  const [mainSlick, setMainSlick] = useState(null);
  const [infoSlick, setInfoSlick] = useState(null);
  const [pagingSlick, setPagingSlick] = useState(null);

  useEffect(() => {
    setMainSlick(mainSlickRef.current);
    setPagingSlick(pagingSlickRef.current);
    setInfoSlick(infoSlickRef.current);
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dotSettings = {
    ...settings,
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
  };

  const mainSettings = {
    ...settings,
    arrows: true,
  };

  const infoSettings = {
    ...settings,
    speed: 0,
    draggable: false,
  };

  return (
    <div css={carouselWrap}>
      <div className="left-group">
        <Slider {...mainSettings} ref={mainSlickRef} asNavFor={infoSlick}>
          {projects.map((item) => (
            <div key={item.uid} className="slide">
              <img src={item.thumbnailURL} alt="projects01" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="right-group">
        <div>
          <Slider {...infoSettings} ref={infoSlickRef} asNavFor={pagingSlick}>
            {projects.map((item) => (
              <div key={item.uid} css={projectInfo} className="infoWrap">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div css={btnGroup}>
                  <a href={item.githubURL} target="_blank" rel="noreferrer">
                    Github
                  </a>
                  {item.deployURL && (
                    <a href={item.deployURL} target="_blank" rel="noreferrer">
                      Demo Site
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div css={dotGroup}>
          <Slider ref={pagingSlickRef} asNavFor={mainSlick} {...dotSettings}>
            {projects.map((item) => (
              <div key={item.uid} css={dot}>
                <img src={item.thumbnailURL} alt="project" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;

const carouselWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .left-group,
  .right-group {
    width: 100%;
  }

  .left-group {
    .slide {
      width: 100%;
      height: 500px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .right-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 500px;

    div {
      width: 100%;
    }
  }

  ${media.tablet} {
    flex-direction: row;

    .left-group,
    .right-group {
      width: 50%;
      padding: 0 20px;
    }
  }
`;

const projectInfo = css`
  > div {
    margin-bottom: 26px;

    h3,
    p {
      margin: 0;
    }

    h3 {
      margin-bottom: 10px;
      ${typography.base}
      color: ${palette.gray[100]};
    }

    p {
      ${typography.small}
      color: ${palette.gray[200]};
    }
  }
`;

const btnGroup = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 264px;
    height: 48px;
    background-color: ${palette.gray[600]};
    ${typography.base};
    color: ${palette.gray[100]};
    text-decoration: none;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

    &:active {
      background-color: ${palette.brandTheme};
    }

    ${media.tablet} {
      &:hover {
        background-color: ${palette.brandTheme};
        color: ${palette.white};
      }
    }
  }
`;

const dotGroup = css`
  .slick-slide {
    filter: grayscale(1);
  }

  .slick-center {
    filter: none;
  }
`;

const dot = css`
  height: 160px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
