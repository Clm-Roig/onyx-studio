$('#productions-carousel').slick({
  dots: true,
  lazyLoad: 'progressive',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
