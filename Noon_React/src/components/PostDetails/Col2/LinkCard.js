/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import { Link } from 'react-router-dom'

class LinkCard extends React.Component {
    render(){
        return (
            <div className="BigPost container align-center mar-2 ">
                <h2 className="bolds mb-auto mt-2">Link</h2>
                <Link to="#" className="noonaenewslink  mt-0">noon.ae/newslink</Link>
                <h2 className="bolds  mt-4 mb-auto">Print</h2>
                <Link to="#" className="noonaenewslink  mt-0">Print this screen</Link>
                <div className="row mb-2 mt-2">
                    <div className="container">
                        <Link to="www.facebook.com" className="share-icon-c share fa fa-facebook"/>
                        <Link to="www.twitter.com" className="share-icon-c share fa fa-twitter"/>
                        <Link to="www.instagram.com" className="share-icon-c share fa fa-instagram"/>
                        <Link to="www.googleplus.com" className="share-icon-c fa fa-google-plus mr-1"/>
                        <Link to="www.youtube.com" className="share-icon-c share fa fa-youtube"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkCard;
