// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'
import '../../css/Global/bootstrap.css'
import '../../css/Global/font.css'
import Big_Post from '../HomePageComponents/Big_Post'
import Small_Post from '../HomePageComponents/Small_Post'
import Advertisement from './Advertisement'
import Profile from './Profile'
import '../../css/Section/section.css'
import SectionPhoto from './SectionPhoto';

import PhotosSection from "./PhotosSection";
import VideosSection from "../HomePageComponents/VideoSection";
import Header from "../HomePageComponents/Header";
import NavBar from "../HomePageComponents/NavBar";
import FooterSection from "../HomePageComponents/FooterSection";
import FeaturesSection from "./FeaturesSection";
import NewsSection from "./NewsSection";
import PostsSection from "./PostsSection";

class Section extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <NavBar />
                <PostsSection/>
                <PhotosSection />
                <FeaturesSection/>
                <VideosSection />
                <NewsSection/>
                <FooterSection />
            </div>
        );
    }
}

export default Section;

// style="width: 100%;"