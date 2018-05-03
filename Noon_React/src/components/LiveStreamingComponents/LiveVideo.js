import React from 'react';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../css/LiveStreaming/LiveStreaming.css';
import '../../css/Global/bootstrap.min.css';
import '../../js/Global/jquery';
import '../../css/Global/font.css';
import $ from "jquery";


class LiveVideo extends React.Component {
    onInput() {
        var input = document.getElementById("volumeBar");
        var currentVal = input.value;
        this.setState({
            value: currentVal
        })
    }
    componentDidMount() {
        var video = $('#liveStreaming');
        video.removeAttr("controls");
        var progressBar = $('#progressBar');
        var current = $('#currentTime');
        $('#play_pause').on('click', function () {
            if (video[0].paused) {
                video[0].play();
            }
            else {
                video[0].pause();
            }
            return false;
        });
        progressBar.on('change', function () {
            var seekto = video[0].duration * $(this).val() / 100;
            video[0].currentTime = seekto;
        });
        video.on('timeupdate', function () {
            var nt = video[0].currentTime * (100 / video[0].duration);
            $('#progressBar').val(nt);

            /*************************************** */
            var nt = video[0].currentTime * (100 / video[0].duration);
            $('#progressBar').val(nt);
            var curmins = Math.floor(video[0].currentTime / 60);
            var cursecs = Math.floor(video[0].currentTime - curmins * 60);
            var durmins = Math.floor(video[0].duration / 60);
            var dursecs = Math.floor(video[0].duration - durmins * 60);
            if (cursecs < 10) {
                cursecs = "0" + cursecs;
            }
            if (dursecs < 10) {
                dursecs = "0" + dursecs;
            }
            if (curmins < 10) {
                curmins = "0" + curmins;
            }
            if (durmins < 10) {
                durmins = "0" + durmins;
            }
            $('#currentTime').text(curmins + ":" + cursecs);

        });
        $('#mute').on('click', function () {
            video[0].muted = !video[0].muted;
            if (video[0].muted) {
                $("#volumeBar").val('0');
                // $("#mute_un").attr('class', 'fa fa-volume-mute');
            } else {
                $("#volumeBar").val('100');
                // $("#mute_un").attr('class', 'fa fa-volume-up');
            }
            return false;


        });
        $('#volumeBar').on('change', function () {
            video[0].volume = $(this).val() / 100
        });
        $('#fullscreen').on('click', function () {
            if (navigator.userAgent.indexOf("Firefox") > 0)
                video[0].mozRequestFullScreen();
            else
                video[0].webkitEnterFullscreen();

            return false;
        });
        /************* */


//volume controller
        var volumeBar = $('#volume-bar');
        volumeBar.on('change', function () {
            $('#liveStreaming').prop("volume", this.value);
        });

//update HTML5 video current play time
        video.on('timeupdate', function () {
            var currentPos = video[0].currentTime; //Get currenttime
            var maxduration = video[0].duration; //Get video duration
            var percentage = 100 * currentPos / maxduration; //in %
            $('.timeBar').css('width', percentage + '%');
        });
        var timeDrag = false;
        /* Drag status */
        $('.progressBar').mousedown(function (e) {
            timeDrag = true;
            updatebar(e.pageX);
        });
        $(document).mouseup(function (e) {
            if (timeDrag) {
                timeDrag = false;
                updatebar(e.pageX);
            }
        });
        $(document).mousemove(function (e) {
            if (timeDrag) {
                updatebar(e.pageX);
            }
        });

//update Progress Bar control
        var updatebar = function (x) {
            var progress = $('.progressBar');
            var maxduration = video[0].duration; //Video duraiton
            var position = x - progress.offset().left; //Click pos
            var percentage = 100 * position / progress.width();

            //Check within range
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }

            //Update progress bar and video currenttime
            $('.timeBar').css('width', percentage + '%');
            video[0].currentTime = maxduration * percentage / 100;
        };
//loop to get HTML5 video buffered data
        $(document).ready(function () {
            video[0].play();
            var startBuffer = function () {
                var maxduration = video[0].duration;
                var currentBuffer = video[0].buffered.end(0);
                var percentage = 100 * currentBuffer / maxduration;
                $('.bufferBar').css('width', percentage + '%');

                if (currentBuffer < maxduration) {
                    setTimeout(startBuffer, 500);
                }
            };
            setTimeout(startBuffer, 500);
        });
//Volume control clicked

        $('.volumeBar').on('mousedown', function(e) {
            var position = e.pageX -  $('.volumeBar').offset().left;
            var percentage = 100 * position /  $('.volumeBar').width();
            $('.volumeBar').css('width', percentage+'%');
            video[0].volume =  $('.volumeBar').val() / 100;
        });

        $(document).ready(function () {
            $(".control").hide();
        });
        $("#liveStreaming").hover(function () {
            $(".control").show()
        });
        $(".card").mouseleave(function () {
            $(".control").hide()
        });

    }
    render() {

        return (
            <div className="card mb-4 ml-0">
                <video id="liveStreaming" controls poster={"video.jpg"} width="100%" autoPlay="autoplay">
                    <source src={this.props.video} type="video/mp4"/>
                    <source src={"video.webm"} type="video/webM"/>
                    <source src={"video.ogv"} type="video/ogg"/>
                    <p>Your browser does not support the video tag.</p>
                </video>
                <div className="control">
                    <button id="play_pause">
                        <img src={"../../img/LiveStreaming/vector-smart-object.png"}/>
                    </button>
                    <div className="controllers">
                        <div className="progressBar">
                            <div className="bufferBar"/>
                            <div className="timeBar">
                                <i/>
                            </div>
                        </div>
                        <button id="mute" type="button">
                            <i id="mute_un" className="fa fa-volume-up"/>
                        </button>
                        <input id="volumeBar" type="range" min="0" max="100" step="1" defaultValue="100" onInput={this.onInput.bind(this)}/>
                        <span id="currentTime">00:00</span>
                        <button id="fullscreen" type="button">
                            <img src="../../img/LiveStreaming/fullscreen.png"/>
                        </button>
                        <button id="setting" type="button">
                            <img src="../../img/LiveStreaming/setting.png"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LiveVideo;
