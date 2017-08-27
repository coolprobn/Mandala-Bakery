

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from "../components/login/login";
import Register from "../components/register/register";


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
