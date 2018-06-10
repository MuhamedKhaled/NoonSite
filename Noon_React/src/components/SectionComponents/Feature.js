// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'

class Feature extends React.Component{
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="feature_card small_card">
                    <img className="feature_card_img"
                         src="../../img/Section/horses.png"
                         srcSet="../../img/Section/horses@2x.png 2x,
                             ../../img/Section/horses@3x.png 3x"/>
                    <div className="secpage-card-title feature_card_title">
                        <p>Feature Name</p>
                    </div>
                    <div className="card-text feature_card_text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.</p>
                    </div>
                    <div className="more feature_card_share">
                        <p>
                            <a href="https://www.facebook.com"
                               className="share-icon-c share fa fa-facebook"></a>
                            <a href="https://www.twitter.com"
                               className="share-icon-c share fa fa-twitter"></a>
                            <a href="https://www.instagram.com"
                               className="share-icon-c share fa fa-instagram"></a>
                            <a href="https://www.google.com" className="share-icon-c fa fa-google-plus"></a>
                            <a href="https://www.youtube.com"
                               className="share-icon-c share fa fa-youtube"></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;