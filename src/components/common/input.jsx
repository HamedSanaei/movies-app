import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // value={value}
        // type={type}
        name={name}
        {...rest}
        // onChange={onChange}
        // ref={this.username}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

// const Input = ({ type, name, label, value, error, onChange }) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         value={value}
//         type={type}
//         onChange={onChange}
//         name={name}
//         // ref={this.username}
//         id={name}
//         className="form-control"
//       />
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };

export default Input;
