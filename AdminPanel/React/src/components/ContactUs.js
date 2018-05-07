import React from 'react';
import ReactDOM from 'react-dom';
import {ModalManager} from "react-dynamic-modal/lib/index";
import Edit from './Edit'
import Delete from './Delete'

class ContactUs extends React.Component {

    openModalDelete = () => {
        ModalManager.open(<Delete onRequestClose={() => true}/>);
    };

    openModalEdit = () => {
        const labelone="Label"
        const labeltwo="Info"
        ModalManager.open(<Edit labelone={labelone} labeltwo={labeltwo} onRequestClose={() => true}/>);
    };


    render() {
        return (
            <div className="row">
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Label</th>
                        <th scope="col">Info</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Show</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>E-mail</td>
                        <td>egypt_noon@noon.com</td>
                        <td>
                            <button type=" button" className=" btn purple-btn" onClick={this.openModalEdit}>Edit
                            </button>
                        </td>
                        <td>
                            <button type=" button" className=" btn pink-btn" onClick={this.openModalDelete}>Delete
                            </button>
                        </td>
                        <td>
                            <input type="checkbox" name="show"/>
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Phone</td>
                        <td>01148504856</td>
                        <td>
                            <button type=" button" className=" btn purple-btn" onClick={this.openModalEdit}>Edit
                            </button>
                        </td>
                        <td>
                            <button type=" button" className=" btn pink-btn" onClick={this.openModalDelete}>Delete
                            </button>
                        </td>
                        <td>
                            <input type="checkbox" name=" show"/>
                        </td>

                    </tr>
                    <tr>
                        <th scope=" row">3</th>
                        <td>Fax</td>
                        <td>+0223919488</td>
                        <td>
                            <button type=" button" class=" btn purple-btn" onClick={this.openModalEdit}>Edit</button>
                        </td>
                        <td>
                            <button type=" button" class=" btn pink-btn" onClick={this.openModalDelete}>Delete</button>
                        </td>
                        <td>
                            <input type="checkbox" name=" show"/>
                        </td>
                    </tr>
                    <tr>
                        <th scope=" row">4</th>
                        <td>HotLine</td>
                        <td>07775000</td>
                        <td>
                            <button type=" button" className=" btn purple-btn" onClick={this.openModalEdit}>Edit
                            </button>
                        </td>
                        <td>
                            <button type=" button" className=" btn pink-btn" onClick={this.openModalDelete}>Delete
                            </button>
                        </td>
                        <td>
                            <input type="checkbox" name=" show"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );

    }
}
export default ContactUs;