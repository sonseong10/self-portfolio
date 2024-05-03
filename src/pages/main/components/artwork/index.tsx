import React from 'react';
import styled from 'styled-components';
import type {IArtWorkData} from 'types/type';
import GlobalSection from 'components/common/global-section';
import SectionHeader from 'components/common/section-header';
import media from 'assets/styles/constants/media';
import palette from 'assets/styles/constants/palette';
import Carousel from 'components/common/carousel';
import Spinner from 'components/spinner/spinner';
import {Container} from 'components/common/layout';

interface IArtworkProps {
  artwork: IArtWorkData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  loading: boolean | undefined;
}

const Artwork = ({sectionRef, loading}: IArtworkProps) => {
  return (
    <Container>
      <GlobalSection
        ref={(el: HTMLDivElement) => {
          if (el && sectionRef.current) sectionRef.current[3] = el;
        }}
      >
        <SectionHeader title="Artworks" />

        <CarouselWrap>{loading ? <Spinner /> : <Carousel></Carousel>}</CarouselWrap>
      </GlobalSection>
    </Container>
  );
};

export default Artwork;

const CarouselWrap = styled.div`
  margin: 0 -10px;

  .slick-dots {
    bottom: 122px;

    li {
      margin: 0;

      button::before {
        color: ${palette.gray[300]};
      }
    }
  }

  @media (orientation: landscape) {
    /* Landscape 모드일 때 적용할 CSS */
    width: 340px;
    margin: 0 auto;
  }

  ${media.tablet} {
    width: auto;
    margin: 0;

    .slick-slide {
      border-radius: 4px;
      overflow: hidden;
      padding: 10px;
      transform: scale(0.6);
      opacity: 0.8;

      transition:
        transform 300ms ease-in-out,
        opacity 300ms ease-in-out,
        box-shadow 300ms ease-in-out;

      ${media.desktop} {
        &:hover {
          box-shadow: 4px 4px 12px rgba(0, 0, 0, 13%);
          opacity: 1;
        }
      }
    }

    .slick-center {
      transform: scale(0.9);
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 13%);
      opacity: 1;
    }
  }
`;

// const Card = styled.div`
//   position: relative;
//   margin-bottom: 24px;

//   .imgBox {
//     cursor: pointer;

//     img {
//       width: 100%;
//       height: auto;
//       object-fit: cover;
//     }

//     ${media.tablet} {
//       border-radius: 4px;
//       overflow: hidden;
//     }
//   }

//   strong {
//     display: block;
//     margin: 10px 0;
//     text-align: center;
//     ${typography.base}
//     color: ${palette.gray[100]};

//     ${media.tablet} {
//       ${typography.midium}
//     }
//   }
// `;

// const BtnWrap = styled.div`
//   display: flex !important;
//   justify-content: center;
//   align-items: center;
// `;
