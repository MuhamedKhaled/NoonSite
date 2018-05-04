import React from 'react'
import {render} from 'react-dom'
import Feature from './Feature'
import SectionTitle from "../HomePageComponents/SectionTitle";

class FeaturesSection extends React.Component{
    render()
    {
        return (
            <section className="container">
                <SectionTitle title={"Features"} isLinkHidden={true}/>

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