import React from 'react'
import {render} from 'react-dom'
import '../css/media/media.css'
import '../css/Global/bootstrap.css'
import '../css/Global/font.css'
import Photo from './Photo'

class Media extends React.Component{
    render()
    {
        return (
            <div>
                <section className="container media_card">
                    <div className="section_title">
                        <p>Photos</p>
                    </div>

                    <div className="row">
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />
                        <Photo />

                    </div>
                    <div className="row">
                        <button id="photos-more" className="btn more-btn">More</button>
                    </div>

                </section>
            </div>
        );
    }
}

export default Media;