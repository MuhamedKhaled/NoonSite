// Alaa Atef Badr
// Ismail Ahmed
// Mostafa ElMenshawy

import React from 'react'
import {render} from 'react-dom'
import Dropdown from 'react-dropdown'

class ChooseCountryDropdown extends React.Component{
    branches = [
        { value:'egypt', label:'Egypt', className:'dropdown-item'},
        { value:'emirates', label:'Emirates', className:'dropdown-item'},
        { value:'kuwait', label:'Kuwait', className:'dropdown-item'}
    ];

    render(){
        return(
            <div className="dropdown menu">
                {/*<select className="select_button" name="location" id="location" defaultValue="">*/}
                    {/*<option  value="" disabled hidden="true">Choose your country</option>*/}
                    {/*<option value="Egypt">Egypt</option>*/}
                    {/*<option value="Emirates">Emirates</option>*/}
                    {/*<option  value="Kuwait">Kuwait</option>*/}
                {/*</select>*/}
                <Dropdown className="select_button" placeholder="Choose your country" options={this.branches}/>
            </div>
        );
    }
}

export default ChooseCountryDropdown;