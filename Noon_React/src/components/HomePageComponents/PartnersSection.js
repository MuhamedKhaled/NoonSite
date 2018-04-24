import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import Partner from './Partner';




class PartnersSection extends React.Component{

    render(){
        return(
            <div>
            <div class="container">
              <div class="row padding-partners">
              <Partner/>
              <Partner/>
              <Partner/>
              <Partner/>
            </div>
            </div>
            </div>
        )
    }
}

export default PartnersSection;