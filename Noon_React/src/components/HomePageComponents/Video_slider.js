//   - Mohamed Khaled
//   - Nourhan Essam
import React from "react";
import '../../css/Global/bootstrap.min.css';
import '../../css/Homepage/Homepage.css';
import OwlCarousel from 'react-owl-carousel';


class Video_slider extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="Video-slider">
                <OwlCarousel className="owl-carousel" 
                    loop={true} 
                    nav={true}
                    dots={false}
                    center={true}
                    items={2} 
                    navText={['‹','›'] }> 

                 <div className="video-slide">
                 <img src="../../img/Global/Slider-img1.png" className= "video-image"/>
                  <div className="overlay"></div>
                   <div className="video-content">
                     <div className="video-content-title">Basketball</div>
                    <span>szdasdasdasasdaas dasdasd asdas dsdasdasdas dasdasdasdd</span>
                     <img src="../../img/Global/playimg.png" className=""/>
                   </div>
                </div>
                <div className="video-slide">
                    <img src="../../img/Global/Slider-img2.png" className= "video-image"/>
                  <div className="overlay"></div>
                   <div className="video-content">
                     <div className="video-content-title">Basketball</div>
                    <span>szdasdasdasasdaas dasdasd asdas dsdasdasdas dasdasdasdd</span>
                     <img src="../../img/Global/playimg.png" className=""/>
                   </div>
                </div>
                <div className="video-slide">
                    <img src="../../img/Global/Slider-img1.png" className= "video-image" />
                  <div className="overlay"></div>
                   <div className="video-content">
                     <div className="video-content-title">Basketball</div>
                    <span>szdasdasdasasdaas dasdasd asdas dsdasdasdas dasdasdasdd</span>
                     <img src="../../img/Global/playimg.png" className=""/>
                   </div>
                </div>
                <div className="video-slide">
                    <img src="../../img/Global/Slider-img2.png" className= "video-image" />
                  <div className="overlay"></div>
                   <div className="video-content">
                     <div className="video-content-title">Basketball</div>
                    <span>szdasdasdasasdaas dasdasd asdas dsdasdasdas dasdasdasdd</span>
                     <img src="../../img/Global/playimg.png" className=""/>
                   </div>
                </div>






                </OwlCarousel>
            </div>
     </div>
        );
    }
}

export default Video_slider;
