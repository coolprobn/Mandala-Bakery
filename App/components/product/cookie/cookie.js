import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

import ProductItem from '../productItem';

export default class Cookie extends Component {
  render() {
    return (
      <Image source={require("../../../images/cakeBg.jpg")} style={styles.cookie}>
        <ScrollView>
          <View style={styles.vertical}>
            <View style={styles.horizontal} >
              <ProductItem name="Cookie" price={550} image="cookie" category="cookie"/>
              <ProductItem name="Peanut Butter" price={600} image="peanutButtterCookie" category="cookie"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Cashew Nut" price={650} image="cashewNut" category="cookie"/>
              <ProductItem name="Chocolate" price={650} image="chocoCookie" category="cookie"/>
            </View>
          </View>
        </ScrollView>
      </Image>
    );
  }
}

const styles= StyleSheet.create({
  horizontal: {
    flex: 1,
    flexDirection: 'row',
  },

  vertical: {
    flex: 1,
    flexDirection: 'column',
  },

  cookie: {
    height: '100%',
    width: '100%',
  }
});
