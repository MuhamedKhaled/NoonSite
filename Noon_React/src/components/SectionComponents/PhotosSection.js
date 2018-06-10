// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'
import SectionPhoto from "./SectionPhoto";
import SectionTitle from "../HomePageComponents/SectionTitle";

class PhotosSection extends React.Component{
    render(){
        return(
            <div className="backgrounds padding_section">
                <section className="container">

                    <SectionTitle title="Photos" allPageLink="/media"/>

                    <div className="row">

                        <SectionPhoto />
                        <SectionPhoto />
                        <SectionPhoto />
                        <SectionPhoto />
                        <SectionPhoto />
                        <SectionPhoto />
                        <SectionPhoto />
                        <SectionPhoto />

                    </div>
                </section>
            </div>
        );
    }
}

export default PhotosSection;