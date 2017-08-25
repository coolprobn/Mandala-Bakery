import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import Home from '../components/home/home';
import {ProductStack} from "./productStack";
import Login from "../components/login/login";

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },

  Product: {
    screen: ProductStack,
  },

  Login: {
    screen: Login,
  }

});
