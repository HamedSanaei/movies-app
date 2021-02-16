import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import Select from "./select";
class Form extends Component {
  state = { data: {}, errors: {} };

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

  // ino hatman az saeid bepors
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // console.table(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    // const username = this.username.current.value;
    // call the server
    //console.log(username);
    // console.log("this is frm form", this);
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessages = this.validateProperty(input);
    if (errorMessages) errors[input.name] = errorMessages;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
  renderButton(label) {
    // console.log("this is from form button", this);
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
