import React,{useState} from "react";
//Create button for turning on and off. I will put color over a text. 
export default function App(){
    const [state, setState] = useState('off');
    return(
        <div>
            <button>{state}</button>
        </div>
    );
}