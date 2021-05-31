import React from 'react';
import { FatCheck, FaListAlt, FaCheckSquare, FaSquare, FaTrash } from 'react-icons/fa';

const NavBar = () => {
    <footer>
        <div>
            <a href="#" className="btn btn-outline-dark"><FaListAlt/></a>
            <a href="#" className="btn btn-outline-dark"><FaCheckSquare/></a>
            <a href="#" className="btn btn-outline-dark"><FaSquare/></a>
        </div>
        <button className="btn btn-sm btn-outline-success float-end"><FaTrash/></button>
    </footer>
}

export default NavBar