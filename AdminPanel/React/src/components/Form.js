import React from 'react';
import {render} from 'react-dom';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import Dropdown from 'react-dropdown'
import '../css/form.css'
import EditImage from "./editImage";
import '../css/editImage.css'

class Form extends React.Component{
    categories = [
        { value:'football', label:'Football', className:'dropdown-item'},
        { value:'volleyball', label:'Volleyball', className:'dropdown-item'},
        { value:'swimming', label:'Swimming', className:'dropdown-item'}
    ];

    openModal = () => {
        ModalManager.open(<EditImage onRequestClose={() => true}/>);
    };
    render(){
        return (
            <div className="row">
                <form className="col-10">
                    <div className="form-group image_section">
                        <img src="../../img/football.png" alt="Post image"/>
                        <button class="btn btn-light" type="button"  onClick={this.openModal}>
                            edit <i className="far fa-edit"></i>
                        </button>
                    </div>
                    <div className="form-group">
                        <label className="edit-form-title" htmlFor="title">Tittle</label>
                        <input type="text" className="form-control" id="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="edit-form-title"> Description</label>
                        <textarea className="form-control" placeholder="Description" rows="5" id="comment"></textarea>
                    </div>
                    <div className="dropdown menu">
                        <Dropdown className="select_button btn purple-btn"  placeholder="Category" options={this.categories}/>
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>
            </div>
        );
    }
}
export default Form;