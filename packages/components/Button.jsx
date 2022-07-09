import React from "react";

export const Button = (props) => {
  return <button {...props}>test{props.children}</button>;
};
