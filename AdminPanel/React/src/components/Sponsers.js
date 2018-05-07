import React from 'react';
import {render} from 'react-dom';
import '../css/home.css'

class Sponsers extends React.Component{

    render(){
        return(
            <div className="sponsers homePage">
                <header className="review">Sponsers</header>
                <section className="content row">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <div className="card" >
                           <img src="../../img/sponsers/spo1.png"/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img src="../../img/sponsers/spo2.png"/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img src="../../img/sponsers/spo3.png"/>

                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img src="../../img/sponsers/spo4.png"/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img src="../../img/sponsers/spo5.png"/>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </section>
            </div>
        );
    }
}
export default Sponsers;