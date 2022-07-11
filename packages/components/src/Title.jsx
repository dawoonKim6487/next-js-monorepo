import React from "react";
import twc from "tailwindcss-classnames";

const h1ClassName = twc("text-3xl font-bold");

const Title = ({ children }) => {
  return <h1 className={h1ClassName}>{children}</h1>;
};

export default Title;
