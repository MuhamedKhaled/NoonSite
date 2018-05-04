/*
Hazem Fouda
Noura Mohi
Mostafa Menshawy
*/
import React from 'react';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import FooterSection from '../HomePageComponents/FooterSection';
import Header from '../HomePageComponents/Header.js';
import NavBar from '../HomePageComponents/NavBar.js';
import '../../css/LiveStreaming/LiveStreaming.css';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../css/LiveStreaming/LiveStreaming.css';
import LiveVideo from './LiveVideo'
import SmallVideo from './SmallVideo'

class LiveStream extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <div className="container">
                    <div className="row ml-0">
                        <div className="row col-9 mt-0 mb-4">
                            <div className="live mt-0">
                                <p className=" live-streaming">Live
                                    <br/>Stream
                                </p>
                            </div>
                        </div>
                    </div>
                    <LiveVideo video="../../img/LiveStreaming/Tom and Jerry - Episode 74.mp4"/>
                </div>
                <div className="container">
                    <div className="row">
                <SmallVideo image="../../img/LiveStreaming/layer-10.png" secrets="../../img/LiveStreaming/layer-10@2x.png 2x, ../../img/LiveStreaming/layer-10@3.png 3x" title="Lorem Ipsum is simply dummy text of the printing and" type="Previous"/>
                <SmallVideo image="../../img/LiveStreaming/layer-10.png" secrets="../../img/LiveStreaming/layer-10@2x.png 2x, ../../img/LiveStreaming/layer-10@3.png 3x" title="Lorem Ipsum is simply dummy text of the printing and" type="Next"/>
                    </div>
                </div>
                <FooterSection/>
            </div>
        );
    }
}

export default LiveStream;
