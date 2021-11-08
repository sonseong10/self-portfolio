import React, { useState } from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../../assets/styles/components/reset-button";
import palette from "../../../assets/styles/constants/palette";
import typography from "../../../assets/styles/constants/typograpy";
import MyIcon from "../../icons/my-icon";
import media from "../../../assets/styles/constants/media";
import Badge from "../../common/badge";
import BaseButton from "../../common/base-button";

const DrawerItem = ({ project, index }) => {
  const [isActive, setIsActive] = useState(false);

  const {
    thumbnailURL,
    title,
    desc,
    role,
    personnel,
    stack,
    githubURL,
    deployURL,
  } = project;

  const onBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li css={drawerItem}>
      <button onClick={onBtnClick} type="button">
        {project.title}

        <div css={iconBox} className={isActive ? "isActive" : undefined}>
          <MyIcon name="chevron" />
        </div>
      </button>

      <div css={info} className={isActive ? "isActive" : undefined}>
        <div css={thumbnail}>
          <img src={thumbnailURL} alt={`project 0${index}`} />
        </div>

        <div css={detail}>
          <dl css={detailList}>
            <div css={detailItem}>
              <dt>제목</dt>
              <dd>{title}</dd>
            </div>
            <div css={detailItem}>
              <dt>내용</dt>
              <dd>{desc}</dd>
            </div>
            <div css={detailItem}>
              <dt>역할</dt>
              <dd>{role}</dd>
            </div>
            <div css={detailItem}>
              <dt>인원</dt>
              <dd>{personnel}</dd>
            </div>
            <div css={detailItem}>
              <dt>핵심기술</dt>
              <dd className="badgeGroup">
                {stack.map((item, index) => (
                  <Badge key={index} name={item} color="gray"></Badge>
                ))}
              </dd>
            </div>
          </dl>

          <div css={btnGroup}>
            <BaseButton.Link title="GitHub" URL={githubURL} />

            {deployURL && <BaseButton.Link title="DemoSite" URL={deployURL} />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default DrawerItem;

const drawerItem = css`
  button {
    position: relative;
    ${resetButton}
    padding: 0 8px;
    width: 100%;
    height: 48px;
    ${typography.base}
    text-align: left;
    color: ${palette.gray[100]};

    ${media.tablet} {
      &:hover {
        background-color: ${palette.gray[600]};
      }
    }
  }
`;

const iconBox = css`
  position: absolute;
  top: 50%;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  transition: transform 300ms ease-in-out;
  pointer-events: none;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${palette.gray[200]};
    }
  }

  &.isActive {
    transform: translateY(-50%) rotate(180deg);
  }
`;

const info = css`
  padding: 0;
  max-height: 0;
  border-bottom: 1px solid ${palette.gray[500]};
  overflow: hidden;
  transition: max-height 300ms ease-in-out;

  &.isActive {
    max-height: 644px;
  }

  ${media.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const thumbnail = css`
  width: 100%;
  margin-bottom: 12px;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ${media.tablet} {
    padding: 10px;
    margin-bottom: 0;
    width: 50%;
    height: auto;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: fill;
      border-radius: 4px;
    }
  }

  ${media.desktop} {
    width: 500px;
    height: 500px;
  }
`;

const detail = css`
  flex: 1;

  ${media.tablet} {
    padding: 10px;
  }
`;

const detailList = css`
  margin: 0;
  margin-bottom: 8px;

  ${media.tablet} {
    margin-bottom: 24px;
  }
`;

const detailItem = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${typography.small}
  margin-bottom: 4px;

  dt {
    flex-shrink: 0;
    color: ${palette.gray[100]};

    &::after {
      margin-right: 8px;
      content: ":";
    }
  }

  dd {
    margin-left: 0;
    color: ${palette.gray[200]};

    &.badgeGroup {
      div:not(:last-of-type) {
        margin-right: 8px;
      }
    }
  }

  ${media.tablet} {
    ${typography.base}
  }
`;

const btnGroup = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  ${media.tablet} {
    margin-bottom: 0;
  }
`;
