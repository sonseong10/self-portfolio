import React, {type ReactNode} from 'react';
import Slider, {type Settings} from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ICarouselProps {
  setting: Settings;
  children: ReactNode;
}

const Carousel = ({setting, children}: ICarouselProps) => {
  return <Slider {...setting}>{children}</Slider>;
};

export default Carousel;
