// let's go!
import React from 'react';
import {render} from 'react-dom';
// import {BrowserRouter,Route} from 'react-router-dom';
import '../src/css/Homepage/Homepage.css';
import App from '../src/components/HomePageComponents/App.js'; 
import './css/Global/bootstrap.min.css';
import slick_slider from './components/HomePageComponents/slick-slider';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import './css/style.css';
import Media from './components/Media'



const Root = () =>{

    return(
        <BrowserRouter>
        <Switch>
            <Route  path = "/" component={App} />
             {/* <Route path={"/media"} component={Media} /> */}
        </Switch>
        </BrowserRouter>


    )
}



render( <Root/> , document.querySelector('#main'));
