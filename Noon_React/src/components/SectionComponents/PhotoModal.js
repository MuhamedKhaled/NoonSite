// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class PhotoModal extends React.Component{

    modalStyle = {
        content: {
            minWidth: '300px',
            width: '45%',
            height: '80%',
            top: '10%',
            bottom: '10%',
            margin: 'auto',
        }
    };

    render(){
        const { imgSrc, onRequestClose } = this.props;
        return (
            <Modal style={this.modalStyle}
                onRequestClose={onRequestClose}
                effect={Effect.ScaleUp}>
                <img className="sectionImgStyle" src={imgSrc} alt=""/>
            </Modal>
        );
    }
}

export default PhotoModal;