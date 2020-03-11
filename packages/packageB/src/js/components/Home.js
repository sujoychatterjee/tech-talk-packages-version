import React, { Component } from "react";
import ReactDOM from "react-dom";

const Home = () => {
  return <h1>Package B</h1>
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;