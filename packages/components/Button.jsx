import React from "react";

const Button = (props) => {
  return <button {...props}>test{props.children}</button>;
};

export default Button;
