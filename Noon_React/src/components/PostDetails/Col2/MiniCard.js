/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import { Link } from 'react-router-dom'

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
                        <Link to="www.facebook.com" className="share-icon-c share fa fa-facebook"/>
                        <Link to="www.twitter.com" className="share-icon-c share fa fa-twitter"/>
                        <Link to="www.instagram.com" className="share-icon-c share fa fa-instagram"/>
                        <Link to="www.googleplus.com" className="share-icon-c fa fa-google-plus mr-1"/>
                        <Link to="www.youtube.com" className="share-icon-c share fa fa-youtube"/>
                        <Link to="#" className="pull-right mr-4 Read-More mt-1">Read More<span
                            className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default MiniCard;
