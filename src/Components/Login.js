'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

import Home from './Home'
import Register from './Register'

class Login extends Component {
  _navigate(type='Normal'){
    console.log(this.props)
    this.props.navigator.replace({
      component: Home,
      type: type,
      name: 'Feed'
    })
  }

  _navigateRegister(type='Modal'){
    this.props.navigator.push({
      component: Register,
      type: type,
      name: 'Register'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}> Corner </Text>

        <TextInput style ={{height:14}} placeholderTextColor='black'placeholder='Username'/>

        <TextInput style ={{height:14}} placeholderTextColor='black'placeholder='Password'/>

        <TouchableHighlight onPress={()=>this._navigate()}>
          <Text style={{color: 'black'}}> Login </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>this._navigateRegister()}>
          <Text style={{color: 'black'}}> Register </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15
  }
});

export default Login
