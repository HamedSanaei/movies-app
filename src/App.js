import React, { Component } from "react";

import Movies from "./components/movies";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NavBar from "./components/common/navBar";
import MovieForm from "./components/common/movieForm";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/common/notFound";
import LoginForm from "./components/loginForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>

            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" componet={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
