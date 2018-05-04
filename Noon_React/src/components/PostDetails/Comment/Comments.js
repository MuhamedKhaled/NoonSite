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
                    <Maincomment image="../../img/PostDetails/rectangle-19-copy-2.png"
                                 secrests="../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x"
                                 name="Maria Sharapova"
                                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                                 min="1 min ago"/>
                    <Maincomment image="../../img/PostDetails/rectangle-19-copy-2.png"
                                 secrests="../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x"
                                 name="Maria Sharapova"
                                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                                 min="1 min ago"/>
                    <Maincomment image="../../img/PostDetails/rectangle-19-copy-2.png"
                                 secrests="../../img/PostDetails/rectangle-19-copy-2@2x.png 2x,../../img/PostDetails/rectangle-19-copy-2@3x.png 3x"
                                 name="Maria Sharapova"
                                 title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                                 min="1 min ago"/>
                </div>
            </div>
        );
    }
}

export default Comments;
