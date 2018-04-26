/*- Mostafa El Menshawy*/

$(".custom_input input").focus(function(){
        $(this).css('margin-top','20px')
});
$(".custom_input input").focusout(function(){
    if($(this).val().length < 1){
        $(this).css('margin-top','0');
    }
});
$(".dropdown button").on('click',function(){
    $(".dropdown ul").toggle();
});
