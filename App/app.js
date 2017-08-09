

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from "./components/login/login";
import Register from "./components/register/register";

export default class App extends Component {
  render() {
    return (
        <Register/>
    );
  }
}
