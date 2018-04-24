import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import SectionTitle from './SectionTitle';
import Pic_Card from './Pic_Card';
import Without_Pic_Card from './Without_Pic_Card';



class MagazineSection extends React.Component{

    render(){
       return(
        <div class="details-section-2">
        <section class="container">
        <SectionTitle title="Magazines"/>
        <div class="row my-margin">
        <Pic_Card/>
        <Without_Pic_Card/>
        <Pic_Card/>
        <Without_Pic_Card/>
        </div>
        </section>
        </div>
       )
        
    }
}

export default MagazineSection;