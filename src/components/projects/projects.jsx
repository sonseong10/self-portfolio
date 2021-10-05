import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../section-header/section-header";
import { css } from "@emotion/react";
import MainCarousel from "./carousel/main-carousel";
import InfoCarousel from "./carousel/info-carousel";
import DotCarousel from "./carousel/dot-carousel";
import media from "../../assets/styles/constants/media";

const Projects = ({ projects }) => {
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

  return (
    <section css={section}>
      <SectionHeader title={"Projects"} />

      <div css={carouselWrap}>
        <div className="left-group">
          <MainCarousel
            projects={projects}
            mainSlickRef={mainSlickRef}
            infoSlick={infoSlick}
          />
        </div>

        <div className="right-group">
          <div>
            <InfoCarousel
              projects={projects}
              infoSlickRef={infoSlickRef}
              pagingSlick={pagingSlick}
            />
          </div>

          <div css={dotGroup}>
            <DotCarousel
              projects={projects}
              pagingSlickRef={pagingSlickRef}
              mainSlick={mainSlick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const section = css`
  margin: 0 -10px 60px;
`;

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
    margin-bottom: 12px;
  }

  .right-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    div {
      width: 100%;
    }
  }

  ${media.tablet} {
    flex-direction: row;

    .left-group,
    .right-group {
      height: 320px;
      width: 50%;
    }

    .left-group {
      padding: 0 10px;
      margin-bottom: 0;
    }
  }

  ${media.desktop} {
    flex-direction: row;

    .left-group,
    .right-group {
      height: 500px;
    }
  }
`;

const dotGroup = css`
  display: none;

  ${media.tablet} {
    display: block;
    .slick-slide {
      filter: grayscale(1);
    }

    .slick-center {
      filter: none;
    }
  }
`;
