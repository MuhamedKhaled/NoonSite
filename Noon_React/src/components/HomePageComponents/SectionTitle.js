import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';



class SectionTitle extends React.Component{

    render(){
        return(
            <div class="row">
            <div class="Section-title">{this.props.title}</div>
            <a href="#" class="All-Page">All page</a>
          </div>
        )
    }
}

export default SectionTitle;