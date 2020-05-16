import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      charLeft: props.maxChars,
    };
  }

  handleMessage = (e) => {
    this.setState({
        message: e.target.value,
        charLeft: this.props.maxChars - e.target.value.length
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <br />
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleMessage}
          value={this.state.message}
        />
        <p>Remaining Characters: {this.state.charLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
