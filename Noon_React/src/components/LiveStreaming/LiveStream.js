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
import LiveVideo from '../LiveStreaming/LiveVideo'
import SmallVideo from '../LiveStreaming/SmallVideo'

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
                    <LiveVideo/>
                </div>
                <div className="container">
                    <div className="row">
                <SmallVideo/>
                <SmallVideo/>
                    </div>
                </div>
                <FooterSection/>
            </div>
        );
    }
}

export default LiveStream;
