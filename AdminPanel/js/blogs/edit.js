$( document ).ready(function() {
    $(".layout_edit").hide();    
});
$(".image_section").hover(function(){$(".layout_edit").show()});
$(".image_section").mouseleave(function(){$(".layout_edit").hide()});