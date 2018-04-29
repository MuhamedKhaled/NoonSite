import React from 'react'
import {render} from 'react-dom'

class ChooseCountryDropdown extends React.Component{
    render(){
        return(
            <div className="dropdown menu">
                <select className="select_button" name="location" id="location" defaultValue="">
                    <option  value="" disabled hidden="true">Choose your country</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Emirates">Emirates</option>
                    <option  value="Kuwait">Kuwait</option>
                </select>
            </div>
        );
    }
}

export default ChooseCountryDropdown;