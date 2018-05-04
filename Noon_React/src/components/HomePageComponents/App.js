import React from 'react';
import { render } from 'react-dom';
import '../../css/Global/bootstrap.min.css';
import '../../css/Homepage/Homepage.css';
import Header from '../HomePageComponents/Header.js';
import NavBar from '../HomePageComponents/NavBar.js';

import Slider from "react-slick";

import Section from '../HomePageComponents/Section.js';
import ProfileSection from './ProfileSection';
import MainSection from './MainSection';
import MagazineSection from './MagazineSection';
import OpinionsSection from './OpinionsSection';
import PartnersSection from './PartnersSection';
import FooterSection from './FooterSection';
import SimpleSlider from '../SimpleSlider';
import VideoSection from './VideoSection';
import PhotosSection from "../SectionComponents/PhotosSection";

class App extends React.Component{

    marginStyle = {
        marginTop: '90px'
    };

    render(){
        return(
        <div>
         <Header />
         <NavBar />
         <SimpleSlider />
         <Section title="Football"/>
         <ProfileSection />
         <MainSection title="Basketball"/>
          <div className='photo-margin'></div>
          <PhotosSection />
          <MainSection title="Swimming"/>
          <VideoSection />
          <MainSection title="Volleyball"/>
          <MagazineSection/>
          <MainSection title="Tennis"/>
          <OpinionsSection/>
          <PartnersSection/>
          <FooterSection />
         </div>
        )
    }
}

export default App;