import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button, TouchableOpacity, Image
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.login}>

          <View style={styles.text}>

              <TextInput style={styles.textInput} placeholder="Username or E-mail"/>
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/>

              <TouchableOpacity style = {styles.signIn}>
                <Text style={{textAlign: 'center', paddingVertical: 5}}>Sign in</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <View style={styles.notMember}>
              <Text style={{textAlign: 'center'}}>Not a member yet?</Text>
            </View>
            <TouchableOpacity  style={styles.register}>
              <Text style={{textAlign: 'center', paddingVertical: 5}}>Register</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
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

  signIn: {
    height: 30,
    backgroundColor: 'white',
  },

  registerContainer: {
    paddingHorizontal: 20,

  },

  notMember: {
    paddingBottom: 10,
  },

  register: {
    height: 30,
    backgroundColor: 'white',
  },

});
