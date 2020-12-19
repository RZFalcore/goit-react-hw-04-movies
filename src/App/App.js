import React, { Component } from "react";
import "./App.module.css";

export default class App extends Component {
  state = {};
  render() {
    console.log(process.env.REACT_APP_API_KEY);
    return <h1>App</h1>;
  }
}
