import React from 'react'
import {render} from 'react-dom'

class ContactForm extends React.Component{
    render(){
        return(
            <section className="row send_form">

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
                        <textarea name="" id="" cols="40" rows="6" placeholder="Write your message here..."
                                  required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <img className="col-lg-7 col-md-4 col-sm-12 col-12 image-bckgrd" src="../../img/contact_us/soccer-lady-girl.png" alt=""/>
            </section>
        );
    }
}

export default ContactForm;