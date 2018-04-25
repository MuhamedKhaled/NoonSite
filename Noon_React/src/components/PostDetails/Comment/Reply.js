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
                    <div className="ml-2 Shape-4"/>
                    <div className=" Layer-13-copy-3 pull-left ml-2">
                        <img src={this.props.image}
                             srcSet={this.props.secrets}/>
                    </div>
                    <div className="col-md-11 col-xs-12 ">
                        <div className="row ml-2">
                            <div className=" pull-left">
                                <p className="Maria-Sharapova">{this.props.name}</p>
                            </div>
                            <div className="mt-1 pull-right">
                                <p className="-min-ago-copy">{this.props.min}</p>
                            </div>
                            <div className=" TextSecond mr-4">
                                {this.props.title}
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
