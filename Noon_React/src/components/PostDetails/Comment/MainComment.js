/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import Reply from './Reply'
import {Link} from 'react-router-dom'


class Maincomment extends React.Component {

    constructor() {
        super();
        this.state = {
            image: "../../img/PostDetails/rectangle-19-copy-2.png",
            secrests: "../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x",
            name: "Maria Sharapova",
            min: "1 min ago",
            replyData: {}
        };
    };

    componentDidMount() {
        const {details, key} = this.props;
        console.log("********  "   +details.id);
        fetch(`http://localhost:3000/comments/1/${details.id}/getReplies`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    replyData: response,
                });
            });
    };


    render() {
        const {details, key} = this.props;
        return (
            <div className="container">
                <div className="mt-4">
                    <div className="row">
                        <div className="pull-left col-md-1 col-xs-12">
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
                    </div>
                </div>
                <div className="offset-1">
                    <div className="ml-2">
                        {
                            Object
                                .keys(this.state.replyData)
                                .map(key => <Reply key={key} details={this.state.replyData[key]}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Maincomment;
