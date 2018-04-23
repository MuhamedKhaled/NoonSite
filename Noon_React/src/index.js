// let's go!
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
// import './css/style.css';




const Root = () =>{

    return(
        <BrowserRouter>
        <div>
            {/* <Route exact={true} path = "/" component={StorePicker}/> */}
            {/* <Route  path = "/store/:id" component={App}/> */}
        </div>
        </BrowserRouter>


    )
}



render( <Root/> , document.querySelector('#main')  );
