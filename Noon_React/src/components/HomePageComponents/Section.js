import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import SponseredSectionTitle from '../HomePageComponents/SponseredSectionTitle.js';
import Small_Post from '../HomePageComponents/Small_Post.js';
import Big_Post from './Big_Post';


class Section extends React.Component{

    render(){
        return(
            <div class="details-section">
            <div class="container">
              <SponseredSectionTitle title={this.props.title}/> 
            <div class="row">
             <Big_Post />
             <div class="col-md-3 col-sm-6" >
             <Small_Post />
             <Small_Post />
            </div>  
            <div class="col-md-3 col-sm-6" >
             <Small_Post />
             <Small_Post />
            </div>            
           </div>
           </div>
           </div>
        )
    }
}

export default Section;
