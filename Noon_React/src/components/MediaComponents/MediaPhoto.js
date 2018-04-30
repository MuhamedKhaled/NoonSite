import React from 'react'
import {render} from 'react-dom'
import { Modal, ModalManager } from 'react-dynamic-modal'
import PhotoModal from "../SectionComponents/PhotoModal";

class MediaPhoto extends React.Component{

    imgRef = React.createRef();

    openModal = () => {
        const imgSrc = this.imgRef.current.src;
        ModalManager.open(<PhotoModal imgSrc={imgSrc} onRequestClose={() => true}/>);
    };

    render()
    {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                <div className="card mb-4">
                    <div className="media_card_container">
                        <img className="card-img-top" src="../../img/media/little-girl.png" ref={this.imgRef}/>
                        <div className="media_card_hover" onClick={this.openModal}>
                            <div className="media_card_details">
                                <img src="../../img/media/photos.png" alt="photos"/>
                                <span className="photo-span">8/1</span>
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

export default MediaPhoto;