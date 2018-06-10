//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Global/bootstrap.min.css';
import About_noon from './About_noon';
import Header from '../HomePageComponents/Header';
import NavBar from '../HomePageComponents/NavBar';
import Vision from './Vision';
import Message from './Message';
import FooterSection from '../HomePageComponents/FooterSection';


class About_us extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <NavBar />
                <About_noon />
                <Vision/>
                <Message/>
                <FooterSection />
            </div>
        );
    }
}

export default About_us;