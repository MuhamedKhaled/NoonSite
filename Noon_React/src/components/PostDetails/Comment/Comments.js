import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import Maincomment from './MainComment'


class Comments extends React.Component {
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
                <Maincomment/>
                <Maincomment/>
                <Maincomment/>
            </div>
            </div>
        );
    }
}

export default Comments;
