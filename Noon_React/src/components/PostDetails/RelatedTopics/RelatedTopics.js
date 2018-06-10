/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import RelatedTopic from './RelatedTopic'
import { Link } from 'react-router-dom'

class RelatedTopics extends React.Component {

    constructor(){
        super();
        this.state = {
            data: {}
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/posts/getpost?number=4")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    };

    render() {
        return (
            <div className="RelatedTopicsRectangle mt-5">
                <div className="row col-12 p-0">
                    <div className="container">
                        <div className="related mt-0">
                            <p className="Related-Topics">Related<br/>Topics</p>
                        </div>
                        <div className="pull-right"><Link to="#" className="More-realted-topics">More</Link></div>
                    </div>
                </div>
                <div className="container mb-5 ">
                    <div className=" row">
                        {/*<RelatedTopic image="../../img/PostDetails/layer-3.png"*/}
                                      {/*secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"*/}
                                      {/*min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>*/}
                        {/*<RelatedTopic image="../../img/PostDetails/layer-3.png"*/}
                                      {/*secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"*/}
                                      {/*min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>*/}
                        {/*<RelatedTopic image="../../img/PostDetails/layer-3.png"*/}
                                      {/*secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"*/}
                                      {/*min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>*/}
                        {/*<RelatedTopic image="../../img/PostDetails/layer-3.png"*/}
                                      {/*secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"*/}
                                      {/*min="1 min ago" title="Lorem Ipsum is simply dummy text of the printing and"/>*/}

                        {
                            Object
                                .keys(this.state.data)
                                .map(key => <RelatedTopic key={key} details={this.state.data[key]} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedTopics;
