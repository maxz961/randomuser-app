import React from 'react';
import { Route } from "react-router";
import { Provider } from "react-redux";
import { HashRouter, Switch } from "react-router-dom";
import configureStore from "./redux/store/configureStore";

import HomePage from "./components/Pages/Home";
import UsersPage from "./components/Pages/Users"
import UserPage from "./components/Pages/User"
import Footer from "./components/Footer";
import Page404 from "./components/Pages/404"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <HashRouter>
              <Switch >
                  <Route exact path="/" component={HomePage} />
                  <Route path="/users" component={UsersPage} />
                  <Route path="/marked-users" component={UsersPage} />
                  <Route path="/user/:id" component={UserPage} />
                  <Route component={Page404} />
                  <Route exact path="*" component={Footer} />
              </Switch>
            </HashRouter>
        </Provider>
    </div>
  );
}

export default App;
