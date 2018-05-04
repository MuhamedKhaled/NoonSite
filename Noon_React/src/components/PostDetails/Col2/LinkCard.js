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
                        <a href="wwww.facebook.com" className="share-icon-c share fa fa-facebook"/>
                        <a href="www.twitter.com" className="share-icon-c share fa fa-twitter"/>
                        <a href="www.instagram.com" className="share-icon-c share fa fa-instagram"/>
                        <a href="www.googleplus.com" className="share-icon-c fa fa-google-plus mr-1"/>
                        <a href="www.youtube.com" className="share-icon-c share fa fa-youtube"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkCard;
