// Alaa Atef Badr
// Ismail Ahmed
// Mostafa ElMenshawy

import React from 'react'
import {render} from 'react-dom'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class MessageModal extends  React.Component{

    modalStyle = {
        content: {
            textAlign: 'center',
            width: '20%'
        }
    };

    render(){
        const {onRequestClose} = this.props;
        return(
            <Modal style={this.modalStyle}
                onRequestClose={onRequestClose}
                effect={Effect.ScaleUp}>
                <p className="messageStyle">Message Sent!</p>
                <p className="messageStyle">Thanks for your contact.</p>
            </Modal>
        );
    }
}

export default MessageModal;