import React from 'react';
import {render} from 'react-dom';
import '../css/home.css'

class Home extends React.Component{

    postsFunction = event => {
        event.preventDefault();
        this.props.history.push('/blog');
    };
    sponsersFunction = event => {
        event.preventDefault();
        this.props.history.push('/sponsers');
    };
    render(){
        return(
        <div className="homePage">
            <header className="review">WebSite review</header>
            <section className="content row">
                <div className=" col-4">
                    <div className="card">
                        <i className="fas fa-user"></i>
                        <label>245
                            <strong> User</strong>
                        </label>
                    </div>
                </div>
                <div className="col-4 OnClick">
                    <div className="card" onClick={this.postsFunction}>
                        <i className="fas fa-archive"></i>
                        <label>245
                            <strong> Posts</strong>
                        </label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <i className="fas fa-binoculars"></i>
                        <label>245
                            <strong> Visits</strong>
                        </label>
                    </div>
                </div>
                <div className="col-4 OnClick">
                    <div className="card" onClick={this.sponsersFunction}>
                        <i className="fab fa-hubspot"></i>
                        <label>5
                            <strong> Sponsers</strong>
                        </label>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <i className="fab fa-angellist"></i>
                        <label>245
                            <strong> Champions</strong>
                        </label>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}
export default Home;