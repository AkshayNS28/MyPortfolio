import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Education">Education</NavLink>
                </li>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Skills">Skills</NavLink>
                </li>
                {/*
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Memories">Memories</NavLink>
                </li>
    */}
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
