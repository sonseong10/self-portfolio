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
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
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

export { artworkSettings };
