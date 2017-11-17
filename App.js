/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Tabs } from "./config/router";

export default class App extends Component<{}> {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return <Tabs />;
  }
}
