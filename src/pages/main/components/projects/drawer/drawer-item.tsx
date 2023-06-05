import React, {useState} from 'react';
import {resetButton} from '../../../../../assets/styles/components/reset-button';
import palette from '../../../../../assets/styles/constants/palette';
import typography from '../../../../../assets/styles/constants/typograpy';
import MyIcon from '../../../../../assets/images/icons/my-icon';
import media from '../../../../../assets/styles/constants/media';
import Badge from '../../../../../components/common/badge';
import BaseButton from '../../../../../components/common/base-button';
import styled from 'styled-components';
import type {IProjectData} from 'types/type';

interface IDrawerItemProps {
  project: IProjectData;
  index: number;
}
const DrawerItem = ({project, index}: IDrawerItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const {thumbnailURL, title, desc, role, personnel, stack, githubURL, deployURL} = project;

  const onBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <DrawerItemStyle>
      <button onClick={onBtnClick} type="button" aria-label={`${title} 펼쳐보기`}>
        {title}

        <IconBox className={isActive ? 'isActive' : undefined}>
          <MyIcon name="chevron" />
        </IconBox>
      </button>

      <Info className={isActive ? 'isActive' : undefined}>
        <Thumbnail>
          <img src={thumbnailURL} alt={`project 0${index}`} />
        </Thumbnail>

        <Detail>
          <DetailList>
            <DetailItem>
              <dt>제목</dt>
              <dd>{title}</dd>
            </DetailItem>
            <DetailItem>
              <dt>내용</dt>
              <dd>{desc}</dd>
            </DetailItem>
            <DetailItem>
              <dt>역할</dt>
              <dd>{role}</dd>
            </DetailItem>
            <DetailItem>
              <dt>인원</dt>
              <dd>{personnel}</dd>
            </DetailItem>
            <DetailItem>
              <dt>핵심기술</dt>
              <dd className="badgeGroup">
                {stack.map((item, index) => (
                  <Badge key={index} name={item} color="gray"></Badge>
                ))}
              </dd>
            </DetailItem>
          </DetailList>

          <BtnGroup>
            <BaseButton.Link title="GitHub" URL={githubURL} />

            {deployURL && <BaseButton.Link title="DemoSite" URL={deployURL} />}
          </BtnGroup>
        </Detail>
      </Info>
    </DrawerItemStyle>
  );
};

export default DrawerItem;

const DrawerItemStyle = styled.li`
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

const IconBox = styled.span`
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

const Info = styled.div`
  padding: 0;
  max-height: 0;
  border-bottom: 1px solid ${palette.gray[500]};
  overflow: hidden;
  transition: max-height 400ms ease-in-out;

  &.isActive {
    max-height: 1000px;
  }

  ${media.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Thumbnail = styled.div`
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

const Detail = styled.div`
  flex: 1;

  ${media.tablet} {
    padding: 10px;
  }
`;

const DetailList = styled.dl`
  margin: 0;
  margin-bottom: 8px;

  ${media.tablet} {
    margin-bottom: 24px;
  }
`;

const DetailItem = styled.div`
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
      content: ':';
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

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  ${media.tablet} {
    margin-bottom: 0;
  }
`;
