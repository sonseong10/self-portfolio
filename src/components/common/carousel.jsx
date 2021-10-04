import React, { forwardRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = forwardRef(({ setting, navFor, children }, ref) => {
  return (
    <Slider {...setting} ref={ref} asNavFor={navFor}>
      {children}
    </Slider>
  );
});

export default Carousel;
