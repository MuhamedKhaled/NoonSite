/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import FooterSection from '../HomePageComponents/FooterSection';
import Header from '../HomePageComponents/Header.js';
import NavBar from '../HomePageComponents/NavBar.js';
import '../../css/PostDetails/PostDetails.css';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import RelatedTopics from './RelatedTopics/RelatedTopics';
import MiddlePart from "./MiddlePart";

class PostDetails extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <div>
                    <MiddlePart/>
                    <RelatedTopics/>
                </div>
                <FooterSection/>
            </div>
        );
    }
}

export default PostDetails;
