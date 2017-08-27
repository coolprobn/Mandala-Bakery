import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import {ProductStack} from "./productStack";
import {LoginStack} from "./loginStack";
import {HomeStack} from "./homeStack";

export const Drawer = DrawerNavigator({
  Home: {
    screen: HomeStack,
  },

  Product: {
    screen: ProductStack,
  },

  Login: {
    screen: LoginStack,
  },

});
