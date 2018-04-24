import React from "react";
import Slider from "react-slick";
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class slick_slider extends React.Component {
    render() {

    const settings = {
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
        return(
            <div className="main-slider">
            <div className="slickSlider">
            <Slider {...settings}>
                <div className="item back-image" style="background-image:url('../../public/img/Global/Slider-img2.png');">
                    <div className="content">
                    <img src="../../public/img/Global/playimg.png" className="pull-right"/>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                </div>

                <div className="item back-image" style="background-image:url('../../public/img/Global/Slider-img1.png');">
                <div className="content">
                    <img src="../../public/img/Global/playimg.png" className="pull-right"/>
                    <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                </div>

                <div className="item back-image" style=" background-image:url('../../public/img/Global/Slider-img2.png');">
                <div className="content">
                    <img src="../../public/img/Global/playimg.png" className="pull-right"/>
                    <span> Lorem Ipsum is simply dummy text of the printing</span>

                </div>
                </div>

                <div className="item back-image" style="background-image:url('../../public/img/Global/Slider-img1.png'); ">
                <div className="content">
                    <img src="../../public/img/Global/playimg.png" className="pull-right"/>
                    <span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
                </div>
                </div>
        </Slider>
            </div>
        </div>

        );

    }
}

export default slick_slider;