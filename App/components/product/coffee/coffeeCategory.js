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
            <ProductItem items={[]} name="Espresso Single/Double" price="80/100" category="coffee" subCategory="Black Coffee"/>
            <ProductItem items={[]} name="Espresso Macchiato Single/Double" price="100/130" category="coffee" />
            <ProductItem items={[]} name="Espresso Affagota Single/Double" price="140/170" category="coffee"/>
            <ProductItem items={[]} name="Americano" price={110} category="coffee"/>
            <ProductItem items={[]} name="Flavoured Americano" price={150} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem items={[]} name="Hot Chocolate" price={100} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem items={[]} name="Hot Lemon" price={50} category="coffee"/>
            <ProductItem items={[]} name="Honey Hot Lemon" price={95} category="coffee"/>
            <ProductItem items={[]} name="Ginger Hot Lemon" price={75} category="coffee"/>
            <ProductItem items={[]} name="Ginger Hot Lemon with Honey" price={80} category="coffee"/>
            <ProductItem items={[]} name="Black Tea" price={35} category="coffee"/>
            <ProductItem items={[]} name="Milk Tea" price={45} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem items={[]} name="Latte" price={120} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem items={[]} name="Caramel Latte" price={160} category="coffee"/>
            <ProductItem items={[]} name="Honey Latte" price={160} category="coffee"/>
            <ProductItem items={[]} name="Flavored Latte" price={160} category="coffee"/>
            <ProductItem items={[]} name="Cappuccino" price={120} category="coffee"/>
            <ProductItem items={[]} name="Flavoured Cappuccino" price={160} category="coffee"/>
            <ProductItem items={[]} name="Mochaccino" price={160} category="coffee"/>
            <ProductItem items={[]} name="Cafe Mocha" price={160} category="coffee"/>
            <ProductItem items={[]} name="Mocha Madness" price={160} category="coffee"/>
            <ProductItem items={[]} name="Caramel Macchiato" price={160} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem items={[]} name="Coffee Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem items={[]} name="Mocha Frappe" price={255} category="coffee"/>
            <ProductItem items={[]} name="Choco-Mint Frappe" price={275} category="coffee"/>
            <ProductItem items={[]} name="Caramel Frappe" price={255} category="coffee"/>
            <ProductItem items={[]} name="Oreo Frappe" price={255} category="coffee"/>
            <ProductItem items={[]} name="Strawberry Frappe" price={255} category="coffee"/>
            <ProductItem items={[]} name="Vanilla Frappe" price={255} category="coffee"/>
          </View>

          <View style={styles.category}>
            <ProductItem items={[]} name="Iced Americano" price={120} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem items={[]} name="Iced Flavoured Americano" price={160} category="coffee"/>
            <ProductItem items={[]} name="Iced Latte" price={140} category="coffee"/>
            <ProductItem items={[]} name="Iced Flavoured Latte" price={180} category="coffee"/>
            <ProductItem items={[]} name="Iced Caramel Macchiato" price={180} category="coffee"/>
            <ProductItem items={[]} name="Iced Mocha" price={180} category="coffee"/>
            <ProductItem items={[]} name="Iced Mocha Madness" price={180} category="coffee"/>
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
