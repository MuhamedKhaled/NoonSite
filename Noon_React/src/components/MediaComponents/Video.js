import React from 'react'
import {render} from 'react-dom'
import {ModalManager} from "react-dynamic-modal/lib/index";
import VideoModal from "./VideoModal";

class Video extends React.Component{

    videoRef = React.createRef();

    openModal = () => {
        const videoSrc = this.videoRef.current.src;
        ModalManager.open(<VideoModal videoSrc={videoSrc} onRequestClose={() => true}/>);
    };

    render()
    {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                <div className="card mb-4">
                    <div className="media_card_container">
                        <img className="card-img-top" src="../../img/LiveStreaming/Tom and Jerry - Episode 74.mp4"
                             srcSet="../../img/media/little-girl.png" ref={this.videoRef}
                             alt="little-girl"/>
                        <div className="media_card_hover" onClick={this.openModal}>
                            <div className="media_card_details">
                                <img src="../../img/media/videos.png" alt="photos"/>
                                <span className="video-span">2:00</span>
                            </div>

                        </div>

                    </div>

                    <div className="card-body">
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;