/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import { Modal, ModalManager } from 'react-dynamic-modal'
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../css/PostDetails/PostDetails.css';
import PhotoModal from "../SectionComponents/PhotoModal";

class MainPost extends React.Component {

    imgRef = React.createRef();

    openModal = () => {
        const imgSrc = this.imgRef.current.src;
        ModalManager.open(<PhotoModal imgSrc={imgSrc} onRequestClose={() => true}/>);
    };

    render() {
        return (
            <div className="col-md-8 col-xs-12 col-sm-12 mar-2">
                <div className="BigPost align-center mt-0 p-2">
            <div>
                <img className="LittleGirl container image secrets" src={this.props.details.image}
                     ref={this.imgRef} onClick={this.openModal}/>
                <div className="min-ago mb-3 ml-3 min">1 min ago</div>
                <div className="container TextFirst mb-2 title">{this.props.details.title}</div>
                <div className="container TextSecond body">{this.props.details.description}</div>
            </div>
            </div>
    </div>
        );
    }
}

export default MainPost;
