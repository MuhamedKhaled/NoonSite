import React from 'react';
import { render } from 'react-dom';
import '../../css/Global/bootstrap.min.css';
import '../../css/about_Us/about_us.css';


class Message extends React.Component{

    render(){
        return(
            <section class="container message">
            <div class="row">
              <div class="left_noon col-lg-3 col-md-4 col-sm-5">
                  <div class="image row">
                  <img className="ourMessages-imageEdits"  src = "../../img/about_us/gathering.png"/>  
                  </div>
        
              </div>
              <div class="our_message col-lg-8 col-md-8 col-sm-7">
                <h2>Our Message</h2>
                <div class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis a sunt, libero eius obcaecati deserunt numquam aliquid labore culpa aliquam explicabo ducimus tempore at maxime iure consectetur, officia amet.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores asperiores, voluptatum eligendi adipisci quis, sapiente tenetur nesciunt a necessitatibus culpa magni. Nostrum impedit officiis cum porro, itaque et alias temporibus.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio nam hic, iusto ad error deleniti inventore tempora vitae voluptate id, adipisci laudantium magni quaerat modi. Odio at voluptatem rem.
                </div>
              </div>
            </div>
            <div class="noon row">
              <div class="inner col-lg-3 col-md-4 col-sm-6">
                <img className="noonPink-imageEdits"  src = "../../img/about_us/noon white.png"/>  
              </div>
            </div>
          </section>
        

        );
    }
}

export default Message;
 