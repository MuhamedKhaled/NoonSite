/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import Reply from './Reply'
import { Link } from 'react-router-dom'


class Maincomment extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="mt-4">
                    <div className="row">
                        <div className="pull-left col-md-1 col-xs-12">
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
                                    <Link className="Like" to="#">Like</Link>
                                    <Link className="Reply  align-left ml-3 mt-0" to="#">Reply</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-1">
                    <div className="ml-2">
                    <Reply image="../../img/PostDetails/rectangle-19-copy-2.png"
                           secrests="../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x"
                           name="Maria Sharapova"
                           title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                           min="1 min ago"/>
                    </div>
                    </div>
                </div>
        );
    }
}

export default Maincomment;
