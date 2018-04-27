import React from 'react'
import {render} from 'react-dom'

class ContactForm extends React.Component{
    render(){
        return(
            <section className="row send_form">
                {/*<img src="../../img/contact_us/soccer-lady-girl.png" alt="" style="display: inline-block;">*/}
                <div className="form col-lg-5 col-md-8 col-sm-12 col-12">
                    <form action="">
                        <div className="custom_input">
                            <label htmlFor="name">Name</label>
                            <input type="text" required/>
                        </div>
                        <div className="custom_input">
                            <label htmlFor="emal">E-mail</label>
                            <input type="text" required/>
                        </div>
                        <p htmlFor="">Message</p>
                        <textarea name="" id="" cols="40" rows="6" placeholder="Write your message her..."
                                  required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactForm;