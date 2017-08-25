

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Image,TouchableNativeFeedback,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import ImageMap from '../../constants/imageMap'
export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {

    return (
      <View style={styles.productItem}>

        <Image source={ImageMap[this.props.image]} style={styles.productImage}/>

        <View style={styles.productDesc} >
          <Text style={styles.productDescText}>
            {this.props.name}
          </Text>
          <Text style={styles.productDescText}>
            NRs. {this.props.price} per pound
          </Text>
        </View>

        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)} starColor={'gold'} starSize={30}/>

        <TouchableNativeFeedback useForeground={true}>
          <View style={styles.addToCart}>
            <Text style={{textAlign: 'center'}}>
              Add To Cart
            </Text>
          </View>
        </TouchableNativeFeedback>



      </View>
    );
  }
}

const styles= StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 3,
  },

  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },

  productDesc: {
    flex:1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
    justifyContent: 'center',
  },

  addToCart: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 30,
    justifyContent: 'center'
  },

  productDescText:{
    //fontSize: 15,
    textAlign: 'center',
  }
});
