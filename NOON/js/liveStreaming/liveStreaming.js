<!--
   - Mostafa El Menshawy
   - Noura Mohi
   - Hazem Fouda
-->

var video = $('#liveStreaming');
video.removeAttr("controls");
var progressBar=$('#progressBar');
var current=$('#currentTime');
$('#play_pause').on('click', function() {
    if(video[0].paused) {
        video[0].play();
    }
    else {
        video[0].pause();
    }
    return false;
});
progressBar.on('change',function(){
    var seekto = video[0].duration * $(this).val()/100;
    video[0].currentTime=seekto;
});
video.on('timeupdate',function(){
    var nt =video[0].currentTime *(100/video[0].duration);    
    $('#progressBar').val(nt);

    /*************************************** */
    var nt = video[0].currentTime * (100 / video[0].duration);
	$('#progressBar').val(nt);
	var curmins = Math.floor(video[0].currentTime / 60);
	var cursecs = Math.floor(video[0].currentTime - curmins * 60);
	var durmins = Math.floor(video[0].duration / 60);
	var dursecs = Math.floor(video[0].duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	$('#currentTime').text(curmins+":"+cursecs);

});
$('#mute').on('click',function(){
    video[0].muted = !video[0].muted;  
    if(video[0].muted){
        $("#volumeBar").val('0');
        // $("#mute_un").attr('class', 'fa fa-volume-mute');
    }else{
        $("#volumeBar").val('100');
        // $("#mute_un").attr('class', 'fa fa-volume-up');
    } 
    return false;
    
     
});
$('#volumeBar').on('change',function(){
    video[0].volume = $(this).val()/100
});
$('#fullscreen').on('click', function() {
    video[0].webkitEnterFullscreen();
    video[0].mozRequestFullScreen();
    return false;
});
/************* */


//volume controller
volumeBar = $('#volume-bar');
volumeBar.on('change', function() {
    $('#liveStreaming').prop("volume", this.value);
});
//update HTML5 video current play time
video.on('timeupdate', function() {
    var currentPos = video[0].currentTime; //Get currenttime
    var maxduration = video[0].duration; //Get video duration
    var percentage = 100 * currentPos / maxduration; //in %
    $('.timeBar').css('width', percentage+'%');
});
var timeDrag = false;   /* Drag status */
$('.progressBar').mousedown(function(e) {
    timeDrag = true;
    updatebar(e.pageX);
});
$(document).mouseup(function(e) {
    if(timeDrag) {
        timeDrag = false;
        updatebar(e.pageX);
    }
});
$(document).mousemove(function(e) {
    if(timeDrag) {
        updatebar(e.pageX);
    }
});
 
//update Progress Bar control
var updatebar = function(x) {
    var progress = $('.progressBar');
    var maxduration = video[0].duration; //Video duraiton
    var position = x - progress.offset().left; //Click pos
    var percentage = 100 * position / progress.width();
 
    //Check within range
    if(percentage > 100) {
        percentage = 100;
    }
    if(percentage < 0) {
        percentage = 0;
    }
 
    //Update progress bar and video currenttime
    $('.timeBar').css('width', percentage+'%');
    video[0].currentTime = maxduration * percentage / 100;
};
//loop to get HTML5 video buffered data
var startBuffer = function() {
    var maxduration = video[0].duration;
    var currentBuffer = video[0].buffered.end(0);
    var percentage = 100 * currentBuffer / maxduration;
    $('.bufferBar').css('width', percentage+'%');
 
    if(currentBuffer < maxduration) {
        setTimeout(startBuffer, 500);
    }
};
setTimeout(startBuffer, 500);
//Volume control clicked
$('.volumeBar').on('mousedown', function(e) {
    var position = e.pageX - volume.offset().left;
    var percentage = 100 * position / volume.width();
    $('.volumeBar').css('width', percentage+'%');
    video[0].volume = percentage / 100;
});
$('.fullscreen').on('click', function() {
    //For Webkit
    video[0].webkitEnterFullscreen();
 
    //For Firefox
    video[0].mozRequestFullScreen();
 
    return false;
});
// var volume = $('.volume');
// $('.volumeBar').on('mousedown', function(e) {
//     var position = e.pageX - volume.offset().left;
//     var percentage = 100 * position / volume.width();
//     $('.volumeBar').css('width', percentage+'%');
//     video[0].volume = percentage / 100;
// });
$( document ).ready(function() {
    $(".control").hide();    
});
$("#liveStreaming").hover(function(){$(".control").show()});
$(".card").mouseleave(function(){$(".control").hide()});
