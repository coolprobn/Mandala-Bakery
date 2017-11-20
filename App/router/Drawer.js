import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import {ProductStack} from "./productStack";
import {LoginStack} from "./loginStack";
import {HomeStack} from "./homeStack";
import Cart from "../components/cart/cart";
import Cake from "../components/product/cake/cake";
import Profile from "../components/profile/profile";

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

  Cart: {
    screen: Cart,
  },

  Profile: {
    screen: Profile,
  }

});
