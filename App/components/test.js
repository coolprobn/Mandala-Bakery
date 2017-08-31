import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Alert,TouchableWithoutFeedback,Image,Picker

} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var radio_props = [
  {label: 'HAIRCUT', value: 0 },
  {label: 'HAIRCOLOR', value: 1 },
  {label: 'SHAVING', value: 3 },
  {label: 'HIGHLIGHT', value: 4 },
  {label: 'MAKE-UP', value: 5 },
  {label: 'FACIAL', value: 6 },
  {label: 'HAIR-STRAIGHT', value: 7 },
  {label: 'DREADLOCK', value: 8 },
  {label: 'CLEASING', value: 9 },
  {label: 'MANICURE', value: 6 },
  {label: 'PADICURE', value: 7 },
  {label: 'HAIR-CURLING', value: 8 },
  {label: 'HAIRTREATMENT', value: 9 },{label: 'NAIL-POLISHING', value: 9 },
  {label: 'HAIRTREATMENT', value: 9 },
  {label: 'EYEBROW & LASH TINT', value: 9 },
  {label: 'WAXING', value: 9 },

];
export default class Services extends Component {


  render() {
    return (

      <View style={styles.container}>
        <View style={styles.Service}>
          <Text style={{textAlign: 'center'}}>SELECT SERVICE</Text>
        </View>
        <View style={styles.rdob}>
          <RadioForm style={{justifyContent: 'flex-start'}}
                     radio_props={radio_props}
                     initial={2}
                     formHorizontal={false}
                     labelHorizontal={true}
                     onPress={(value) => {
                       this.setState({value: value})
                     }}
          />
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: { justifyContent: 'flex-start',

  },
  rdob:{

  },
});
