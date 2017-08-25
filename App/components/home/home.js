import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <Image source={require('../../images/coffeeBg.jpg')} style={styles.home}>
        <View style={styles.offer}>
        </View>

        <View style={styles.featured}>

        </View>
      </Image>


      );
  }
}

const styles= StyleSheet.create({
  home: {
    height: '100%',
    width: '100%',
  },

  offer:{

  },

  featured: {

  },
});
