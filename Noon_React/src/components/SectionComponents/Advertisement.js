// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'

class Advertisement extends React.Component{

    has_image = false;

    render() {
        return (
            <div className="advertise_card">
                <div className="advertise">
                    <div className="advertise-font">Advertising Space</div>
                    <img hidden={!this.has_image} src="#" alt="advertisement"/>
                </div>
            </div>
        );
    }
}

export default Advertisement;