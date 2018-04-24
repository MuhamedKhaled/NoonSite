
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class OurSections2 extends React.Component{

    render(){
        return(
            
        <div class="col-md-2 col-sm-12">
            <ul class="list-unstyled second-column">
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Tennis</a>
                </li>
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Combat Sports</a>
                </li>
                <li>
                    <a class="sport-item" href="../../views/Section_Details/section.html">Individual Sport</a>
                </li>
            </ul>
        </div>
        )
    }
}

export default OurSections2;
