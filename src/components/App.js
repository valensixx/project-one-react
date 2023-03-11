import React, {useState} from "react";

//create counter using react
export default function App(){
    const [counter, setCounter] = useState(0); // this is the states the name of the const 'counter' with set+name of the const. We need to import {useState}
    return (
        <div>
            <div>Counter: {counter}</div>
            <button onClick={() => {
                console.log(counter);
            }}>+</button>
            <button>-</button>
        </div>
    )
}