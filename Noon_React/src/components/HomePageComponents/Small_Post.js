import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import {Link} from 'react-router-dom'


class Small_Post extends React.Component{

    render(){
        return(
            <div class="row">
                 <div class="card-padding">
                        <div class = "section_card small_card">
                            <img class="section_card_img"
                                 src="../../img/media/little-girl.png"
                                 srcset="../../img/media/little-girl@2x.png 2x,
                             ../../img/media/little-girl@3x.png 3x"/>
                            <div class ="-min-ago">1 min ago</div>
                            <div class ="section-card-title">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </div>
                            <div class="row">
                                <div class="more col-lg-6 col-md-12 col-sm-12 col-12 ">
                                    <a href="https://www.facebook.com/" class="share-icon-c fa fa-facebook"></a>
                                    <a href="https://www.twitter.com/" class="share-icon-c fa fa-twitter"></a>
                                    <a href="https://www.instagram.com/" class="share-icon-c fa fa-instagram"></a>
                                    <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
                                    <a href="https://www.youtube.com/" class="share-icon-c fa fa-youtube"></a>
                                </div>
                                <div class="more col-lg-6 col-md-12 col-sm-12 col-12 ">
                                    <Link to="/PostDetails" class="read_more">Read More <span class="arrow">&rarr;</span></Link>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
        )
    }
}

export default Small_Post;