/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';

class AdvSpace extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {},
            title:""
        };
    };

    componentDidMount() {
        fetch("http://localhost:3000/Advertisements/getAdvertisement/32")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                    title:response.map((mydata)=> <p>{mydata.title}</p>)
                });
            });
    };


    render() {
        return (
            <div className=" AdvertisingSpaceRectangle  mar-2">
                <div className="advertising-space">
                    <div className="adv-font">{this.state.title}</div>
                </div>
            </div>
        );
    }
}

export default AdvSpace;
