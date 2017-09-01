

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

  subCategory(){
    if(this.props.subCategory!=subCat){
      return(
        this.props.subCategory
      );
    }
    var subCat = this.props.subCategory;

  }

  image(){
    if(this.props.category!="coffee"){
      return(
        <View>
          <Image source={ImageMap[this.props.image]} style={styles.productImage}/>
          <View style={styles.productDesc} >
            <Text style={styles.productDescText}>
              {this.props.name}
            </Text>
            <Text style={styles.productDescText}>
              NRs. {this.props.price} {this.props.weight}
            </Text>
          </View>
        </View>);
    }
    else{
      return(
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

  addToCart(){
    if(this.props.category=="cake") {
      return(
        <View>
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
        </View>)
    }
  }
  render() {

    return (
      <View style={styles.productItem} >
        {this.image()}

        {this.addToCart()}

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
    backgroundColor: 'rgba(255,255,255,0.9)',
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
    backgroundColor: 'rgba(255,255,255,0.7)',
  },

  coffeeDesc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
