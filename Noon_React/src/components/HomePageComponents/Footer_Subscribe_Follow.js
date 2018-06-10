//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class Footer_Subscribe_Follow extends React.Component{

    render(){
        return(
            <div class="col-md-3 col-sm-12">
            <h5 class="follow">Follow us</h5>
            <ul class="list-unstyled">
            <li>
        <a href="https://www.facebook.com/" class="share-icon-c share fa fa-facebook"></a>
        <a href="https://www.twitter.com/" class="share-icon-c share fa fa-twitter"></a>
        <a href="https://www.instagram.com/" class="share-icon-c share fa fa-instagram"></a>
        <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
        <a href="https://www.youtube.com/" class="share-icon-c share fa fa-youtube"></a>
    </li>
    <li>

        <input class="subscribe-area" type="text" name="Subscribe" placeholder=" Your email address" />
        <button class="subscribe-btn">
            Subscribe
        </button>
    </li>
</ul>

</div>
        
        )
    }
}

export default Footer_Subscribe_Follow;
