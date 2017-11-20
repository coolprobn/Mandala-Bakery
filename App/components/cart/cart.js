import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image, AsyncStorage
} from 'react-native';

export default class Cart extends Component {

  constructor() {
    super();
    this.state = {
      cart: []
    }
  }

  componentWillMount() {
    var self = this
    AsyncStorage.getItem('cart').then((_cart) => {
      if (_cart) {
        self.setState({cart: JSON.parse(_cart)});
      }
    })
  }

  calculateAmount(price, quantity) {
    return price * quantity;
  }

  render() {

    let lineItems = this.state.cart.map((item) => {
      return (
        <View style={styles.productDescription}>
          <Text>
            {item.name}
          </Text>
          <Text>
            {item.quantity}
          </Text>
          <Text>
            {item.price}
          </Text>
          <Text>
            {this.calculateAmount(item.price, item.quantity)}
          </Text>
        </View>
      )
    })

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

          {lineItems}
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  cartImage: {
    height: '100%',
    width: '100%',
  },

  cart: {
    flex: 1,

  },

  description: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },

  productDescription: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
});
