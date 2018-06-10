//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';



class ProfileCard extends React.Component{

    render(){
       return(
        <div class="col-md-3 col-sm-6">
        <div class="card card-background">
          <img class=" image-adjustment" src="../../img/Global/maria.jpg" alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title text-center profile-name">Maria Sharapova</h5>
            <p class="card-text text-center profile-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <div class="centered">
                <p>
                                <a href="https://www.facebook.com/" class="share-icon-c share fa fa-facebook"></a>
                                <a href="https://www.twitter.com/" class="share-icon-c share fa fa-twitter"></a>
                                <a href="https://www.instagram.com/" class="share-icon-c share fa fa-instagram"></a>
                                <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
                                <a href="https://www.youtube.com/" class="share-icon-c share fa fa-youtube"></a>
                </p>
            </div>
          </div>
        </div>
      </div>
       )
       
        
    }
}

export default ProfileCard;