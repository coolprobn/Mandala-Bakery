import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View, Image, TouchableNativeFeedback, AsyncStorage,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import ratingService from '../../services/RatingService';

import ImageMap from '../../constants/imageMap'

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 1,
      name: this.props.name,
      price: this.props.price,
      quantity: 1,

    };
    this.addInCart = this.addInCart.bind(this);
    this.onStarRatingPress = this.onStarRatingPress.bind(this);
  }

  componentWillMount() {
    var self = this

  }

  onStarRatingPress(rating) {
    this.props.changeRating(this.props.id, rating);
    this.setState({
      starCount: rating,
    });
  }

  subCategory() {
    if (this.props.subCategory != subCat) {
      return (
        this.props.subCategory
      );
    }
    var subCat = this.props.subCategory;

  }

  image() {
    if (this.props.category != "coffee") {
      return (
        <View>
          <Image source={ImageMap[this.props.image]} style={styles.productImage}/>
          <View style={styles.productDesc}>
            <Text style={styles.productDescText}>
              {this.props.name}
            </Text>
            <Text style={styles.productDescText}>
              NRs. {this.props.price} {this.props.weight}
            </Text>
          </View>
        </View>);
    }
    else {
      return (
        <View style={styles.coffee}>
          <Text style={styles.coffeeDescMainText}>
            {this.subCategory()}
          </Text>
          <View style={styles.coffeeDesc}>

            <Text style={styles.coffeeDescText}>
              {this.props.name}
            </Text>

            <Text style={styles.coffeeDescText}>
              {this.props.price}
            </Text>

          </View>
        </View>
      );
    }
  }

  addToCartView() {
    let {id, cakes} = this.props;
    let cake = cakes.find((cake) => {
      return cake.id == id;
    });
    let starCount = 0;
    if (cake) {
      starCount = cake.ratings
    }
    if (this.props.category == "cake") {
      return (
        <View>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)} starColor={'gold'} starSize={30}/>
          <TouchableNativeFeedback useForeground={true} onPress={this.addInCart}>
            <View style={styles.addToCart}>
              <Text style={{textAlign: 'center'}}>
                Add To Cart
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>)
    }
  }

  addInCart() {
    let {id, name, price} = this.props;
    //product, quantity, price, amount
    let cart = [];
    AsyncStorage.getItem('cart').then((_cart) => {
      if (_cart) {
        cart = JSON.parse(_cart)
      }

      let line_item = cart.find(item => {
        return item.id == id
      });

      if (line_item) {
        line_item.quantity += 1
      } else {
        cart.push({id, name, price, quantity: 1})
      }
      Alert.alert('',`${name} has been added to cart`)
      AsyncStorage.setItem('cart', JSON.stringify(cart))
    })
  }

  render() {

    return (
      <View style={styles.productItem}>
        {this.image()}

        {this.addToCartView()}

      </View>
    );

  }
}

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 3,
  },

  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },

  productDesc: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
    justifyContent: 'center',
  },

  addToCart: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 30,
    justifyContent: 'center'
  },

  productDescText: {
    textAlign: 'center',
  },

  coffeeDescMainText: {
    textAlign: 'center',
    fontSize: 20,

  },

  coffeeDescText: {
    fontSize: 15,

  },

  coffee: {
    flex: 1,
    //backgroundColor: 'rgba(255,255,255,0.7)',
  },

  coffeeDesc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  }
});
