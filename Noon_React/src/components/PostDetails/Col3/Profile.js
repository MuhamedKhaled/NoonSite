import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class Profile extends React.Component {
    render() {
        return (
            <div>
            <img className="LittleGirl container" src="../../img/PostDetails/profile1.png"
                 srcSet="../../img/PostDetails/profile2.png"/>
            <div className="container profile-header">
            Maria Sharapova
        </div>
        <div className="pr-5 pl-5 TextForth">
            Lorem Ipsum is simply dummy text of the printing and
        </div>
        <div className="row mt-2 mb-2 center">
            <div className="col-md-12 col-xs-12">
            <a href="#" className="share-icon-c share fa fa-facebook"/>
            <a href="#" className="share-icon-c share fa fa-twitter"/>
            <a href="#" className="share-icon-c share fa fa-instagram"/>
            <a href="#" className="share-icon-c fa fa-google-plus mr-1"/>
            <a href="#" className="share-icon-c share fa fa-youtube"/>
            </div>
    </div>
        <hr className="line-post"/>
            </div>
        );
    }
}

export default Profile;
