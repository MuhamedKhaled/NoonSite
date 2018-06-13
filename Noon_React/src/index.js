// let's go!
import React from 'react';
import {render} from 'react-dom';
import '../src/css/Homepage/Homepage.css';
import App from '../src/components/HomePageComponents/App.js'; 
import './css/Global/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import Slider from "react-slick";
// import SimpleSlider from '../src/components/SimpleSlider'
import OwlCarousel from 'react-owl-carousel2';
import VideoSection from './components/HomePageComponents/VideoSection';
import About_us from './components/AboutUs/About_us';
import PostDetails from './components/PostDetails/PostDetails';
import Media from './components/MediaComponents/Media'
import Section from './components/SectionComponents/Section'
import ContactUs from "./components/ContactUsComponents/ContactUs";
import LiveStreaming from "./components/LiveStreamingComponents/LiveStream";


const Root = () =>{

    return(
        <BrowserRouter>
        <Switch>
            <Route path = "/aboutus" component={About_us} />
            <Route exact path = "/" component={App} />
            <Route path="/media" component={Media} />
            //<Route path="/section" component={Section}/>
            <Route exact path = "/PostDetails" component={PostDetails}/>
            <Route exact path = "/PostDetails/:id" component={PostDetails}/>
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/LiveStreaming" component={LiveStreaming}/>
        </Switch>
        </BrowserRouter>
    );

    }


render( <Root/> , document.querySelector('#main'));
