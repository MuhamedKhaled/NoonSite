import React from 'react'
import {render} from 'react-dom'

class PhotoModal extends React.Component{
    render(){
        return (
            <div className="modal fade" id="enlargeImageModal" tabIndex="-1" role="dialog"
                 aria-labelledby="enlargeImageModal" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <img src="" className="enlargeImageModalSource"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoModal;