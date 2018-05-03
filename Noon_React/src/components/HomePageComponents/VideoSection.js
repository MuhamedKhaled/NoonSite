
import React from "react";
import '../../css/Global/bootstrap.min.css';
import '../../css/Homepage/Homepage.css';
// import 'react-owl-carousel2/style.css'; 
import SectionTitle from './SectionTitle';
import Video_slider from './Video_slider';

class VideoSection extends React.Component {
    render() {
        return (

        <div class="details-section-2">
            <div class="container">
            <SectionTitle title="Videos"/>
            <Video_slider />
            </div>
        </div>    
     
        );
    }
}

export default VideoSection;
