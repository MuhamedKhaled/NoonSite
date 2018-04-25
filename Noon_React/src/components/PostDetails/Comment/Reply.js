import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';


Reply

class Reply extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="ml-2 Shape-4"></div>
                    <div className=" Layer-13-copy-3 pull-left ml-2">
                        <img src="../../img/PostDetails/rectangle-19-copy-2.png"
                             srcSet="../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x"/>
                    </div>
                    <div className="col-md-11 col-xs-12 ">
                        <div className="row ml-2">
                            <div className=" pull-left">
                                <p className="Maria-Sharapova">Maria Sharapova</p>
                            </div>
                            <div className="mt-1 pull-right">
                                <p className="-min-ago-copy">1 min ago</p>
                            </div>
                            <div className=" TextSecond mr-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen
                            </div>
                            <div className=" mt-2">
                                <a className="Like" href="#">Like</a>
                                <a className="Reply  align-left ml-3 mt-0" href="#">Reply</a>
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 mt-1">
                        <span className="arrow">→</span>
                        <a className="View-more-replies ml-3 mt-3" href="#">View more
                            replies</a>

                    </div>
                </div>
                <div className="Shape-3 col-md-12"/>

            </div>
        );
    }
}

export default Reply;
