import React from 'react'
import {render} from 'react-dom'
import Small_Post from "../HomePageComponents/Small_Post";

class NewsSection extends React.Component{
    render(){
        return (
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
        );
    }

}
export default NewsSection;