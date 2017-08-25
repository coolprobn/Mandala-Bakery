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
              <ProductItem name="Pineapple" price={550} image="pineapple" category="cookie"/>
              <ProductItem name="Black Forest" price={600} image="blackForest" category="cookie"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="White Forest" price={650} image="whiteForest" category="cookie"/>
              <ProductItem name="Chocolate" price={650} image="chocolate" category="cookie"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Strawberry" price={550} image="strawberry" category="cookie"/>
              <ProductItem name="Vanilla" price={500} image="vanilla" category="cookie"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Mocha & Nougatine" price={650} image="mocha" category="cookie"/>
              <ProductItem name="Blueberry" price={1000} image="blueberry" category="cookie"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Blueberry Cheese" price={1500} image="blueberryCheese" category="cookie"/>
              <ProductItem name="Chocolate Truffle" price={800} image="chocolateTruffle" category="cookie"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Sugarless" price={950} image="sugarLess" category="cookie"/>
              <ProductItem name="Ice Cream" price={900} image="iceCream" category="cookie"/>
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
