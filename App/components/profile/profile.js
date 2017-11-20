

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <View>
          <Text>Prabin Poudel</Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  profile: {
    flex: 1,
  },
});
