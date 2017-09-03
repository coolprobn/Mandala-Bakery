import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

import CoffeeCategory from "./coffeeCategory";

export default class Coffee extends Component {

  render() {
    return (
      <Image source={require("../../../images/coffeeBean1.jpg")} style={styles.coffee}>
        <ScrollView>
          <CoffeeCategory/>
        </ScrollView>
      </Image>
    );
  }
}

const styles= StyleSheet.create({

  vertical: {
    flex: 1,
    flexDirection: 'column',
  },

  coffee: {
    height: '100%',
    width: '100%',
  }
});
