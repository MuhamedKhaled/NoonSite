import React from 'react';
import { render } from 'react-dom';
import Header_Date from './Header_Date';
import Search_Noon from './Search_Noon';
import Header_icons from './Header_icons';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';



class Header extends React.Component{

    render(){
        return(
        <div class="header-bar">
         <div class="container">
         <Header_Date/>
         <Search_Noon/>
         <Header_icons/>
          </div>
        </div>
        )
    }
}

export default Header;