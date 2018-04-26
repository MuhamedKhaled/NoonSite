import React from 'react';
import {render} from 'react-dom';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import '../../css/PostDetails/PostDetails.css';

class MainPost extends React.Component {
    render() {
        return (
            <div className="col-md-8 col-xs-12 col-sm-12 mar-2">
                <div className="BigPost align-center mt-0 p-2">
            <div>
                <img className="LittleGirl container image secrets" src={this.props.image}
                     srcSet={this.props.secrets}/>
                <div className="min-ago mb-3 ml-3 min">{this.props.min}</div>
                <div className="container TextFirst mb-2 title">{this.props.title}</div>
                <div className="container TextSecond body">{this.props.body}</div>
            </div>
            </div>
    </div>
        );
    }
}

export default MainPost;
