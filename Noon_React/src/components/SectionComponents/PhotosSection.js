import React from 'react'
import {render} from 'react-dom'
import SectionPhoto from "./SectionPhoto";

class PhotosSection extends React.Component{
    render(){
        return(
            <div className="backgrounds padding_section">
                <section className="container">

                    <div className="row title_bar">
                        <div className="section_title">
                            <p>Photos</p>
                        </div>
                        <div className="all_page">
                            <a href="../../views/Media/media.html">All page</a>
                        </div>
                    </div>

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