import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class Footer_Logo extends React.Component{

    render(){
        return(
            <div class="col-md-3 col-sm-12">
                <img class="img-div" src="../../img/Global/footer-logo.png"/>
            </div>
        
        )
    }
}

export default Footer_Logo;
