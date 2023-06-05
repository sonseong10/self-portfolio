import React, {type ReactNode} from 'react';
import palette from '../../assets/styles/constants/palette';
import MyIcon from '../../assets/images/icons/my-icon';
import media from '../../assets/styles/constants/media';
import styled, {type CSSObject} from 'styled-components';

interface ICarouselArrowProps {
  children: ReactNode | JSX.Element;
}

const CarouselArrow = ({children}: ICarouselArrowProps) => {
  return <button type="button">{children}</button>;
};

interface IPrevArrowProps {
  style?: CSSObject;
  onClick?: () => void;
}

const PrevArrow = ({style, onClick}: IPrevArrowProps) => {
  return (
    <ToolBtn style={style} onClick={onClick} type="button" aria-label="prev button">
      <MyIcon name="chevron" />
    </ToolBtn>
  );
};

interface INextArrowProps {
  style?: CSSObject;
  onClick?: () => void;
}

const NextArrow = (props: INextArrowProps) => {
  const {style, onClick} = props;

  return (
    <ToolBtn style={style} onClick={onClick} type="button" aria-label="next button">
      <MyIcon name="chevron" />
    </ToolBtn>
  );
};

CarouselArrow.PrevArrow = PrevArrow;
CarouselArrow.NextArrow = NextArrow;

export default CarouselArrow;

const ToolBtn = styled.button`
  &.slick-next,
  &.slick-prev {
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${palette.white};
    border-radius: 20px;
    z-index: 1;
    transition: background-color 300ms ease-in-out;

    svg {
      width: 28px;
      height: 28px;
      path {
        fill: ${palette.gray[200]};
      }
    }

    &:hover {
      background-color: ${palette.brandTheme};
      path {
        fill: ${palette.white};
      }
    }
  }

  &.slick-next {
    right: 8px;

    svg {
      transform: rotate(-90deg);
    }

    ${media.desktop} {
      right: -18px;
    }
  }

  &.slick-prev {
    left: 8px;

    svg {
      transform: rotate(90deg);
    }

    ${media.desktop} {
      left: -18px;
    }
  }

  &::before {
    content: '';
  }
`;
