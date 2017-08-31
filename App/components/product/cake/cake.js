

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,ScrollView,Image
} from 'react-native';
import ProductItem from "../productItem";

export default class Cake extends Component {
  render() {
    return (
      <Image source={require("../../../images/cakeBg.jpg")} style={styles.cake}>
        <ScrollView>
          <View style={styles.vertical}>
            <View style={styles.horizontal} >
              <ProductItem name="Pineapple" price={550} image="pineapple" category="cake" weight="per pound"/>
              <ProductItem name="Black Forest" price={600} image="blackForest" category="cake" weight="per pound"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="White Forest" price={650} image="whiteForest" category="cake" weight="per pound"/>
              <ProductItem name="Chocolate" price={650} image="chocolate" category="cake" weight="per pound"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Strawberry" price={550} image="strawberry" category="cake" weight="per pound"/>
              <ProductItem name="Vanilla" price={500} image="vanilla" category="cake" weight="per pound"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Mocha & Nougatine" price={650} image="mocha" category="cake"/>
              <ProductItem name="Blueberry" price={1000} image="blueberry" category="cake"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Blueberry Cheese" price={1500} image="blueberryCheese" category="cake" weight="per pound"/>
              <ProductItem name="Chocolate Truffle" price={800} image="chocolateTruffle" category="cake" weight="per pound"/>
            </View>

            <View style={styles.horizontal}>
              <ProductItem name="Sugarless" price={950} image="sugarLess" category="cake" weight="per pound"/>
              <ProductItem name="Ice Cream" price={900} image="iceCream" category="cake" weight="per pound"/>
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

  cake: {
    height: '100%',
    width: '100%',
  }
});
