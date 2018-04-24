import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';



class SponseredSectionTitle extends React.Component{

    render(){
        return(
            <div class="row">
            <div class="Section-title-1">{this.props.title}</div>
            <div class="sponsered-by">
              Sponsered by adidas
              <i class="fa fa-signal"></i>
            </div>
                <a href="../../views/Section_Details/section.html" class="All-Page-1">All page</a>
          </div>
        )
    }
}

export default SponseredSectionTitle;