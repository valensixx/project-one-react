import React,{useState} from "react";

//create RegForm with name, email, password, repeat password
//radio button for gender, dropdown menu for city
//checbox for music styles (rock, rap, Pop) and button for registration
//password must be the same as repeat password
//user name must be more then 4 simbols
//city and gender must be selected
//there must be selected at least one music style
//under every field must display error msg.

export default function App(){
    return(
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input type="number" />
                </div>
            </form>
        </div>
    );
};
