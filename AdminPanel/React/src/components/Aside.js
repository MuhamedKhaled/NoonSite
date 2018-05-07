import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import '../css/aside.css'
class Aside extends React.Component{
    // posts = () => {
    //     const firstInput  = "Title";
    //     const secondInput = "Description";
    // }
    // features = () => {
    //     const firstInput  = "Title";
    //     const secondInput = "Description";
    // }
    // photo = () => {
    //     const firstInput  = "Title";
    //     const secondInput = "Description";
    // }
    // magazine = () => {
    //     const firstInput  = "Name";
    //     const secondInput = "Content";
    // }
    // chProfile = () => {
    //     const firstInput  = "Name";
    //     const secondInput = "Bio";
    // }
    render(){
        return (
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blog">Posts</a>
                    {/*<Link to='/courses?firstInput=Name&secondInput=Description'>Post</Link>*/}
                </li>
                <li>
                    <a href="/blog">Features</a>
                </li>
                <li>
                    <a href="blog">Photos</a>
                </li>
                <li>
                    <a href="blog">Magazines</a>
                </li>
                <li>
                    <a href="blog">Champions</a>
                </li>
                <li>
                    <a href="blog">Videos</a>
                </li>
                <li>
                    <a href="contactus">Contact Us</a>
                </li>
                <li>
                    <a href="offices">Offices</a>
                </li>
                <li>
                    <a href="sponsers">Sponsers</a>
                </li>
            </ul>
        );
    }
}
export default Aside;