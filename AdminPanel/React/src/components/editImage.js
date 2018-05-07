import React from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class EditImage extends React.Component{
    modalStyle = {
        content: {
            margin: '10% auto',
        }
    }
    render(){
        const { onRequestClose } = this.props;
        return (
            <Modal style={this.modalStyle}
                   onRequestClose={onRequestClose}
                   effect={Effect.ScaleUp}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit image</h5>
                </div>
                <div className="modal-body">
                    <div className="add_image row">
                        <div className="col-6">
                            <div className="add add_local">
                                <label htmlFor="addImage">
                                    <i className="fas fa-desktop"></i>
                                    Add local
                                </label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="add add_url">
                                <label htmlFor="addImage">
                                    <i className="fas fa-anchor"></i>
                                    Add url
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn pink-btn" data-dismiss="modal">Close</button>
                    <button type="button" className="btn purple-btn">Save changes</button>
                </div>
            </Modal>
        );
    }
}
export default EditImage;