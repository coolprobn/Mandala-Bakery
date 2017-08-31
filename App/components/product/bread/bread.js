import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

import ProductItem from '../productItem';

export default class Bread extends Component {
  render() {
    return (
      <Image source={require("../../../images/cookieCoffeeBg.jpg")} style={styles.cookie}>
        <ScrollView>
          <View style={styles.vertical}>
            <View style={styles.horizontal} >
              <ProductItem name="White Bread" price={45} image="whiteBread" category="bread" weight="per loaf"/>
              <ProductItem name="Brown Bread" price={55} image="brownBread" category="bread" weight="per loaf"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Multigrain" price={60} image="multiGrainBread" category="cookie" weight="per loaf"/>
              <ProductItem name="Millet" price={55} image="milletBread" category="bread" weight="per loaf"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Whole Wheat" price={60} image="wholeWheatBread" category="bread" weight="per loaf"/>
              <ProductItem name="Oat Meal" price={95} image="oatMealBread" category="bread" weight="per loaf"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="French" price={40} image="frenchBread" category="bread" weight="per loaf"/>
              <ProductItem name="Farmer's Loaf" price={50} image="farmersLoaf" category="bread" weight="per loaf"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Croissant Plain" price={40} image="croissantPlainBread" category="bread" weight="per loaf"/>
              <ProductItem name="Croissant Chocolate" price={45} image="croissantChocoBread" category="bread" weight="per loaf"/>
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
