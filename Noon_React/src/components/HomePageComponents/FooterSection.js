import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import Footer_Logo from './Footer_Logo';
import Our_Sections from './Our_Sections';
import Footer_Subscribe_Follow from './Footer_Subscribe_Follow';
import Footer_About_Us from './Footer_About_Us';
import Copyrights from './Copyrights';
import OurSections2 from './OurSection2';


class FooterSection extends React.Component{

    render(){
        return(
            <footer class="page-footer customized-footer">
             <div class="container text-center">
             <div class="row">
                <Footer_Logo/>
                <Our_Sections/>
                <OurSections2/>
                <Footer_Subscribe_Follow/>
                <Footer_About_Us/>
             </div>
             <Copyrights/>

             </div>
            </footer>
        
        )
    }
}

export default FooterSection;