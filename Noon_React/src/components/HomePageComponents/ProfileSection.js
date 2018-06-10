//   - Mohamed Khaled
//   - Nourhan Essam
import React from 'react';
import { render } from 'react-dom';
import '../../css/Homepage/Homepage.css';
import '../../css/Global/bootstrap.min.css';
import SectionTitle from './SectionTitle';
import ProfileCard from './ProfileCard';



class ProfileSection extends React.Component{

    render(){
        return(
        <div class="details-section-2">
        <div class="container">
        <SectionTitle title="Profile"/>
        <div class="row my-margin">
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>

        </div>
        </div>
        </div>
        )
    }
}

export default ProfileSection;