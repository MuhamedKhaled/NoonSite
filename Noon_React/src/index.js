// let's go!
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import './css/style.css';
import Media from './components/Media'



const Root = () =>{

    return(
        <BrowserRouter>
        <Switch>
            {/* <Route exact={true} path = "/" component={StorePicker}/> */}
            {/* <Route  path = "/store/:id" component={App}/> */}
            <Route path={"/media"} component={Media} />
        </Switch>
        </BrowserRouter>


    )
}



render( <Root/> , document.querySelector('#main')  );
