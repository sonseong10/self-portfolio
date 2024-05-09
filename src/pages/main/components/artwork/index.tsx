import React from 'react';
import styled from 'styled-components';
import type {IArtWorkData} from 'types/type';
import GlobalSection from 'components/common/global-section';
import SectionHeader from 'components/common/section-header';
import {Container} from 'components/common/layout';
import {Link} from 'react-router-dom';

interface IArtworkProps {
  artworks: IArtWorkData[];
  sectionRef: React.MutableRefObject<HTMLElement[]>;
}

const Artwork = ({artworks, sectionRef}: IArtworkProps) => {
  return (
    <Container>
      <GlobalSection
        ref={(el: HTMLDivElement) => {
          if (el && sectionRef.current) sectionRef.current[3] = el;
        }}
      >
        <SectionHeader title="Artworks" />

        {artworks && artworks.length > 0 && (
          <CarouselWrap>
            {artworks.map((item, index) => (
              <Link to={`/artwork/${item.uid}`} key={item.uid}>
                <img src={item.thumbnailURL} alt={`프로젝트${index}`} />
              </Link>
            ))}
          </CarouselWrap>
        )}
      </GlobalSection>
    </Container>
  );
};

export default Artwork;

const CarouselWrap = styled.div`
  a > img {
    width: calc(100% / 4);

    &:hover {
      opacity: 0.6;
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
