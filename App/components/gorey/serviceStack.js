

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Service from "../Home/service";
import DateTime from "../Home/datetime";


export const LoginStack = StackNavigator({
  Service: {
    screen: Service,
    navigationOptions: {
      title: 'Service',
    },
  },

  DateTime: {
    screen: DateTime,
    navigationOptions: {
      title: 'Date and Time',
    },
  },

});
