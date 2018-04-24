
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class Our_Sections extends React.Component{

    render(){
        return(
            <div class="col-md-1 col-sm-12">
            <h5 class="home">Home</h5>
            <ul class="list-unstyled">
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Football</a>
                </li>
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Basketball</a>
                </li>
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Swimming</a>
                </li>
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Volleyball</a>
                </li>
            </ul>
        </div>
        
        )
    }
}

export default Our_Sections;
