import React from 'react';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../css/LiveStreaming/LiveStreaming.css';
import '../../css/Global/bootstrap.min.css';
import '../../js/Global/jquery';
import '../../css/Global/font.css';




class LiveVideo extends React.Component {
    render() {
        return (
            <div className="card mb-4 ml-0">
                <video id="liveStreaming " controls poster={"video.jpg"} width="100%" autoPlay="autoplay">
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
                        {/*<button className="pbutton Text">Previous Stream</button>
                        <button className="nbutton Text" >Next Stream</button>*/}
                        <div className="progressBar">
                            <div className="bufferBar"/>
                            <div className="timeBar">
                                <i/>
                            </div>
                        </div>
                        <button id="mute" type="button">
                            <i id="mute_un" className="fa fa-volume-up"/>
                        </button>
                        <input id="volumeBar" type="range" min='0' max='100' value='100' step='1'/>
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
