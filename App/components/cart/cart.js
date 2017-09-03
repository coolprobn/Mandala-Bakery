
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
      price: '',
      quantity: '',
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
    let amount = price*quantity;
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

          <View>
            <Text>
              {this.state.name}
            </Text>
            <Text>
              {this.state.quantity}
            </Text>
            <Text>
              {this.state.price}
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

  },

  description:{
    //flex: 1,
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },

  productDescription:{
    //flex: 1,
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
});
