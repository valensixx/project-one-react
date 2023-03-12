import React,{useState} from "react";

//create RegForm with name, email, password, repeat password
//radio button for gender, dropdown menu for city
//checbox for music styles (rock, rap, Pop) and button for registration
//password must be the same as repeat password
//user name must be more then 4 simbols
//city and gender must be selected
//there must be selected at least one music style
//under every field must display error msg.
//test changes
export default function App(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [music, setMusic] = useState([]);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        gender: '',
        music: '',
    });
 
    const color = {color:'red'};

    return(
        <div>
            <h3>RegForm</h3>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" />
                    <span style={color}>{errors.name}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" />
                    <span style={color}>{errors.email}</span>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                    <span style={color}>{errors.password}</span>
                </div>
                <div>
                    <label>Repeat Password</label>
                    <input type="password" />
                    <span style={color}>{errors.password}</span>
                </div>
                <div>
                    <label>City</label>
                    <select>
                        <option value ="">Select city</option>
                        <option value ="Plovdiv">Plovdiv</option>
                        <option value ="Sofia">Sofia</option>
                    </select>
                    <span style={color}>{errors.city}</span>
                </div>
                <div>
                    <label>Male</label>
                    <input type="radio" name="gender" />
                    <label>Female</label>
                    <input type="radio" name="gender" />
                    <span style={color}>{errors.gender}</span>
                </div>
                <div>
                    <div>{JSON.stringify(music)}</div>
                    <label>Rap</label>
                    <input onClick={(e)=>{
                        if(e.target.checked == true){
                            setMusic([...music, 'rap'])
                        } else {
                            setMusic(music.filter(m => m!= 'rap'));
                        }
                    }} type="checkbox" />
                    <label>Rock</label>
                    <input onClick={(e)=>{
                        if(e.target.checked == true){
                            setMusic([...music, 'rock'])
                        } else {
                            setMusic(music.filter(m => m!= 'rock'));
                        }
                    }} type="checkbox" />
                    <label>POP</label>
                    <input onClick={(e)=>{
                        if(e.target.checked == true){
                            setMusic([...music, 'pop'])
                        } else {
                            setMusic(music.filter(m => m!= 'pop'));
                        }
                    }} type="checkbox" />
                    <span style={color}>{errors.music}</span>
                </div>
                <div>
                    <button onClick={() =>{
                        let err = errors;
                        if(name.lenght < 4){
                            err.name = 'invalid name';
                        }else{
                            err.name ='';
                        }

                        if(email == ''){
                            err.email= 'invalide email';
                        }else{
                            err.email='';
                        }

                        if(password == '' || password != passwordConfirm){
                            err.password = 'invalid password';
                        }else{
                            err.password = '';
                        }

                        if(city == ''){
                            err.city = 'invalid city';
                        }else{
                            err.city = '';
                        }

                        if(gender == ''){
                            
                        }

                        setErrors({...errors, err}); // object asign
                    }} type ="button">Registration</button>
                </div>
            </form>
        </div>
    );
};
