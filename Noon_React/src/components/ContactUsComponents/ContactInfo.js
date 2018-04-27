import React from 'react'
import {render} from 'react-dom'
import ContactWays from "./ContactWays";
import Office from "./Office";

class ContactInfo extends React.Component{
    render(){
        return(
            <section className="contact row">
                <div className="contact_us col-lg-4 col-md-6 col-sm-6">
                    <h2>
                        <strong>Contact</strong> Us
                    </h2>
                </div>

                <div className="e_mail col-lg-4 col-md-6 col-sm-6">
                    <div className="layer_1">
                        <h2>E-Mail</h2>
                        <div className="content">
                            <ContactWays />
                            <ContactWays />
                            <ContactWays />
                            <ContactWays />
                            <ContactWays />
                        </div>
                    </div>
                </div>

                <div className="our_offices col-lg-4 col-md-6 col-sm-8">
                    <div className="layer_1">
                        <h2>Our Offices</h2>
                        <ul>
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                        </ul>
                    </div>
                </div>
                <div className="clear_fix"></div>
            </section>
        );
    }
}

export default ContactInfo;