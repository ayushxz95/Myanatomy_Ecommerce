import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Itempage from "./Pages/Itempage/index";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <BrowserRouter>
            <Switch>
              <Route path = {["/home", "/item"]} exact component={Itempage} />
              {/* <Route path="/item" component={Itempage} /> */}
            </Switch>
          </BrowserRouter>
        </>
      </Provider>
    );
  }
}

export default App;
