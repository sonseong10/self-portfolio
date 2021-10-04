import React from "react";
import * as svg from "./svg";

const MyIcon = ({ name, className, style }) => {
  return React.createElement(svg[name], {
    className,
    style,
  });
};

export default MyIcon;
