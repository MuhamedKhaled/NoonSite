/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class RelatedTopic extends React.Component {
    render() {
        return (
<div className="container col-md-3 p-1">
    <div className=" BigPost align-center">
        <img className="LittleGirl height-of-topics container" src={this.props.details.image}/>
        <div className="-min-ago container mb-2">1 min ago</div>
        <div className="TextThird container">
            {this.props.details.title}
        </div>
        <div className="row mt-2 mb-2">
            <div className="col-md-12 col-xs-12 ml-3">
                <a href="#" className="share-icon-c share fa fa-facebook"/>
                <a href="#" className="share-icon-c share fa fa-twitter"/>
                <a href="#" className="share-icon-c share fa fa-instagram"/>
                <a href="#" className="share-icon-c fa fa-google-plus mr-1"/>
                <a href="#" className="share-icon-c share fa fa-youtube"/>
                <a href="#" className="pull-right mr-4 Read-More mt-1">Read More <span
                    className="arrow">→</span>
                </a>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default RelatedTopic;

