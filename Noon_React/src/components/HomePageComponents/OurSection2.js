//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import { Link } from 'react-router-dom';


class OurSections2 extends React.Component{

    render(){
        return(
            
        <div class="col-md-2 col-sm-12">
            <ul class="list-unstyled second-column">
                <li>
                    <Link to="/section" class="sport-item" >Tennis</Link>
                </li>
                <li>
                <Link to="/section" class="sport-item"> Combat Sports</Link>
                </li>
                <li>
                <Link to="/section"class="sport-item" >Individual Sport</Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default OurSections2;
