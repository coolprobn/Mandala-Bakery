import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button, TouchableOpacity, Image
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <Image source={require('../../images/coffeeBean1.jpg')} style={styles.registerContainer}>

        <View style={styles.text}>

          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} placeholder="First Name"/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} placeholder="Last Name"/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} placeholder="E-mail"/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} placeholder="Password" secureTextEntry={true}/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true}/>

          <TouchableOpacity  style={styles.register}>
            <Text style={{textAlign: 'center', paddingVertical: 5, fontSize: 15}}>Register</Text>
          </TouchableOpacity>

        </View>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  text: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
  },

  textInput: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },

  register: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center'
  },

});
