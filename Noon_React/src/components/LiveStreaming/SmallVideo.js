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
            <div className="card mb-4 mt-5">
                <div className="livestreamin_card_container">
                    <img className="card-img-top" src="../../img/LiveStreaming/layer-10.png" srcSet="../../img/LiveStreaming/layer-10@2.png 2x,
                        ../../img/LiveStreaming/layer-10@3.png 3x" alt="SmallPic2"/>
                        <div className="row">
                            <a className="col-3 LiveStream Previous p-0 " href="#">
                                <div className="Previous-Word ">Previous</div>
                            </a>
                            <div className="row">
                                <div className="col-9 PurpleContent">
                                    <div className="row mt-2">
                                        <div className="col-9 pl-0 Text">
                                            Lorem Ipsum is simply dummy text of the printing and
                                        </div>
                                        <img className="col-2 p-0 playsize"
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















