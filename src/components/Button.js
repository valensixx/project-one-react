import React from "react";
//create turn on and off button
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "black",
      isOn: false,
    };
  }

  handleBackgroundChange = () => {
    this.setState({
      isOn: !this.state.isOn,
      background: this.state.isOn ? "red" : "green",
    });
  };

  render() {
    return (
      <div>
        <h1
          style={{
            color: "blueviolet",
            fontSize: "2rem",
          }}
        >
          This is task 2 - button turn on and off!
        </h1>
        <button
          style={{
            marginTop: "0.2rem",
            color: this.state.isOn ? "green" : "red",
            backgroundColor: this.state.background,
            border: "unset",
            fontSize: "2rem",
          }}
          onClick={this.handleBackgroundChange}
        >
          Click me!
        </button>
      </div>
    );
  }
}