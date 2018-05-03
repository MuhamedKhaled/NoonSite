import React from 'react';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../css/LiveStreaming/LiveStreaming.css';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';

class SmallVideo extends React.Component {
    render() {
        return(
        <div className="col-md-6 ">
            <div className=" mb-4 mt-5">
                <div className="livestreamin_card_container">
                    <img className="wid100" src={this.props.image} srcSet={this.props.secrets} alt="SmallPic2"/>
                        <div className="row">
                            <a className="col-3 LiveStream Previous p-0 " href="#">
                                <div className="Previous-Word">{this.props.type}</div>
                            </a>
                            <div className="row">
                                <div className="col-9 PurpleContent">
                                    <div className="row mt-2">
                                        <div className="col-9 pl-0 Text">
                                            {this.props.title}
                                        </div>
                                        <img className="col-2 p-0 playsize mb-2"
                                             src="../../img/LiveStreaming/vector-smart-object.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
    }
    }

    export default SmallVideo;















