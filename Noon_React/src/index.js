// let's go!
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
// import './css/style.css';


const Root = () =>(
        <BrowserRouter>
        <Switch>
            <Route exact path = "/PostDetails" component={PostDetails}/>
            {/* <Route  path = "/store/:id" component={App}/> */}
        </Switch>
        </BrowserRouter>
);
render(<Root/> , document.querySelector('#main'));
