import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Image,
} from 'react-native';
import ProductList from "./productList";
import itemService from '../../services/ItemService'

export default class Products extends Component {
  constructor() {
    super()
    this.state = {}
  }

  /*componentWillMount() {
    var self =this
    itemService.getItems()
      .then(function (response) {
        console.log(response.data[0])
        self.setState({name: response.data[0].name})
      })
      .catch(function (error) {
        console.log(error);
      });
  }*/

  render() {
    return (
      <Image source={require('../../images/coffeeBg1.jpg')} style={styles.productItemLayout}>
        <ProductList name="Cake" color="#7CB9E8" navigate={()=>this.props.navigation.navigate('Cake')}/>
        <ProductList name="Bread" color="#BF94E4" navigate={this.props.navigation.navigate}/>
        <ProductList name="Coffee" color="#BCD4E6" navigate={this.props.navigation.navigate}/>
        <ProductList name="Pastry" color="#FAEBD7" navigate={this.props.navigation.navigate}/>
        <ProductList name="Cookie" color="#1693A5" navigate={this.props.navigation.navigate}/>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  productItemLayout: {
    height: '100%',
    width: '100%',
  },

});
