
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image, AsyncStorage
} from 'react-native';

export default class Cart extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      price: 20,
      quantity: 20,
    }
  }

  getItem(){
    var self = this;
    AsyncStorage.multiGet(['name', 'price','quantity']).then((data) => {
      let name = data[0][1];
      let price = data[1][1];
      let quantity = data[2][1];
      self.setState({name: name, price: price, quantity: quantity,})
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  calculate(){
    let price = this.state.price;
    let quantity = this.state.quantity;
    let amount = 20*20;
    return(
      amount
    );
  }

  render() {
    return (
      <Image source={require('../../images/cakeBg.jpg')} style={styles.cartImage}>
        <View style={styles.cart}>
          <View style={styles.description}>
            <Text>
              Product
            </Text>
            <Text>
              Quantity
            </Text>
            <Text>
              Price
            </Text>
            <Text>
              Amount
            </Text>
          </View>

          <View style={styles.productDescription}>
            <Text>
              cake
            </Text>
            <Text>
              {this.setState=20}
            </Text>
            <Text>
              {this.setState=20}
            </Text>
            <Text>
              {this.calculate()}
            </Text>
          </View>

        </View>
      </Image>
    );
  }
}

const styles= StyleSheet.create({
  cartImage: {
    height: '100%',
    width: '100%',
  },

  cart: {
    flex:1,

  },

  description:{
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },

  productDescription:{
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
});
