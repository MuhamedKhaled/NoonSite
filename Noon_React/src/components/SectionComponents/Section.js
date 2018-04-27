import React from 'react'
import {render} from 'react-dom'
import '../../css/Global/bootstrap.css'
import '../../css/Global/font.css'
import Big_Post from '../HomePageComponents/Big_Post'
import Small_Post from '../HomePageComponents/Small_Post'
import Advertisement from './Advertisement'
import Profile from './Profile'
import '../../css/Section/section.css'
import SectionPhoto from './SectionPhoto';
import Feature from './Feature'
import PhotoModal from '../MediaComponents/PhotoModal'

class Section extends React.Component{
    render()
    {
        return(
            <div>
                {/*Section part*/}
                <section className="container padding_section">
                    <div className="main-section-title">
                        <p>Football</p>
                    </div>
                    <div className="row">
                        <Big_Post />

                        <div className="col-md-3 col-sm-6">
                            <div className="row">
                                <div className="first_row_padding">
                                    <Small_Post/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="second_row_padding">
                                    <Small_Post/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="row">
                                <div className="first_row_padding">
                                    <Advertisement />
                                </div>
                            </div>
                            <div className="row">
                                <div className="second_row_padding">
                                    <Profile />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/*Photos part*/}
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

                {/*Photos Modal*/}
                <PhotoModal />

                {/*Features part*/}
                <section className="container padding_section">
                    <div className="row title_bar">
                        <div className="section_title">
                            <p>Features</p>
                        </div>
                    </div>

                    <div className="row">

                        <Feature />
                        <Feature />
                        <Feature />
                        <Feature />

                    </div>
                </section>

                {/*Videos part*/}

                {/*News part*/}
                <section className="container margin_section">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Small_Post />
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Section;

// style="width: 100%;"