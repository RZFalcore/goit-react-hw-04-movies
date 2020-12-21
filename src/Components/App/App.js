import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { HomePage, MoviePage, MovieDetailsPage } from "../../Pages/lazyPages";
import Navigation from "../Navigation/Navigation";


import "./App.module.css";

export default class App extends Component {
  state = {};
  render() {
    // console.log(process.env.REACT_APP_API_KEY);
    return (
      <div>
        <Navigation />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:id" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviePage} />
          </Switch>
          <Redirect to="/" />
        </Suspense>
      </div>
    );
  }
}
