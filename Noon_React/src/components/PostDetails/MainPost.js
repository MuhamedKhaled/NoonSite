import React from 'react';
import { render } from 'react-dom';
import '../../css/PostDetails/PostDetails.css';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../js/Global/jquery-3.3.1.min.js';
import '../../js/Global/popper.min.js';
import '../../js/Global/bootstrap.min.js';
import '../../js/Global/navbar-dropdown.js';

class MainPost extends React.Component {
 render(){
   return (
       <div className="container">
           <div className="row">
               <div className="col-md-9 col-xs-12">
                   <div>
                       <div className="row">
   <div className="BigPost align-center mt-0 p-2">
      <img className="LittleGirl container image secrets" src={this.props.image} srcSet={this.props.secrets}/>
      <div className="-min-ago mb-3 ml-3 min">{this.props.min}</div>
      <div className="container TextFirst mb-2 title">{this.props.title}</div>
      <div className="container TextSecond body">{this.props.body}</div>
    </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
 }
}

export default MainPost;
