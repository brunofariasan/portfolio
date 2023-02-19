export const carouselSettings = {
  dots: true,
  infinite: false,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  lazyLoad: false,
  dots: true,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "3px",
  slidesToShow: 3,
  speed: 1000,
  rows: 1,
  slidesPerRow: 1,
  swipeToSlide: true,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}