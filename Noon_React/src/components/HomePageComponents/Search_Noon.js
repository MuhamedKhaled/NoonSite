import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class Search_Noon extends React.Component{
    render(){
        return(
        <div className="row">
           <div className="col-md-6 col-sm-12 custom-height">
              <img src="../../img/Global/navbar-logo.jpg"/>
           </div>
           <div className="col-md-4 offset-md-2 offset-sm-12 flex-container">
               <div className="row search-div">
                 <div className="search">Search</div>
                 <div><input className="search-part" name="search"/></div>
                 <div><button className="search-btn" type="submit"><i class="fa fa-search search-icon"></i></button>
                 </div>
               </div>
            </div>
        </div>
        )
    }
}
export default Search_Noon;