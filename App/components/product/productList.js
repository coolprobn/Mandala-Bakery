import React, { Component } from 'react';
import {AppRegistry,View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class ProductItem extends Component {
  render() {

    let color = this.props.color;

    return (
      <TouchableOpacity style={[styles.productItem]}>
          <Text style={styles.productText}>
            {this.props.name}
          </Text>
      </TouchableOpacity>
    );

  }
}

const styles= StyleSheet.create({
  productItem: {
    margin: 5,
    backgroundColor: '#7CB9E8',
    height: 50,

  },
  productText: {
    fontSize: 25,
    textAlign: 'center',
  },

});




