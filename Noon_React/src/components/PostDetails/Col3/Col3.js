/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import Profile from './Profile';
import AdvSpace from './AdvSpace';

class Col3 extends React.Component {
    render() {
        return (
            <div className=" col-md-3 col-xs-3  align-center">
                <AdvSpace/>
                <div className=" BigPost align-center">
                    <div className="profiles mt-3">
                        <p className="Profiles-font">Profiles></p>
                    </div>
                    <Profile image="../../img/PostDetails/profile1.png" secrets="../../img/PostDetails/profile2.png"
                             name="Maria Sharapova" title="Lorem Ipsum is simply dummy text of the printing and"/>
                    <Profile image="../../img/PostDetails/profile1.png" secrets="../../img/PostDetails/profile2.png"
                             name="Maria Sharapova" title="Lorem Ipsum is simply dummy text of the printing and"/>
                    <Profile image="../../img/PostDetails/profile1.png" secrets="../../img/PostDetails/profile2.png"
                             name="Maria Sharapova" title="Lorem Ipsum is simply dummy text of the printing and"/>
                    <Profile image="../../img/PostDetails/profile1.png" secrets="../../img/PostDetails/profile2.png"
                             name="Maria Sharapova" title="Lorem Ipsum is simply dummy text of the printing and"/>
                    <Profile image="../../img/PostDetails/profile1.png" secrets="../../img/PostDetails/profile2.png"
                             name="Maria Sharapova" title="Lorem Ipsum is simply dummy text of the printing and"/>
                    <Profile image="../../img/PostDetails/profile1.png" secrets="../../img/PostDetails/profile2.png"
                             name="Maria Sharapova" title="Lorem Ipsum is simply dummy text of the printing and"/>
                </div>
            </div>
        );
    }
}

export default Col3;
