import React from 'react';
import { render } from 'react-dom';
import '../../css/Global/bootstrap.min.css';
import '../../css/about_Us/about_us.css';


class About_noon extends React.Component{

    render(){
        return(
           
            <section class="about container"> 
                <div class="row">
                <div class="abouut_noon col-lg-4 col-md-4 col-sm-4 col-12">
                    <h2><strong>About</strong><br/>Noon</h2>
                </div>
                    <div class="col-lg-5 col-md-6 col-sm-5 col-12 noon_description">
                        <h2><strong>Noon</strong></h2>
                        <div class="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos quam aliquam velit corrupti. Quidem ad molestias quam vitae asperiores modi architecto officiis perspiciatis quos aliquam, eos inventore ducimus? Reprehenderit.
                        </div>
                    </div>
            
                <div class=" noon-img col-lg-3 col-md-3 col-sm-4 col-12">
                    <div class="row about_image">
                        <img className="about-imageEdits" src ="../../img/about_us/gathering.png"/>
                    </div>
                    <div class="row noon_image">
                        <img className="noon-imageEdits"  src = "../../img/Global/navbar-logo.jpg"/>
                    </div>
                </div>
                </div>
          </section>

        );
    }
}

export default About_noon;