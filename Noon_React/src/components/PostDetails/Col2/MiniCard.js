import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class MiniCard extends React.Component {
    render() {
        return (
            <div className=" BigPost align-center">
                <div className="container">
                <img className="LittleGirl  image secrets" src={this.props.image}
                     srcSet={this.props.secrets}
                     className="LittleGirl"/>
                </div>
                <div className="min-ago container mb-2 min">{this.props.min}</div>
                <div className="TextThird container title">
                    {this.props.title}
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col-md-12 col-xs-12 ml-3">
                        <a href="#" className="share-icon-c share fa fa-facebook"/>
                        <a href="#" className="share-icon-c share fa fa-twitter"/>
                        <a href="#" className="share-icon-c share fa fa-instagram"/>
                        <a href="#" className="share-icon-c fa fa-google-plus mr-1"/>
                        <a href="#" className="share-icon-c share fa fa-youtube"/>
                        <a href="#" className="pull-right mr-4 Read-More mt-1">Read More<span
                            className="arrow">→</span>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default MiniCard;
