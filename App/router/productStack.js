

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {NavigationActions} from 'react-navigation';

import Products from "../components/product/products";
import Cake from "../components/product/cake/cake";
import Cookie from "../components/product/cookie/cookie";
import Bread from "../components/product/bread/bread";
import Pastry from "../components/product/pastry/pastry";


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

  Cookie: {
    screen: Cookie,
    navigationOptions: {
      title: 'Cookie',
    },
  },

    Bread: {
      screen: Bread,
      navigationOptions: {
        title: 'Bread',
      },
    },

  Pastry: {
    screen: Pastry,
    navigationOptions: {
      title: 'Pastry',
    }
  }


},
  {


  },
);



