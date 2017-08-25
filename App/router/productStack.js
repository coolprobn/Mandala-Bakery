

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


export const ProductStack = StackNavigator({
  Products: {
    screen: Products,
    navigationOptions: {
      title: 'Products',
    },
  },

  Cake: {
    screen: Cake,
    navigationOptions: {
      title: 'Cake',
    },
  },

});
