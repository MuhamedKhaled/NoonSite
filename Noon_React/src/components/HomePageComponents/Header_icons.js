//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';

class Header_icons extends React.Component{
    render(){
        return(

        <div className="row">
          <div className="col-md-4 offset-md-8">
            <a href="https://www.facebook.com/" className="share-icon-c share fa fa-facebook"></a>
            <a href="https://www.twitter.com/" className="share-icon-c share fa fa-twitter"></a>
            <a href="https://www.instagram.com/" className="share-icon-c share fa fa-instagram"></a>
            <a href="https://www.gmail.com/" className="share-icon-c fa fa-google-plus mr-1"></a>
            <a href="https://www.youtube.com/" className="share-icon-c share fa fa-youtube"></a>
             <a href="#" className="share-icon-c share fa fa-ellipsis-h"></a>
             <a href="#" className="share-icon-c share sing">Sign Up</a>
             <span className="vertical-line"></span>
             <a href="#" className="share-icon-c share sing">Login</a>
          </div>
        </div>
        )
    }
}
export default Header_icons;