/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import Maincomment from './MainComment'


class Comments extends React.Component {

    constructor(){
        super();
        this.addComment = this.addComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            data: {}
        };
    };

    handleSubmit(event)
    {
      //  event.eventDefault();
        this.addComment();
    }

    addComment()
    {
        const comment = this.comment.value;
        console.log(comment);
        fetch("http://localhost:3000/comments/addComment"
        , {
                method: 'POST',
                // mode: 'CORS',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({commentBody: comment, postID: this.props.PostID})
            })
         .then((res) => res.json())
            .then((comment) =>  console.log(comment))
            .catch((err)=>console.log(err))
    }

    componentDidMount() {
        fetch("http://localhost:3000/comments/getComments/"+this.props.PostID)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps === this.props) {
            return;
        }
        fetch("http://localhost:3000/comments/getComments/"+this.props.PostID)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }

    render() {
        return (
            <div className="container">
                <div className="CommentsCard col-md-12 col-xs-12">
                    <div className="container">
                        <div className="Comments">
                            Comments:
                        </div>
                        <form id="addComment" >
                        <input className="Rectangle-Comment col-12 Write-a-Comment mt-2 p-3" type="text"
                               placeholder="Write a comment... " ref={(input) => {this.comment = input}}/>
                            <input onClick = {(e) => this.handleSubmit(e)} type="submit" value="Comment" className="btn btn-default btn-lg btn-custom-lg CommentButton CommentWord mt-2 col-md-2 col-sm-3"/>
                        </form>
                    </div>
                    {
                        Object
                            .keys(this.state.data)
                            .map(key => <Maincomment key={key} details={this.state.data[key]} PostID={this.props.PostID}/>)
                    }

                </div>
            </div>
        );
    }
}

export default Comments;
