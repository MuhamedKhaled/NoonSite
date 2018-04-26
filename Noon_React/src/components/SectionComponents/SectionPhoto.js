import React from 'react'
import {render} from 'react-dom'

class SectionPhoto extends React.Component{
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 hey">
                <div className="section_card_container">
                    <img className="hey_img col-12" src="../../img/Section/fashion.png"
                         alt="fashion"/>
                    <div className="section_card_hover">
                        <div className="section_card_details">
                            <div className="hover_title">Fashion</div>
                            <div className="hover_text">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem
                                Ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionPhoto;