import React from "react";

/*Create color picker and put color in a div*/
export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
        background: 'white',
        text: 'initial text'
    }

    render(){
        console.log(this.state);
        return (
            <div>
                <p style={{ marginTop: '2rem', }}>This is task 3 - Color Picker</p>
                <input type="color" onChange={(e) => this.setState({background: e.target.value})}/>
                <div style={{
                    background: this.state.background,
                    width: 100,
                    height: 100,
                    border: '1px solid black',
                    marginTop: "1rem",
                }}>
                </div>
                <input style={{marginTop: "1rem",}} type="text" onChange={(e) => this.setState({text: e.target.value})}></input>
                <div>{this.state.text}</div>
            </div>
        );
    }
}