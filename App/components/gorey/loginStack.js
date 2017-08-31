

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from "../Home/login";
import Register from "../Home/register";


export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },

  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    },
  },

});
