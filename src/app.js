import React, { Component } from "react";
import { View, TextView } from "react-native";
import { Provider } from "react-redux";
import ApplicationNavigator from "./navigation/containers";
import myStore from "./lib/myStore";

export default class MyApp extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <ApplicationNavigator />
      </Provider>
    );
  }
}
