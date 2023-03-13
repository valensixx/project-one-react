import React from "react";
import './Menu.css';

function Menu(){
    return(
        <nav className="menu-nav">
            <ul className = "menu-nav-ul"> 
                <li className="menu-nav-item">
                    <a href="">Home</a>
                </li>
                <li className="menu-nav-item">
                    <a href="">About us</a>
                </li>
                <li className="menu-nav-item">
                    <a href="">Contacts</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;  //this is a second way of doing  export default function Menu(){}