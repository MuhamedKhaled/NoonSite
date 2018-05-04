import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import {Link} from 'react-router-dom'


class SponseredSectionTitle extends React.Component{

    render(){
        return(
            <div class="row">
            <div class="Section-title-1">{this.props.title}</div>
            <div class="sponsered-by">
              Sponsered by adidas
              <i class="fa fa-signal"></i>
            </div>
                <Link to={this.props.allPageLink} class="All-Page-1">All page</Link>
          </div>
        )
    }
}

export default SponseredSectionTitle;