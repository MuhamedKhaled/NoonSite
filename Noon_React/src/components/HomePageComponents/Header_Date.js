//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';


class Header_Date extends React.Component{

    render(){
        return(

            <div className="row">
            <div className="col-md-3 offset-md-9 col-sm-3 offset-sm-9 ">
              <label className="date">Tue 11:04 PM</label>
            </div>
           </div>
        )
    }
}

export default Header_Date;