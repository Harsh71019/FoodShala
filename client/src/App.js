import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import setAdminToken from "./utils/setAdminToken";
import Alert from "./components/layout/Alert";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Restaurants from "./components/restaurants/Restaurants";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

if (localStorage.admintoken) {
  setAdminToken(localStorage.admintoken);
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/restaurants" component={Restaurants} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} /> */
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
