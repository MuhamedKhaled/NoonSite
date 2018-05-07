$( document ).ready(function() {
    $(".inner").hide();    
});
$(".inner_li").on("click",function(){
    $(".inner_li").css("border-left","0");
    $(this).css("border-left","5px solid black");
});
$(".outter_li").on("click",function(){
    $(".outter_li").css("border-left","0");
    $(this).css("border-left","5px solid black");
});
$(".outter_li").on("click",function(){
    $(".inner").hide(); 
    $( this ).children( '.inner' ).toggle();
});

