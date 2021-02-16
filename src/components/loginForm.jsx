import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
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
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;

    // console.table(result);

    // const errors = {};

    // const { data } = this.state;
    // if (data.username.trim() === "")
    //   errors.username = "Username is required.";

    // if (data.password.trim() === "")
    //   errors.password = "Password is required.";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  doSubmit = () => {
    // server call
    // console.log("what is this fucking");
  };
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        {/* ////////////////////////// nokte mohem dar pas dadan vorodi//////////////////////////////////////////////////// */}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {/* <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={data.username}
              onChange={this.handleChange}
              autoFocus
              // ref={this.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div> */}
          {/* <Input
            name="password"
            value={data.password}
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          /> */}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
