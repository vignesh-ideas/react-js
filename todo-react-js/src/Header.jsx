import React, { memo } from "react";
import "./style.css";

const Header = () => {
  console.log('header rerender---');
  return (
    <h1>To do</h1>
  );
};

export default memo(Header);
