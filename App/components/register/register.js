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
      <View style={styles.registerContainer}>

        <View style={styles.text}>

          <TextInput style={styles.textInput} placeholder="First Name"/>
          <TextInput style={styles.textInput} placeholder="Last Name"/>
          <TextInput style={styles.textInput} placeholder="E-mail"/>
          <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/>
          <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true}/>

          <TouchableOpacity  style={styles.register}>
            <Text style={{textAlign: 'center', paddingVertical: 5}}>Register</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    backgroundColor: '#1cce7b',
  },

  text: {
    padding:20,
  },

  textInput: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'white'
  },

  register: {
    height: 30,
    backgroundColor: 'white',
  },

});
