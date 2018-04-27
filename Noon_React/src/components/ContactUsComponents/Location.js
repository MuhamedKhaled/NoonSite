import React from 'react'
import {render} from 'react-dom'
import ContactWays from "./ContactWays";

class Location extends React.Component{
    render(){
        return(
            <section className=" location">
                <div className="dropdown show">
                    <button className="" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Chose your country
                        <i className="fal fa-angle-down"></i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Egypt</a>
                        <a className="dropdown-item" href="#">emirates</a>
                        <a className="dropdown-item" href="#">kuwait</a>
                    </div>
                </div>
                <div id="map"></div>
                <div className="position-details row justify-content-between">
                    <div className="detils col-lg-3 col-md-3 col-sm-5 col-5 align-self-end">
                        <h2>Egypt</h2>
                        <div className="content">
                            <ContactWays />
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