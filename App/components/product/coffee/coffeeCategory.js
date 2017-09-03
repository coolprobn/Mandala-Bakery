import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';
import ProductItem from '../productItem';

export default class CoffeeCategory extends Component {
  render() {
    return (
        <View>

          <View style={styles.category}>
            <ProductItem name="Espresso Single/Double" price="80/100" category="coffee" subCategory="Black Coffee"/>
            <ProductItem name="Espresso Macchiato Single/Double" price="100/130" category="coffee" />
            <ProductItem name="Espresso Affagota Single/Double" price="140/170" category="coffee"/>
            <ProductItem name="Americano" price={110} category="coffee"/>
            <ProductItem name="Flavoured Americano" price={150} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem name="Hot Chocolate" price={100} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Hot Lemon" price={50} category="coffee"/>
            <ProductItem name="Honey Hot Lemon" price={95} category="coffee"/>
            <ProductItem name="Ginger Hot Lemon" price={75} category="coffee"/>
            <ProductItem name="Ginger Hot Lemon with Honey" price={80} category="coffee"/>
            <ProductItem name="Black Tea" price={35} category="coffee"/>
            <ProductItem name="Milk Tea" price={45} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem name="Latte" price={120} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Caramel Latte" price={160} category="coffee"/>
            <ProductItem name="Honey Latte" price={160} category="coffee"/>
            <ProductItem name="Flavored Latte" price={160} category="coffee"/>
            <ProductItem name="Cappuccino" price={120} category="coffee"/>
            <ProductItem name="Flavoured Cappuccino" price={160} category="coffee"/>
            <ProductItem name="Mochaccino" price={160} category="coffee"/>
            <ProductItem name="Cafe Mocha" price={160} category="coffee"/>
            <ProductItem name="Mocha Madness" price={160} category="coffee"/>
            <ProductItem name="Caramel Macchiato" price={160} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem name="Coffee Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Mocha Frappe" price={255} category="coffee"/>
            <ProductItem name="Choco-Mint Frappe" price={275} category="coffee"/>
            <ProductItem name="Caramel Frappe" price={255} category="coffee"/>
            <ProductItem name="Oreo Frappe" price={255} category="coffee"/>
            <ProductItem name="Strawberry Frappe" price={255} category="coffee"/>
            <ProductItem name="Vanilla Frappe" price={255} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem name="Iced Americano" price={120} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Flavoured Americano" price={160} category="coffee"/>
            <ProductItem name="Iced Latte" price={140} category="coffee"/>
            <ProductItem name="Iced Flavoured Latte" price={180} category="coffee"/>
            <ProductItem name="Iced Caramel Macchiato" price={180} category="coffee"/>
            <ProductItem name="Iced Mocha" price={180} category="coffee"/>
            <ProductItem name="Iced Mocha Madness" price={180} category="coffee"/>
          </View>

        </View>



    );
  }
}

const styles= StyleSheet.create({
  category:{
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 5,
  },
});
