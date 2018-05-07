import React from 'react';
import ReactDOM from 'react-dom';
import '../css/blogs.css';

class Card extends React.Component{
    render(){
        return(
            <div className="card col-3 Cardview">
                <img className="card-img-top" src="../../img/download.svg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                    <a href="edit" className="btn purple-btn">Edit</a>
                    <a href="showpost" className="btn pink-btn">Show</a>
                </div>
            </div>
        );
    }
}
export  default  Card;