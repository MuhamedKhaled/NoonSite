import React from 'react';
import {render} from 'react-dom';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class AdvSpace extends React.Component {
    render() {
        return (
            <div className=" AdvertisingSpaceRectangle  mar-2">
                <div className="advertising-space">
                    <div className="adv-font">Advertising Space</div>
                </div>
            </div>
        );
    }
}

export default AdvSpace;
