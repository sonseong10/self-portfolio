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
  dots: false,
  arrows: true,

  responsive: [
    {
      breakpoint: 1200,
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
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
};

export { dotSettings, mainSettings, infoSettings };
