import React from 'react';
import { render } from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class LinkCard extends React.Component {
    render(){
        return (
            <div className="BigPost container align-center mar-2 ">
                <h2 className="bolds mb-auto mt-2">Link</h2>
                <a href="#" className="noonaenewslink  mt-0">noon.ae/newslink</a>
                <h2 className="bolds  mt-4 mb-auto">Print</h2>
                <a href="#" className="noonaenewslink  mt-0">Print this screen</a>
                <div className="row mb-2 mt-2">
                    <div className="container">
                        <a href="#" className="share-icon-c share fa fa-facebook"/>
                        <a href="#" className="share-icon-c share fa fa-twitter"/>
                        <a href="#" className="share-icon-c share fa fa-instagram"/>
                        <a href="#" className="share-icon-c fa fa-google-plus mr-1"/>
                        <a href="#" className="share-icon-c share fa fa-youtube"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkCard;
