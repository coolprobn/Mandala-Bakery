import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import Home from '../components/home/home';
import Product from '../components/product/product';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },

  Product: {
    screen: Product,
  },

});
