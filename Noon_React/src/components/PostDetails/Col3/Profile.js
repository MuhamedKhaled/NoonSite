/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <img className="LittleGirl container" src={this.props.image}
                     srcSet={this.props.secrets}/>
                <div className="container profile-header">
                    {this.props.name}
                </div>
                <div className="pr-5 pl-5 TextForth">
                    {this.props.title}
                </div>
                <div className="row mt-2 mb-2 center">
                    <div className="col-md-12 col-xs-12">
                        <a href="wwww.facebook.com" className="share-icon-c share fa fa-facebook"/>
                        <a href="www.twitter.com" className="share-icon-c share fa fa-twitter"/>
                        <a href="www.instagram.com" className="share-icon-c share fa fa-instagram"/>
                        <a href="www.googleplus.com" className="share-icon-c fa fa-google-plus mr-1"/>
                        <a href="www.youtube.com" className="share-icon-c share fa fa-youtube"/>
                    </div>
                </div>
                <hr className="line-post"/>
            </div>
        );
    }
}

export default Profile;
