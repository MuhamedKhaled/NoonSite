// - Ismail Ahmed
// - Alaa Atef


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
