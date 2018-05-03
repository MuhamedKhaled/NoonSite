import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import Small_Post from '../HomePageComponents/Small_Post.js';
import Big_Post from './Big_Post';
import SectionTitle from './SectionTitle';


class MainSection extends React.Component{

    render(){
        return(
            
            <div class="container">
                        <SectionTitle title={this.props.title}/> 

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
        )
    }
}

export default MainSection;
