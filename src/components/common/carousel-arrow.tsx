import React, {type ReactNode} from 'react';
import palette from '../../assets/styles/constants/palette';
import MyIcon from '../icons/my-icon';
import media from '../../assets/styles/constants/media';
import styled from 'styled-components';

interface ICarouselArrowProps {
  children: ReactNode;
}

const CarouselArrow = ({children}: ICarouselArrowProps) => {
  return <button type="button">{children}</button>;
};

const PrevArrow = (props: any) => {
  const {className, style, onClick} = props;
  return (
    <ToolBtn
      className={`${className} prevBtn`}
      style={{...style}}
      onClick={onClick}
      type="button"
      aria-label="prev button"
    >
      <MyIcon name="chevron" />
    </ToolBtn>
  );
};

const NextArrow = (props: any) => {
  const {className, style, onClick} = props;
  return (
    <ToolBtn
      className={`${className} nextBtn`}
      style={{...style}}
      onClick={onClick}
      type="button"
      aria-label="next button"
    >
      <MyIcon name="chevron" />
    </ToolBtn>
  );
};

CarouselArrow.PrevArrow = PrevArrow;
CarouselArrow.NextArrow = NextArrow;

export default CarouselArrow;

const ToolBtn = styled.button`
  &.nextBtn,
  &.prevBtn {
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

  &.nextBtn {
    right: 8px;

    svg {
      transform: rotate(-90deg);
    }

    ${media.desktop} {
      right: -18px;
    }
  }

  &.prevBtn {
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
