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
// import OwlCarousel from 'react-owl-carousel2';





class App extends React.Component{

    render(){
        return(
        <div>
         <Header />
         <NavBar />
         <SimpleSlider />
         <Section title="Football"/>
         <ProfileSection />
         <MainSection title="Basketball"/>
          {/* <section photos From alaa and ismail } */}
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