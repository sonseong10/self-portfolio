import media from 'assets/styles/constants/media';
import palette from 'assets/styles/constants/palette';
import typography from 'assets/styles/constants/typograpy';
import GlobalSection from 'components/common/global-section';
import {Container} from 'components/common/layout';
import SectionHeader from 'components/common/section-header';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Observer from 'utils/observer';

interface IPromotionProps {
  promotionRef: React.RefObject<HTMLDivElement | null>;
}

const Promotion = ({promotionRef}: IPromotionProps) => {
  const [isActive, setIsActive] = useState<boolean | Element>(false);

  useEffect(() => {
    const observer = Observer(setIsActive);
    if (promotionRef?.current) {
      observer.observe(promotionRef.current);
    }

    return () => observer.disconnect();
  }, [promotionRef]);

  return (
    <GlobalSection ref={promotionRef}>
      <Container>
        <SmHidden>
          <div className="sr-only">
            <SectionHeader title="promotion" />
          </div>

          <RowText className="left">
            <Decoration className={`${isActive ? 'isActive' : undefined} space`}>I&#39;M LEARNING</Decoration>
            <SideText className={isActive ? 'isActive' : undefined}>
              BRAND LOGO <br /> ILLUSTRATION
            </SideText>
          </RowText>

          <RowText className="center">
            <Decoration className="regular">WEB PUBLISHING</Decoration>
          </RowText>

          <RowText className="right">
            <SideText className={`${isActive ? 'isActive' : undefined} space`}>
              PASSION <br />
              IN
            </SideText>
            <Decoration className={isActive ? 'isActive' : undefined}>UI/UX DESIGN</Decoration>
          </RowText>
        </SmHidden>
      </Container>
    </GlobalSection>
  );
};

export default Promotion;

const SmHidden = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
  }
`;

const RowText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  overflow-x: hidden;

  &.left {
    justify-content: flex-start;

    span:first-of-type {
      transform: translate3d(-100%, 0, 0);
      transition: transform 600ms ease-in-out;

      &.isActive {
        transform: none;
      }
    }

    span:last-of-type {
      opacity: 0;
      transition: opacity 600ms ease-in-out;

      &.isActive {
        opacity: 1;
      }
    }
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;

    span:last-of-type {
      transform: translate3d(100%, 0, 0);
      transition: transform 600ms ease-in-out;

      &.isActive {
        transform: none;
      }
    }

    span:first-of-type {
      opacity: 0;
      transition: opacity 600ms ease-in-out;

      &.isActive {
        opacity: 1;
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  ${media.tablet} {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  .space {
    margin-right: 8px;

    ${media.tablet} {
      margin-right: 32px;
    }
  }
`;

const Decoration = styled.span`
  margin: 0;
  font-size: 32px;
  color: ${palette.gray[100]};
  font-weight: 700;

  &.regular {
    font-weight: 400;
  }

  ${media.tablet} {
    font-size: 46px;

    span {
      ${typography.base}
    }
  }

  ${media.desktop} {
    font-size: 100px;
  }
`;

const SideText = styled.span`
  ${typography.small}
  color: ${palette.gray[200]};

  ${media.tablet} {
    ${typography.base}
  }
`;
