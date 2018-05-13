/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import { Link } from 'react-router-dom'


class Reply extends React.Component {

    constructor(){
        super();
        this.state = {
            image:"../../img/PostDetails/rectangle-19-copy-2.png",
            secrests:"../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x",
            name:"Maria Sharapova",
            min:"1 min ago",
        };
    };

    render() {
        const {details, key} = this.props;
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="ml-2 Shape-4"/>
                    <div className=" Layer-13-copy-3 pull-left ml-2">
                        <img src={this.state.image}
                             srcSet={this.state.secrets}/>
                    </div>
                    <div className="col-md-11 col-xs-12 ">
                        <div className="row ml-2">
                            <div className=" pull-left">
                                <p className="Maria-Sharapova">{this.state.name}</p>
                            </div>
                            <div className="mt-1 pull-right">
                                <p className="-min-ago-copy">{this.state.min}</p>
                            </div>
                            <div className=" TextSecond mr-4 col-12 p-0">
                                {details.content}
                            </div>
                            <div className=" mt-2 col-12 p-0">
                                <Link className="Like" to="#">Like</Link>
                                <Link className="Reply  align-left ml-3 mt-0" to="#">Reply</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ml-4 mt-1">
                        <span className="arrow">→</span>
                        <Link className="View-more-replies ml-3 mt-3" to="#">View more
                            replies</Link>

                    </div>
                </div>
                <div className="Shape-3 col-md-12"/>

            </div>
        );
    }
}

export default Reply;
