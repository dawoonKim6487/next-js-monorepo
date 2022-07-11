import React from "react";

const Button = (props) => {
  return (
    <button className="bg-sky-500/100" {...props}>
      test123{props.children}
    </button>
  );
};

export default Button;
