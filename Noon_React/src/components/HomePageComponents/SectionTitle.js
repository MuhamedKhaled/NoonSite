import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import {Link} from 'react-router-dom'


class SectionTitle extends React.Component{

    render(){

        return(
            <div class="row">
            <div class="Section-title">{this.props.title}</div>
            <Link to={this.props.allPageLink || "/"} class="All-Page" hidden={this.props.isLinkHidden || false}>All page</Link>
          </div>
        )
    }
}

export default SectionTitle;