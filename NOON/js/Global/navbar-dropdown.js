/*
 - Mohamed Khaled
 - Nourhan Essam
*/
    $(document).ready(function(){
  $('.dropdown-submenu a.nested-list-link').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

    $(document).ready(function(){
  $('.dropdown-submenu a.country-1').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
