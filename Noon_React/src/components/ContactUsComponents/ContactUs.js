import React from 'react'
import {render} from 'react-dom'
import ContactInfo from "./ContactInfo";
import '../../css/contact_Us/Contact_Us.css'
import ContactForm from "./ContactForm";
import Location from "./Location";
import Header from "../HomePageComponents/Header";
import NavBar from "../HomePageComponents/NavBar";
import FooterSection from "../HomePageComponents/FooterSection";

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <section className="body container">
                    <ContactInfo/>
                    <ContactForm/>
                    <Location/>
                </section>
                <FooterSection/>
            </div>
        );
    }
}

export default ContactUs;