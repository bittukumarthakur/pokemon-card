import React from "react";

const Mirror = ({ text }) => <p>{text.split("").reverse().join("")}</p>;

class MirrorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    this.setState(() => {
      return { inputText: `${event.target.value}` };
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.inputHandler}
        />
        <Mirror text={this.state.inputText} />
      </div>
    );
  }
}

export default MirrorInput;
