import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  // username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;

    // console.table(result);

    // const errors = {};

    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required.";

    // if (account.password.trim() === "")
    //   errors.password = "Password is required.";

    // return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // console.table(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    // const username = this.username.current.value;
    // call the server
    //console.log(username);
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required.";
    //   // ....
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required.";
    //   // ....
    // }
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessages = this.validateProperty(input);
    if (errorMessages) errors[input.name] = errorMessages;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        {/* ////////////////////////// nokte mohem dar pas dadan vorodi//////////////////////////////////////////////////// */}
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />
          {/* <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              // ref={this.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div> */}
          <Input
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
