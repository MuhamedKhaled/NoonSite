import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class Footer_About_Us extends React.Component{

    render(){
        return(
            <div class="col-md-1 col-sm-12">
            <h5 class="about-us">About_Us</h5>
            <ul class="list-unstyled">

                <li>
                    <a href="../../views/about_us/about_us.html" class="about-item">Vision</a>
                </li>
                <li>
                    <a href="../../views/about_us/about_us.html" class="about-item">Mission</a>
                </li>
                <li>
                    <a href="../../views/Contact_Us/Contact_Us.html" class="about-item">Contact</a>
                </li>

            </ul>
        </div>
        
        )
    }
}

export default Footer_About_Us;