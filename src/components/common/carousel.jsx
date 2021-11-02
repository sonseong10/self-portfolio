import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ setting, children }) => {
  return <Slider {...setting}>{children}</Slider>;
};

export default Carousel;
