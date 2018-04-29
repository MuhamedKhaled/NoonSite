import React from 'react'
import {render} from 'react-dom'
import '../../css/media/media.css'
import '../../css/Global/bootstrap.css'
import '../../css/Global/font.css'
import MediaPhoto from './MediaPhoto'
import Video from './Video'

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

                    <PhotoModal />

                </section>

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
            </div>
        );
    }
}

export default Media;