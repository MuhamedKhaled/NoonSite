//   - Mohamed Khaled
//   - Nourhan Essam
import React from "react";
import '../css/Homepage/Homepage.css';
import '../css/Global/bootstrap.min.css';
import Slider from "react-slick";



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      centerMode: true,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      dots:true,
      initialSlide:0,
      cssEase: 'linear',
      responsive: [
        {
        breakpoint: 1000,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    };
    return (
        <div className="main-slider">
        <div className="slickSlider">
      <Slider {...settings}>
          <div className="item back-image">
                <img src="../img/Global/Slider-img2.png" className="slider-imgeWidth"/>
                    <div className="content">
                    <img src="../../img/Global/playimg.png" className="pull-right"/>
                    <span>Lorem Ipsum is simply dummy text of the printsdfsdfsdfding and typesetting industry.</span>
                    </div>
            </div>
      
         <div className="item back-image">
                <img src="../img/Global/Slider-img1.png" className="slider-imgeWidth"/>
                    <div className="content">
                    <img src="../../img/Global/playimg.png" className="pull-right"/>
                    <span>Lorem Ipsum is simply dummy text of the printsdfsdfsdfding and typesetting industry.</span>
                    </div>
         </div>

          <div className="item back-image">
                <img src="../img/Global/Slider-img2.png" className="slider-imgeWidth"/>
                    <div className="content">
                    <img src="../../img/Global/playimg.png" className="pull-right"/>
                    <span>Lorem Ipsum is simply dummy text of the printsdfsdfsdfding and typesetting industry.</span>
                    </div>
         </div>

          <div className="item back-image">
                <img src="../img/Global/Slider-img1.png" className="slider-imgeWidth"/>
                    <div className="content">
                    <img src="../../img/Global/playimg.png" className="pull-right"/>
                    <span>Lorem Ipsum is simply dummy text of the printsdfsdfsdfding and typesetting industry.</span>
                    </div>
         </div>


          <div className="item back-image">
                <img src="../img/Global/Slider-img2.png" className="slider-imgeWidth"/>
                    <div className="content">
                    <img src="../../img/Global/playimg.png" className="pull-right"/>
                    <span>Lorem Ipsum is simply dummy text of the printsdfsdfsdfding and typesetting industry.</span>
                    </div>
         </div>

      </Slider>
      </div>
      </div>
    );
  }
}

export default SimpleSlider;