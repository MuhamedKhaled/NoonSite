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
            srcSets: "../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x",
            min: "1 min ago",
            Numoflikes: 0,
            player:{}
        };
    };

    addLike()
    {
        const {details} = this.props;
        fetch("http://localhost:3000/comments/addLike"
            , {
                method: 'POST',
                // mode: 'CORS',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({commentID: details.id, postID: 1})
            })
            .then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
    }

    componentDidMount()
    {
        const {details} = this.props;
        fetch(`http://localhost:3000/comments/${this.props.PostID}/${details.id}/getLikes`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    Numoflikes:response.map((mydata)=><p className="ml-3 NumofLikes">{mydata.likes}{' Likes'}</p>)
                });
            });
        fetch(`http://localhost:3000/Player/getPlayer/${details.player_id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    player:response[0]
                });
            });

    }

    render() {
        const {details, key} = this.props;
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="ml-2 Shape-4"/>
                    <div className=" Layer-13-copy-3 pull-left ml-2">
                        <img src={this.state.player.image}
                             srcSet={this.state.srcSets}/>
                    </div>
                    <div className="col-md-11 col-xs-12 ">
                        <div className="row ml-2">
                            <div className=" pull-left">
                                <p className="Maria-Sharapova">{this.state.player.name}</p>
                            </div>
                            <div className="mt-1 pull-right">
                                <p className="-min-ago-copy">{this.state.min}</p>
                            </div>
                            <div className=" TextSecond mr-4 col-12 p-0">
                                {details.content}
                            </div>
                            <div className=" mt-2 col-12 p-0 row ml-0">
                                <a className="Like" href="#" onClick = {(e) => this.addLike(e)}>Like</a>
                                {this.state.Numoflikes}
                                <a className="Reply align-left ml-3 mt-0" href="#">Reply</a>
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
