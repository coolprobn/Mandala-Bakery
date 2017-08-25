

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Products from "../components/product/products";
import Cake from "../components/product/cake/cake";
import Login from "../components/login/login";
import Home from "../components/home/home";



export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },

  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    },
  },

  Cake: {
    screen: Cake,
    navigationOptions: {
      title: 'Cake',
    },
  },

});
