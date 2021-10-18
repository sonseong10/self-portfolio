import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";
import SectionHeader from "../section-header/section-header";
import GlobalSection from "../common/global-section";

const Promotion = ({ promotionRef }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const chargeItem = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      });
    };

    const observerOption = { threshold: 1 };

    const tabObserver = new IntersectionObserver(chargeItem, observerOption);

    tabObserver.observe(promotionRef.current);

    return () => tabObserver.disconnect();
  }, [promotionRef]);

  return (
    <GlobalSection ref={promotionRef}>
      <div css={smHidden}>
        <div className="sr-only">
          <SectionHeader title="promotion" />
        </div>

        <p css={row} className="left">
          <span css={decoration} className={`${isActive && "isActive"} space`}>
            I'm have a
          </span>
          <span css={side} className={isActive && "isActive"}>
            Grid Layout System <br /> knowledge
          </span>
        </p>

        <p css={row} className="center">
          <span css={decoration} className="regular">
            Logo and illustration
          </span>
        </p>

        <p css={row} className="right">
          <span css={side} className={`${isActive && "isActive"} space`}>
            for
            <br /> Web Design
          </span>
          <span css={decoration} className={isActive && "isActive"}>
            experience
          </span>
        </p>
      </div>
    </GlobalSection>
  );
};

export default Promotion;

const smHidden = css`
  display: none;

  ${media.tablet} {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    height: 400px;
  }

  ${media.desktop} {
    height: 600px;
  }
`;

const row = css`
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

const decoration = css`
  margin: 0;
  font-size: 32px;
  color: ${palette.gray[100]};
  font-weight: 700;

  &.regular {
    font-weight: 400;
  }

  ${media.tablet} {
    font-size: 80px;

    span {
      ${typography.base}
    }
  }

  ${media.desktop} {
    font-size: 120px;
  }
`;

const side = css`
  ${typography.small}
  color: ${palette.gray[300]};

  ${media.tablet} {
    ${typography.base}
  }
`;
