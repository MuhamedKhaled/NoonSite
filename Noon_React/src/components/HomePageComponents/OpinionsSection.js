import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import SectionTitle from './SectionTitle';
import Pic_Card from './Pic_Card';




class OpinionsSection extends React.Component{

    render(){
       return(
        <div class="details-section-2">
       <section class="container">
       <SectionTitle title="Opinions"/>
        <div class="row my-margin">
        <Pic_Card/>
        <Pic_Card/>
        <Pic_Card/>
        <Pic_Card/>
        </div>
       </section>
       </div>
       )
        
    }
}

export default OpinionsSection;