

import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from "../components/home/home";

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
  },

});
