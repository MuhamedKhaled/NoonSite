
    $(document).ready(function(){
  $('.dropdown-submenu a.nested-list-link').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
