import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/Home";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;

