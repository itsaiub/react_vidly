import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./component/Movies";
import Customers from "./component/Customers";
import Rentals from "./component/Rentals";
import NotFound from "./component/NotFound";
import NavBar from "./component/NavBar";
import MovieForm from "./component/MovieForm";
import LoginForm from "./component/LoginForm";
import Register from "./component/Register";
import Logout from "./component/Logout"; 
import auth from './services/authService'
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({ user });
  }
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="container">
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
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
