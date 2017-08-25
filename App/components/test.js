import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
   TouchableOpacity, Image,KeyboardAvoidingView,ScrollView
} from 'react-native';
import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  render() {

    let checkBox = this.state.checked;

    return (
      <CheckBox
        title='Click Here'
        checked={checkBox}
      />
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex:1,
    backgroundColor: '#29B6F6',
    padding:10,
    justifyContent:'center'
  },

  text: {
    paddingTop:17,
    padding:15
  },

  textInput: {
    height: 50,
    marginBottom: 20,
    backgroundColor: 'white',
    borderColor:"#607D8B" ,
    borderWidth: 1,
    marginTop:4,
    alignSelf:'stretch'
  },

  register: {
    maxHeight:50,
    marginHorizontal:90,
    paddingTop:10,
    height:60,
    width:120,
    backgroundColor: '#009688',
    marginTop:20
  },

})
