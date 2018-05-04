// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {renedr} from 'react-dom'
import MediaPhoto from './MediaPhoto'
class MediaPhotoSection extends React.Component{
    render(){
        return(
            <section className="container media_card">
                <div className="section_title">
                    <p>Photos</p>
                </div>

                <div className="row">
                    <MediaPhoto />
                    <MediaPhoto />
                    <MediaPhoto />
                    <MediaPhoto />
                    <MediaPhoto />
                    <MediaPhoto />
                    <MediaPhoto />
                    <MediaPhoto />

                </div>
                <div className="row">
                    <button id="photos-more" className="btn more-btn">More</button>
                </div>
            </section>
        );
    }
}

export default MediaPhotoSection;