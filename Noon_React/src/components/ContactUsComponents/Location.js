// Alaa Atef Badr
// Ismail Ahmed
// Mostafa ElMenshawy

import React from 'react'
import {render} from 'react-dom'
import ContactWays from "./ContactWays";
import GoogleMapReact from 'google-map-react'
import ChooseCountryDropdown from "./ChooseCountryDropdown";

class Location extends React.Component{
    static defaultProps = {
        center: { lat: -25.363, lng: 131.044 },
        zoom: 4,
    };

    render(){
        return(
            <section className="location">
                <ChooseCountryDropdown/>
                <div className="row google-map">
                    <div className="col-12">
                    <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ this.props.zoom }>
                    </GoogleMapReact>
                    </div>
                </div>
                <div className="position-details row justify-content-between">
                    <div className="detils col-lg-3 col-md-3 col-sm-5 col-5 align-self-end">
                        <h2>Egypt</h2>
                        <div className="content">
                            <ContactWays />
                            <ContactWays />
                            <ContactWays />
                            <ContactWays />
                            <ContactWays />
                        </div>
                    </div>
                    <div className="location_on_map col-lg-2 col-md-3 col-sm-4 col-4 col-3">
                        <h2>
                            <strong>Location</strong>
                            <br/> on map
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Location;