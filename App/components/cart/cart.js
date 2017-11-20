import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  AsyncStorage,
  TouchableNativeFeedback
} from 'react-native';
import cartService from '../../services/CartService';

let totalPrice = 0;
export default class Cart extends Component {

  constructor() {
    super();
    this.state = {
      cart: []
    };
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentWillMount() {
    var self = this;
    AsyncStorage.getItem('cart').then((_cart) => {
      if (_cart) {
        self.setState({cart: JSON.parse(_cart)});
      }
    })
  }

  calculateAmount(price, quantity) {
    return price * quantity;
  }

  placeOrder() {

    cartService.placeOrder(this.state.cart, totalPrice).then(() => {
      Alert.alert('Success!', `Your order has been placed successfully, you will receive a confirmation call from us in few minutes.`)
      AsyncStorage.removeItem('cart');
      totalPrice = 0;
      this.setState({cart: []})
    }).catch((e) => {
      Alert.alert('Error', 'Your order could not be placed, please try again.')
    });

  }

  render() {
    let lineItems = this.state.cart.map((item, index) => {
      let itemCost = this.calculateAmount(item.price, item.quantity);
      totalPrice += itemCost;
      return (
        <View style={styles.productDescription} key={`item${index}`}>
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
            {itemCost}
          </Text>
        </View>
      )
    });

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

          <View style={styles.productDescription}>
            <Text>
              Total
            </Text>
            <Text>

            </Text>
            <Text>

            </Text>
            <Text>
              {totalPrice}
            </Text>
          </View>

          {this.state.cart.length > 0 ?
            <TouchableNativeFeedback onPress={this.placeOrder}>
              <View style={{
                marginTop: 10,
                backgroundColor: '#1bee2b',
                justifyContent: 'center',
              }}>
                <Text style={{
                  textAlign: 'center',
                  padding: 15,
                  fontSize: 16,

                }}>
                  Place Order
                </Text>
              </View>
            </TouchableNativeFeedback> : null}
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
