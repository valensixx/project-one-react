import React, {useState} from "react";
import Menu from './menu/Menu';
import './Page.css';
//create react page with dropdown menu, content and footer in different components
export default function App(){
    return(
    <div>
        <Menu/>
    </div>
    );
};