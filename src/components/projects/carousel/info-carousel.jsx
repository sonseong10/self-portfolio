import React from "react";
import { css } from "@emotion/react";
import media from "../../../assets/styles/constants/media";
import palette from "../../../assets/styles/constants/palette";
import typography from "../../../assets/styles/constants/typograpy";
import { infoSettings } from "../../../utils/slick-carousel";
import Carousel from "../../common/carousel";
import Badge from "../../common/badge";

const InfoCarousel = ({ projects, infoSlickRef, pagingSlick }) => {
  return (
    <div>
      <Carousel setting={infoSettings} ref={infoSlickRef} navFor={pagingSlick}>
        {projects.map((item) => (
          <div key={item.uid} css={projectInfo} className="infoWrap">
            <div>
              <h3>{item.title}</h3>

              <dl css={infoList}>
                <div className="infoItem">
                  <dt>설명</dt>
                  <dd>
                    <p>{item.desc}</p>
                  </dd>
                </div>
                <div className="infoItem">
                  <dt>인원</dt>
                  <dd>
                    <p>{item.personnel}명</p>
                  </dd>
                </div>
                <div className="infoItem">
                  <dt>역할</dt>
                  <dd>
                    <p>{item.role}</p>
                  </dd>
                </div>
                <div className="infoItem">
                  <dt>기술</dt>
                  <dd>
                    <ul css={badgeGroup}>
                      {item.stack.map((item) => {
                        return <Badge key={item} name={item} color="gray" />;
                      })}
                    </ul>
                  </dd>
                </div>
              </dl>
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
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }

    h3,
    p {
      margin: 0;
    }

    h3 {
      margin-bottom: 10px;
      ${typography.base}
      color: ${palette.gray[100]};
    }
  }
`;

const infoList = css`
  margin: 0;

  .infoItem {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    dt,
    dd {
      ${typography.small}
      color: ${palette.gray[200]};
    }

    dt::after {
      content: ":";
      margin-right: 8px;
    }

    dd {
      margin-left: 0px;
    }
  }
`;

const badgeGroup = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding-left: 0;
  list-style: none;

  > li:not(:last-of-type) {
    margin-right: 6px;
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
    background-color: ${palette.gray[200]};
    ${typography.base};
    color: ${palette.white};
    text-decoration: none;
    transition: background-color 200ms ease-in-out;

    &:active {
      background-color: ${palette.brandTheme};
    }

    ${media.desktop} {
      width: 240px;
      &:hover {
        background-color: ${palette.brandTheme};
      }
    }
  }
`;
