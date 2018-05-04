import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Footer_About_Us extends React.Component{

    render(){
        return(
            <div class="col-md-1 col-sm-12">
            <h5 class="about-us">About_Us</h5>
            <ul class="list-unstyled">

                <li>
                    <Link to="/aboutus" class="about-item">Vision</Link>
                </li>
                <li>
                    <Link to="/aboutus" class="about-item">Mission</Link>
                </li>
                <li>
                <Link to="/contactus" class="about-item">Contact</Link>
                </li>

            </ul>
        </div>
        
        )
    }
}

export default Footer_About_Us;