import React from 'react';
import ReactDOM from 'react-dom';
import {ModalManager} from "react-dynamic-modal/lib/index";
import Delete from './Delete'
import '../css/blogs.css';

class Commnents extends React.Component{

    openModalDelete = () => {
        ModalManager.open(<Delete onRequestClose={() => true}/>);
    };
    render(){
        return(
            <div className="row">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Time</th>
                        <th scope="col">Content</th>
                        <th></th>
                        <th></th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>User 1</td>
                        <td>1 min</td>
                        <td colSpan="3">
                            Comment 1
                        </td>
                        <td>
                            <button type="button" className="btn pink-btn" onClick={this.openModalDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">2</th>
                        <td>User 2</td>
                        <td>2 min</td>
                        <td colSpan="3">
                            Reply 2
                        </td>
                        <td>
                            <button type="button" className="btn pink-btn" onClick={this.openModalDelete}>Delete</button>
                        </td>

                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">3</th>
                        <td>User 3</td>
                        <td>3 min</td>
                        <td colSpan="3">
                            Reply 3
                        </td>
                        <td>
                            <button type="button" className="btn pink-btn" onClick={this.openModalDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>User 4</td>
                        <td>4 min</td>
                        <td colSpan="3">
                            Comment 4
                        </td>
                        <td>
                            <button type="button" className="btn pink-btn" onClick={this.openModalDelete}>Delete</button>
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">5</th>
                        <td>User 5</td>
                        <td>5 min</td>
                        <td colSpan="3">
                            Reply 5
                        </td>
                        <td>
                            <button type="button" className="btn pink-btn" onClick={this.openModalDelete}>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default  Commnents;