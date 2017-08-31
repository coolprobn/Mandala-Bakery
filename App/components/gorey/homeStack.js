

import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from "../Home/home";
import {ServiceStack} from "./serviceStack";

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
  },

  Service: {
  screen: ServiceStack,
  },

});
