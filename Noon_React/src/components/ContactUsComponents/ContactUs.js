import React from 'react'
import {render} from 'react-dom'
import ContactInfo from "./ContactInfo";
import '../../css/contact_Us/Contact_Us.css'
import '../../css/contact_Us/Contact_Us.css.map'
import '../../css/contact_Us/Contact_Us.scss'
import ContactForm from "./ContactForm";
import Location from "./Location";
// import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD1eFlVNsu2I6eohodBGQyKcHpRJMFZUT0&callback=initMap'

class ContactUs extends React.Component{
    render(){
        return(
            <section className="body container">
                <ContactInfo />
                <ContactForm />
                <Location />
            </section>
        );
    }
}

export default ContactUs;