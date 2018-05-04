// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'
import '../../css/media/media.css'
import '../../css/Global/bootstrap.css'
import '../../css/Global/font.css'
import MediaPhoto from './MediaPhoto'
import Video from './Video'
import SimpleSlider from "../SimpleSlider";
import Header from "../HomePageComponents/Header";
import NavBar from "../HomePageComponents/NavBar";
import FooterSection from "../HomePageComponents/FooterSection";
import MediaPhotoSection from "./MediaPhotoSection";
import MediaVideoSection from "./MediaVideoSection";

class Media extends React.Component{
    render()
    {
        return (
            <div>
                <Header />
                <NavBar />
                <SimpleSlider />
                <MediaPhotoSection />
                <MediaVideoSection/>
                <FooterSection/>
            </div>
        );
    }
}

export default Media;