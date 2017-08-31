import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import {LoginStack} from "./loginStack";
import {HomeStack} from "./homeStack";
import Profile from "../profile/profile";

export const Drawer = DrawerNavigator({
  Home: {
    screen: HomeStack,
  },

  Login: {
    screen: LoginStack,
  },

  Profile: {
    screen: Profile,
  }

});
