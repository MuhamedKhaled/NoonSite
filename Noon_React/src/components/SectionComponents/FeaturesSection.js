import React from 'react'
import {render} from 'react-dom'
import Feature from './Feature'

class FeaturesSection extends React.Component{
    render()
    {
        return (
            <section className="container">
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
        );
    }

}
export default FeaturesSection;