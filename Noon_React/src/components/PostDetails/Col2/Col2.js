/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../../css/PostDetails/PostDetails.css';
import '../../../css/Global/bootstrap.min.css';
import '../../../css/Global/font.css';
import LinkCard from './LinkCard';
import MiniCard from './MiniCard';
class Col2 extends React.Component {

    constructor(){
        super();
        this.state = {
            data: {}
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/posts/getpost?number=3")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    };

    render() {
        return (
            <div className=" col-md-4 col-xs-3">
                <LinkCard
                    link="noon.ae/newslink"/>
                {
                    Object
                        .keys(this.state.data)
                        .map(key => <MiniCard key={key} details={this.state.data[key]} />)
                }
            </div>
        );
    }
}

export default Col2;
