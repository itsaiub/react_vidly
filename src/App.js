import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./component/Movies";
import Customers from "./component/Customers";
import Rentals from "./component/Rentals";
import NotFound from "./component/NotFound";
import NavBar from "./component/NavBar";
import MovieForm from "./component/MovieForm";
import LoginForm from "./component/LoginForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
