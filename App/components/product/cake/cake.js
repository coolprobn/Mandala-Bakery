

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CakeItem from "./productItem";

export default class Cake extends Component {
  render() {
    return (
      <View>
        <CakeItem/>
      </View>
    );
  }
}
