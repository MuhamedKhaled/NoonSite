/*
Hazem Fouda
Noura Mohi
*/
import React from 'react';
import '../../css/Global/bootstrap.min.css';
import '../../css/Global/font.css';
import MainPost from './MainPost';
import Comments from './Comment/Comments';
import Col2 from './Col2/Col2'
import Col3 from './Col3/Col3'

class MiddlePart extends React.Component {

    constructor(){
        super();
        this.state = {
            data: {}
        };
    }

    componentWillMount(){
        fetch("http://localhost:3000/posts/getpost/"+this.props.PostID)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps === this.props) {
            return;
        }
        fetch("http://localhost:3000/posts/getpost/"+this.props.PostID)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data:response,
                });
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState;
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-xs-12">
                        <div className="row">
                            {
                                Object
                                    .keys(this.state.data)
                                    .map(key => <MainPost key={key} details={this.state.data[key]} />)
                            }
                            <Col2/>
                            <Comments  PostID={this.props.PostID}/>
                        </div>
                    </div>
                    <Col3/>
                </div>
            </div>
        );
    }
}

export default MiddlePart;
