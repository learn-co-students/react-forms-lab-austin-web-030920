import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  inputValidation = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      return e => this.props.handleLogin(e, this.state)
    } else {
      return (e) => {e.preventDefault(); console.log('Please fill in all fields')}
    }
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.inputValidation()}>
        <div>
          <label>
            Username
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              // required={true}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              // required={true}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
