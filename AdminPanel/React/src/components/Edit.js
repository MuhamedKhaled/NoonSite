import React from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class Edit extends React.Component{

    modalStyle = {
        content: {
            margin: '10% auto',
        }
    }

    render(){
        const { labelone,labeltwo,onRequestClose } = this.props;
        return(
            <Modal style={this.modalStyle}
                   onRequestClose={onRequestClose}
                   effect={Effect.ScaleUp}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">{labelone}</label>
                                    <input type="email" className="form-control" placeholder={labelone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">{labeltwo}</label>
                                    <input type="password" className="form-control" placeholder={labeltwo} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
            </Modal>
        );
    }
}
export default Edit;