'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import Interest from './Interest'

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
        <View style={{marginTop: 60, marginLeft: 15}}>
          <TextInput
            style ={{height:14}}
            placeholderTextColor='black'
            placeholder='Username'
          />
          <TextInput
            style ={{height:14}}
            placeholderTextColor='black'
            placeholder='Email'
          />
          <TextInput
            style ={{height:14}}
            placeholderTextColor='black'
            placeholder='Password'
          />
          <TouchableHighlight onPress={()=>this._navigate()}>
            <Text style={{color: 'black'}}>Continue</Text>
          </TouchableHighlight>
        </View>
        <View style={{marginBottom: 15, marginLeft: 15}}>
          <Text style={{fontWeight: 'bold'}}>Terms</Text>
          <Text>By continuing, you agree to </Text>
          <Text>our terms of service and</Text>
          <Text>private policy</Text>
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
  }
});

export default Register
