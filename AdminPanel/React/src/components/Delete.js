import React from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class Delete extends React.Component{

    modalStyle = {
        content: {
            margin: '10% auto',
        }
    }

    render(){
        const { onRequestClose } = this.props;
        return(
            <Modal style={this.modalStyle}
                   onRequestClose={onRequestClose}
                   effect={Effect.ScaleUp}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    </div>
                    <div className="modal-body">
                        Do you want to Delete this ...?!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </Modal>

        );
    }
}
export default Delete;