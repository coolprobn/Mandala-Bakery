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
      <Image source={require("../../../images/cookieCoffeeBg.jpg")} style={styles.cookie}>
        <ScrollView>
          <View style={styles.vertical}>
            <View style={styles.horizontal} >
              <ProductItem name="Cookie" price={180} image="cookie" category="cookie" weight="per package(200 gm)"/>
              <ProductItem name="Peanut Butter" price={180} image="peanutButterCookie" category="cookie" weight="per package(200 gm)"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Cashew Nut" price={180} image="cashewNutCookie" category="cookie" weight="per package(200 gm)"/>
              <ProductItem name="Chocolate" price={180} image="chocoCookie" category="cookie" weight="per package(200 gm)"/>
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
