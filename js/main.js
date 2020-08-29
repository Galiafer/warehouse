$('.reviews__slider--container').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '<button type="button" class="reviews__slider--arrowNext"><img src="img/reviews/slickArrowNext.svg" alt=""></button>',
    prevArrow: '<button type="button" class="reviews__slider--arrowPrev"><img src="img/reviews/slickArrowPrev.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true
});

let smoothScroll = new scrollToSmooth('a', {
    targetAttribute: 'href',
    duration: 1000,
    easing: 'easeInOutQuad',
  })
  smoothScroll.init();

