// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class VideoModal extends React.Component{

    modalStyle = {
        content: {
            minWidth: '400px',
            width: '70%',
            height: '85%',
            top: '7%',
            bottom: '7%',
            margin: 'auto',
        }
    };

    render(){
        const { videoSrc, onRequestClose } = this.props;
        return(
            <Modal style={this.modalStyle}
                onRequestClose={onRequestClose}
                effect={Effect.ScaleUp}>
                <video className="mediaVideoStyle" autoPlay="autoplay" controls >
                    <source src={videoSrc}/>
                    <p>Your browser does not support the video tag.</p>
                </video>
            </Modal>
        );
    }
}

export default VideoModal;