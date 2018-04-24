import React from 'react'
import {render} from 'react-dom'

class Photo extends React.Component{
    render()
    {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                <div className="card mb-4">
                    <div className="media_card_container">
                        <img className="card-img-top" src="../../img/media/little-girl.png"
                             srcSet="../../img/media/little-girl@2x.png 2x,
                                  ../../img/media/little-girl@3x.png 3x"
                             alt="little-girl"/>
                        <div className="media_card_hover">
                            <div className="media_card_details">
                                <img src="../../img/media/photos.png" alt="photos"
                                     srcSet="../../img/media/photos@2x.png 2x, ../../img/media/photos@3x.png 3x"/>
                                <span>8/1</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Photo;