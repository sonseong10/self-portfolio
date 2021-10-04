import React from "react";
import { css } from "@emotion/react";
import media from "../../../assets/styles/constants/media";
import palette from "../../../assets/styles/constants/palette";
import typography from "../../../assets/styles/constants/typograpy";
import Carousel from "../../common/carousel";
import { infoSettings } from "../../../utils/slick-carousel";

const InfoCarousel = ({ projects, infoSlickRef, pagingSlick }) => {
  return (
    <div>
      <Carousel setting={infoSettings} ref={infoSlickRef} navFor={pagingSlick}>
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
      </Carousel>
    </div>
  );
};

export default InfoCarousel;

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
    width: 46%;
    height: 48px;
    background-color: ${palette.gray[600]};
    ${typography.base};
    color: ${palette.gray[100]};
    text-decoration: none;
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
