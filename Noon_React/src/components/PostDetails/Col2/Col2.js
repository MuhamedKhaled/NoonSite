import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import LinkCard from './LinkCard';
import MiniCard from './MiniCard';
class Col2 extends React.Component {
    render() {
        return (
            <div className=" col-md-4 col-xs-3">
                <LinkCard
                    link="noon.ae/newslink"/>
                <MiniCard
                    secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                    image="../../img/PostDetails/layer-3.png"
                    min="1 min ago"
                    title="Lorem Ipsum is simply dummy text of the printing and"/>
                <MiniCard
                    secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                    image="../../img/PostDetails/layer-3.png"
                    min="1 min ago"
                    title="Lorem Ipsum is simply dummy text of the printing and"/>
                <MiniCard
                    secrets="../../img/PostDetails/layer-3@2x.png 2x,../../img/PostDetails/layer-3@3x.png 3x"
                    image="../../img/PostDetails/layer-3.png"
                    min="1 min ago"
                    title="Lorem Ipsum is simply dummy text of the printing and"/>
            </div>
        );
    }
}

export default Col2;
