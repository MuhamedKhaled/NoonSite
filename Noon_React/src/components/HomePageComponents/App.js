import React from 'react';
import { render } from 'react-dom';
import '../../css/Global/bootstrap.min.css';
import '../../css/Homepage/Homepage.css';
import Header from '../HomePageComponents/Header.js';
import NavBar from '../HomePageComponents/NavBar.js';

import slick_slider from '../HomePageComponents/slick-slider.js'
import Slider from "react-slick";
import Section from '../HomePageComponents/Section.js';
import ProfileSection from './ProfileSection';
import MainSection from './MainSection';
import MagazineSection from './MagazineSection';
import OpinionsSection from './OpinionsSection';
import PartnersSection from './PartnersSection';





class App extends React.Component{

    render(){
        return(
        <div>
         <Header />
         <NavBar />
         {/* Main Slider */}
         <Section title="Football"/>
         <ProfileSection />
         <MainSection title="Basketball"/>
          {/* section photos From alaa and ismail */}
          <MainSection title="Swimming"/>
          {/* Video Slider  */}
          <MainSection title="Volleyball"/>
          <MagazineSection/>
          <MainSection title="Tennis"/>
          <OpinionsSection/>
          <PartnersSection/>

         </div>
        )
    }
}

export default App;