import CarouselArrow from "../components/common/carousel-arrow";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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

export { artworkSettings, artDotsSettings };
