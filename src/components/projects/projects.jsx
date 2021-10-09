import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import GlobalSection from "../common/global-section";
import SectionHeader from "../section-header/section-header";
import SectionBody from "../common/section-body";
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
    <GlobalSection>
      <SectionHeader title={"Projects"} />

      <SectionBody>
        <SectionBody.Inner innerStyle={leftGroup}>
          <MainCarousel
            projects={projects}
            mainSlickRef={mainSlickRef}
            infoSlick={infoSlick}
          />
        </SectionBody.Inner>

        <SectionBody.Inner innerStyle={rightGroup}>
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
        </SectionBody.Inner>
      </SectionBody>
    </GlobalSection>
  );
};

export default Projects;

const leftGroup = css`
  width: 100%;

  ${media.tablet} {
    height: 320px;
    width: 50%;
    margin-bottom: 0;
  }

  ${media.desktop} {
    height: 500px;
  }
`;

const rightGroup = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    width: 100%;
  }

  ${media.tablet} {
    width: 50%;
    height: 320px;
    padding: 0 20px;
  }

  ${media.desktop} {
    height: 500px;
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
