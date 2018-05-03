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


const Root = () =>{

    return(
        <BrowserRouter>
        <Switch>
            <Route  path = "/" component={About_us} />
             {/* <Route path={"/media"} component={Media} /> */}
        </Switch>
        </BrowserRouter>


    )
}



render( <Root/> , document.querySelector('#main'));
