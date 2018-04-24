import React from 'react';
import { render } from 'react-dom'; 
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';

class NavBar extends React.Component{

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark customized-navbar">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="../../views/Home/Homepage.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sports
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="dropdown-submenu dd1-padding">
                                <a class="nested-list-link" tabindex="-1" href="#" >Football<span class="caret"></span></a>
                                <ul class="dropdown-menu second-dropdown">
                                <li tabindex="-1" class="my-sport">Football</li>
                                     <li class="dropdown-submenu"><a tabindex="-1" href="#" class="country-1"><img class="country" src="../../img/Global/Emar.png"/>Emirates</a>

                                          <a tabindex="-1" href="#" class="country-2"><img class="country" src="../../img/Global/bahrin.jpg"/>Bahrin</a>
                                          <ul class="dropdown-menu posts-dropdown">
                                            <li class="post-li">
                                                <div class="row">
                                                    <div class="card-padding col-md-6 col-sm-12 col-overwritting">
                                                        <div class = "section_card small_card">
                                                            <img class="section_card_img"
                                                                src="../../img/media/little-girl.png"
                                                                srcset="../../img/media/little-girl@2x.png 2x,
                                                            ../../img/media/little-girl@3x.png 3x"/>
                                                            <div class ="-min-ago">1 min ago</div>
                                                            <div class ="section-card-title">
                                                                Lorem Ipsum is simply dummy text of
                                                            </div>
                                                            <div class="more">
                                                                <a href="https://www.facebook.com/" class="share-icon-c share fa fa-facebook"></a>
                                                                <a href="https://www.twitter.com/" class="share-icon-c share fa fa-twitter"></a>
                                                                <a href="https://www.instagram.com/" class="share-icon-c share fa fa-instagram"></a>
                                                                <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
                                                                <a href="https://www.youtube.com/" class="share-icon-c share fa fa-youtube"></a>
                                                                <a href="../../views/PostDetails/PostDetails.html" class="read_more">Read More &rarr;</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-padding col-md-6 col-sm-12" >
                                                        <div class = "section_card small_card"  >
                                                            <img class="section_card_img"
                                                                src="../../img/media/little-girl.png"
                                                                srcset="../../img/media/little-girl@2x.png 2x,
                                                            ../../img/media/little-girl@3x.png 3x"/>
                                                            <div class ="-min-ago">1 min ago</div>
                                                            <div class ="section-card-title">
                                                                Lorem Ipsum is simply dummy text of 
                                                            </div>
                                                            <div class="more">
                                                                <a href="https://www.facebook.com/" class="share-icon-c share fa fa-facebook"></a>
                                                                <a href="https://www.twitter.com/" class="share-icon-c share fa fa-twitter"></a>
                                                                <a href="https://www.instagram.com/" class="share-icon-c share fa fa-instagram"></a>
                                                                <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
                                                                <a href="https://www.youtube.com/" class="share-icon-c share fa fa-youtube"></a>
                                                                <a href="../../views/PostDetails/PostDetails.html" class="read_more">Read More &rarr;</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-divider"></div>
                                                    <li><a tabindex="-1" href="#" class="country-1"><img class="country" src="../../img/Global/Emar.png"/>Emirates</a>
                       <ul class="dropdown-menu posts-dropdown">
                          <li class="post-li">
                      <div class="row">
                    <div class="card-padding col-md-6 col-sm-12 col-overwritting">
                        <div class = "section_card small_card">
                            <img class="section_card_img"
                                 src="../../img/media/little-girl.png"
                                 srcset="../../img/media/little-girl@2x.png 2x,
                             ../../img/media/little-girl@3x.png 3x"/>
                            <div class ="-min-ago">1 min ago</div>
                            <div class ="section-card-title">
                                Lorem Ipsum is simply dummy text of
                            </div>
                            <div class="more">
                                <a href="https://www.facebook.com/" class="share-icon-c share fa fa-facebook"></a>
                                <a href="https://www.twitter.com/" class="share-icon-c share fa fa-twitter"></a>
                                <a href="https://www.instagram.com/" class="share-icon-c share fa fa-instagram"></a>
                                <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
                                <a href="https://www.youtube.com/" class="share-icon-c share fa fa-youtube"></a>
                                <a href="../../views/PostDetails/PostDetails.html" class="read_more">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-padding col-md-6 col-sm-12" >
                        <div class = "section_card small_card"  >
                            <img class="section_card_img"
                                 src="../../img/media/little-girl.png"
                                 srcset="../../img/media/little-girl@2x.png 2x,
                             ../../img/media/little-girl@3x.png 3x"/>
                            <div class ="-min-ago">1 min ago</div>
                            <div class ="section-card-title">
                                Lorem Ipsum is simply dummy text of 
                            </div>
                             <div class="more">
                                <a href="https://www.facebook.com/" class="share-icon-c share fa fa-facebook"></a>
                                <a href="https://www.twitter.com/" class="share-icon-c share fa fa-twitter"></a>
                                <a href="https://www.instagram.com/" class="share-icon-c share fa fa-instagram"></a>
                                <a href="https://www.gmail.com/" class="share-icon-c fa fa-google-plus"></a>
                                <a href="https://www.youtube.com/" class="share-icon-c share fa fa-youtube"></a>
                                <a href="../../views/PostDetails/PostDetails.html" class="read_more">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                   </div>
                            </li>
                        </ul>
                    
                      <a tabindex="-1" href="#" class="country-2"><img class="country" src="../../img/Global/bahrin.jpg"/>Bahrin</a>
                  </li>




                                                          <div class="dropdown-divider"></div>
                                                                <li><a tabindex="-1" href="#" class="country-1"><img class="country" src="../../img/Global/Emar.png"/>Emirates</a>
                                                                    <a tabindex="-1" href="#" class="country-2"><img class="country" src="../../img/Global/bahrin.jpg"/>Bahrin</a>
                                                                </li>
                                                                <div class="dropdown-divider"></div>
                                                                <li><a tabindex="-1" href="#" class="country-1"><img class="country" src="../../img/Global/Emar.png"/>Emirates</a>
                                                                    <a tabindex="-1" href="#" class="country-2"><img class="country" src="../../img/Global/bahrin.jpg"/>Bahrin</a>
                                                                </li>
                                                                <div class="dropdown-divider"></div>
                                                                <li><a tabindex="-1" href="#" class="country-1"><img class="country" src="../../img/Global/Emar.png"/>Emirates</a>
                                                                    <a tabindex="-1" href="#" class="country-2"><img class="country" src="../../img/Global/bahrin.jpg"/>Bahrin</a>
                                                                </li>
                                                </div>


                                            </li>
                                            </ul>
                                   </li>
                                </ul>

                            </li>


                            </ul>



                        </li>


                            <li class="nav-item active">
                                <a class="nav-link" href="#">Articles</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="../../views/Media/media.html">Images</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="../../views/Media/media.html">Videos</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Magazines</a>
                            </li>
  
                    </ul>


                <ul class="navbar-nav ml-auto">
                    <li class="nav-item shop" ><a class="shop" href="#"><i class="fa fa-shopping-bag"></i>&nbsp;Shop</a></li>
                    <li class="nav-item"><a href="../../views/LiveStreaming/LiveStreaming.html" class="liveStream"><span ><i class="fa fa-signal"></i>&nbsp;LiveStream</span></a></li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;