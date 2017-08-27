import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button, TouchableNativeFeedback, TouchableOpacity, Image
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <Image source={require('../../images/coffeeBg1.jpg')} style={styles.login}>
          <Image source={require('../../images/mandalaBakery.jpg')} style={styles.image}/>

          <View style={styles.text}>

              <TextInput style={styles.textInput} placeholder="Username or E-mail" underlineColorAndroid={'rgba(0,0,0,0)'} />
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} underlineColorAndroid={'rgba(0,0,0,0)'}/>

              <TouchableNativeFeedback useForeground={true}>
                <View style = {styles.signIn}>
                  <Text style={{textAlign: 'center', paddingVertical: 5, fontSize: 15}}>Sign in</Text>
                </View>
              </TouchableNativeFeedback>
          </View>

          <TouchableNativeFeedback useForeground={true} onPress={()=>this.props.navigation.navigate('Register')}>
            <View style={styles.registerContainer}>
              <View style={styles.notMember}>
                <Text style={{textAlign: 'center'}}>Not a member yet?</Text>
              </View>
              <View style={styles.register}>
                <Text style={{textAlign: 'center', paddingVertical: 5}}>Register</Text>
              </View>
            </View>
          </TouchableNativeFeedback>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#1cce7b',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },

  text: {
    padding:20,
  },

  textInput: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },

  signIn: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
  },

  registerContainer: {
    paddingHorizontal: 20,

  },

  notMember: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    height: 30,
  },

  register: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: 200,
    marginHorizontal: 80,
    borderRadius: 100,
  }

});
