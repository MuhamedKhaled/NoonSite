import React from 'react'
import {render} from 'react-dom'
import Video from './Video'
class MediaVideoSection extends React.Component{
    render(){
        return(
            <div className="videos">
                <section className="container media_card">
                    <div className="section_title">
                        <p>Videos</p>
                    </div>

                    <div className="row">
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />

                    </div>
                    <div className="row">
                        <button id="videos-more" className="btn more-btn">More</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default MediaVideoSection;