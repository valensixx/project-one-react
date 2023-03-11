import React,{useState} from "react";
//Create button for turning on and off. I will put color over a text. 
export default function App(){
    const [state, setState] = useState('off');
    return(
        <div>
            <h1 style={{
                color:'blueviolet',
                fontSize:'2rem',
            }}>This is task 2 - button turn on and off!
            </h1>
            <button 
                style = {{ // in react as style we are making json object
                marginTop:'0.2rem',
                color: state == 'on' ? 'green' : 'red',
                border: 'unset',
                fontSize:'2rem',
            }}
                onClick={() => {
                    if(state == 'off'){
                        setState('on');
                    }else {
                        setState('off')
                    }
                }}
            >{state}</button>
        </div>
    );
}