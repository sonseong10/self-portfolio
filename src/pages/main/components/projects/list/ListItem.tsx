import React from 'react';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';
import media from 'assets/styles/constants/media';
import Badge from 'components/common/badge';
import BaseButton from 'components/common/base-button';
import styled from 'styled-components';
import type {IProjectData} from 'types/type';

interface IListItemProps {
  project: IProjectData;
  index: number;
}
const ListItem = ({project, index}: IListItemProps) => {
  const {thumbnailURL, title, desc, role, stack, githubURL, deployURL} = project;

  return (
    <Info>
      <Thumbnail>
        <img src={thumbnailURL} alt={`project 0${index}`} />
      </Thumbnail>

      <Detail>
        <strong>{title}</strong>
        <DetailList>
          <DetailItem>
            <dt>내용</dt>
            <dd>{desc}</dd>
          </DetailItem>
          <DetailItem>
            <dt>역할</dt>
            <dd>{role}</dd>
          </DetailItem>
          <DetailItem>
            <dt>사용기술</dt>
            <dd>
              <dl>
                {stack.map((item, index) =>
                  typeof item !== 'string' ? (
                    <DetailItem key={index}>
                      <dt>
                        <Badge name={item.name} color="gray"></Badge>
                      </dt>
                      <dd>{item.value}</dd>
                    </DetailItem>
                  ) : (
                    <DetailItem key={index}>
                      <dt>
                        <Badge name={item} color="gray"></Badge>
                      </dt>
                      <dd></dd>
                    </DetailItem>
                  )
                )}
              </dl>
            </dd>
          </DetailItem>
        </DetailList>

        <BtnGroup>
          <BaseButton.Link title="GitHub" URL={githubURL} />

          <BaseButton.Link title="DeployPage" URL={deployURL} />
        </BtnGroup>
      </Detail>
    </Info>
  );
};

export default ListItem;

const Info = styled.div`
  ${media.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  ${media.desktop} {
    padding: 16px 0;
    border-bottom: 1px solid #e8e8e8;
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
    flex: 1;
  }
`;

const Detail = styled.div`
  flex: 2;

  ${media.tablet} {
    margin-left: 10px;

    strong {
      ${typography.midium}
    }
  }
`;

const DetailList = styled.dl`
  margin: 0;
  margin-bottom: 8px;
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
    justify-content: flex-end;

    :not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;
