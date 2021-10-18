import CarouselArrow from "../components/common/carousel-arrow";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const mainSettings = {
  ...settings,
  arrows: true,
  nextArrow: <CarouselArrow.NextArrow />,
  prevArrow: <CarouselArrow.PrevArrow />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
};

const infoSettings = {
  ...settings,
  speed: 0,
  draggable: false,
  touchMove: false,
};

const dotSettings = {
  ...settings,
  centerPadding: "0",
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
};

const artworkSettings = {
  ...settings,
  centerPadding: "0",
  centerMode: true,
  focusOnSelect: true,
  slidesToShow: 3,
  arrows: true,
  nextArrow: <CarouselArrow.NextArrow />,
  prevArrow: <CarouselArrow.PrevArrow />,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const artDotsSettings = {
  ...settings,
  speed: 0,
  draggable: false,
  touchMove: false,
};

export {
  dotSettings,
  mainSettings,
  infoSettings,
  artworkSettings,
  artDotsSettings,
};
