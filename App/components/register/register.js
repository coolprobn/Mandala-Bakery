import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import userService from '../../services/UserService';

export default class Register extends Component {

  constructor() {
    super();
    this.signUp = this.signUp.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
    }
  }

  setValue() {

  }

  signUp() {
    let userData = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      phone: this.state.mobileNumber,
      password: this.state.password,
      password_confirmation: this.state.password,
    };

    userService.signUp(userData).then((result) => {
      //navigate back to login

      AsyncStorage.setItem('currentUser', JSON.stringify(result.data));
    })
      .catch(function (error) {
        Alert.alert('', 'Could not register at this time, try again later.')
        console.log(error);
      });
  }

  render() {
    return (
      <Image source={require('../../images/coffeeBean1.jpg')}
             style={styles.registerContainer}>

        <View style={styles.text}>

          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'}
                     style={styles.textInput} placeholder="First Name"
                     onChangeText={(firstName) => this.setState({firstName})}/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'}
                     style={styles.textInput} placeholder="Last Name"
                     onChangeText={(lastName) => this.setState({lastName})}/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'}
                     style={styles.textInput} placeholder="Mobile Number"
                     onChangeText={(mobileNumber) => this.setState({mobileNumber})}/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'}
                     style={styles.textInput} placeholder="Password"
                     secureTextEntry={true}
                     onChangeText={(password) => this.setState({password})}/>
          <TextInput underlineColorAndroid={'rgba(0,0,0,0)'}
                     style={styles.textInput} placeholder="Confirm Password"
                     secureTextEntry={true}
                     onChangeText={(confirmPassword) => this.setState({confirmPassword})}/>

          <TouchableOpacity style={styles.register}>
            <Text style={{textAlign: 'center', paddingVertical: 5, fontSize: 15}}
                  onPress={this.signUp}>Register</Text>
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
    padding: 20,
  },

  textInput: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },

  register: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center'
  },
});
