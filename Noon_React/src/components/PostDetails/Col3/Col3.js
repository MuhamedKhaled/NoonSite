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
    constructor(){
        super();
        this.state = {
            data: {}
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/player/getPlayers?number=6")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    };


    render() {
        return (
            <div className=" col-md-3 col-xs-3  align-center">
                <AdvSpace/>
                <div className=" BigPost align-center">
                    <div className="profiles mt-3">
                        <p className="Profiles-font">Profiles></p>
                    </div>
                    {
                        Object
                            .keys(this.state.data)
                            .map(key => <Profile key={key} details={this.state.data[key]} />)
                    }
                </div>
            </div>
        );
    }
}

export default Col3;
