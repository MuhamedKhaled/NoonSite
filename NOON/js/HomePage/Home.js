/*
 - Mohamed Khaled
 - Nourhan Essam
*/

$('.slickSlider').slick({
  centerMode: true,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  dots:true,
  initialSlide:0,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


// Videos slider
$('.loop').owlCarousel({
    center: true,
    items:2,
    nav:true,
    loop:true,
    responsive:{
      0:{
           items:1,
       },
       600:{
           items:2,
       },
       1000:{
           items:2,
       }

    }
});
