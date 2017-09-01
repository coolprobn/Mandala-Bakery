import React, { Component } from 'react';
import {AppRegistry,View,Text,TouchableNativeFeedback,StyleSheet,Image} from 'react-native';

export default class ProductList extends Component {

  constructor(){
    super()
    this.state={
      touchDisabled: false
    }
    this.temporarilyDisableClick = this.temporarilyDisableClick.bind(this)
  }

  temporarilyDisableClick(){
    this.setState({touchDisabled: true})
    var self = this;
    setTimeout(()=>{self.setState({touchDisabled: false})}, 3000)
  }

  render() {

    let color = this.props.color;

    return (
      <TouchableNativeFeedback onPress={()=>{
        if(this.state.touchDisabled){
          return;
        }
        this.temporarilyDisableClick()
        this.props.navigate(this.props.name)
      }}>
        <View style={styles.productItem}>
            <Text style={styles.productText}>
              {this.props.name}
            </Text>
        </View>
      </TouchableNativeFeedback>
    );

  }
}

const styles= StyleSheet.create({
  productItem: {
    margin: 5,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',

  },
  productText: {
    fontSize: 25,
    textAlign: 'center',
  },

});




