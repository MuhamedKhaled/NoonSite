// Alaa Atef Badr
// Ismail Ahmed

import React from 'react'
import {render} from 'react-dom'
import Big_Post from "../HomePageComponents/Big_Post";
import Small_Post from "../HomePageComponents/Small_Post";
import Advertisement from "./Advertisement";
import Profile from './Profile'
class PostsSection extends React.Component{
    render(){
        return(
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
        );
    }
}

export default PostsSection;