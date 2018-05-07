import React from 'react';
import {render} from 'react-dom';
import Comments from './Comments'
import Show from './Show';


class ShowPost extends React.Component{

    render(){
        return (
            <div>
                <Show/>
                <h3>Comments</h3>
                <Comments/>
            </div>
        );
    }
}
export default ShowPost;