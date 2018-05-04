
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Our_Sections extends React.Component{

    render(){
        return(
            <div class="col-md-1 col-sm-12">
            <h5 class="home">Home</h5>
            <ul class="list-unstyled">
                <li>
                    <Link to="/section" class="sport-item">Football</Link>
                </li>
                <li>
                <Link to="/section" class="sport-item" >Basketball</Link>
                </li>
                <li>
                <Link to="/section" class="sport-item" >Swimming</Link>
                </li>
                <li>
                <Link to="/section" class="sport-item">Volleyball</Link>
                </li>
            </ul>
        </div>
        
        )
    }
}

export default Our_Sections;
