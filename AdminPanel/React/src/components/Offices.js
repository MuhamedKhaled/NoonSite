import React from 'react';
import ReactDOM from 'react-dom';
import {ModalManager} from "react-dynamic-modal/lib/index";
import Edit from './Edit'
import Delete from './Delete'

class Offices extends React.Component {

    openModalDelete = () => {
        ModalManager.open(<Delete onRequestClose={() => true}/>);
    };

    openModalEdit = () => {
        const labelone="Country"
        const labeltwo="E-mail"
        ModalManager.open(<Edit labelone={labelone} labeltwo={labeltwo} onRequestClose={() => true}/>);
    };


    render() {
        return (
            <div className="row">
                <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Country</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Show</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Egypt</td>
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
                        <td>Moroco</td>
                        <td>moroco_nooon.com</td>
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
                        <td>UK</td>
                        <td>uk_noon@noon.com</td>
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
                    </tbody>
                </table>
            </div>
        );

    }
}
export default Offices;