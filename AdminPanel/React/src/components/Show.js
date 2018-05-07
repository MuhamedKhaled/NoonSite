import React from 'react';
import {render} from 'react-dom';

class Show extends React.Component{

    render(){
        return (
            <div className="row show">
                <div className="col-12">
                    <label htmlFor="category" className="edit-form-title">Football</label>
                    <hr />
                </div>
                <div className="card col-12">
                    <img className="card-img-top" src="../../img/download.svg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="edit" className="btn purple-btn">Edit</a>
                        </div>
                </div>
            </div>
        );
    }
}
export default Show;