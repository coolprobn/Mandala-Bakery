import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, TouchableNativeFeedback, ScrollView,
} from 'react-native';

import ProductItem from '../productItem';

export default class Coffee extends Component {

  render() {
    return (
      <Image source={require("../../../images/coffeeBean1.jpg")} style={styles.coffee}>
        <ScrollView>
          <View style={styles.vertical}>
            <ProductItem name="Espresso Single/Double" price="80/100" category="coffee" subCategory="Black Coffee"/>
            <ProductItem name="Espresso Macchiato Single/Double" price="100/130" category="coffee" />
            <ProductItem name="Espresso Affagota Single/Double" price="140/170" category="coffee" subCategory="Black Coffee"/>
            <ProductItem name="Americano" price={110} category="coffee" subCategory="Black Coffee"/>
            <ProductItem name="Flavoured Americano" price={150} category="coffee" subCategory="Black Coffee"/>

            <ProductItem name="Hot Chocolate" price={100} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Hot Lemon" price={50} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Honey Hot Lemon" price={95} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Ginger Hot Lemon" price={75} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Ginger Hot Lemon with Honey" price={80} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Black Tea" price={35} category="coffee" subCategory="Coffee Alternative"/>
            <ProductItem name="Milk Tea" price={45} category="coffee" subCategory="Coffee Alternative"/>

            <ProductItem name="Latte" price={120} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Caramel Latte" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Honey Latte" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Flavored Latte" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Cappuccino" price={120} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Flavoured Cappuccino" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Mpvhaccino" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Cafe Mocha" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Mocha Madness" price={160} category="coffee" subCategory="Milk Coffee"/>
            <ProductItem name="Caramel Macchiato" price={160} category="coffee" subCategory="Milk Coffee"/>

            <ProductItem name="Coffee Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Mocha Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Choco-Mint Frappe" price={275} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Caramel Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Oreo Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Strawberry Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>
            <ProductItem name="Vanilla Frappe" price={255} category="coffee" subCategory="Ice Blended Cold Coffee"/>

            <ProductItem name="Iced Americano" price={120} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Flavoured Americano" price={160} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Latte" price={140} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Flavoured Latte" price={180} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Caramel Macchiato" price={180} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Mocha" price={180} category="coffee" subCategory="Iced Cold Coffee"/>
            <ProductItem name="Iced Mocha Madness" price={180} category="coffee" subCategory="Iced Cold Coffee"/>
          </View>
        </ScrollView>
      </Image>
    );
  }
}

const styles= StyleSheet.create({

  vertical: {
    flex: 1,
    flexDirection: 'column',
  },

  coffee: {
    height: '100%',
    width: '100%',
  }
});
