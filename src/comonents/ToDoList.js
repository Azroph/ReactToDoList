import React from 'react';
import { FaCheck, FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa';

const ToDoList = () => (
    <React.Fragment>
        <h1 className="mb-5">My Todo List</h1>
        <ul className="list-group m-3">
            <li className="list-group-item">
                Réveil
                <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
            <li className="list-group-item">
                Douche
                <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
            <li className="list-group-item">
                Cours ou boulot
                <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
            <li className="list-group-item">
                Terrasse
                <button className="btn btn-sm btn-outline-success float-end"><FaCheck /></button>
            </li>
        </ul>
    </React.Fragment>

)

export default ToDoList;