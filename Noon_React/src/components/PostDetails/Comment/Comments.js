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
        this.state = {
            data: {}
        };
    };

    componentDidMount() {
        fetch("http://localhost:3000/comments/getComments/1")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    };
    render() {
        return (
            <div className="container">
                <div className="CommentsCard col-md-12 col-xs-12">
                    <div className="container">
                        <div className="Comments">
                            Comments:
                        </div>
                        <input className="Rectangle-Comment Write-a-Comment mt-2 p-3" type="text"
                               placeholder="Write a comment... "/>
                    </div>
                    {
                        Object
                            .keys(this.state.data)
                            .map(key => <Maincomment key={key} details={this.state.data[key]} />)
                    }

                </div>
            </div>
        );
    }
}

export default Comments;
