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
    const [neme, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [music, setMusic] = useState([]);
 
    return(
        <div>
            <h3>RegForm</h3>
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
                    <input type="password" />
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>City</label>
                    <select>
                        <option value ="">Select city</option>
                        <option value ="Plovdiv">Plovdiv</option>
                        <option value ="Sofia">Sofia</option>
                    </select>
                </div>
                <div>
                    <label>Male</label>
                    <input type="radio" name="gender" />
                    <label>Female</label>
                    <input type="radio" name="gender" />
                </div>
                <div>
                    <label>Rap</label>
                    <input type="checkbox" />
                    <label>Rock</label>
                    <input type="checkbox" />
                    <label>POP</label>
                    <input type="checkbox" />
                </div>
                <div>
                    <button type ="button">Registration</button>
                </div>
            </form>
        </div>
    );
};
