import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  AsyncStorage,
  TextInput,
  Button, TouchableNativeFeedback, TouchableOpacity, Image
} from 'react-native';
import userService from '../../services/UserService';

export default class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this)
    this.state = {
      phone: '',
      password: '',
    }
  }

  login() {
    let loginData = {
      phone: this.state.phone,
      password: this.state.password,
    };
    userService.login(loginData).then((result) => {
      AsyncStorage.setItem('currentUser', JSON.stringify(result.data));
      debugger
    })
      .catch(function (error) {
        Alert.alert("", "Incorrect username or password. Please try again.")
        console.log(error);
      });
  }

  render() {
    return (
      <Image source={require('../../images/coffeeBg1.jpg')} style={styles.login}>
        <Image source={require('../../images/mandalaBakery.jpg')}
               style={styles.image}/>

        <View style={styles.text}>

          <TextInput style={styles.textInput} placeholder="Phone"
                     underlineColorAndroid={'rgba(0,0,0,0)'}
                     onChangeText={(phone) => this.setState({phone})}/>
          <TextInput style={styles.textInput} placeholder="Password"
                     secureTextEntry={true}
                     underlineColorAndroid={'rgba(0,0,0,0)'}
                     onChangeText={(password) => this.setState({password})}/>

          <TouchableNativeFeedback useForeground={true}>
            <View style={styles.signIn}>
              <Text
                style={{textAlign: 'center', paddingVertical: 5, fontSize: 15}}
                onPress={this.login}>Sign in</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <TouchableNativeFeedback useForeground={true}
                                 onPress={() => this.props.navigation.navigate('Register')}>
          <View style={styles.registerContainer}>
            <View style={styles.notMember}>
              <Text style={{textAlign: 'center'}}>Not a member yet?</Text>
            </View>
            <View style={styles.register}>
              <Text
                style={{textAlign: 'center', paddingVertical: 5}}>Register</Text>
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
    padding: 20,
  },

  textInput: {
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
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
  },

  register: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    justifyContent: 'space-around',
  }

});
