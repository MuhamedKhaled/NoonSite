import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'
import '../css/blogs.css'

class Blog extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <label htmlFor="category" className="edit-form-title">Football</label>
                    <hr />
                </div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}
export default Blog;