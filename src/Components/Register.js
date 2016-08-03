'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Interest from './Interest'
import InputNormal from '../Elements/InputNormal'

var width = Dimensions.get('window').width * .50;

class Register extends Component {
  _navigate(type='Normal'){
    this.props.navigator.push({
      component: Interest,
      name: 'Interests',
      type: type
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerSheet}>
          <InputNormal
            placeholder='Username'
          />

          <InputNormal
            placeholder='Email'
          />

          <InputNormal
            placeholder='Password'
          />

          <TouchableHighlight onPress={()=>this._navigate()}>
            <Text style={styles.continueButton}>Continue</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>Terms</Text>
          <Text style={styles.termsText}>By continuing, you agree to our terms of service and private policy</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  registerSheet: {
    marginLeft: 78,
    marginTop: 83
  },
  continueButton: {
    color: '#999999',
    fontSize: 17.2
  },
  termsContainer: {
    marginBottom: 15,
    marginLeft: 15,
    width: width
  },
  termsTitle: {
    fontWeight: 'bold',
    color: '#AD985E',
    fontSize: 15,
    fontFamily: 'Helvetica Neue',
    marginBottom: 5
  },
  termsText: {
    color: '#999999',
    fontSize: 13,
    fontFamily: 'Helvetica Neue'
  }
});

export default Register
