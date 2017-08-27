
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,
} from 'react-native';
import ProductList from "./productList";

export default class Products extends Component {
  render() {
    return (
      <Image source={require('../../images/coffeeBg1.jpg')} style={styles.productItemLayout}>
        <ProductList name="Cake" color="#7CB9E8" navigate={this.props.navigation.navigate}/>
        <ProductList name="Bread" color="#BF94E4"/>
        <ProductList name="Coffee" color="#BCD4E6"/>
        <ProductList name="Pastry" color="#FAEBD7"/>
        <ProductList name="Cookie" color="#1693A5" navigate={this.props.navigation.navigate}/>
      </Image>
    );
  }
}

const styles= StyleSheet.create({
  productItemLayout: {
    height: '100%',
    width: '100%',
  },

});
