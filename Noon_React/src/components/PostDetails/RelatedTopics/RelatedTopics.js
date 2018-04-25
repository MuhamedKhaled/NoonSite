import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import RelatedTopic from './RelatedTopic'

class RelatedTopics extends React.Component {
    render() {
        return (
            <div className="RelatedTopicsRectangle mt-5">
                <div className="row col-12 p-0">
                    <div className="container">
                        <div className="related mt-0">
                            <p className="Related-Topics">Related<br/>Topics</p>
                        </div>
                        <div className="pull-right"><a href="#" className="More-realted-topics">More</a></div>
                    </div>
                </div>
                <div className="container mb-5 ">
                    <div className=" row">
                        <RelatedTopic image="../../img/PostDetails/layer-3.png"
                                      secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                                      min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>
                        <RelatedTopic image="../../img/PostDetails/layer-3.png"
                                      secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                                      min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>
                        <RelatedTopic image="../../img/PostDetails/layer-3.png"
                                      secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                                      min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>
                        <RelatedTopic image="../../img/PostDetails/layer-3.png"
                                      secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                                      min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedTopics;
