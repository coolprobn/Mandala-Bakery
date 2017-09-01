import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

import ProductItem from '../productItem';

export default class Pastry extends Component {
  render() {
    return (
      <Image source={require("../../../images/cookieCoffeeBg.jpg")} style={styles.cookie}>
        <ScrollView>
          <View style={styles.vertical}>
            <View style={styles.horizontal} >
              <ProductItem name="Pineapple" price={100} image="pineapplePastry" category="pastry" weight="per piece"/>
              <ProductItem name="Black Forest" price={120} image="blackForestPastry" category="pastry" weight="per piece"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="White Forest" price={120} image="whiteForestPastry" category="pastry" weight="per piece"/>
              <ProductItem name="Chocolate" price={110} image="chocolatePastry" category="pastry" weight="per piece"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Vanilla" price={100} image="vanillaPastry" category="pastry" weight="per piece"/>
              <ProductItem name="Strawberry" price={100} image="strawberryPastry" category="pastry" weight="per piece"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Mocha" price={115} image="mochaPastry" category="pastry" weight="per piece"/>
              <ProductItem name="Mango" price={110} image="mangoPastry" category="pastry" weight="per piece"/>
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
